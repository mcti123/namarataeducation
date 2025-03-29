import React, { useState, useEffect } from 'react';
import FloatingObject from './FloatingObject';
import { subjects } from '@/lib/data';

interface AnimatedBackgroundProps {
  reducedMotion: boolean;
  onSelectSubject: (subjectId: string) => void;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  reducedMotion, 
  onSelectSubject 
}) => {
  const [objects, setObjects] = useState<React.ReactNode[]>([]);
  const subjectData = subjects;

  useEffect(() => {
    // Generate floating objects based on subjects and some decorative objects
    const generateObjects = () => {
      const floatingObjects: React.ReactNode[] = [];
      
      // Add subject-specific objects that trigger tests when clicked
      subjectData.forEach((subject, index) => {
        const xPos = Math.sin(index * (Math.PI * 2 / subjectData.length)) * 15;
        const zPos = Math.cos(index * (Math.PI * 2 / subjectData.length)) * 15;
        
        // Use appropriate object types for different subjects
        let objectType: 'book' | 'notebook' | 'pencil' | 'planet' | 'rocket' = 'notebook';
        
        switch(subject.id) {
          case 'math':
            objectType = 'book';
            break;
          case 'science':
            objectType = 'planet';
            break;
          case 'english':
            objectType = 'book';
            break;
          default:
            objectType = 'notebook';
        }
        
        floatingObjects.push(
          <FloatingObject
            key={`subject-${subject.id}`}
            position={[xPos, Math.random() * 2 + 2, zPos]}
            rotation={[Math.random() * 0.3, Math.random() * 0.3, Math.random() * 0.3]}
            scale={1.2}
            color={subject.color}
            objectType={objectType}
            speed={0.5 + Math.random() * 0.3}
            amplitude={0.3 + Math.random() * 0.2}
            onClick={() => onSelectSubject(subject.id)}
            reducedMotion={reducedMotion}
            subjectId={subject.id}
          />
        );
      });
      
      // Add decorative objects
      const decorativeCount = 15;
      for (let i = 0; i < decorativeCount; i++) {
        const radius = 20 + Math.random() * 15;
        const angle = Math.random() * Math.PI * 2;
        const xPos = Math.sin(angle) * radius;
        const zPos = Math.cos(angle) * radius;
        
        // Randomly select object type
        const objectTypes: ('book' | 'notebook' | 'pencil' | 'planet' | 'rocket')[] = 
          ['pencil', 'rocket', 'planet', 'notebook', 'book'];
          
        const randomType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF3'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        floatingObjects.push(
          <FloatingObject
            key={`decorative-${i}`}
            position={[xPos, Math.random() * 10 - 5, zPos]}
            rotation={[Math.random(), Math.random(), Math.random()]}
            scale={0.8 + Math.random() * 0.4}
            color={randomColor}
            objectType={randomType}
            speed={0.2 + Math.random() * 0.8}
            amplitude={0.4 + Math.random() * 0.6}
            reducedMotion={reducedMotion}
          />
        );
      }
      
      setObjects(floatingObjects);
    };
    
    generateObjects();
  }, [reducedMotion, onSelectSubject, subjectData]);

  return (
    <div className="animated-background fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="stars absolute top-0 left-0 w-full h-full">
        {/* Parallax star layers */}
        <div className="stars-layer stars-small"></div>
        <div className="stars-layer stars-medium"></div>
        <div className="stars-layer stars-large"></div>
      </div>
      
      {/* Floating 3D Objects */}
      <div className="floating-objects pointer-events-auto">
        {objects}
      </div>
    </div>
  );
};

export default AnimatedBackground;