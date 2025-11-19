import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, WEDDING_DETAILS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navClasses = `fixed w-full z-50 transition-all duration-500 ${
    isScrolled || isMobileMenuOpen
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm tracking-[0.2em] uppercase hover:text-gold-400 transition-colors duration-300 cursor-pointer ${
    isScrolled || isMobileMenuOpen ? 'text-stone-800' : 'text-white shadow-black drop-shadow-md'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`font-serif text-2xl italic font-bold z-50 transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white drop-shadow-md'
          }`}>
          <a href="#" onClick={(e) => handleNavClick(e, '#')}>{WEDDING_DETAILS.couple.names}</a>
        </div>

        <div className="hidden md:flex space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={linkClasses}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 text-stone-900`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
          )}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-stone-900 text-lg tracking-widest uppercase font-light cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;