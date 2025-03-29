import React, { useState } from 'react';

type FloatingObjectProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  amplitude?: number;
  objectType: 'book' | 'notebook' | 'pencil' | 'planet' | 'rocket';
  onClick?: () => void;
  hoverState?: boolean;
  subjectId?: string;
  reducedMotion?: boolean;
};

const FloatingObject: React.FC<FloatingObjectProps> = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  color = 'primary',
  speed = 1,
  amplitude = 1,
  objectType,
  onClick,
  hoverState,
  subjectId,
  reducedMotion = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getObjectIcon = () => {
    switch (objectType) {
      case 'book':
        return 'fa-book';
      case 'notebook':
        return 'fa-book-open';
      case 'pencil':
        return 'fa-pencil-alt';
      case 'planet':
        return 'fa-globe-asia';
      case 'rocket':
        return 'fa-rocket';
      default:
        return 'fa-book';
    }
  };
  
  const getObjectColor = () => {
    switch (objectType) {
      case 'book':
        return 'text-violet-400';
      case 'notebook':
        return 'text-emerald-400';
      case 'pencil':
        return 'text-yellow-400';
      case 'planet':
        return 'text-blue-400';
      case 'rocket':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };
  
  const getAnimationClass = () => {
    if (reducedMotion) return '';
    
    switch (objectType) {
      case 'book':
        return 'animate-float';
      case 'notebook':
        return 'animate-float-delayed';
      case 'pencil':
        return 'animate-spin-slow';
      case 'planet':
        return 'animate-float-slow';
      case 'rocket':
        return 'animate-bounce-slow';
      default:
        return 'animate-float';
    }
  };
  
  const calculatePosition = () => {
    return {
      left: `${position[0]}%`,
      top: `${position[1]}%`,
      zIndex: Math.floor(position[2])
    };
  };
  
  const tooltip = () => {
    if (subjectId && isHovered) {
      let tooltipText = '';
      
      switch (subjectId) {
        case 'math':
          tooltipText = 'Mathematics Tests';
          break;
        case 'science':
          tooltipText = 'Science Tests';
          break;
        case 'english':
          tooltipText = 'English Tests';
          break;
        case 'hindi':
          tooltipText = 'Hindi Tests';
          break;
        case 'social':
          tooltipText = 'Social Studies Tests';
          break;
        case 'sanskrit':
          tooltipText = 'Sanskrit Tests';
          break;
        default:
          tooltipText = 'Take a Test';
      }
      
      return (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-space/90 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-sm font-medium">{tooltipText}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-space/90 rotate-45"></div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <div 
      className={`absolute ${getAnimationClass()} group cursor-pointer transform-gpu`}
      style={calculatePosition()}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tooltip()}
      <div
        className={`transform p-4 ${hoverState ? 'scale-125' : 'scale-100'} transition-transform duration-300 ease-in-out`}
        style={{
          transform: `scale(${scale}) rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`,
        }}
      >
        <div className={`relative ${isHovered ? 'scale-125' : ''} transition-all duration-300`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          <i className={`fas ${getObjectIcon()} text-3xl md:text-4xl ${getObjectColor()} drop-shadow-lg`}></i>
        </div>
      </div>
    </div>
  );
};

export default FloatingObject;