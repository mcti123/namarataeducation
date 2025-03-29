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

const ConfettiEffect: React.FC<ConfettiProps> = ({ count = 100, duration = 3000 }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    // Generate random confetti pieces
    const colors = ['#6366F1', '#EC4899', '#10B981', '#FBBF24', '#F87171'];
    const pieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < count; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10, // Start above the viewport
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        animationDelay: Math.random() * (duration / 3)
      });
    }
    
    setConfetti(pieces);
    
    // Clean up confetti after duration
    const timer = setTimeout(() => {
      setConfetti([]);
    }, duration + 1000); // Extra second to ensure all pieces have fallen
    
    return () => clearTimeout(timer);
  }, [count, duration]);
  
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.8,
            animation: `confetti-fall ${duration / 1000}s linear ${piece.animationDelay / 1000}s, confetti-shake ${duration / 1000}s ease-in-out ${piece.animationDelay / 1000}s infinite`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes confetti-fall {
          0% { 
            top: -10%; 
            transform: rotate(${Math.random() * 360}deg);
          }
          100% { 
            top: 100%; 
            transform: rotate(${Math.random() * 360 + 720}deg);
          }
        }
        
        @keyframes confetti-shake {
          0%, 100% { margin-left: 0; }
          25% { margin-left: 10px; }
          50% { margin-left: -10px; }
          75% { margin-left: 25px; }
        }
      `}</style>
    </div>
  );
};

export default ConfettiEffect;
