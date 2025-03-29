import React, { useState, useEffect, useRef } from 'react';
import { subjects } from '@/lib/data';

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
  color = '#ffffff',
  speed = 1,
  amplitude = 0.5,
  objectType,
  onClick,
  hoverState: externalHoverState,
  subjectId,
  reducedMotion = false
}) => {
  const [hoverState, setHoverState] = useState(false);
  const [positionOffset, setPositionOffset] = useState<[number, number, number]>([0, 0, 0]);
  const [rotationOffset, setRotationOffset] = useState<[number, number, number]>([0, 0, 0]);
  const startTimeRef = useRef(Date.now());
  const objectRef = useRef<HTMLDivElement>(null);
  
  // Find subject name based on ID for display
  const subject = subjects.find(s => s.id === subjectId);

  // Animation effect
  useEffect(() => {
    if (reducedMotion) return;
    
    const animationFrame = requestAnimationFrame(function animate() {
      const now = Date.now();
      const elapsedTime = (now - startTimeRef.current) / 1000; // Time in seconds
      
      // Calculate position offsets based on sine waves with different frequencies
      const yOffset = Math.sin(elapsedTime * speed) * amplitude;
      const xOffset = Math.sin(elapsedTime * speed * 0.7) * (amplitude * 0.3);
      const zOffset = Math.cos(elapsedTime * speed * 0.5) * (amplitude * 0.2);
      
      setPositionOffset([xOffset, yOffset, zOffset]);
      
      // Calculate rotation offsets
      const rotX = Math.sin(elapsedTime * speed * 0.3) * 0.1;
      const rotY = Math.sin(elapsedTime * speed * 0.5) * 0.1;
      const rotZ = Math.sin(elapsedTime * speed * 0.2) * 0.05;
      
      setRotationOffset([rotX, rotY, rotZ]);
      
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [amplitude, reducedMotion, speed]);

  // Handle hover state
  useEffect(() => {
    if (externalHoverState !== undefined) {
      setHoverState(externalHoverState);
    }
  }, [externalHoverState]);

  // Get styling based on object type
  const getObjectStyle = () => {
    switch (objectType) {
      case 'book':
        return {
          width: `${80 * scale}px`,
          height: `${110 * scale}px`,
          backgroundColor: color,
          borderRadius: '4px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          position: 'relative' as const,
        };
      case 'notebook':
        return {
          width: `${70 * scale}px`,
          height: `${100 * scale}px`,
          backgroundColor: color,
          borderRadius: '3px',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
          position: 'relative' as const,
          backgroundImage: 'linear-gradient(to bottom, transparent 0px, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 11px)',
          backgroundSize: '100% 20px',
        };
      case 'pencil':
        return {
          width: `${10 * scale}px`,
          height: `${120 * scale}px`,
          backgroundColor: color,
          borderRadius: '2px',
          position: 'relative' as const,
        };
      case 'planet':
        return {
          width: `${100 * scale}px`,
          height: `${100 * scale}px`,
          backgroundColor: color,
          borderRadius: '50%',
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.4)',
          position: 'relative' as const,
        };
      case 'rocket':
        return {
          width: `${40 * scale}px`,
          height: `${100 * scale}px`,
          backgroundColor: color,
          borderRadius: '20px 20px 0 0',
          position: 'relative' as const,
        };
      default:
        return {};
    }
  };

  // Add details to the object based on type
  const getObjectDetails = () => {
    switch (objectType) {
      case 'book':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '90%',
              height: '5px',
              bottom: '15%',
              left: '5%',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '70%',
              height: '5px',
              bottom: '25%',
              left: '15%',
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}></div>
            {subjectId && (
              <div style={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                top: '40%',
                color: 'white',
                fontWeight: 'bold',
                fontSize: `${12 * scale}px`,
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
              }}>
                {subject?.name || subjectId}
              </div>
            )}
          </>
        );
      case 'notebook':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '10%',
              height: '100%',
              left: '10%',
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}></div>
            {subjectId && (
              <div style={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                top: '45%',
                color: 'white',
                fontWeight: 'bold',
                fontSize: `${10 * scale}px`,
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
              }}>
                {subject?.name || subjectId}
              </div>
            )}
          </>
        );
      case 'pencil':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '0',
              height: '0',
              top: '0',
              left: '0',
              borderLeft: `${5 * scale}px solid transparent`,
              borderRight: `${5 * scale}px solid transparent`,
              borderBottom: `${15 * scale}px solid #ffcd44`,
              transform: 'translateX(-0.5px)',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '10%',
              bottom: '0',
              backgroundColor: '#f0c0c0',
            }}></div>
          </>
        );
      case 'planet':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '90%',
              height: '10%',
              top: '30%',
              left: '5%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              transform: 'rotate(30deg)',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '70%',
              height: '5%',
              top: '50%',
              left: '15%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              transform: 'rotate(-20deg)',
            }}></div>
            {subjectId && (
              <div style={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                top: '40%',
                color: 'white',
                fontWeight: 'bold',
                fontSize: `${14 * scale}px`,
                textShadow: '0 1px 4px rgba(0,0,0,0.8)',
              }}>
                {subject?.name || subjectId}
              </div>
            )}
          </>
        );
      case 'rocket':
        return (
          <>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '20%',
              bottom: '-10%',
              left: '0',
              backgroundColor: '#e74c3c',
              borderRadius: '0 0 20px 20px',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '40%',
              height: '10%',
              bottom: '0',
              left: '30%',
              backgroundColor: '#e74c3c',
            }}></div>
            <div style={{
              position: 'absolute',
              width: '60%',
              height: '20%',
              top: '20%',
              left: '20%',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '50%',
            }}></div>
          </>
        );
      default:
        return null;
    }
  };

  // Calculate transforms
  const finalPosition: [number, number, number] = [
    position[0] + (reducedMotion ? 0 : positionOffset[0]),
    position[1] + (reducedMotion ? 0 : positionOffset[1]),
    position[2] + (reducedMotion ? 0 : positionOffset[2])
  ];

  const finalRotation: [number, number, number] = [
    rotation[0] + (reducedMotion ? 0 : rotationOffset[0]),
    rotation[1] + (reducedMotion ? 0 : rotationOffset[1]),
    rotation[2] + (reducedMotion ? 0 : rotationOffset[2])
  ];

  // Get CSS transform
  const getTransform = () => {
    return `
      translateX(${finalPosition[0]}vw)
      translateY(${finalPosition[1]}vw)
      translateZ(${finalPosition[2]}vw)
      rotateX(${finalRotation[0]}rad)
      rotateY(${finalRotation[1]}rad)
      rotateZ(${finalRotation[2]}rad)
      ${hoverState ? 'scale(1.2)' : ''}
    `;
  };

  return (
    <div
      ref={objectRef}
      className="floating-object"
      style={{
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: getTransform(),
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out',
        cursor: onClick ? 'pointer' : 'default',
        zIndex: hoverState ? 10 : 1,
      }}
      onClick={onClick}
      onMouseEnter={() => !reducedMotion && setHoverState(true)}
      onMouseLeave={() => !reducedMotion && setHoverState(false)}
      onTouchStart={() => !reducedMotion && setHoverState(true)}
      onTouchEnd={() => !reducedMotion && setHoverState(false)}
    >
      <div style={getObjectStyle()}>
        {getObjectDetails()}
      </div>
    </div>
  );
};

export default FloatingObject;