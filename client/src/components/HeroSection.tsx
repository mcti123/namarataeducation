import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Stars, PerspectiveCamera } from '@react-three/drei';
import { Vector3 } from 'three';
import FloatingObject from './FloatingObject';

interface HeroSectionProps {
  reducedMotion: boolean;
  onStartLearning: () => void;
}

const HeroCanvas: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={reducedMotion ? 0 : 1}
      />
      
      {/* Math Book */}
      <FloatingObject 
        position={[-4, 0, -5]} 
        rotation={[0.2, 0.3, 0.1]} 
        scale={0.8} 
        color="#EC4899" 
        objectType="book" 
        speed={1.5} 
        amplitude={0.7}
        reducedMotion={reducedMotion}
      />
      
      {/* Science Book */}
      <FloatingObject 
        position={[4, 1, -3]} 
        rotation={[-0.1, -0.3, 0.1]} 
        scale={0.9} 
        color="#10B981" 
        objectType="book" 
        speed={1.2} 
        amplitude={0.6}
        reducedMotion={reducedMotion}
      />
      
      {/* Pencil */}
      <FloatingObject 
        position={[-2, -1, -2]} 
        rotation={[0.5, 0, 0.5]} 
        scale={0.5} 
        color="#FFBB00" 
        objectType="pencil" 
        speed={1.3} 
        amplitude={0.8}
        reducedMotion={reducedMotion}
      />
      
      {/* Planet */}
      <FloatingObject 
        position={[3, -1.5, -6]} 
        scale={1.2} 
        color="#6366F1" 
        objectType="planet" 
        speed={0.8} 
        amplitude={0.4}
        reducedMotion={reducedMotion}
      />
      
      {/* Rocket */}
      <FloatingObject 
        position={[-3, 3, -4]} 
        rotation={[0.2, 0, 0.1]} 
        scale={0.6} 
        color="#F43F5E" 
        objectType="rocket" 
        speed={2} 
        amplitude={1}
        reducedMotion={reducedMotion}
      />
      
      {/* Floating equation */}
      <group position={[0, 2, -8]} rotation={[0, 0, 0]}>
        <Text3D
          font="/fonts/Baloo_2_Regular.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          E=mc²
          <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.5} />
        </Text3D>
      </group>
    </>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ reducedMotion, onStartLearning }) => {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <HeroCanvas reducedMotion={reducedMotion} />
        </Canvas>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Hero Content */}
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
