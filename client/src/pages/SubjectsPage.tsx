import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { subjects } from '@/lib/data';
import { Book, Globe, Rocket, Pencil, School, Video, Bookmark, Check, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingObject from '@/components/FloatingObject';

type SubjectInfoProps = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  reducedMotion: boolean;
};

const SubjectInfoCard: React.FC<SubjectInfoProps> = ({ id, name, description, icon, color, reducedMotion }) => {
  const [location, setLocation] = useLocation();
  
  const getIcon = () => {
    switch (id) {
      case 'math':
        return <Book className="h-10 w-10 text-white" />;
      case 'science':
        return <Globe className="h-10 w-10 text-white" />;
      case 'english':
        return <Pencil className="h-10 w-10 text-white" />;
      case 'sanskrit':
        return <School className="h-10 w-10 text-white" />;
      case 'hindi':
        return <Bookmark className="h-10 w-10 text-white" />;
      case 'social':
        return <Globe className="h-10 w-10 text-white" />;
      default:
        return <Book className="h-10 w-10 text-white" />;
    }
  };
  
  // Start test handler
  const handleStartTest = () => {
    // Navigate to home page with test modal open
    setLocation('/#subjects');
    
    // Create a custom event that the home page can listen for to open test modal
    const event = new CustomEvent('openTestModal', { 
      detail: { subjectId: id } 
    });
    
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <Card className="p-6 bg-spaceMid border-spaceMid shadow-xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-6">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            {getIcon()}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="flex items-center text-sm text-gray-300">
                <Check size={16} className="text-green-400 mr-2" />
                <span>15+ चैप्टर्स</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Video size={16} className="text-blue-400 mr-2" />
                <span>10+ वीडियो अध्ययन</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Award size={16} className="text-yellow-400 mr-2" />
                <span>5+ ट्रॉफियां</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/80"
                onClick={handleStartTest}
              >
                टेस्ट शुरू करें
              </Button>
              <Button variant="outline">विस्तार देखें</Button>
            </div>
          </div>
        </div>
        
        {/* Subject-specific 3D object floating in background */}
        <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="transform scale-150">
            {id === 'math' && (
              <div className="text-9xl font-bold text-white opacity-10">π</div>
            )}
            {id === 'science' && (
              <div className="text-9xl font-bold text-white opacity-10">⚛</div>
            )}
            {id === 'sanskrit' || id === 'hindi' && (
              <div className="text-9xl font-bold text-white opacity-10">अ</div>
            )}
            {id === 'social' && (
              <div className="text-9xl font-bold text-white opacity-10">🌏</div>
            )}
            {id === 'english' && (
              <div className="text-9xl font-bold text-white opacity-10">A</div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ChapterListSection: React.FC<{subjectId: string, reducedMotion: boolean}> = ({ subjectId, reducedMotion }) => {
  const subject = subjects.find(s => s.id === subjectId);
  const [location, setLocation] = useLocation();
  const [testModalOpen, setTestModalOpen] = useState(false);
  
  const chapterNames = [
    'अध्याय 1: प्रारंभिक अवधारणाएँ',
    'अध्याय 2: मूलभूत प्रक्रियाएँ',
    'अध्याय 3: परिभाषित संरचनाएँ',
    'अध्याय 4: विश्लेषणात्मक पद्धतियां',
    'अध्याय 5: व्यावहारिक अनुप्रयोग',
    'अध्याय 6: प्रगति मूल्यांकन',
    'अध्याय 7: समस्या समाधान',
    'अध्याय 8: आगे का अध्ययन',
    'अध्याय 9: व्यावहारिक उदाहरण',
    'अध्याय 10: परिचय और समीक्षा'
  ];
  
  // Start test handler
  const handleStartChapterTest = (chapter: string, index: number) => {
    // Navigate to home page with test modal open
    setLocation('/#subjects');
    
    // Create a custom event that the home page can listen for to open test modal
    const event = new CustomEvent('openTestModal', { 
      detail: { 
        subjectId: subjectId,
        chapter: chapter,
        chapterIndex: index + 1
      } 
    });
    
    window.dispatchEvent(event);
  };
  
  return (
    <div className="mt-8 bg-spaceMid/50 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-4">{subject?.name} के अध्याय</h3>
      <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        {chapterNames.map((chapter, idx) => (
          <motion.div
            key={`${subjectId}-chapter-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="p-3 bg-spaceMid rounded-lg hover:bg-primary/20 transition-all cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span>{chapter}</span>
              <Button 
                size="sm" 
                variant="outline" 
                className="text-xs"
                onClick={() => handleStartChapterTest(chapter, idx)}
              >
                अभ्यास करें
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SubjectVideoComponent: React.FC<{subjectId: string, reducedMotion: boolean}> = ({ subjectId, reducedMotion }) => {
  const subject = subjects.find(s => s.id === subjectId);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 pb-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">{subject?.name} - वीडियो अध्ययन सामग्री</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div 
            key={`video-${subjectId}-${idx}`} 
            className="bg-spaceMid/70 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-40 bg-primary/20 flex items-center justify-center">
              <Video className="h-16 w-16 text-white/50" />
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">{subject?.name} वीडियो #{idx + 1}</h4>
              <p className="text-sm text-gray-300 mb-3">विषय की मुख्य अवधारणाओं का विस्तृत वीडियो विश्लेषण</p>
              <Button variant="outline" size="sm" className="w-full">देखें</Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Animated page background with floating subject-themed objects
const AnimatedSubjectBackground: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const [objects, setObjects] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateObjects = () => {
      const floatingObjects: React.ReactNode[] = [];
      
      // Generate different types of floating objects
      const objectCount = 10;
      const objectTypes: ('book' | 'notebook' | 'pencil' | 'planet' | 'rocket' | 'laptop' | 'globe' | 'star')[] = 
        ['book', 'notebook', 'pencil', 'planet', 'star', 'globe'];
        
      for (let i = 0; i < objectCount; i++) {
        const xPos = Math.random() * 100 - 50;
        const yPos = Math.random() * 100 - 50;
        const zPos = Math.random() * 50 - 25;
        
        const randomType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
        const colors = ['#8A2BE2', '#FF6347', '#00CED1', '#FF1493', '#32CD32', '#FFD700'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        floatingObjects.push(
          <FloatingObject
            key={`bg-obj-${i}`}
            position={[xPos, yPos, zPos]}
            rotation={[Math.random(), Math.random(), Math.random()]}
            scale={0.6 + Math.random() * 0.4}
            color={randomColor}
            objectType={randomType}
            speed={0.2 + Math.random() * 0.3}
            amplitude={0.3 + Math.random() * 0.2}
            reducedMotion={reducedMotion}
          />
        );
      }
      
      setObjects(floatingObjects);
    };
    
    generateObjects();
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 opacity-20 pointer-events-none">
      {objects}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-spaceLight"></div>
    </div>
  );
};

// Main component for the Subjects Page
const SubjectsPage: React.FC<{reducedMotion: boolean}> = ({ reducedMotion }) => {
  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      {/* Page title with animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 mb-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-baloo">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            अध्ययन विषय
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          सभी आवश्यक NCERT कक्षा 6 विषयों का अन्वेषण करें। प्रत्येक विषय के लिए अध्याय, अभ्यास और वीडियो संसाधन।
        </p>
      </motion.div>
      
      {/* Subjects grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <SubjectInfoCard 
              key={subject.id}
              id={subject.id}
              name={subject.name}
              description={subject.description}
              icon={subject.icon}
              color={subject.color}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
      
      {/* Featured topics section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto px-4 my-16"
      >
        <div className="bg-spaceMid/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center font-baloo">प्रमुख विषय</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['math', 'science', 'hindi'].map((subjectId) => (
              <ChapterListSection key={subjectId} subjectId={subjectId} reducedMotion={reducedMotion} />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Video resources section */}
      <div className="container mx-auto px-4">
        {['math', 'social'].map((subjectId) => (
          <SubjectVideoComponent key={subjectId} subjectId={subjectId} reducedMotion={reducedMotion} />
        ))}
      </div>
      
      {/* 3D Animated subject-themed background */}
      <AnimatedSubjectBackground reducedMotion={reducedMotion} />
      
      {/* Call to action section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="container mx-auto px-4 mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 font-baloo">शुरू करने के लिए तैयार हैं?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            अभ्यास मोड में जाएं और अपनी प्रगति की निगरानी करें। विभिन्न कठिनाई स्तरों पर परीक्षण दें।
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-lg">
            अभी टेस्ट शुरू करें
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SubjectsPage;