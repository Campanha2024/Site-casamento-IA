import { GoogleGenAI } from "@google/genai";
import { WEDDING_DETAILS, TIMELINE } from '../constants';

// Initialize Gemini Client
// NOTE: The API key is assumed to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

// Construct the system prompt with context about the wedding
const SYSTEM_INSTRUCTION = `
Você é a Sofia, a Concierge Virtual elegante, educada e prestativa do casamento de ${WEDDING_DETAILS.couple.names}.
O seu objetivo é ajudar os convidados com dúvidas sobre o evento.

Detalhes do Casamento:
- Data: ${WEDDING_DETAILS.date}
- Local: ${WEDDING_DETAILS.location.name}, ${WEDDING_DETAILS.location.address}
- Dress Code: ${WEDDING_DETAILS.theme}
- Hashtag: ${WEDDING_DETAILS.hashtag}

Cronograma:
${TIMELINE.map(t => `- ${t.time}: ${t.title} (${t.description})`).join('\n')}

Diretrizes de Personalidade:
- Seja extremamente polida, sofisticada e calorosa.
- Use um tom formal mas acolhedor (português do Brasil).
- Responda de forma concisa, idealmente em menos de 3 frases, a menos que perguntem detalhes complexos.
- Se não souber a resposta (ex: cardápio exato, transporte específico não listado), sugira gentilmente que entrem em contato com a cerimonialista.

Exemplo de interação:
Usuário: "Qual é o traje?"
Sofia: "O traje sugerido para a ocasião é Black Tie Opcional. Recomendamos vestidos longos ou midi elegantes para as damas e smoking ou terno escuro completo para os cavalheiros."
`;

export const sendMessageToGemini = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  try {
    // We use generateContent with a history simulation for simplicity in this stateless context,
    // or we could use chat. For a simple widget, single turn with context is often enough,
    // but let's use the Chat API for better conversational flow if needed.
    
    // Convert history to Gemini format
    const chatHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }],
    }));

    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    const response = await chat.sendMessage({
      message: userMessage
    });

    return response.text || "Perdão, não consegui compreender. Poderia reformular?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, estou momentaneamente indisponível. Por favor, tente novamente em instantes.";
  }
};