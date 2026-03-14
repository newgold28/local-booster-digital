import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function RotatingRing({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1, 0.15, 16, 48]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <MeshDistortMaterial
          color="#1e3a5f"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          distort={0.15}
          speed={3}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Dots() {
  const count = 60;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#3b82f6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function AboutScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={0.6} color="#3b82f6" />
        <pointLight position={[-3, -2, 2]} intensity={0.4} color="#06b6d4" />
        <CoreSphere />
        <RotatingRing position={[0, 0, 0]} color="#3b82f6" speed={0.8} />
        <RotatingRing position={[0, 0, 0]} color="#06b6d4" speed={-0.5} />
        <Dots />
      </Canvas>
    </div>
  );
}
