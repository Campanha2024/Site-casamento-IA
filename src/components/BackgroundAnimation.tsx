import React, { useMemo, useEffect, useState } from 'react';

const BackgroundAnimation: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lines = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const colors = [
        'rgba(212, 175, 55, 0.3)',
        'rgba(170, 140, 44, 0.2)',
        'rgba(231, 229, 228, 0.4)',
        'rgba(214, 211, 209, 0.3)'
      ];
      const color = colors[i % colors.length];
      
      const duration = 12 + (i % 8);
      
      const delay = -(i * 2);
      
      const strokeWidth = 0.5 + (i % 3) * 0.5;

      const startY = 10 + (i * 5); 
      
      const cp1x = 30 + (i * 2);
      const cp1y = startY - 20;
      const cp2x = 60 + (i * 2);
      const cp2y = startY + 20;
      
      const endX = 100;
      const endY = startY;

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
                animationDuration: `${line.duration}s`,
                animationDelay: `${line.delay}s`,
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