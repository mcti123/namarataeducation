import React, { useState, useEffect } from 'react';
import { Trophy } from '@/lib/data';

interface TrophyAnimationProps {
  trophy: Trophy;
}

const TrophyAnimation: React.FC<TrophyAnimationProps> = ({ trophy }) => {
  const [visible, setVisible] = useState(true);
  const [animationState, setAnimationState] = useState<'entering' | 'visible' | 'exiting'>('entering');
  
  useEffect(() => {
    // Animation sequence
    const visibleTimer = setTimeout(() => {
      setAnimationState('visible');
    }, 500);
    
    const exitTimer = setTimeout(() => {
      setAnimationState('exiting');
    }, 3000);
    
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3500);
    
    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden bg-black/40">
      <div 
        className={`bg-space/95 rounded-xl shadow-xl shadow-purple-800/30 p-8 max-w-md transform transition-all duration-500 overflow-hidden 
          ${animationState === 'entering' ? 'scale-0 opacity-0' : 
            animationState === 'visible' ? 'scale-100 opacity-100' : 
            'scale-110 opacity-0'}`}
      >
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-xl"></div>
          
          <div className="text-center relative z-10">
            <div className="mb-6 relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-white/10 scale-150 opacity-30"></div>
              <div className="h-20 w-20 mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-600/30 rounded-full blur-xl"></div>
                <i className={`fas ${trophy.icon} text-6xl ${trophy.iconColor} drop-shadow-[0_0_8px_rgba(250,200,60,0.5)]`}></i>
              </div>
            </div>
            
            <h3 className="text-2xl font-baloo font-bold text-white mb-2">{trophy.name}</h3>
            <p className="text-white/70 mb-6">{trophy.description}</p>
            
            {trophy.status === 'unlocked' && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm">
                <i className="fas fa-check-circle mr-2"></i>
                Unlocked!
              </div>
            )}
            
            {trophy.status === 'in-progress' && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-sm">
                <i className="fas fa-clock mr-2"></i>
                In Progress
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrophyAnimation;