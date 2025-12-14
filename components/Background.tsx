import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Create particles
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#00A3FF");
    const color2 = new THREE.Color("#4F46E5");

    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 25;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z

      // Color mix
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 60;
      
      // Gentle wave effect
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time * 0.1) * 0.2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-deep-blue">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#050A18', 3, 10]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue pointer-events-none" />
    </div>
  );
};

export default Background;