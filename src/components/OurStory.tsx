import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Image Grid */}
          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.postimg.cc/662DcqMh/Gemini-Generated-Image-6toz2o6toz2o6toz.png" 
                alt="Casal" 
                className="w-full h-64 md:h-80 object-cover rounded-sm shadow-lg translate-y-8"
              />
              <img 
                src="https://i.postimg.cc/xdvwK4gN/Gemini-Generated-Image-wdq07qwdq07qwdq0.png" 
                alt="Momento especial" 
                className="w-full h-64 md:h-80 object-cover rounded-sm shadow-lg -translate-y-8"
              />
            </div>
            {/* Decorative Square */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border border-gold-300/50"></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-sans text-gold-400 tracking-widest text-sm uppercase mb-4">Nossa Jornada</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Como Tudo Começou</h3>
            <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light">
              Foi em uma tarde de outono que nossos caminhos se cruzaram pela primeira vez. O que começou como uma conversa casual sobre café e livros antigos rapidamente se transformou em uma conexão profunda que nenhum de nós esperava.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-6 font-light">
              Cinco anos, inúmeras viagens e memórias inesquecíveis depois, João fez a pergunta sob as estrelas da Toscana. Ana disse sim antes mesmo dele terminar a frase.
            </p>
            <p className="font-serif text-xl text-stone-800 italic">
              "O amor não é apenas olhar um para o outro, é olhar juntos na mesma direção."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;