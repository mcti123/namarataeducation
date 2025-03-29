import React from 'react';
import { Canvas } from '@react-three/fiber';

interface ThreeCanvasProps {
  reducedMotion: boolean;
}

// A simple space background using built-in three.js elements
const Scene = ({ reducedMotion }: { reducedMotion: boolean }) => {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Simple floating spheres to replace our complex objects for now */}
      <mesh position={[-3, 2, -5]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#EC4899" />
      </mesh>
      
      <mesh position={[3, -1, -5]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#10B981" />
      </mesh>
      
      <mesh position={[-2, -2, -3]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#F43F5E" />
      </mesh>
      
      {/* Background stars - simple particles */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            -10 - Math.random() * 10
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      ))}
    </>
  );
};

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ reducedMotion }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
};

export default ThreeCanvas;