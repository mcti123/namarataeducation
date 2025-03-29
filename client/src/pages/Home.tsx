import React, { useState, useEffect } from 'react';
import { subjects, trophies } from '@/lib/data';
import { scienceTest } from '@/lib/testData';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SubjectsSection from '@/components/SubjectsSection';
import TestSampleSection from '@/components/TestSampleSection';
import RewardsSection from '@/components/RewardsSection';
import Footer from '@/components/Footer';
import TestModal from '@/components/TestModal';
import EnhancedTestModal from '@/components/EnhancedTestModal';

const Home: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  
  // Check localStorage for reduced motion preference on component mount
  useEffect(() => {
    const storedPreference = localStorage.getItem('reduced-motion') === 'true';
    setReducedMotion(storedPreference);
  }, []);
  
  // Update localStorage when reducedMotion changes
  useEffect(() => {
    localStorage.setItem('reduced-motion', String(reducedMotion));
  }, [reducedMotion]);
  
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
      <Navbar reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />
      
      <main>
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
