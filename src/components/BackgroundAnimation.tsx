import React, { useMemo, useEffect, useState } from 'react';

const BackgroundAnimation: React.FC = () => {
  // Estado para garantir que a hidratação ocorra corretamente
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lines = useMemo(() => {
    // Criamos 20 linhas elegantes
    return Array.from({ length: 20 }).map((_, i) => {
      // Variações de Dourado para elegância
      const colors = [
        'rgba(212, 175, 55, 0.3)',  // Gold
        'rgba(170, 140, 44, 0.2)',  // Dark Gold
        'rgba(231, 229, 228, 0.4)', // Stone 200
        'rgba(214, 211, 209, 0.3)'  // Stone 300
      ];
      const color = colors[i % colors.length];
      
      // Duração lenta para ser relaxante e premium (entre 12s e 20s)
      const duration = 12 + (i % 8);
      
      // Delay espalhado para movimento contínuo
      const delay = -(i * 2);
      
      // Espessura muito fina para elegância (traço de caneta tinteiro)
      const strokeWidth = 0.5 + (i % 3) * 0.5;

      // Gerar curvas de Bézier suaves que atravessam a tela
      // Começa em uma posição Y aleatória na esquerda
      const startY = 10 + (i * 5); 
      
      // Curvas de controle para criar ondas suaves
      const cp1x = 30 + (i * 2);
      const cp1y = startY - 20;
      const cp2x = 60 + (i * 2);
      const cp2y = startY + 20;
      
      const endX = 100;
      const endY = startY;

      // Path definition
      const d = `M 0 ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

      return {
        id: i,
        color,
        duration,
        delay,
        strokeWidth,
        d
      };
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <svg 
        className="w-full h-full opacity-60" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Máscara de gradiente para suavizar as pontas das linhas */}
          <linearGradient id="fade-edges" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor="white" stopOpacity="1" />
            <stop offset="90%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g style={{ mask: 'url(#fade-edges)' }}>
          {lines.map((line) => (
            <path
              key={line.id}
              d={line.d}
              fill="none"
              stroke={line.color}
              strokeWidth={line.strokeWidth}
              strokeLinecap="round"
              className="animate-draw-elegant"
              style={{
                // Valores customizados para a animação definida no index.html
                animationDuration: `${line.duration}s`,
                animationDelay: `${line.delay}s`,
                // Dasharray grande para cobrir a curva
                strokeDasharray: '150', 
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BackgroundAnimation;