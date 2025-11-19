import React from 'react';
import { WEDDING_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between p-4 md:p-8 z-0">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
      
      <div className="absolute inset-4 md:inset-6 border border-gold-200/40 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-300"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-300"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-300"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-300"></div>
      </div>

      <div className="relative z-20 flex justify-between items-start pt-4 md:pt-8 px-4 animate-fade-in">
        <div className="flex flex-col items-start">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 mb-1">
            São Paulo
          </span>
          <div className="h-[1px] w-12 bg-gold-400"></div>
        </div>
        
        <div className="flex flex-col items-end text-right">
           <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 mb-1">
            Save The Date
          </span>
          <span className="font-serif italic text-gold-200 text-lg">
            15 . 11 . 2025
          </span>
        </div>
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-2 md:px-12 relative">
          
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[10rem] text-gold-100 leading-none animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            {WEDDING_DETAILS.couple.bride.split(' ')[0]}
          </h1>

          <div className="flex justify-center md:justify-end md:-mt-8 lg:-mt-16 pr-0 md:pr-32 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
             <span className="font-serif italic text-6xl md:text-8xl text-gold-400 drop-shadow-lg">
               &
             </span>
          </div>

          <h1 className="font-serif text-7xl md:text-9xl lg:text-[10rem] text-white leading-none text-right md:-mt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
            {WEDDING_DETAILS.couple.groom.split(' ')[0]}
          </h1>
          
          <div className="mt-8 md:mt-12 text-center md:text-left animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
            <p className="font-sans text-white/80 tracking-[0.4em] text-xs md:text-sm uppercase inline-block border-b border-white/20 pb-2">
              A Celebração da União
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center pb-8 animate-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
        <p className="font-serif italic text-white/80 text-xl mb-4">
          {WEDDING_DETAILS.location.name}
        </p>
        
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[10px] uppercase tracking-widest text-white">Deslize</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-300 to-transparent"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;