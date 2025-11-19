import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Timeline from './components/Timeline';
import Location from './components/Location';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import WeddingAI from './components/WeddingAI';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-800 min-h-screen selection:bg-gold-200 selection:text-stone-900 relative">
      <BackgroundAnimation />
      
      <Navigation />
      <Hero />
      
      <div className="bg-white/90 backdrop-blur-sm">
        <OurStory />
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm">
        <Timeline />
      </div>

      <div className="relative z-10">
        <div 
          className="h-96 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop")' }}
        >
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="font-serif text-4xl md:text-6xl text-white italic text-center px-4 shadow-sm">
                "Para sempre começa agora."
              </p>
           </div>
        </div>
      </div>

      <Location />

      <div className="bg-stone-50/90 backdrop-blur-sm">
        <Registry />
      </div>
      
      <RSVP />
      <Footer />
      <WeddingAI />
    </div>
  );
};

export default App;