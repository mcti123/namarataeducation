import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { subjects } from '@/lib/data';
import { trophies } from '@/lib/data';
import { Check, Star, Award, BarChart, ArrowUp, Clock, Target, BookOpen, Rocket, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FloatingObject from '@/components/FloatingObject';

const AnimatedProgressBackground: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const [objects, setObjects] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateObjects = () => {
      const floatingObjects: React.ReactNode[] = [];
      
      const objectCount = 12;
      const objectTypes: ('book' | 'notebook' | 'pencil' | 'planet' | 'rocket' | 'laptop' | 'globe' | 'star')[] = 
        ['star', 'rocket', 'globe', 'star', 'laptop', 'star'];
        
      for (let i = 0; i < objectCount; i++) {
        const xPos = Math.random() * 90 - 45;
        const yPos = Math.random() * 100 - 50;
        const zPos = Math.random() * 40 - 20;
        
        const randomType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
        const colors = ['#FF5733', '#8A2BE2', '#3498db', '#1abc9c', '#f1c40f', '#e74c3c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        floatingObjects.push(
          <FloatingObject
            key={`bg-obj-${i}`}
            position={[xPos, yPos, zPos]}
            rotation={[Math.random(), Math.random(), Math.random()]}
            scale={0.4 + Math.random() * 0.4}
            color={randomColor}
            objectType={randomType}
            speed={0.1 + Math.random() * 0.3}
            amplitude={0.2 + Math.random() * 0.2}
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

const ProgressCard: React.FC<{ 
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}> = ({ title, value, icon, color, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <Card className="p-5 bg-spaceMid/80 border-spaceMid shadow-xl overflow-hidden">
        <div className="flex items-center gap-4 mb-3">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}40` }} // Semi-transparent background
          >
            <div className="text-xl" style={{ color }}>{icon}</div>
          </div>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between mb-1 items-center">
            <span className="text-sm text-gray-300">प्रगति</span>
            <span className="font-bold text-lg">{value}%</span>
          </div>
          <Progress value={value} className="h-2" style={{ 
            backgroundColor: '#2c3e5080',
            '--progress-foreground': color
          } as React.CSSProperties} />
        </div>
      </Card>
    </motion.div>
  );
};

const ProgressOverview: React.FC = () => {
  const progressMetrics = [
    { title: 'समग्र प्रगति', value: 68, icon: <Activity />, color: '#3498db', description: 'सभी विषयों में संयुक्त प्रगति' },
    { title: 'पूरे किए गए टेस्ट', value: 75, icon: <Check />, color: '#2ecc71', description: '45/60 टेस्ट पूरे किए' },
    { title: 'स्तर परिपक्वता', value: 42, icon: <ArrowUp />, color: '#e74c3c', description: 'प्रारंभिक से मध्यम स्तर' },
    { title: 'अध्ययन समय', value: 62, icon: <Clock />, color: '#f39c12', description: '24 घंटे 36 मिनट अब तक' },
    { title: 'सटीकता स्कोर', value: 89, icon: <Target />, color: '#9b59b6', description: 'औसत प्रश्न सटीकता' },
    { title: 'ट्रॉफियां', value: 30, icon: <Award />, color: '#f1c40f', description: '9/30 ट्रॉफियां जीती' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {progressMetrics.map((metric, index) => (
        <ProgressCard 
          key={index}
          title={metric.title}
          value={metric.value}
          icon={metric.icon}
          color={metric.color}
          description={metric.description}
        />
      ))}
    </div>
  );
};

const TimelineItem: React.FC<{
  date: string;
  title: string;
  description: string;
  type: 'test' | 'achievement' | 'milestone';
  index: number;
}> = ({ date, title, description, type, index }) => {
  let icon;
  let color;
  
  switch (type) {
    case 'test':
      icon = <BookOpen size={18} />;
      color = '#3498db';
      break;
    case 'achievement':
      icon = <Award size={18} />;
      color = '#f1c40f';
      break;
    case 'milestone':
      icon = <Rocket size={18} />;
      color = '#9b59b6';
      break;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex gap-4 mb-6 relative"
    >
      <div className="relative">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center z-10"
          style={{ backgroundColor: `${color}30`, color }}
        >
          {icon}
        </div>
        {index !== 9 && (
          <div className="absolute top-10 left-5 w-[1px] h-[calc(100%+1rem)] bg-gray-700 -z-10"></div>
        )}
      </div>
      <div className="flex-1">
        <span className="text-sm text-gray-400 block mb-1">{date}</span>
        <div className="p-4 bg-spaceMid/50 rounded-lg">
          <h4 className="font-bold mb-1">{title}</h4>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ActivityTimeline: React.FC = () => {
  const timelineItems = [
    { date: '29 मार्च, 2025', title: 'गणित टेस्ट पूरा किया', description: 'बीजगणित का परीक्षण 92% अंकों के साथ पूरा किया', type: 'test' as const },
    { date: '28 मार्च, 2025', title: 'नई ट्रॉफी प्राप्त की', description: '"ज्ञान के प्रहरी" ट्रॉफी अनलॉक की', type: 'achievement' as const },
    { date: '27 मार्च, 2025', title: 'विज्ञान टेस्ट पूरा किया', description: 'भौतिक विज्ञान का अध्याय 2 का परीक्षण पूरा किया', type: 'test' as const },
    { date: '26 मार्च, 2025', title: '25 टेस्ट का मील का पत्थर पूरा', description: '25 परीक्षण पूरे करने का मील का पत्थर प्राप्त किया', type: 'milestone' as const },
    { date: '25 मार्च, 2025', title: 'संस्कृत टेस्ट पूरा किया', description: 'संस्कृत व्याकरण का परीक्षण 88% अंकों के साथ पूरा किया', type: 'test' as const },
    { date: '24 मार्च, 2025', title: 'हिंदी टेस्ट पूरा किया', description: 'हिंदी साहित्य का अध्याय 3 पूरा किया', type: 'test' as const },
    { date: '23 मार्च, 2025', title: 'नई ट्रॉफी प्राप्त की', description: '"अध्ययन उत्साही" ट्रॉफी अनलॉक की', type: 'achievement' as const },
    { date: '22 मार्च, 2025', title: 'गणित टेस्ट पूरा किया', description: 'ज्यामिति का परीक्षण 78% अंकों के साथ पूरा किया', type: 'test' as const },
    { date: '21 मार्च, 2025', title: 'अंग्रेजी टेस्ट पूरा किया', description: 'अंग्रेजी व्याकरण का परीक्षण पूरा किया', type: 'test' as const },
    { date: '20 मार्च, 2025', title: 'पहला लॉगिन', description: 'आपने अपनी सीखने की यात्रा शुरू की', type: 'milestone' as const },
  ];
  
  return (
    <div className="px-4 py-6">
      <h3 className="text-2xl font-bold mb-6">गतिविधि टाइमलाइन</h3>
      <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            type={item.type}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const SubjectProgress: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {subjects.map((subject) => (
        <motion.div
          key={subject.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-5 bg-spaceMid/80 border-spaceMid shadow-xl overflow-hidden">
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: subject.color }}
              >
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{subject.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{subject.rating}/5 रेटिंग</span>
                  <span className="text-yellow-400 flex">
                    {Array.from({ length: Math.floor(subject.rating) }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-3">
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm text-gray-300">प्रगति</span>
                <span className="font-bold">{subject.progress}%</span>
              </div>
              <Progress value={subject.progress} className="h-2" style={{ 
                backgroundColor: '#2c3e5080',
                '--progress-foreground': subject.color
              } as React.CSSProperties} />
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
              <div className="p-2 bg-spaceLight rounded-md">
                <div className="font-bold">12/15</div>
                <div className="text-gray-400">अध्याय</div>
              </div>
              <div className="p-2 bg-spaceLight rounded-md">
                <div className="font-bold">35/40</div>
                <div className="text-gray-400">टेस्ट</div>
              </div>
              <div className="p-2 bg-spaceLight rounded-md">
                <div className="font-bold">86%</div>
                <div className="text-gray-400">सटीकता</div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">विस्तृत रिपोर्ट</Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const TrophyCabinet: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {trophies.slice(0, 6).map((trophy, index) => (
        <motion.div
          key={trophy.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className={`p-5 bg-spaceMid/80 border-spaceMid shadow-xl overflow-hidden ${trophy.status === 'locked' ? 'opacity-60' : ''}`}>
            <div className="flex flex-col items-center text-center">
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${trophy.status === 'locked' ? 'bg-gray-700' : ''}`}
                style={{ backgroundColor: trophy.status !== 'locked' ? `${trophy.iconColor}30` : undefined }}
              >
                {trophy.status === 'locked' ? (
                  <span className="text-2xl">🔒</span>
                ) : (
                  <span className="text-3xl" style={{ color: trophy.iconColor }}>🏆</span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-1">{trophy.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{trophy.description}</p>
              <div className={`text-xs px-3 py-1 rounded-full ${trophy.status === 'locked' ? 'bg-gray-700' : trophy.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                {trophy.status === 'locked' ? 'लॉक्ड' : trophy.status === 'in-progress' ? 'प्रगति में' : 'अनलॉक्ड'}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

// Radar chart for skills using basic divs
const SkillRadarChart: React.FC = () => {
  const skills = [
    { name: 'गणित कौशल', value: 85 },
    { name: 'भाषा कौशल', value: 70 },
    { name: 'विज्ञान कौशल', value: 90 },
    { name: 'समझ', value: 75 },
    { name: 'विश्लेषण', value: 65 },
    { name: 'स्मृति', value: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-spaceMid/60 rounded-xl relative h-[400px] flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border border-gray-700 opacity-20"></div>
        <div className="absolute w-[225px] h-[225px] rounded-full border border-gray-700 opacity-30"></div>
        <div className="absolute w-[150px] h-[150px] rounded-full border border-gray-700 opacity-40"></div>
        <div className="absolute w-[75px] h-[75px] rounded-full border border-gray-700 opacity-50"></div>
      </div>
      
      <div className="relative w-[300px] h-[300px]">
        {skills.map((skill, index) => {
          const angle = (Math.PI * 2 * index) / skills.length;
          const radius = (skill.value / 100) * 150; // 150px is max radius
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <React.Fragment key={skill.name}>
              <div 
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              
              <div 
                className="absolute text-sm font-bold"
                style={{ 
                  left: `calc(50% + ${Math.cos(angle) * 170}px)`, 
                  top: `calc(50% + ${Math.sin(angle) * 170}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {skill.name}
              </div>
            </React.Fragment>
          );
        })}
        
        {/* Connect the dots to form the radar shape */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
          <polygon
            points={skills.map((skill, index) => {
              const angle = (Math.PI * 2 * index) / skills.length;
              const radius = (skill.value / 100) * 150;
              const x = Math.cos(angle) * radius + 150;
              const y = Math.sin(angle) * radius + 150;
              return `${x},${y}`;
            }).join(' ')}
            fill="rgba(99, 102, 241, 0.2)"
            stroke="#6366f1"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.div>
  );
};

// Main component for the Progress Page
const ProgressPage: React.FC<{reducedMotion: boolean}> = ({ reducedMotion }) => {
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
            आपकी प्रगति
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          अपनी अध्ययन यात्रा का अन्वेषण करें, अपनी उपलब्धियों का जश्न मनाएं और अपनी सीखने की प्रगति का विश्लेषण करें।
        </p>
      </motion.div>
      
      {/* Progress overview section */}
      <div className="container mx-auto px-4 mb-12">
        <ProgressOverview />
      </div>
      
      {/* Main content with tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto px-4"
      >
        <Tabs defaultValue="subjects" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="subjects">विषय प्रगति</TabsTrigger>
            <TabsTrigger value="skills">कौशल विश्लेषण</TabsTrigger>
            <TabsTrigger value="trophies">ट्रॉफियां</TabsTrigger>
            <TabsTrigger value="activity">गतिविधि</TabsTrigger>
          </TabsList>
          
          <TabsContent value="subjects" className="mt-4">
            <SubjectProgress />
          </TabsContent>
          
          <TabsContent value="skills" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-spaceMid/50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">कौशल रडार</h3>
                <SkillRadarChart />
              </div>
              
              <div className="bg-spaceMid/50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">प्रमुख प्रदर्शन संकेतक</h3>
                <div className="space-y-6">
                  {[
                    { name: 'प्रश्न सटीकता', value: 82 },
                    { name: 'वर्कशीट पूर्णता', value: 68 },
                    { name: 'अध्ययन नियमितता', value: 91 },
                    { name: 'समस्या समाधान', value: 74 },
                    { name: 'महत्वपूर्ण सोच', value: 63 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">{item.name}</span>
                        <span className="font-bold">{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="trophies" className="mt-4">
            <TrophyCabinet />
          </TabsContent>
          
          <TabsContent value="activity" className="mt-4">
            <div className="bg-spaceMid/50 rounded-xl">
              <ActivityTimeline />
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      {/* 3D Animated background */}
      <AnimatedProgressBackground reducedMotion={reducedMotion} />
      
      {/* Motivational section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="container mx-auto px-4 mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 font-baloo">अपनी यात्रा जारी रखें!</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            अपनी यात्रा में आगे बढ़ें और अगली ट्रॉफी अनलॉक करें। नए कौशल विकसित करें और अपने ज्ञान का विस्तार करें।
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-lg">
            अगला अध्याय शुरू करें
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressPage;