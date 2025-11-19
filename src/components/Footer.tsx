import React from 'react';
import { WEDDING_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl italic text-stone-900 mb-4">{WEDDING_DETAILS.couple.names}</h2>
        <p className="font-sans text-stone-500 text-sm tracking-widest uppercase mb-8">{WEDDING_DETAILS.date}</p>
        
        <div className="flex space-x-6 mb-8">
          <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Instagram</a>
          <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Spotify Playlist</a>
        </div>
        
        <p className="text-xs text-stone-300 font-light">
          © 2025 {WEDDING_DETAILS.couple.names}. Feito com amor.
        </p>
      </div>
    </footer>
  );
};

export default Footer;