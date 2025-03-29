import React from 'react';

interface HeroSectionProps {
  reducedMotion: boolean;
  onStartLearning: () => void;
}

// CSS based floating objects instead of Three.js
const CSSFloatingObject: React.FC<{
  type: string;
  color: string;
  position: string;
  size: string;
  animationClass: string;
  reducedMotion: boolean;
  onClick?: () => void;
  subjectId?: string;
  tooltip?: string;
}> = ({ type, color, position, size, animationClass, reducedMotion, onClick, subjectId, tooltip }) => {
  // Determine which icon to use based on type
  let icon = '';
  switch (type) {
    case 'book':
      icon = 'fa-book';
      break;
    case 'pencil':
      icon = 'fa-pencil';
      break;
    case 'planet':
      icon = 'fa-globe';
      break;
    case 'rocket':
      icon = 'fa-rocket';
      break;
    case 'math':
      icon = 'fa-square-root-variable';
      break;
    default:
      icon = 'fa-star';
  }

  return (
    <div className="group relative">
      <div 
        className={`absolute ${position} ${reducedMotion ? '' : animationClass} transform-gpu hover-glow transition-all duration-300 cursor-pointer`}
        style={{ 
          color: color,
          fontSize: size,
          opacity: 0.8,
          filter: `drop-shadow(0 0 10px ${color})`,
        }}
        onClick={onClick}
        data-subject-id={subjectId}
        role="button"
        aria-label={`Interactive ${type} object${tooltip ? `: ${tooltip}` : ''}`}
        tabIndex={0}
      >
        <i className={`fas ${icon}`}></i>
        
        {/* Tooltip */}
        {tooltip && (
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap z-50"
               style={{ 
                 bottom: '100%', 
                 left: '50%', 
                 transform: 'translateX(-50%)', 
                 marginBottom: '8px'
               }}>
            {tooltip}
            {/* Tooltip arrow */}
            <div className="tooltip-arrow absolute h-2 w-2 bg-black bg-opacity-80 rotate-45"
                 style={{ 
                   bottom: '-4px', 
                   left: '50%', 
                   transform: 'translateX(-50%)' 
                 }}>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Stars background using plain HTML/CSS
const StarryBackground: React.FC<{ count: number; reducedMotion: boolean }> = ({ count, reducedMotion }) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 0.2 + 0.1; // Random size between 0.1 and 0.3rem
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 3;
        
        return (
          <div 
            key={i}
            className={`absolute rounded-full bg-white ${reducedMotion ? '' : 'animate-pulse'}`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}rem`,
              height: `${size}rem`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}
          />
        );
      })}
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ reducedMotion, onStartLearning }) => {
  // Create a handler for the floating object clicks
  const handleFloatingObjectClick = (subjectId: string) => {
    // Scroll to the subjects section
    const subjectsSection = document.getElementById('subjects');
    if (subjectsSection) {
      subjectsSection.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
    
    // Highlight the specific subject card if it exists
    setTimeout(() => {
      const subjectCard = document.querySelector(`[data-subject-id="${subjectId}"]`);
      if (subjectCard) {
        subjectCard.classList.add('ring', 'ring-primary', 'ring-opacity-70');
        setTimeout(() => {
          subjectCard.classList.remove('ring', 'ring-primary', 'ring-opacity-70');
        }, 2000);
      }
    }, reducedMotion ? 0 : 500);
  };
  
  return (
    <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Starry Background */}
      <StarryBackground count={100} reducedMotion={reducedMotion} />
      
      {/* Floating Objects */}
      <div className="absolute inset-0 z-0">
        <CSSFloatingObject 
          type="book" 
          color="#EC4899" 
          position="top-1/4 left-1/4" 
          size="4rem" 
          animationClass="animate-float" 
          reducedMotion={reducedMotion}
          onClick={() => handleFloatingObjectClick('math')}
          subjectId="math"
          tooltip="Math Practice Tests"
        />
        <CSSFloatingObject 
          type="book" 
          color="#10B981" 
          position="top-1/3 right-1/3" 
          size="3.5rem" 
          animationClass="animate-float-delayed" 
          reducedMotion={reducedMotion}
          onClick={() => handleFloatingObjectClick('science')}
          subjectId="science"
          tooltip="Science Practice Tests"
        />
        <CSSFloatingObject 
          type="pencil" 
          color="#FFBB00" 
          position="bottom-1/4 left-1/3" 
          size="3rem" 
          animationClass="animate-float-slow" 
          reducedMotion={reducedMotion} 
          onClick={() => handleFloatingObjectClick('english')}
          subjectId="english"
          tooltip="English Practice Tests"
        />
        <CSSFloatingObject 
          type="planet" 
          color="#6366F1" 
          position="bottom-1/3 right-1/4" 
          size="5rem" 
          animationClass="animate-spin-slow" 
          reducedMotion={reducedMotion}
          onClick={() => handleFloatingObjectClick('social-studies')}
          subjectId="social-studies"
          tooltip="Social Studies Tests"
        />
        <CSSFloatingObject 
          type="rocket" 
          color="#F43F5E" 
          position="top-1/5 right-1/5" 
          size="3rem" 
          animationClass="animate-float" 
          reducedMotion={reducedMotion}
          onClick={onStartLearning}
          tooltip="Start Your Learning Journey"
        />
        <CSSFloatingObject 
          type="math" 
          color="#FFFFFF" 
          position="top-2/5 left-1/2 transform -translate-x-1/2" 
          size="2.5rem" 
          animationClass="animate-float-slow" 
          reducedMotion={reducedMotion}
          onClick={() => handleFloatingObjectClick('math')}
          subjectId="math"
          tooltip="Math Formulas"
        />
      </div>
      
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-baloo font-bold tracking-tight">
            <span className="inline-block animate-float text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ace Your 6th Grade!
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-spaceWhite opacity-80">
            Interactive mock tests with fun 3D experiences for all your subjects. Learn, practice, and excel!
          </p>
          <div className="mt-10 flex justify-center">
            <button 
              onClick={onStartLearning}
              className="group relative inline-flex items-center px-8 py-4 border border-transparent text-lg font-baloo font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary animate-bounce-slow transition"
            >
              <div className="mr-3 book-hover">
                <i className="fas fa-pencil text-lg"></i>
              </div>
              Start Learning
              <span className="absolute right-2 w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full ml-2 transition group-hover:bg-opacity-30">
                <i className="fas fa-chevron-right text-sm"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
