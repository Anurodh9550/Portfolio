"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, OrbitControls, Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import { techStack } from "@/lib/data";

const PALETTE = [
  "#14b8a6", // teal
  "#a78bfa", // violet
  "#fb7185", // coral
  "#fb923c", // orange
  "#38bdf8", // sky
  "#34d399", // emerald
  "#f472b6", // pink
  "#facc15", // amber
];

function fibonacciSphere(samples: number, radius: number) {
  const points: [number, number, number][] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

function TechBadge({
  position,
  label,
  color,
}: {
  position: [number, number, number];
  label: string;
  color: string;
}) {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.emissive.lerp(new THREE.Color(color), 0.05);
    }
  });

  return (
    <Billboard position={position} follow>
      <mesh ref={ref}>
        <planeGeometry args={[label.length * 0.18 + 0.4, 0.45]} />
        <meshStandardMaterial
          color="#0a0f1f"
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.85}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      <Text
        fontSize={0.22}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.01]}
        outlineWidth={0.005}
        outlineColor={color}
      >
        {label}
      </Text>
    </Billboard>
  );
}

function Globe() {
  const group = useRef<Group>(null);
  const radius = 2.4;
  const points = useMemo(
    () => fibonacciSphere(techStack.length, radius),
    [radius]
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[radius - 0.05, 32, 32]} />
        <meshBasicMaterial
          color="#14b8a6"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[radius - 0.2, 32, 32]} />
        <meshStandardMaterial
          color="#0a0f1f"
          transparent
          opacity={0.3}
          metalness={0.8}
          roughness={0.2}
          emissive="#1e293b"
          emissiveIntensity={0.4}
        />
      </mesh>

      {techStack.map((tech, i) => (
        <TechBadge
          key={tech}
          position={points[i]}
          label={tech}
          color={PALETTE[i % PALETTE.length]}
        />
      ))}
    </group>
  );
}

function CenterBlob() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial
          color="#a78bfa"
          metalness={0.9}
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function TechGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.7} color="#a78bfa" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#14b8a6" />

        <Globe />
        <CenterBlob />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          rotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}
