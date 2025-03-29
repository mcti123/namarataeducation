import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { 
  Moon, 
  Sun, 
  Rocket, 
  Menu, 
  X, 
  BookOpen, 
  Award, 
  BarChart, 
  Settings
} from 'lucide-react';

interface NavbarProps {
  reducedMotion: boolean;
  setReducedMotion: React.Dispatch<React.SetStateAction<boolean>>;
}

// Animation for the logo that can be disabled with reducedMotion
const LogoAnimation = ({ reducedMotion }: { reducedMotion: boolean }) => {
  return (
    <div className="h-10 w-10 relative">
      <div className={`absolute inset-0 bg-primary rounded-full opacity-70 ${!reducedMotion ? 'animate-pulse' : ''}`}></div>
      <Rocket 
        className="text-white absolute inset-0 m-auto" 
        size={24} 
        style={{ transform: reducedMotion ? 'none' : 'rotate(-45deg)' }} 
      />
      {!reducedMotion && (
        <div className="absolute -bottom-1 -left-1 w-8 h-3 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full blur-sm"></div>
      )}
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ reducedMotion, setReducedMotion }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };
  
  return (
    <nav className="fixed top-0 w-full bg-spaceLight bg-opacity-80 backdrop-blur-md z-50 border-b border-spaceMid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <LogoAnimation reducedMotion={reducedMotion} />
                <span className="ml-3 text-xl font-baloo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  6th Grade Stellar
                </span>
              </div>
            </Link>
          </div>
          
          {/* Nav Links - Desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer flex items-center">
                <BookOpen className="mr-1" size={18} />
                <span>Home</span>
              </div>
            </Link>
            <Link href="#subjects">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer flex items-center">
                <Rocket className="mr-1" size={18} />
                <span>Subjects</span>
              </div>
            </Link>
            <Link href="#test-sample">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer flex items-center">
                <BarChart className="mr-1" size={18} />
                <span>Progress</span>
              </div>
            </Link>
            <Link href="#rewards">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer flex items-center">
                <Award className="mr-1" size={18} />
                <span>Rewards</span>
              </div>
            </Link>
          </div>
          
          {/* User Section */}
          <div className="flex items-center">
            {/* Theme Toggle - purely decorative since we use dark theme */}
            <button 
              className="p-2 rounded-full text-spaceWhite hover:bg-spaceMid transition mr-2"
              aria-label="Toggle theme"
            >
              <Moon size={18} />
            </button>
            
            {/* Accessibility Toggle */}
            <button 
              onClick={toggleReducedMotion}
              className="p-2 rounded-full text-spaceWhite hover:bg-spaceMid transition mr-2" 
              aria-label="Toggle reduced motion"
              title={reducedMotion ? "Enable animations" : "Reduce animations"}
            >
              <Settings size={18} className={reducedMotion ? "" : "animate-spin-slow"} />
            </button>
            
            {/* User Avatar */}
            <div className="ml-3 relative">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white cursor-pointer shadow-lg">
                <span className="text-sm font-medium">AB</span>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button 
                type="button" 
                className="p-2 rounded-md text-spaceWhite hover:bg-spaceMid transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`
          md:hidden fixed top-16 inset-x-0 transform 
          ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} 
          transition-all duration-300 ease-in-out
        `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-spaceLight/90 backdrop-blur-md border-t border-spaceMid shadow-lg">
          <Link href="/">
            <div className="flex items-center px-3 py-3 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid transition-all cursor-pointer">
              <BookOpen className="mr-3" size={18} />
              <span>Home</span>
            </div>
          </Link>
          <Link href="#subjects">
            <div className="flex items-center px-3 py-3 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid transition-all cursor-pointer">
              <Rocket className="mr-3" size={18} />
              <span>Subjects</span>
            </div>
          </Link>
          <Link href="#test-sample">
            <div className="flex items-center px-3 py-3 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid transition-all cursor-pointer">
              <BarChart className="mr-3" size={18} />
              <span>Progress</span>
            </div>
          </Link>
          <Link href="#rewards">
            <div className="flex items-center px-3 py-3 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid transition-all cursor-pointer">
              <Award className="mr-3" size={18} />
              <span>Rewards</span>
            </div>
          </Link>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-spaceMid/50">
            <div className="flex items-center text-sm text-spaceWhite/70">
              <Settings size={14} className="mr-1" />
              <span>Accessibility</span>
            </div>
            <button 
              onClick={toggleReducedMotion} 
              className={`px-3 py-1.5 rounded-full ${reducedMotion ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'} text-sm font-medium transition-all`}
            >
              {reducedMotion ? 'Animations Off' : 'Animations On'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
