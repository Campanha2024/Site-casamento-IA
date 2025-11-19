import React, { useState } from 'react';
import { WEDDING_DETAILS } from '../constants';

const RSVP: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <section id="rsvp" className="py-24 bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Obrigado!</h2>
          <p className="font-sans font-light tracking-wide">Sua confirmação foi recebida. Mal podemos esperar para celebrar com você.</p>
          <button 
            onClick={() => setStatus('idle')} 
            className="mt-8 text-gold-300 underline underline-offset-4 hover:text-gold-200"
          >
            Enviar outra resposta
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">R.S.V.P.</h2>
          <p className="font-sans text-stone-400 font-light">
            Por favor, confirme sua presença até 20 de Outubro de 2025.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold-300 block">Nome Completo</label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b border-stone-700 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg"
                placeholder="Ex: Maria Silva"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold-300 block">Email</label>
              <input 
                required
                type="email" 
                className="w-full bg-transparent border-b border-stone-700 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg"
                placeholder="Ex: maria@email.com"
              />
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold-300 block">Você irá comparecer?</span>
            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attendance" value="yes" className="hidden peer" required />
                <div className="w-4 h-4 border border-stone-500 rounded-full peer-checked:bg-gold-400 peer-checked:border-gold-400 transition-all"></div>
                <span className="font-sans font-light group-hover:text-white transition-colors">Sim, com alegria</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attendance" value="no" className="hidden peer" />
                <div className="w-4 h-4 border border-stone-500 rounded-full peer-checked:bg-stone-400 peer-checked:border-stone-400 transition-all"></div>
                <span className="font-sans font-light group-hover:text-white transition-colors">Infelizmente não</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
             <label className="text-xs uppercase tracking-widest text-gold-300 block">Mensagem para os Noivos (Opcional)</label>
             <textarea 
               rows={3}
               className="w-full bg-transparent border-b border-stone-700 py-2 text-white focus:outline-none focus:border-gold-400 transition-colors font-serif text-lg resize-none"
               placeholder="Escreva algo especial..."
             ></textarea>
          </div>

          <div className="text-center pt-6">
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="bg-white text-stone-900 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold-100 transition-colors duration-300 disabled:opacity-70"
            >
              {status === 'submitting' ? 'Enviando...' : 'Confirmar Presença'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVP;