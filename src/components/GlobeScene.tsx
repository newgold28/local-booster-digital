import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      wireRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#1a3a5c"
          emissive="#2563eb"
          emissiveIntensity={0.15}
          roughness={0.7}
          metalness={0.3}
          distort={0.05}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={wireRef}>
        <sphereGeometry args={[2.02, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function FloatingIcon({ position, color, shape }: { position: [number, number, number]; color: string; shape: 'box' | 'octahedron' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={0.3}>
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.7]} />}
        {shape === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      const phi = Math.acos(-1 + (2 * i) / 8);
      const theta = Math.sqrt(8 * Math.PI) * phi;
      pts.push([
        2.1 * Math.cos(theta) * Math.sin(phi),
        2.1 * Math.sin(theta) * Math.sin(phi),
        2.1 * Math.cos(phi),
      ]);
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={linesRef}>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3b82f6" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[5, -3, -5]} intensity={0.3} color="#06b6d4" />

        <Globe />
        <ConnectionLines />
        <Particles />

        <FloatingIcon position={[3.5, 1.5, -1]} color="#3b82f6" shape="box" />
        <FloatingIcon position={[-3.2, -1, 0.5]} color="#06b6d4" shape="octahedron" />
        <FloatingIcon position={[2.5, -2, 1]} color="#2563eb" shape="torus" />
        <FloatingIcon position={[-2.8, 2, -0.5]} color="#0ea5e9" shape="box" />
        <FloatingIcon position={[0, 3, -2]} color="#06b6d4" shape="octahedron" />

        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
