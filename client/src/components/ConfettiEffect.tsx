import React, { useState, useEffect } from 'react';

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
    // Create confetti pieces
    const colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', 
      '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
      '#009688', '#4caf50', '#8bc34a', '#cddc39', 
      '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
    ];
    
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < count; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100, // random position across the screen
        y: Math.random() * -100, // start above the screen
        size: Math.random() * 1 + 0.5, // random size between 0.5 and 1.5
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360, // random initial rotation
        animationDelay: Math.random() * 500, // stagger the animation start
      });
    }
    setConfetti(pieces);
    
    // Cleanup after duration
    const timer = setTimeout(() => {
      setConfetti([]);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [count, duration]);
  
  if (confetti.length === 0) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div 
          key={piece.id}
          className="absolute confetti"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}rem`,
            height: `${piece.size / 2}rem`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0,
            animation: `fall ${duration / 1000}s ease-out`,
            animationDelay: `${piece.animationDelay}ms`,
          }}
        />
      ))}
      
      {/* Add animation styles */}
      <style>
        {`
          @keyframes fall {
            0% {
              opacity: 1;
              top: -10%;
              transform: translateY(0) rotate(0deg);
            }
            
            10% {
              opacity: 1;
              transform: translateY(0) rotate(${Math.random() * 360}deg);
            }
            
            100% {
              opacity: 0;
              top: 100%;
              transform: translateY(1000px) rotate(${Math.random() * 720}deg);
            }
          }
          
          .confetti {
            position: absolute;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
};

export default ConfettiEffect;