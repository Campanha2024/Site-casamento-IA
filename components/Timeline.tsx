import React from 'react';
import { TIMELINE } from '../constants';
import { Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-2">Cronograma</h2>
        <p className="font-sans text-stone-500 tracking-widest text-sm uppercase mb-16">A Ordem dos Eventos</p>

        <div className="relative border-l border-gold-200 ml-4 md:ml-1/2 md:-translate-x-px space-y-12">
          {TIMELINE.map((event, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
              
              {/* Dot on the line */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] w-[10px] h-[10px] rounded-full bg-gold-400 border-2 border-white z-10 group-hover:scale-125 transition-transform duration-300"></div>

              {/* Content Wrapper */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                <div className="inline-flex items-center gap-2 text-gold-500 font-semibold mb-1 justify-start md:justify-inherit">
                  <Clock className="w-4 h-4" />
                  <span className="font-sans tracking-widest text-sm">{event.time}</span>
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">{event.title}</h3>
                <p className="font-sans text-stone-500 font-light text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;