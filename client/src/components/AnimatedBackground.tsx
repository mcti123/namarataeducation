import React from 'react';
import FloatingObject from './FloatingObject';

interface AnimatedBackgroundProps {
  reducedMotion: boolean;
  onSelectSubject: (subjectId: string) => void;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  reducedMotion,
  onSelectSubject
}) => {
  const floatingObjects = [
    { type: 'book', position: [15, 30, 1], scale: 1.2, rotation: [10, 20, -5], subjectId: 'science' },
    { type: 'book', position: [78, 40, 1], scale: 1.3, rotation: [-5, 15, 10], subjectId: 'math' },
    { type: 'book', position: [28, 70, 1], scale: 1.1, rotation: [5, -10, 5], subjectId: 'english' },
    { type: 'book', position: [85, 75, 1], scale: 1, rotation: [0, 5, -10], subjectId: 'social' },
    { type: 'notebook', position: [50, 20, 2], scale: 0.9, rotation: [0, 0, 5], subjectId: 'hindi' },
    { type: 'notebook', position: [22, 50, 2], scale: 0.8, rotation: [5, 10, 0], subjectId: 'sanskrit' },
    { type: 'pencil', position: [40, 35, 1], scale: 0.7, rotation: [0, 0, 45] },
    { type: 'pencil', position: [65, 55, 1], scale: 0.8, rotation: [0, 0, -30] },
    { type: 'pencil', position: [35, 85, 1], scale: 0.6, rotation: [0, 0, 20] },
    { type: 'planet', position: [10, 10, 3], scale: 1.5, rotation: [0, 0, 0] },
    { type: 'planet', position: [90, 20, 3], scale: 1.2, rotation: [0, 0, 0] },
    { type: 'rocket', position: [18, 85, 2], scale: 0.9, rotation: [0, 0, -45] },
    { type: 'rocket', position: [75, 15, 2], scale: 0.7, rotation: [0, 0, 30] },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingObjects.map((obj, index) => (
        <FloatingObject
          key={index}
          objectType={obj.type as any}
          position={obj.position as [number, number, number]}
          rotation={obj.rotation as [number, number, number]}
          scale={obj.scale}
          reducedMotion={reducedMotion}
          onClick={obj.subjectId ? () => {
            onSelectSubject(obj.subjectId!);
            return false;
          } : undefined}
          subjectId={obj.subjectId}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;