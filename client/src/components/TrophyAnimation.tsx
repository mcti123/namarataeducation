import React from 'react';
import { Trophy } from '@/lib/data';

interface TrophyAnimationProps {
  trophy: Trophy;
}

const TrophyAnimation: React.FC<TrophyAnimationProps> = ({ trophy }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-ping"></div>
        <div className="relative w-40 h-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center trophy-animation">
          <i className={`fas ${trophy.icon} text-8xl text-white`}></i>
        </div>
        <div className="absolute bottom-0 text-center w-full">
          <h3 className="text-2xl font-baloo font-bold text-white">{trophy.name}</h3>
          <p className="text-white opacity-80">{trophy.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TrophyAnimation;
