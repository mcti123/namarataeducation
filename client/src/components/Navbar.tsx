import React, { useState } from 'react';
import { Link } from 'wouter';

interface NavbarProps {
  reducedMotion: boolean;
  setReducedMotion: React.Dispatch<React.SetStateAction<boolean>>;
}

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
                <div className="h-10 w-10 relative">
                  <div className="absolute inset-0 bg-primary rounded-full opacity-70 animate-pulse"></div>
                  <i className="fas fa-graduation-cap text-white absolute inset-0 flex items-center justify-center text-2xl"></i>
                </div>
                <span className="ml-3 text-xl font-baloo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">6th Grade Stellar</span>
              </div>
            </Link>
          </div>
          
          {/* Nav Links - Desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer">Home</div>
            </Link>
            <Link href="#subjects">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer">Subjects</div>
            </Link>
            <Link href="#test-sample">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer">Progress</div>
            </Link>
            <Link href="#rewards">
              <div className="px-3 py-2 rounded-md font-medium text-spaceWhite hover:bg-spaceMid transition cursor-pointer">Rewards</div>
            </Link>
          </div>
          
          {/* User Section */}
          <div className="flex items-center">
            {/* Accessibility Toggle */}
            <button 
              onClick={toggleReducedMotion}
              className="p-2 rounded-full text-spaceWhite hover:bg-spaceMid transition mr-2" 
              aria-label="Toggle reduced motion"
            >
              <i className="fas fa-universal-access"></i>
            </button>
            
            {/* User Avatar */}
            <div className="ml-3 relative">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white cursor-pointer">
                <span className="text-sm font-medium">AB</span>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button 
                type="button" 
                className="p-2 rounded-md text-spaceWhite hover:bg-spaceMid"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-spaceLight border-t border-spaceMid">
            <Link href="/">
              <div className="block px-3 py-2 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid cursor-pointer">Home</div>
            </Link>
            <Link href="#subjects">
              <div className="block px-3 py-2 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid cursor-pointer">Subjects</div>
            </Link>
            <Link href="#test-sample">
              <div className="block px-3 py-2 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid cursor-pointer">Progress</div>
            </Link>
            <Link href="#rewards">
              <div className="block px-3 py-2 rounded-md text-base font-medium text-spaceWhite hover:bg-spaceMid cursor-pointer">Rewards</div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
