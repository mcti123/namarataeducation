import React from 'react';
import { Trophy } from '@/lib/data';

interface TrophyCardProps {
  trophy: Trophy;
  onClick: () => void;
}

const TrophyCard: React.FC<TrophyCardProps> = ({ trophy, onClick }) => {
  // Badge status color and icon mapping
  const statusConfig = {
    'locked': {
      bgColor: 'bg-spaceMid',
      borderColor: 'border-spaceMid',
      icon: 'fas fa-lock text-spaceWhite/70 text-xs'
    },
    'unlocked': {
      bgColor: 'bg-accent',
      borderColor: 'border-spaceMid',
      icon: 'fas fa-check text-white text-xs'
    },
    'in-progress': {
      bgColor: 'bg-yellow-500',
      borderColor: 'border-spaceMid',
      icon: 'fas fa-hourglass-half text-white text-xs'
    }
  };

  const status = statusConfig[trophy.status];

  return (
    <div 
      className={`group relative w-44 h-52 bg-space border border-spaceMid rounded-xl p-4 flex flex-col items-center justify-center transition hover:transform hover:scale-105 hover:shadow-lg ${trophy.status === 'unlocked' ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="w-20 h-20 mb-3">
        <div className="w-full h-full flex items-center justify-center">
          <i className={`fas ${trophy.icon} text-5xl ${trophy.iconColor}`}></i>
        </div>
      </div>
      <h3 className="text-lg font-baloo font-semibold text-spaceWhite text-center">{trophy.name}</h3>
      <p className="text-xs text-spaceWhite/70 text-center mt-1">{trophy.description}</p>
      
      {/* Badge Status */}
      <div className={`absolute -top-2 -right-2 w-8 h-8 ${status.bgColor} rounded-full flex items-center justify-center border-2 ${status.borderColor}`}>
        <i className={status.icon}></i>
      </div>
    </div>
  );
};

export default TrophyCard;
