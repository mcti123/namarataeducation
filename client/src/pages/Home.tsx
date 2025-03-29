import React, { useState, useEffect, useRef } from 'react';
import { subjects, trophies } from '@/lib/data';
import { scienceTest } from '@/lib/testData';
import HeroSection from '@/components/HeroSection';
import SubjectsSection from '@/components/SubjectsSection';
import TestSampleSection from '@/components/TestSampleSection';
import RewardsSection from '@/components/RewardsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import EnhancedTestModal from '@/components/EnhancedTestModal';
import { motion } from 'framer-motion';
import { 
  HiOutlineAcademicCap, 
  HiOutlineLightBulb, 
  HiOutlineSparkles, 
  HiOutlineStar, 
  HiOutlineBookOpen, 
  HiOutlinePlay,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineDesktopComputer,
  HiOutlinePencil
} from 'react-icons/hi';

const Home: React.FC<{reducedMotion: boolean}> = ({ reducedMotion }) => {
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [chapterIndex, setChapterIndex] = useState<number | null>(null);
  
  // The App component now handles localStorage updates for reducedMotion
  
  // Listen for test modal open events from other pages
  useEffect(() => {
    const handleOpenTestModal = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        const { subjectId, chapter, chapterIndex } = customEvent.detail;
        
        if (subjectId) {
          setSelectedSubjectId(subjectId);
          
          if (chapter) {
            setSelectedChapter(chapter);
          } else {
            setSelectedChapter(null);
          }
          
          if (chapterIndex) {
            setChapterIndex(chapterIndex);
          } else {
            setChapterIndex(null);
          }
          
          setTestModalOpen(true);
        }
      }
    };
    
    // Add event listener
    window.addEventListener('openTestModal', handleOpenTestModal);
    
    // Cleanup
    return () => {
      window.removeEventListener('openTestModal', handleOpenTestModal);
    };
  }, []);
  
  const handleStartLearning = () => {
    // Scroll to subjects section
    const subjectsSection = document.getElementById('subjects');
    if (subjectsSection) {
      subjectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedChapter(null);
    setChapterIndex(null);
    setTestModalOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-space">
      {/* Animated floating objects in background */}
      <AnimatedBackground 
        reducedMotion={reducedMotion} 
        onSelectSubject={handleSelectSubject} 
      />
    
      {/* Navbar is now handled in the App.tsx Router */}
      
      <main className="relative z-10">
        <HeroSection reducedMotion={reducedMotion} onStartLearning={handleStartLearning} />
        
        {/* 3D Books Section with Typography */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Interactive <span className="text-primary">3D Learning</span> Experience
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* 3D Book 1 */}
              <motion.div 
                className="relative perspective-book z-10"
                initial={{ opacity: 0, rotateY: -30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: -15, scale: 1.05 }}
              >
                <div className="book-wrapper transform-gpu">
                  <div className="book-cover bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-xl p-8 h-80 relative overflow-hidden">
                    <div className="book-spine absolute left-0 top-0 bottom-0 w-4 bg-blue-700"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <HiOutlineAcademicCap className="text-white text-5xl mb-4" />
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-2">Dynamic Tests</h3>
                        <p className="text-blue-100">Adaptive difficulty that grows with your skills</p>
                      </div>
                    </div>
                    
                    {/* Floating elements inside book */}
                    <div className="absolute top-1/4 right-8 text-white opacity-20 animate-float">Q</div>
                    <div className="absolute bottom-10 left-12 text-white opacity-20 animate-float-delayed">A</div>
                  </div>
                </div>
              </motion.div>
              
              {/* 3D Book 2 */}
              <motion.div 
                className="relative perspective-book z-20 md:mt-12"
                initial={{ opacity: 0, rotateY: 30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 15, scale: 1.05 }}
              >
                <div className="book-wrapper transform-gpu">
                  <div className="book-cover bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-xl p-8 h-80 relative overflow-hidden">
                    <div className="book-spine absolute left-0 top-0 bottom-0 w-4 bg-purple-700"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <HiOutlineLightBulb className="text-white text-5xl mb-4" />
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-2">Learn & Grow</h3>
                        <p className="text-purple-100">Track your progress and earn rewards</p>
                      </div>
                    </div>
                    
                    {/* Floating elements inside book */}
                    <div className="absolute top-1/3 right-6 text-white opacity-20 animate-float">✓</div>
                    <div className="absolute bottom-16 left-10 text-white opacity-20 animate-float-delayed">★</div>
                  </div>
                </div>
              </motion.div>
              
              {/* 3D Book 3 */}
              <motion.div 
                className="relative perspective-book z-10"
                initial={{ opacity: 0, rotateY: -30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: -15, scale: 1.05 }}
              >
                <div className="book-wrapper transform-gpu">
                  <div className="book-cover bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg shadow-xl p-8 h-80 relative overflow-hidden">
                    <div className="book-spine absolute left-0 top-0 bottom-0 w-4 bg-amber-700"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <HiOutlineBookOpen className="text-white text-5xl mb-4" />
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-2">NCERT Based</h3>
                        <p className="text-amber-100">Aligned with 6th grade curriculum</p>
                      </div>
                    </div>
                    
                    {/* Floating elements inside book */}
                    <div className="absolute top-1/4 right-8 text-white opacity-20 animate-float">6</div>
                    <div className="absolute bottom-10 left-12 text-white opacity-20 animate-float-delayed">✎</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating elements in the background */}
          <div className="absolute top-20 left-10 opacity-20 text-4xl animate-float text-primary">A</div>
          <div className="absolute top-40 right-20 opacity-10 text-6xl animate-float-delayed text-primary">B</div>
          <div className="absolute bottom-20 left-1/4 opacity-15 text-5xl animate-float-slow text-primary">C</div>
        </section>
        
        <SubjectsSection subjects={subjects} onSelectSubject={handleSelectSubject} />
        <TestSampleSection test={scienceTest} />
        
        {/* Enhanced 3D Classroom Environment */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-900/30 to-indigo-900/20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Virtual <span className="text-primary">Classroom</span> Experience
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-80 md:h-[400px] w-full rounded-xl bg-gradient-to-br from-blue-900/40 to-indigo-900/50 p-1 backdrop-blur-sm shadow-2xl border border-blue-500/20">
                  <div className="absolute w-full h-full rounded-lg overflow-hidden">
                    {/* Classroom Background Elements - Starry Space Theme */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute rounded-full bg-white"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            opacity: Math.random() * 0.7 + 0.3,
                            animation: `twinkle ${Math.random() * 4 + 2}s infinite`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Classroom Board */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-1/4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-md shadow-lg border border-gray-600">
                      <div className="absolute inset-1 p-2 flex flex-col justify-center items-center">
                        <div className="text-xs md:text-sm text-blue-300 font-space text-center mb-1">WELCOME TO</div>
                        <div className="text-sm md:text-base text-white font-bold text-center">6TH GRADE LEARNING</div>
                      </div>
                      
                      {/* Math Symbols Floating Around Board */}
                      <motion.div
                        className="absolute -right-4 -top-2 text-yellow-400 text-sm opacity-80"
                        animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        +
                      </motion.div>
                      <motion.div
                        className="absolute -left-3 top-2 text-green-400 text-sm opacity-80"
                        animate={{ y: [-3, 3, -3], rotate: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        ÷
                      </motion.div>
                      <motion.div
                        className="absolute left-2 -bottom-3 text-red-400 text-sm opacity-80"
                        animate={{ y: [-4, 2, -4], rotate: [0, 8, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        ∞
                      </motion.div>
                    </div>
                    
                    {/* Teacher's Desk */}
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-gradient-to-b from-amber-700 to-amber-800 rounded-md shadow-lg z-10">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-md shadow-md">
                        {/* Teacher Figure */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-200 rounded-full">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2 rounded-t-full bg-amber-300"></div>
                          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-blue-600 rounded-b-md"></div>
                      </div>
                      
                      {/* Items on Desk */}
                      <div className="absolute top-1 left-8 w-6 h-3 bg-white/30 rounded-sm shadow-sm"></div>
                      <div className="absolute top-2 right-12 w-8 h-4 bg-green-500/40 rounded-sm shadow-sm"></div>
                      
                      <motion.div
                        className="absolute -top-2 right-8 w-4 h-5"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className="w-full h-full bg-red-500 rounded-sm"></div>
                      </motion.div>
                    </div>
                    
                    {/* Student Desks Row 1 */}
                    <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 w-16 h-6 bg-amber-800/70 rounded-sm shadow-md">
                      {/* Student */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-6">
                        <div className="w-3 h-3 bg-pink-300 rounded-full mx-auto"></div>
                        <div className="w-4 h-3 bg-blue-400 rounded-sm mt-[2px]"></div>
                      </div>
                      
                      {/* Book on desk */}
                      <motion.div
                        className="absolute -top-1 right-1 w-4 h-3 bg-blue-500 rounded-sm"
                        animate={{ rotate: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      ></motion.div>
                    </div>
                    
                    {/* Student Desk Row 1-2 */}
                    <div className="absolute bottom-4 right-1/4 transform translate-x-1/2 w-16 h-6 bg-amber-800/70 rounded-sm shadow-md">
                      {/* Student */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-6">
                        <div className="w-3 h-3 bg-amber-300 rounded-full mx-auto"></div>
                        <div className="w-4 h-3 bg-green-400 rounded-sm mt-[2px]"></div>
                      </div>
                      
                      {/* Book on desk */}
                      <motion.div
                        className="absolute -top-1 left-2 w-4 h-3 bg-purple-500 rounded-sm"
                        animate={{ rotate: [3, -3, 3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                    </div>
                    
                    {/* Multiple Laptops */}
                    <motion.div 
                      className="absolute right-1/4 top-1/3 w-6 h-4 transform-gpu"
                      animate={{ y: [-3, 3, -3], x: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <div className="w-full h-3 bg-gray-800 rounded-t-sm relative">
                        <div className="absolute inset-[1px] top-[1px] bg-blue-400/40 rounded-t-[1px]"></div>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-b-sm"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute left-1/3 top-1/2 w-5 h-3 transform-gpu"
                      animate={{ y: [-2, 4, -2], x: [1, -1, 1] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    >
                      <div className="w-full h-2 bg-gray-800 rounded-t-sm relative">
                        <div className="absolute inset-[1px] top-[1px] bg-green-400/40 rounded-t-[1px]"></div>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-b-sm"></div>
                    </motion.div>
                    
                    {/* Advanced Rocket */}
                    <motion.div 
                      className="absolute left-3/4 top-1/4 transform-gpu"
                      animate={{ 
                        y: [-10, 10, -10],
                        x: [5, -5, 5],
                        rotate: [-5, 5, -5]
                      }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                      <div className="w-3 h-10 relative">
                        {/* Rocket Body */}
                        <div className="absolute inset-x-0 top-0 h-2 bg-red-500 rounded-t-full"></div>
                        <div className="absolute inset-x-0 top-2 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg">
                          {/* Window */}
                          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full border-[0.5px] border-gray-400"></div>
                          
                          {/* Fins */}
                          <div className="absolute bottom-0 -left-1 w-1 h-2 bg-red-600 skew-x-[30deg]"></div>
                          <div className="absolute bottom-0 -right-1 w-1 h-2 bg-red-600 skew-x-[-30deg]"></div>
                        </div>
                        
                        {/* Flame Animation */}
                        <motion.div 
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                          animate={{ height: [3, 5, 3] }}
                          transition={{ duration: 0.3, repeat: Infinity }}
                        >
                          <div className="w-2 h-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-500 to-orange-500 rounded-b-full"></div>
                            <div className="absolute inset-[1px] bg-gradient-to-t from-transparent via-yellow-300 to-white rounded-b-full"></div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating stars outside */}
                <div className="absolute -top-6 -left-6 text-yellow-300 text-xl animate-float-slow">
                  <HiOutlineStar />
                </div>
                <div className="absolute top-1/2 -right-6 text-yellow-300 text-2xl animate-float">
                  <HiOutlineStar />
                </div>
                <div className="absolute -bottom-6 left-1/3 text-yellow-300 text-xl animate-float-delayed">
                  <HiOutlineStar />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Space Classroom Adventures</h3>
                <p className="text-lg mb-6 text-gray-300">
                  Step into our interactive space-themed virtual classroom where learning becomes an exciting galactic journey! Watch as animated characters, rockets, and educational elements create an immersive experience.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: <HiOutlineAcademicCap />, text: "Interactive 3D objects respond to your progress" },
                    { icon: <HiOutlineLightBulb />, text: "Animated characters make learning fun and engaging" },
                    { icon: <HiOutlineSparkles />, text: "Flying rockets and planets create a space adventure" },
                    { icon: <HiOutlineDesktopComputer />, text: "Digital learning tools combine with space exploration" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary text-xl mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  className="mt-8 px-6 py-3 bg-primary rounded-full text-white font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleStartLearning}
                >
                  Start Your Adventure
                  <HiOutlineSparkles />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Space Adventure Section with Rocket Launch */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-900/50 to-purple-900/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Space <span className="text-primary">Adventure</span> Learning
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Blast Off Into Knowledge!</h3>
                <p className="text-lg mb-4 text-gray-300">
                  Join our space adventure where learning feels like an exciting journey through the cosmos. Our interactive platform makes education fun and engaging.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: <HiOutlineGlobe />, text: "Explore all subjects through exciting space missions" },
                    { icon: <HiOutlineUserGroup />, text: "Join thousands of 6th graders on this learning adventure" },
                    { icon: <HiOutlineDesktopComputer />, text: "Accessible anytime, anywhere on any device" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary text-xl mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Advanced Rocket Animation */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-96 w-full">
                  {/* Stars background */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full bg-white"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          width: `${Math.random() * 3 + 1}px`,
                          height: `${Math.random() * 3 + 1}px`,
                          opacity: Math.random() * 0.8 + 0.2,
                          animation: `twinkle ${Math.random() * 5 + 3}s infinite`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Launch Platform */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-lg"></div>
                  
                  {/* Rocket */}
                  <motion.div 
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      y: [-5, -100, -5],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      times: [0, 0.5, 1],
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-10 h-32 relative">
                      {/* Rocket Body */}
                      <div className="absolute inset-0 w-full h-full">
                        {/* Nose Cone */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-tl-full rounded-tr-full"></div>
                        
                        {/* Body */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 h-20 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg">
                          {/* Window */}
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-2 border-gray-400">
                            {/* Cute Cartoon Character */}
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-black rounded-full relative">
                                {/* Eyes */}
                                <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"></div>
                                <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>
                                {/* Smile */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b border-white rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Fins */}
                          <div className="absolute bottom-0 -left-3 w-3 h-8 bg-red-600 skew-x-[30deg]"></div>
                          <div className="absolute bottom-0 -right-3 w-3 h-8 bg-red-600 skew-x-[-30deg]"></div>
                        </div>
                      </div>
                      
                      {/* Flame Animation */}
                      <motion.div 
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                        animate={{ height: [16, 24, 16] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        <div className="w-8 h-16 relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-500 to-orange-500 rounded-b-full"></div>
                          <div className="absolute inset-1 bg-gradient-to-t from-transparent via-yellow-300 to-white rounded-b-full"></div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Books and Math Symbols Floating Around Rocket */}
                    <motion.div
                      className="absolute -top-6 -left-10 text-blue-400 text-xl"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <HiOutlinePencil />
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-10 -right-8 text-green-400 text-xl"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      π
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-10 -left-12 text-purple-400 text-xl"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    >
                      ∑
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 opacity-20 text-5xl text-yellow-400 animate-float-slow">
            <HiOutlineStar />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 text-6xl text-purple-400 animate-float">
            <HiOutlineStar />
          </div>
        </section>
        
        {/* Educational Videos Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Fun <span className="text-primary">Learning</span> Videos
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative pb-[56.25%] bg-gray-900">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/tJj0lD0BC5A"
                    title="Introduction to Mathematics - 6th Grade"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Math Fundamentals for 6th Grade</h3>
                  <div className="flex items-center gap-3">
                    <HiOutlinePlay className="text-primary" />
                    <span className="text-sm text-gray-300">Basic concepts explained in a fun way</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Video 2 */}
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative pb-[56.25%] bg-gray-900">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/hAQwQ-gtkVQ"
                    title="Introduction to Science - 6th Grade"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Science Adventures for Young Minds</h3>
                  <div className="flex items-center gap-3">
                    <HiOutlinePlay className="text-primary" />
                    <span className="text-sm text-gray-300">Exciting science experiments and concepts</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <RewardsSection trophies={trophies} reducedMotion={reducedMotion} />
      </main>
      
      <Footer />
      
      {/* Enhanced Test Modal with adaptive difficulty */}
      <EnhancedTestModal 
        isOpen={testModalOpen} 
        onClose={() => setTestModalOpen(false)} 
        initialTest={scienceTest}
        reducedMotion={reducedMotion}
        subjectId={selectedSubjectId || 'science'}
        selectedChapter={selectedChapter}
        chapterIndex={chapterIndex}
      />
    </div>
  );
};

export default Home;
