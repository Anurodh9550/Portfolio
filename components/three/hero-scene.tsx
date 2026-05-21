"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Icosahedron,
  Torus,
  Octahedron,
  Stars,
  Environment,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function FloatingBlob() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.5, 128, 128]}>
        <MeshDistortMaterial
          color="#14b8a6"
          attach="material"
          distort={0.45}
          speed={2.2}
          roughness={0.1}
          metalness={0.4}
          emissive="#0891b2"
          emissiveIntensity={0.25}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingShapes() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.18;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <group ref={group}>
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1.5}
        position={[2.8, 0.7, -0.5]}
      >
        <Icosahedron args={[0.45, 0]}>
          <meshStandardMaterial
            color="#a78bfa"
            metalness={0.7}
            roughness={0.15}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </Icosahedron>
      </Float>

      <Float
        speed={1.6}
        rotationIntensity={1.5}
        floatIntensity={1}
        position={[-2.6, -0.8, 0.3]}
      >
        <Torus args={[0.45, 0.16, 24, 64]}>
          <meshStandardMaterial
            color="#fb7185"
            metalness={0.6}
            roughness={0.2}
            emissive="#f43f5e"
            emissiveIntensity={0.25}
          />
        </Torus>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={1.2}
        position={[2.2, -1.5, 0.8]}
      >
        <Octahedron args={[0.35, 0]}>
          <meshStandardMaterial
            color="#fb923c"
            metalness={0.8}
            roughness={0.1}
            emissive="#ea580c"
            emissiveIntensity={0.3}
          />
        </Octahedron>
      </Float>

      <Float
        speed={2.2}
        rotationIntensity={0.6}
        floatIntensity={1.4}
        position={[-2.4, 1.4, 0.6]}
      >
        <Icosahedron args={[0.3, 1]}>
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.7}
            roughness={0.2}
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#a78bfa" />
      <pointLight position={[5, -3, 2]} intensity={0.6} color="#14b8a6" />
      <pointLight position={[0, 4, -3]} intensity={0.5} color="#fb7185" />

      <FloatingBlob />
      <OrbitingShapes />

      <Stars
        radius={50}
        depth={50}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={0.6}
      />

      <Environment preset="city" />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
