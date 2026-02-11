import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import './Workspace3D.css';

function Character() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children[0].position.y = 2.5 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 2.5]}>
      {/* Head */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ffd5cd" roughness={0.8} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 2.55, 0.35]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 2.55, 0.35]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 1, 32]} />
        <meshStandardMaterial color="#6366f1" roughness={0.6} metalness={0.3} emissive="#6366f1" emissiveIntensity={0.1} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.5, 1.6, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#6366f1" roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0.5, 1.6, 0]} rotation={[0, 0, -Math.PI / 6]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#6366f1" roughness={0.6} metalness={0.3} />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.7, 1.2, 0.2]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ffd5cd" />
      </mesh>
      <mesh position={[0.7, 1.2, 0.2]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ffd5cd" />
      </mesh>
    </group>
  );
}

function Desk() {
  return (
    <group>
      {/* Desk top */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.15, 2.5]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.6} metalness={0.4} emissive="#8b5cf6" emissiveIntensity={0.1} />
      </mesh>
      
      {/* Desk legs */}
      {[[-1.8, 0.75, -1.1], [1.8, 0.75, -1.1], [-1.8, 0.75, 1.1], [1.8, 0.75, 1.1]].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.15, 1.5, 0.15]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.6} metalness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Chair() {
  return (
    <group position={[0, 0, 3]}>
      {/* Seat */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1.2, 0.15, 1.2]} />
        <meshStandardMaterial color="#ec4899" roughness={0.4} metalness={0.5} emissive="#ec4899" emissiveIntensity={0.15} />
      </mesh>
      
      {/* Backrest */}
      <mesh position={[0, 1.5, -0.5]} castShadow>
        <boxGeometry args={[1.2, 1, 0.15]} />
        <meshStandardMaterial color="#ec4899" roughness={0.4} metalness={0.5} emissive="#ec4899" emissiveIntensity={0.15} />
      </mesh>
      
      {/* Legs */}
      {[[-0.5, 0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, 0.5], [0.5, 0.5, 0.5]].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#888888" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Monitor({ onClick }) {
  const [hovered, setHovered] = useState(false);
  const textureRef = useRef();
  const scrollOffset = useRef(0);
  
  // Create canvas once
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  useFrame(() => {
    if (textureRef.current && ctx) {
      // Auto-scroll animation
      scrollOffset.current += 0.3;
      if (scrollOffset.current > 600) {
        scrollOffset.current = 0;
      }
      
      // Clear canvas
      ctx.fillStyle = '#0f0f1e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw resume content
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Jayvee Olla', canvas.width / 2, 80 - scrollOffset.current);
      
      // Gradient line
      const gradient = ctx.createLinearGradient(150, 0, 362, 0);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(1, '#ec4899');
      ctx.fillStyle = gradient;
      ctx.fillRect(150, 100 - scrollOffset.current, 212, 4);
      
      // Title
      ctx.fillStyle = '#a0a0b0';
      ctx.font = '22px Arial, sans-serif';
      ctx.fillText('Full Stack Developer', canvas.width / 2, 140 - scrollOffset.current);
      
      // Section: Skills
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Skills', 40, 210 - scrollOffset.current);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '18px Arial, sans-serif';
      ctx.fillText('• React.js & Next.js', 50, 245 - scrollOffset.current);
      ctx.fillText('• Node.js & Express', 50, 275 - scrollOffset.current);
      ctx.fillText('• Python & TensorFlow', 50, 305 - scrollOffset.current);
      ctx.fillText('• MongoDB & PostgreSQL', 50, 335 - scrollOffset.current);
      
      // Section: Experience
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.fillText('Experience', 40, 395 - scrollOffset.current);
      
      ctx.fillStyle = '#ec4899';
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.fillText('Full Stack Developer', 50, 430 - scrollOffset.current);
      
      ctx.fillStyle = '#a0a0b0';
      ctx.font = '16px Arial, sans-serif';
      ctx.fillText('Tech Company • 2022 - Present', 50, 455 - scrollOffset.current);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '18px Arial, sans-serif';
      ctx.fillText('• Built scalable web apps', 60, 485 - scrollOffset.current);
      ctx.fillText('• Led team of 5 developers', 60, 515 - scrollOffset.current);
      
      // Section: Projects
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.fillText('Projects', 40, 575 - scrollOffset.current);
      
      ctx.fillStyle = '#ec4899';
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.fillText('Face Recognition', 50, 610 - scrollOffset.current);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '18px Arial, sans-serif';
      ctx.fillText('AI-powered recognition', 60, 640 - scrollOffset.current);
      
      // Click instruction
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👆 Click to View Portfolio', canvas.width / 2, 700 - scrollOffset.current);
      
      // Update texture
      textureRef.current.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Monitor frame */}
      <mesh position={[0, 2.5, -0.8]} castShadow>
        <boxGeometry args={[2, 1.3, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Invisible larger clickable area */}
      <mesh 
        position={[0, 2.5, -0.75]} 
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[2.2, 1.5]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      {/* Screen with canvas texture */}
      <mesh position={[0, 2.5, -0.74]}>
        <planeGeometry args={[1.85, 1.15]} />
        <meshBasicMaterial>
          <canvasTexture ref={textureRef} attach="map" image={canvas} />
        </meshBasicMaterial>
      </mesh>
      
      {/* Hover glow effect */}
      {hovered && (
        <mesh position={[0, 2.5, -0.73]}>
          <planeGeometry args={[1.9, 1.2]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.2} />
        </mesh>
      )}
      
      {/* Stand */}
      <mesh position={[0, 1.77, -0.8]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.4]} />
        <meshStandardMaterial color="#333333" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, 1.57, -0.8]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#333333" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  return (
    <mesh position={[0, 1.62, 0.3]} castShadow>
      <boxGeometry args={[1, 0.08, 0.4]} />
      <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
    </mesh>
  );
}

function Mouse() {
  return (
    <mesh position={[1.2, 1.62, 0.3]} castShadow>
      <boxGeometry args={[0.15, 0.06, 0.2]} />
      <meshStandardMaterial color="#666666" roughness={0.5} metalness={0.5} />
    </mesh>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#1a1a2e" roughness={0.8} metalness={0.3} />
    </mesh>
  );
}

function Scene() {
  const navigate = useNavigate();

  const handleMonitorClick = () => {
    navigate('/portfolio');
  };

  return (
    <>
      <ambientLight intensity={0.5} color="#6366f1" />
      <directionalLight position={[10, 20, 10]} intensity={0.9} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.6} color="#ec4899" />
      <pointLight position={[5, 4, 5]} intensity={0.5} color="#8b5cf6" />
      
      <Floor />
      <Desk />
      <Chair />
      <Monitor onClick={handleMonitorClick} />
      <Keyboard />
      <Mouse />
      <Character />
      
      <OrbitControls 
        enableDamping 
        dampingFactor={0.05}
        maxDistance={12}
        minDistance={2}
      />
    </>
  );
}

export default function Workspace3D() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const cameraPosition = isMobile ? [4, 4, 7] : [3, 3, 5];
  const cameraFov = isMobile ? 85 : 75;
  
  return (
    <div className="workspace-3d-container">
      <div className="workspace-info">
        🖥️ Click on the Monitor Screen to go back to Portfolio 🖥️
      </div>
      <div className="workspace-controls">
        {isMobile ? '👆 Drag to rotate • Pinch to zoom' : '🖱️ Drag to rotate • Scroll to zoom • Right-click drag to pan'}
      </div>
      
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFov }}
        shadows
        style={{ background: '#0f0f1e' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
