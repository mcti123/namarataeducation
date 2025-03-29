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
  HiOutlineBookOpen 
} from 'react-icons/hi';

const Home: React.FC<{reducedMotion: boolean}> = ({ reducedMotion }) => {
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  
  // The App component now handles localStorage updates for reducedMotion
  
  const handleStartLearning = () => {
    // Scroll to subjects section
    const subjectsSection = document.getElementById('subjects');
    if (subjectsSection) {
      subjectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
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
        
        {/* 3D Classroom Environment */}
        <section className="py-24 relative overflow-hidden">
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
                <div className="relative h-80 md:h-96 w-full rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-900/40 p-1 backdrop-blur-sm">
                  <div className="absolute w-full h-full rounded-lg overflow-hidden">
                    {/* 3D Classroom Elements */}
                    <div className="absolute right-6 top-8 w-24 h-14 bg-blue-400/20 rounded-md animate-float shadow-xl transform-gpu">
                      {/* Laptop */}
                      <div className="w-full h-10 bg-gray-800 rounded-t-md relative">
                        <div className="absolute inset-1 bg-blue-400/20 rounded-sm"></div>
                      </div>
                      <div className="w-full h-4 bg-gray-700 rounded-b-md"></div>
                    </div>
                    
                    {/* Desk */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-14 bg-amber-800/40 rounded-md shadow-lg">
                      <div className="absolute left-6 top-1 w-14 h-6 bg-white/10 rounded-sm"></div>
                      <div className="absolute right-10 top-2 w-6 h-4 bg-blue-300/20 rounded-sm"></div>
                    </div>
                    
                    {/* Rocket */}
                    <motion.div 
                      className="absolute right-1/4 top-1/3 transform-gpu"
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <div className="w-5 h-14 bg-gradient-to-b from-red-500 to-orange-600 rounded-full relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-7 h-3 bg-gradient-to-b from-orange-600 to-orange-700 rounded"></div>
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-orange-600 rounded-full"></div>
                        {/* Flame */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gradient-to-b from-yellow-400 to-transparent rounded-b-full animate-pulse"></div>
                      </div>
                    </motion.div>
                    
                    {/* Books on desk */}
                    <div className="absolute bottom-14 left-1/3 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-6 h-8 bg-red-500/80 rounded-sm shadow-md transform -rotate-3"></div>
                      <div className="w-6 h-8 bg-blue-500/80 rounded-sm shadow-md transform rotate-3"></div>
                      <div className="w-6 h-8 bg-green-500/80 rounded-sm shadow-md transform -rotate-6"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stars */}
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
                <h3 className="text-2xl font-bold mb-6">Learn in a Space-themed Classroom</h3>
                <p className="text-lg mb-4 text-gray-300">
                  Our virtual classroom combines immersive space elements with familiar study tools to create a fun and engaging learning environment.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: <HiOutlineAcademicCap />, text: "Interactive 3D objects that respond to your progress" },
                    { icon: <HiOutlineLightBulb />, text: "Visual cues that make learning concepts easier to grasp" },
                    { icon: <HiOutlineSparkles />, text: "Gamified elements that make studying more enjoyable" }
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
                  Explore Now
                  <HiOutlineSparkles />
                </motion.button>
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
      />
    </div>
  );
};

export default Home;
