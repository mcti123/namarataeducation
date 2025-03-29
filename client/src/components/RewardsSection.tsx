import React, { useState } from 'react';
import TrophyCard from './TrophyCard';
import TrophyAnimation from './TrophyAnimation';
import ConfettiEffect from './ConfettiEffect';
import { Trophy } from '@/lib/data';

interface RewardsSectionProps {
  trophies: Trophy[];
  reducedMotion: boolean;
}

const RewardsSection: React.FC<RewardsSectionProps> = ({ trophies, reducedMotion }) => {
  const [showTrophyAnimation, setShowTrophyAnimation] = useState(false);
  const [selectedTrophy, setSelectedTrophy] = useState<Trophy | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleTrophyClick = (trophy: Trophy) => {
    // Only show animation for unlocked trophies
    if (trophy.status === 'unlocked' && !reducedMotion) {
      setSelectedTrophy(trophy);
      setShowTrophyAnimation(true);
      setShowConfetti(true);
      
      // Hide the animation after 4 seconds
      setTimeout(() => {
        setShowTrophyAnimation(false);
        setTimeout(() => setShowConfetti(false), 1000);
      }, 4000);
    }
  };

  return (
    <section id="rewards" className="relative py-16 bg-spaceLight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-baloo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Earn Rewards
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-spaceWhite/80">
            Complete tests to earn points, badges, and unlock special features
          </p>
        </div>
        
        {/* Trophy Showcase */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {trophies.map((trophy) => (
            <TrophyCard 
              key={trophy.id} 
              trophy={trophy} 
              onClick={() => handleTrophyClick(trophy)}
            />
          ))}
        </div>
        
        {/* Trophy Animation (Hidden until triggered) */}
        {showTrophyAnimation && selectedTrophy && (
          <TrophyAnimation trophy={selectedTrophy} />
        )}
        
        {/* Confetti Effect */}
        {showConfetti && <ConfettiEffect />}
      </div>
    </section>
  );
};

export default RewardsSection;
