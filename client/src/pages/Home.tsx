import React, { useState } from 'react';
import { subjects, trophies } from '@/lib/data';
import { scienceTest } from '@/lib/testData';
import HeroSection from '@/components/HeroSection';
import SubjectsSection from '@/components/SubjectsSection';
import TestSampleSection from '@/components/TestSampleSection';
import RewardsSection from '@/components/RewardsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import EnhancedTestModal from '@/components/EnhancedTestModal';

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
        <SubjectsSection subjects={subjects} onSelectSubject={handleSelectSubject} />
        <TestSampleSection test={scienceTest} />
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
