import React, { useState, useEffect } from 'react';
import FloatingObject from './FloatingObject';
import { subjects } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';

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
          case 'hindi':
            objectType = 'notebook';
            break;
          case 'sanskrit':
            objectType = 'book';
            break;
          case 'social':
            objectType = 'planet';
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
      const decorativeCount = 30; // Increased from 15 to 30 for more objects
      for (let i = 0; i < decorativeCount; i++) {
        const radius = 20 + Math.random() * 25; // Increased radius range
        const angle = Math.random() * Math.PI * 2;
        const xPos = Math.sin(angle) * radius;
        const zPos = Math.cos(angle) * radius;
        const yPos = Math.random() * 15 - 7; // More vertical spread
        
        // Randomly select object type
        const objectTypes: ('book' | 'notebook' | 'pencil' | 'planet' | 'rocket')[] = 
          ['pencil', 'rocket', 'planet', 'notebook', 'book'];
          
        const randomType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
        
        // More vibrant colors for objects
        const colors = [
          '#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF3',
          '#8A2BE2', '#FF6347', '#00CED1', '#FF1493', '#32CD32', '#FFD700'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Create animated object
        floatingObjects.push(
          <motion.div
            key={`decorative-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.05, 
              ease: "easeOut" 
            }}
          >
            <FloatingObject
              key={`decorative-inner-${i}`}
              position={[xPos, yPos, zPos]}
              rotation={[Math.random(), Math.random(), Math.random()]}
              scale={0.6 + Math.random() * 0.6}
              color={randomColor}
              objectType={randomType}
              speed={0.2 + Math.random() * 0.8}
              amplitude={0.4 + Math.random() * 0.6}
              reducedMotion={reducedMotion}
            />
          </motion.div>
        );
      }
      
      // Add classroom elements
      // Desk at the bottom center
      floatingObjects.push(
        <motion.div
          key="classroom-desk"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div 
            className="desk" 
            style={{
              position: 'absolute',
              bottom: '5vh',
              left: '50%',
              width: '300px',
              height: '80px',
              backgroundColor: '#8B4513',
              transform: 'translateX(-50%)',
              borderRadius: '5px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
              zIndex: 5
            }}
          />
        </motion.div>
      );

      // Blackboard at the center
      floatingObjects.push(
        <motion.div
          key="classroom-blackboard"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div 
            className="blackboard" 
            style={{
              position: 'absolute',
              top: '15vh',
              left: '50%',
              width: '500px',
              height: '300px',
              backgroundColor: '#2E7D32',
              transform: 'translateX(-50%)',
              borderRadius: '5px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '32px', 
              fontFamily: 'cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              NCERT Class 6
            </div>
          </div>
        </motion.div>
      );
      
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