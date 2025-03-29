import React, { useEffect, useState } from 'react';
import { Trophy } from '../lib/data';

interface TrophyAnimationProps {
  trophy: Trophy;
}

const TrophyAnimation: React.FC<TrophyAnimationProps> = ({ trophy }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    setShowAnimation(true);
    
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getTrophyIcon = () => {
    switch (trophy.icon) {
      case 'trophy':
        return '🏆';
      case 'medal':
        return '🥇';
      case 'star':
        return '⭐';
      case 'certificate':
        return '📜';
      case 'badge':
        return '🏅';
      default:
        return '🏆';
    }
  };
  
  const getIconColor = () => {
    switch (trophy.iconColor) {
      case 'gold':
        return 'text-yellow-400';
      case 'silver':
        return 'text-slate-300';
      case 'bronze':
        return 'text-amber-700';
      case 'blue':
        return 'text-blue-500';
      default:
        return 'text-yellow-400';
    }
  };
  
  if (!showAnimation) return null;
  
  return (
    <div className="trophy-animation relative inline-block">
      <div className={`text-4xl ${getIconColor()}`}>
        {getTrophyIcon()}
      </div>
      <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 rounded-full p-0.5 border border-yellow-500">
        <div className="text-green-500 text-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrophyAnimation;