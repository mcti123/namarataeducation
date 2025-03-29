import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  count?: number;
  duration?: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  animationDelay: number;
}

const ConfettiEffect: React.FC<ConfettiProps> = ({ 
  count = 50,
  duration = 3000
}) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    const colors = ['#FFC700', '#FF0055', '#2D95BF', '#00CC8F', '#E85AFF'];
    const newConfetti: ConfettiPiece[] = [];
    
    for (let i = 0; i < count; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100, // random position across the screen
        y: 0, // start from the top
        size: Math.random() * 1 + 0.5, // random size between 0.5 and 1.5
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360, // random rotation
        animationDelay: Math.random() * 500 // random delay for staggered effect
      });
    }
    
    setConfetti(newConfetti);
    
    // Clear confetti after duration
    const timeoutId = setTimeout(() => {
      setConfetti([]);
    }, duration);
    
    return () => clearTimeout(timeoutId);
  }, [count, duration]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}rem`,
            height: `${piece.size * 0.6}rem`,
            backgroundColor: piece.color,
            transform: `rotateZ(${piece.rotation}deg)`,
            animation: `confetti-fall ${Math.random() * 2 + 2}s linear forwards, confetti-shake ${Math.random() * 2 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${piece.animationDelay}ms`,
            opacity: 0.8,
            zIndex: 9999,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;