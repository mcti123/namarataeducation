import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, useTexture } from '@react-three/drei';
import { MathUtils, Mesh, Vector3 } from 'three';

type FloatingObjectProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  amplitude?: number;
  objectType: 'book' | 'notebook' | 'pencil' | 'planet' | 'rocket';
  onClick?: () => void;
  hoverState?: boolean;
  subjectId?: string;
  reducedMotion?: boolean;
};

const FloatingObject: React.FC<FloatingObjectProps> = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  color = '#6366F1',
  speed = 1,
  amplitude = 0.5,
  objectType,
  onClick,
  hoverState = false,
  reducedMotion = false
}) => {
  const meshRef = useRef<Mesh>(null);
  const initialY = position[1];
  const initialPosition = new Vector3(position[0], position[1], position[2]);
  
  // Unique movement pattern based on object ID
  const randomOffset = useRef(Math.random() * 10000);
  
  useFrame((_state, delta) => {
    if (meshRef.current && !reducedMotion) {
      // Float effect
      if (!hoverState) {
        meshRef.current.position.y = initialY + Math.sin((Date.now() + randomOffset.current) * 0.001 * speed) * amplitude;
      
        // Slow rotation
        meshRef.current.rotation.x += delta * 0.1 * speed;
        meshRef.current.rotation.y += delta * 0.15 * speed;
      } else {
        // Hover state animation - wobble effect
        meshRef.current.rotation.z = Math.sin(Date.now() * 0.005) * 0.1;
        meshRef.current.rotation.x = Math.sin(Date.now() * 0.003) * 0.05;
        
        // Move slightly up when hovered
        meshRef.current.position.y = initialY + amplitude + 0.3;
      }
    } else if (meshRef.current && reducedMotion) {
      // Reset to initial position when reduced motion is active
      meshRef.current.position.copy(initialPosition);
      meshRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
    }
  });

  const renderObject = () => {
    switch (objectType) {
      case 'book':
        return (
          <Box
            args={[1.2, 0.2, 1.5]}
            scale={scale}
            onClick={onClick}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; }}
          >
            <meshStandardMaterial color={color} metalness={0.1} roughness={0.8} />
          </Box>
        );
      case 'notebook':
        return (
          <Box 
            args={[1, 0.1, 1.2]} 
            scale={scale}
            onClick={onClick}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; }}
          >
            <meshStandardMaterial color={color} metalness={0.1} roughness={0.7} />
          </Box>
        );
      case 'pencil':
        return (
          <group scale={scale} onClick={onClick}>
            <Box args={[0.1, 1, 0.1]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#FFD700" />
            </Box>
            <Box args={[0.1, 0.2, 0.1]} position={[0, 0.6, 0]}>
              <meshStandardMaterial color="#333333" />
            </Box>
            <Box args={[0.1, 0.1, 0.1]} position={[0, -0.55, 0]} rotation={[0, 0, Math.PI / 4]}>
              <meshStandardMaterial color="#FFBB88" />
            </Box>
          </group>
        );
      case 'planet':
        return (
          <Sphere args={[1, 32, 32]} scale={scale} onClick={onClick}>
            <meshStandardMaterial
              color={color}
              metalness={0.2}
              roughness={0.8}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Sphere>
        );
      case 'rocket':
        return (
          <group scale={scale} onClick={onClick}>
            <Box args={[0.5, 1.5, 0.5]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#FFFFFF" />
            </Box>
            <Box args={[0.7, 0.2, 0.7]} position={[0, -0.7, 0]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[0.3, 0.8, 0.3]} position={[0, 1, 0]} rotation={[0, 0, 0]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[0.7, 0.1, 0.1]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} />
            </Box>
            <Box args={[0.1, 0.1, 0.7]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} />
            </Box>
          </group>
        );
      default:
        return (
          <Box args={[1, 1, 1]} scale={scale} onClick={onClick}>
            <meshStandardMaterial color={color} />
          </Box>
        );
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={[position[0], position[1], position[2]]}
      rotation={[rotation[0], rotation[1], rotation[2]]}
    >
      {renderObject()}
    </mesh>
  );
};

export default FloatingObject;
