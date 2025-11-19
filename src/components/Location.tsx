import React from 'react';
import { WEDDING_DETAILS } from '../constants';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 relative">
      {/* Fundo branco semi-transparente para destacar sobre a foto de fundo do body */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2 text-center md:text-right space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">O Local</h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto md:ml-auto"></div>
          
          <div>
            <h3 className="font-serif text-2xl italic text-stone-800 mb-2">{WEDDING_DETAILS.location.name}</h3>
            <p className="font-sans text-stone-600 font-light leading-relaxed max-w-md ml-auto">
              {WEDDING_DETAILS.location.address}
            </p>
          </div>

          <div className="pt-4">
            <a 
              href={WEDDING_DETAILS.location.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors font-sans text-sm tracking-widest uppercase border-b border-gold-500/30 pb-1 hover:border-gold-400"
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-96 relative shadow-xl rounded-sm overflow-hidden border-4 border-white">
          {/* Placeholder de Mapa ou Foto do Local */}
          <img 
            src="https://i.postimg.cc/0N67KTCt/1-13-246079-1553699446.jpg" 
            alt="Local do Casamento" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Location;