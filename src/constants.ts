import { TimelineEvent, EventType } from './types';

export const WEDDING_DETAILS = {
  couple: {
    bride: "Ana Silva",
    groom: "João Santos",
    names: "Ana & João"
  },
  date: "15 de Novembro de 2025",
  location: {
    name: "Palácio dos Cedros",
    address: "Rua Bom Pastor, 800 - Ipiranga, São Paulo - SP",
    mapUrl: "https://maps.google.com"
  },
  theme: "Black Tie Opcional",
  hashtag: "#AnaEJoao2025"
};

export const TIMELINE: TimelineEvent[] = [
  {
    time: "15:30",
    title: "Boas-vindas",
    description: "Recepção dos convidados com coquetel de boas-vindas.",
    type: EventType.CEREMONY
  },
  {
    time: "16:30",
    title: "A Cerimônia",
    description: "Celebração do amor nos jardins do palácio.",
    type: EventType.CEREMONY
  },
  {
    time: "18:00",
    title: "Jantar de Gala",
    description: "Experiência gastronômica assinada pelo Chef Laurent.",
    type: EventType.RECEPTION
  },
  {
    time: "20:00",
    title: "Festa",
    description: "Música ao vivo e pista de dança aberta.",
    type: EventType.PARTY
  }
];

export const REGISTRY_ITEMS = [
  { 
    title: "Lua de Mel nas Maldivas", 
    price: "Cota de R$ 500", 
    image: "https://i.postimg.cc/kGvrytfF/0c4a3319-f0f8-45e2-9852-91a247d5eb79.jpg" 
  },
  { 
    title: "Jantar Romântico em Paris", 
    price: "Cota de R$ 300", 
    image: "https://i.postimg.cc/v8rdypbc/d19720b8-4179-4dbc-a629-f4216d5fb0ea.jpg" 
  },
  { 
    title: "Renovação da Casa", 
    price: "Cota de R$ 200", 
    image: "https://i.postimg.cc/05YqvLPj/359c7351-8a1f-4d79-b356-6efeb5ce7112.jpg" 
  },
];

export const NAVIGATION_LINKS = [
  { label: "Nossa História", href: "#story" },
  { label: "Cronograma", href: "#timeline" },
  { label: "Local", href: "#location" },
  { label: "Lista de Presentes", href: "#registry" },
  { label: "RSVP", href: "#rsvp" },
];