import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trophies } from '@/lib/data';
import { subjects } from '@/lib/data';
import { Trophy as TrophyType } from '@/lib/data';
import { Check, Award, Star, Gift, Sparkles, Crown, BookOpen, Rocket, Target, Medal, BookMarked, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import FloatingObject from '@/components/FloatingObject';
import ConfettiEffect from '@/components/ConfettiEffect';

// Extended trophy type with additional fields for this page
interface ExtendedTrophy extends TrophyType {
  progress?: number;
  nextMilestone?: string;
  category?: string;
}

const AnimatedRewardsBackground: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const [objects, setObjects] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateObjects = () => {
      const floatingObjects: React.ReactNode[] = [];
      
      const objectCount = 15;
      const objectTypes: ('star' | 'rocket')[] = ['star', 'rocket', 'star', 'star'];
        
      for (let i = 0; i < objectCount; i++) {
        const xPos = Math.random() * 90 - 45;
        const yPos = Math.random() * 100 - 50;
        const zPos = Math.random() * 40 - 20;
        
        const randomType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
        const colors = ['#FFD700', '#f1c40f', '#F1A505', '#e67e22', '#FFC107'];
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

// Extended trophies with extra data
const getExtendedTrophies = (): ExtendedTrophy[] => {
  return trophies.map(trophy => {
    const extended: ExtendedTrophy = { ...trophy };
    
    // Add progress for in-progress trophies
    if (trophy.status === 'in-progress') {
      extended.progress = Math.floor(Math.random() * 70) + 30; // 30-99% progress
    }
    
    // Add next milestone for locked and in-progress trophies
    if (trophy.status !== 'unlocked') {
      const milestones = [
        'अगले 5 टेस्ट पूरे करें',
        'अगले चैप्टर को पूरा करें',
        '80% सटीकता प्राप्त करें',
        'अगले 3 दिन लगातार लॉगिन करें',
        'हार्ड मोड में एक टेस्ट पूरा करें'
      ];
      extended.nextMilestone = milestones[Math.floor(Math.random() * milestones.length)];
    }
    
    // Add category
    const categories = ['अध्ययन', 'उपलब्धि', 'नियमितता', 'कौशल', 'प्रतिभा'];
    extended.category = categories[Math.floor(Math.random() * categories.length)];
    
    return extended;
  });
};

// Trophy component with animation and detailed info
const TrophyCard: React.FC<{ 
  trophy: ExtendedTrophy;
  index: number;
  onClick: (trophy: ExtendedTrophy) => void;
}> = ({ trophy, index, onClick }) => {
  
  // Icon based on status
  const getStatusIcon = () => {
    if (trophy.status === 'unlocked') return <Check className="h-5 w-5" />;
    if (trophy.status === 'in-progress') return <Clock className="h-5 w-5" />;
    return <Medal className="h-5 w-5" />;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(trophy)}
    >
      <Card 
        className={`p-5 overflow-hidden relative cursor-pointer transition-all duration-300 
          ${trophy.status === 'locked' ? 'bg-spaceMid/50 opacity-60' : 
            trophy.status === 'unlocked' ? 'bg-gradient-to-br from-yellow-900/30 to-yellow-600/10 border-yellow-700/30' : 
            'bg-spaceMid/80 border-spaceMid'}`}
      >
        {/* Trophy icon */}
        <div className="flex justify-center mb-4">
          <div 
            className={`w-16 h-16 rounded-full flex items-center justify-center 
              ${trophy.status === 'locked' ? 'bg-gray-700' : `bg-opacity-20`}`}
            style={{ 
              backgroundColor: trophy.status !== 'locked' ? trophy.iconColor : undefined,
              boxShadow: trophy.status === 'unlocked' ? `0 0 20px ${trophy.iconColor}50` : 'none'
            }}
          >
            {trophy.status === 'locked' ? (
              <span className="text-2xl">🔒</span>
            ) : trophy.status === 'unlocked' ? (
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                <span className="text-3xl">🏆</span>
              </motion.div>
            ) : (
              <span className="text-2xl">🏆</span>
            )}
          </div>
        </div>
        
        {/* Trophy info */}
        <div className="text-center">
          <Badge variant="outline" className={`mb-2 ${trophy.status === 'unlocked' ? 'border-yellow-500/50 text-yellow-500' : ''}`}>
            {trophy.category}
          </Badge>
          <h3 className="text-lg font-bold mb-1">{trophy.name}</h3>
          <p className="text-sm text-gray-400 mb-3 min-h-[40px]">{trophy.description}</p>
          
          {/* Progress for in-progress trophies */}
          {trophy.status === 'in-progress' && trophy.progress && (
            <div className="mt-2 mb-3">
              <div className="flex justify-between items-center text-xs mb-1">
                <span>प्रगति</span>
                <span>{trophy.progress}%</span>
              </div>
              <Progress value={trophy.progress} className="h-1.5" />
            </div>
          )}
          
          {/* Status badge */}
          <div className="mt-1 flex items-center justify-center">
            <div 
              className={`text-xs px-3 py-1 rounded-full flex items-center gap-1
                ${trophy.status === 'locked' ? 'bg-gray-700' : 
                  trophy.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' : 
                  'bg-green-500/20 text-green-400'}`}
            >
              {getStatusIcon()}
              <span>
                {trophy.status === 'locked' ? 'लॉक्ड' : 
                 trophy.status === 'in-progress' ? 'प्रगति में' : 
                 'अनलॉक्ड'}
              </span>
            </div>
          </div>
          
          {/* Next milestone for locked trophies */}
          {trophy.status !== 'unlocked' && trophy.nextMilestone && (
            <div className="mt-3 text-xs text-gray-400">
              <p>अगला लक्ष्य:</p>
              <p className="font-medium">{trophy.nextMilestone}</p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

// Detailed trophy view modal
const TrophyDetailModal: React.FC<{ 
  trophy: ExtendedTrophy | null;
  onClose: () => void;
  reducedMotion: boolean;
}> = ({ trophy, onClose, reducedMotion }) => {
  
  if (!trophy) return null;
  
  // Generate random completion date for unlocked trophies
  const getCompletionDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date.toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-spaceMid w-full max-w-lg rounded-xl p-6 relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Confetti for unlocked trophies */}
        {trophy.status === 'unlocked' && !reducedMotion && <ConfettiEffect count={50} duration={5} />}
        
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        {/* Trophy header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <motion.div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: `${trophy.iconColor}30`,
                boxShadow: trophy.status === 'unlocked' ? `0 0 30px ${trophy.iconColor}50` : 'none'
              }}
              initial={{ rotate: 0 }}
              animate={trophy.status === 'unlocked' && !reducedMotion ? { 
                rotate: [0, 5, -5, 0], 
                scale: [1, 1.05, 1] 
              } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
              <span className="text-4xl">{trophy.status === 'locked' ? '🔒' : '🏆'}</span>
            </motion.div>
          </div>
          
          <Badge 
            className="mb-2"
            style={{ 
              backgroundColor: `${trophy.iconColor}20`, 
              color: trophy.iconColor,
              borderColor: `${trophy.iconColor}30`
            }}
          >
            {trophy.category}
          </Badge>
          <h2 className="text-2xl font-bold mb-1">{trophy.name}</h2>
          <p className="text-gray-300">{trophy.description}</p>
        </div>
        
        {/* Trophy details */}
        <div className="bg-black/20 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">स्थिति</p>
              <p className="font-bold">
                {trophy.status === 'locked' ? 'लॉक्ड' : 
                 trophy.status === 'in-progress' ? 'प्रगति में' : 
                 'अनलॉक्ड'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">श्रेणी</p>
              <p className="font-bold">{trophy.category}</p>
            </div>
            {trophy.status === 'unlocked' && (
              <div>
                <p className="text-sm text-gray-400">प्राप्ति तिथि</p>
                <p className="font-bold">{getCompletionDate()}</p>
              </div>
            )}
            {trophy.status === 'in-progress' && trophy.progress && (
              <div>
                <p className="text-sm text-gray-400">प्रगति</p>
                <p className="font-bold">{trophy.progress}%</p>
              </div>
            )}
          </div>
          
          {/* Progress bar for in-progress trophies */}
          {trophy.status === 'in-progress' && trophy.progress && (
            <div className="mt-4">
              <Progress value={trophy.progress} className="h-2" />
            </div>
          )}
        </div>
        
        {/* How to earn section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">कैसे प्राप्त करें</h3>
          {trophy.status === 'unlocked' ? (
            <div className="flex items-center gap-2 text-green-400">
              <Check className="h-5 w-5" />
              <span>आपने यह ट्रॉफी पहले ही अनलॉक कर ली है!</span>
            </div>
          ) : (
            <div>
              <p className="text-gray-300 mb-3">निम्न उपलब्धियाँ प्राप्त करें:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-yellow-500"><Target className="h-4 w-4" /></div>
                  <span>{trophy.nextMilestone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-yellow-500"><BookOpen className="h-4 w-4" /></div>
                  <span>कम से कम 3 अध्याय परीक्षण पूरे करें</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-yellow-500"><Star className="h-4 w-4" /></div>
                  <span>न्यूनतम 75% सटीकता प्राप्त करें</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Action button */}
        <div className="flex justify-center">
          {trophy.status === 'unlocked' ? (
            <Button 
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800"
              onClick={onClose}
            >
              <Award className="mr-2 h-4 w-4" />
              बंद करें
            </Button>
          ) : trophy.status === 'in-progress' ? (
            <Button 
              className="bg-primary hover:bg-primary/80"
              onClick={onClose}
            >
              <Rocket className="mr-2 h-4 w-4" />
              प्रगति जारी रखें
            </Button>
          ) : (
            <Button 
              variant="outline"
              onClick={onClose}
            >
              <Target className="mr-2 h-4 w-4" />
              अनलॉक करने का लक्ष्य रखें
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Achievements summary section
const AchievementsSummary: React.FC = () => {
  const extendedTrophies = getExtendedTrophies();
  const unlockedCount = extendedTrophies.filter(t => t.status === 'unlocked').length;
  const inProgressCount = extendedTrophies.filter(t => t.status === 'in-progress').length;
  const lockedCount = extendedTrophies.filter(t => t.status === 'locked').length;
  
  const totalTrophies = extendedTrophies.length;
  const unlockedPercentage = Math.round((unlockedCount / totalTrophies) * 100);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="p-5 bg-gradient-to-br from-amber-700/30 to-amber-500/10 border-amber-600/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <Award className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-300">कुल अनलॉक्ड</p>
              <h3 className="text-2xl font-bold">{unlockedCount} / {totalTrophies}</h3>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-400">{unlockedPercentage}% पूरा</span>
            </div>
            <Progress value={unlockedPercentage} className="h-1.5" />
          </div>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card className="p-5 bg-spaceMid/80 border-spaceMid">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-300">प्रगति में</p>
              <h3 className="text-2xl font-bold">{inProgressCount} ट्रॉफियां</h3>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              अगली ट्रॉफी अनलॉक करने के लिए {Math.floor(Math.random() * 10) + 1} अध्याय और पूरे करें।
            </p>
          </div>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card className="p-5 bg-spaceMid/80 border-spaceMid">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-300">दुर्लभ उपलब्धियां</p>
              <h3 className="text-2xl font-bold">{Math.floor(Math.random() * 3) + 1} अनलॉक्ड</h3>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              आपने {Math.floor(Math.random() * 20) + 5}% खिलाड़ियों की तुलना में अधिक दुर्लभ ट्रॉफियां अनलॉक की हैं।
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

// Subject-specific achievements section
const SubjectAchievements: React.FC = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6">विषय-विशिष्ट उपलब्धियां</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-5 bg-spaceMid/60 border-spaceMid">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: subject.color }}
                >
                  <BookMarked className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">{subject.name}</h3>
              </div>
              
              <div className="space-y-4">
                {['प्रवीणता', 'नियमितता', 'परीक्षण'].map((category, i) => {
                  const value = Math.floor(Math.random() * 61) + 40; // 40-100%
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{category} उपलब्धियां</span>
                        <span>{Math.floor(value / 20)}/5</span>
                      </div>
                      <Progress value={value} className="h-1.5" />
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full -ml-1 border border-spaceMid"
                      style={{ backgroundColor: `hsl(${(i * 30) + 120}, 70%, 50%)` }}
                    ></div>
                  ))}
                </div>
                <Button variant="outline" size="sm">विस्तार दें</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Featured trophy carousel
const FeaturedTrophies: React.FC<{
  trophies: ExtendedTrophy[];
  onClick: (trophy: ExtendedTrophy) => void;
  reducedMotion: boolean;
}> = ({ trophies, onClick, reducedMotion }) => {
  // Get featured trophies (unlocked or in-progress)
  const featuredTrophies = trophies.filter(t => t.status === 'unlocked' || t.status === 'in-progress').slice(0, 3);
  
  return (
    <motion.div 
      className="mb-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-20 -bottom-20 left-0 right-0 bg-gradient-to-b from-yellow-500/5 to-amber-700/5 rounded-3xl -z-10"></div>
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
          विशेष उपलब्धियां
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredTrophies.map((trophy, index) => (
          <motion.div
            key={trophy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => onClick(trophy)}
          >
            <Card className="p-6 bg-gradient-to-br from-yellow-900/30 to-yellow-600/10 border-yellow-700/30 cursor-pointer overflow-hidden relative">
              {/* Glowing effect for unlocked trophies */}
              {trophy.status === 'unlocked' && !reducedMotion && (
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl"></div>
              )}
              
              <div className="relative z-10">
                <div className="flex justify-center mb-5">
                  <motion.div 
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${trophy.iconColor}30`,
                      boxShadow: `0 0 20px ${trophy.iconColor}40`
                    }}
                    animate={!reducedMotion ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-4xl">🏆</span>
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <Badge className="mb-2 border-yellow-600/50 text-yellow-500 bg-yellow-500/10">
                    {trophy.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{trophy.name}</h3>
                  <p className="text-gray-300 mb-4">{trophy.description}</p>
                  
                  {trophy.status === 'in-progress' && trophy.progress && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{trophy.progress}% पूरा</span>
                      </div>
                      <Progress value={trophy.progress} className="h-2" />
                    </div>
                  )}
                  
                  <Button 
                    className="mt-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 border-none"
                  >
                    {trophy.status === 'unlocked' ? 'विवरण देखें' : 'पूरा करें'}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main component for the Rewards Page
const RewardsPage: React.FC<{reducedMotion: boolean}> = ({ reducedMotion }) => {
  const [selectedTrophy, setSelectedTrophy] = useState<ExtendedTrophy | null>(null);
  const extendedTrophies = getExtendedTrophies();
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'in-progress' | 'locked'>('all');
  
  const filteredTrophies = extendedTrophies.filter(trophy => {
    if (filter === 'all') return true;
    return trophy.status === filter;
  });
  
  const handleTrophyClick = (trophy: ExtendedTrophy) => {
    setSelectedTrophy(trophy);
  };
  
  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      {/* Trophy detail modal */}
      <AnimatePresence>
        {selectedTrophy && (
          <TrophyDetailModal 
            trophy={selectedTrophy} 
            onClose={() => setSelectedTrophy(null)}
            reducedMotion={reducedMotion}
          />
        )}
      </AnimatePresence>
      
      {/* Page title with animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 mb-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-baloo">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
            उपलब्धियां और पुरस्कार
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          अपनी शैक्षिक यात्रा में प्राप्त ट्रॉफियां और विशेष उपलब्धियां देखें। हर सफलता एक पुरस्कार के योग्य है!
        </p>
      </motion.div>
      
      {/* Achievements summary */}
      <div className="container mx-auto px-4">
        <AchievementsSummary />
      </div>
      
      {/* Featured trophies */}
      <div className="container mx-auto px-4 mb-16">
        <FeaturedTrophies 
          trophies={extendedTrophies} 
          onClick={handleTrophyClick}
          reducedMotion={reducedMotion}
        />
      </div>
      
      {/* All trophies section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">सभी ट्रॉफियां</h2>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant={filter === 'all' ? "default" : "outline"} 
              onClick={() => setFilter('all')}
            >
              सभी
            </Button>
            <Button 
              size="sm" 
              variant={filter === 'unlocked' ? "default" : "outline"} 
              onClick={() => setFilter('unlocked')}
            >
              अनलॉक्ड
            </Button>
            <Button 
              size="sm" 
              variant={filter === 'in-progress' ? "default" : "outline"} 
              onClick={() => setFilter('in-progress')}
            >
              प्रगति में
            </Button>
            <Button 
              size="sm" 
              variant={filter === 'locked' ? "default" : "outline"} 
              onClick={() => setFilter('locked')}
            >
              लॉक्ड
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredTrophies.map((trophy, index) => (
            <TrophyCard 
              key={trophy.id}
              trophy={trophy}
              index={index}
              onClick={handleTrophyClick}
            />
          ))}
        </div>
      </div>
      
      {/* Subject-specific achievements */}
      <div className="container mx-auto px-4">
        <SubjectAchievements />
      </div>
      
      {/* 3D Animated background */}
      <AnimatedRewardsBackground reducedMotion={reducedMotion} />
      
      {/* CTA section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="container mx-auto px-4 mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-yellow-900/20 to-amber-700/20 rounded-2xl p-10 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-baloo">और अधिक ट्रॉफियां अनलॉक करें!</h2>
            <p className="text-xl mb-6">
              अभ्यास जारी रखें, नए अध्यायों का अन्वेषण करें और अपनी ज्ञान यात्रा में अग्रसर रहें।
            </p>
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-lg">
              <Rocket className="mr-2 h-5 w-5" />
              अगला अध्याय शुरू करें
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RewardsPage;