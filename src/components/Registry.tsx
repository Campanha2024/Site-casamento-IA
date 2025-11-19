import React from 'react';
import { REGISTRY_ITEMS } from '../constants';
import { Gift } from 'lucide-react';

const Registry: React.FC = () => {
  const handleGiftClick = (itemTitle: string) => {
    alert(`Redirecionando para a página de pagamento segura para: ${itemTitle}`);
  };

  return (
    <section id="registry" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Lista de Presentes</h2>
          <p className="font-sans text-stone-600 font-light max-w-2xl mx-auto">
            Sua presença é nosso maior presente. Se desejar nos agraciar com algo mais, selecionamos algumas experiências para nossa nova vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REGISTRY_ITEMS.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-xl text-stone-900 mb-2">{item.title}</h3>
                <p className="font-sans text-gold-500 text-sm font-semibold mb-6">{item.price}</p>
                <button 
                  onClick={() => handleGiftClick(item.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-600 text-xs tracking-widest uppercase hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  Presentear
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registry;