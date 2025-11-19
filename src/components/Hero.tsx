import React from 'react';
import { WEDDING_DETAILS } from '../constants';

// --- CONFIGURAÇÃO DA FOTO DE FUNDO ---
// Cole o link da sua imagem dentro das aspas abaixo
const BACKGROUND_IMAGE_URL = "https://i.postimg.cc/m2tZ4T2h/happy-couple-love-embracing-near-river.png";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between p-4 md:p-8 z-0 bg-stone-900">
      
      {/* CAMADA 1: Imagem de Fundo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE_URL}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Filtros para garantir legibilidade do texto sobre a foto
          filter: 'sepia(0.2) brightness(0.55) contrast(1.1)'
        }}
      />

      {/* CAMADA 2: Gradiente Sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10"></div>
      
      {/* CAMADA 3: Moldura Editorial */}
      <div className="absolute inset-4 md:inset-6 border border-white/10 pointer-events-none z-20">
        {/* Cantoneiras Decorativas */}
        <div className="absolute top-0 left-0 w-px h-12 bg-gold-200/60"></div>
        <div className="absolute top-0 left-0 h-px w-12 bg-gold-200/60"></div>
        
        <div className="absolute top-0 right-0 w-px h-12 bg-gold-200/60"></div>
        <div className="absolute top-0 right-0 h-px w-12 bg-gold-200/60"></div>
        
        <div className="absolute bottom-0 left-0 w-px h-12 bg-gold-200/60"></div>
        <div className="absolute bottom-0 left-0 h-px w-12 bg-gold-200/60"></div>
        
        <div className="absolute bottom-0 right-0 w-px h-12 bg-gold-200/60"></div>
        <div className="absolute bottom-0 right-0 h-px w-12 bg-gold-200/60"></div>
      </div>

      {/* Conteúdo Superior - Data e Local */}
      <div className="relative z-30 flex justify-between items-start pt-6 md:pt-10 px-2 md:px-6 animate-fade-in">
        <div className="flex flex-col items-start">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/80 mb-2">
            Wedding Invitation
          </span>
        </div>
        
        <div className="flex flex-col items-end text-right">
          <span className="font-serif italic text-gold-200 text-xl md:text-2xl">
            15 . 11 . 2025
          </span>
        </div>
      </div>

      {/* Conteúdo Central - Títulos Grandes e Dramáticos */}
      <div className="relative z-30 flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl mx-auto relative">
          
          {/* Ana - Alinhado levemente à esquerda */}
          <div className="text-center md:text-left md:pl-12 lg:pl-24 relative z-10">
            <h1 className="font-serif italic font-light text-[5.5rem] md:text-[9rem] lg:text-[11rem] text-gold-200 leading-[0.8] tracking-tighter animate-fade-in-up opacity-0 drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              {WEDDING_DETAILS.couple.bride.split(' ')[0]}
            </h1>
          </div>

          {/* Conector Decorativo Central */}
          <div className="flex items-center justify-center gap-6 my-2 md:-my-8 relative z-20 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
             <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-gold-200/50 to-transparent"></div>
             <span className="font-serif italic text-2xl md:text-4xl text-white/90 font-light">
               &
             </span>
             <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-gold-200/50 to-transparent"></div>
          </div>

          {/* João - Alinhado levemente à direita */}
          <div className="text-center md:text-right md:pr-12 lg:pr-24 relative z-10">
            <h1 className="font-serif italic font-light text-[5.5rem] md:text-[9rem] lg:text-[11rem] text-white leading-[0.8] tracking-tighter animate-fade-in-up opacity-0 drop-shadow-2xl" style={{ animationDelay: '0.8s' }}>
              {WEDDING_DETAILS.couple.groom.split(' ')[0]}
            </h1>
          </div>
          
          {/* Subtítulo Elegante */}
          <div className="mt-12 md:mt-16 text-center animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
            <p className="font-sans text-white/70 tracking-[0.3em] text-[10px] md:text-xs uppercase">
              A Celebração da Nossa União
            </p>
          </div>
        </div>
      </div>

      {/* Rodapé do Hero - Local */}
      <div className="relative z-30 flex flex-col items-center pb-8 animate-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-[1px] h-8 bg-gold-300/50"></div>
          <p className="font-sans text-white/90 text-xs md:text-sm tracking-[0.2em] uppercase">
            {WEDDING_DETAILS.location.name}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;