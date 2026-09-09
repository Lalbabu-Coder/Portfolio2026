"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const badges = [
  { text: "MERN", color: "#f97316", radius: 3.4, angle: 0, speed: 0.25, icon: "⚡" },
  { text: "AI AGENTS", color: "#8b5cf6", radius: 3.8, angle: (Math.PI / 3) * 1, speed: 0.22, icon: "🧠" },
  { text: "REST APIs", color: "#06b6d4", radius: 3.5, angle: (Math.PI / 3) * 2, speed: 0.28, icon: "🌐" },
  { text: "MICROSERVICES", color: "#10b981", radius: 4.1, angle: (Math.PI / 3) * 3, speed: 0.2, icon: "📦" },
  { text: "AWS & CLOUD", color: "#eab308", radius: 3.6, angle: (Math.PI / 3) * 4, speed: 0.24, icon: "☁️" },
  { text: "DOCKER", color: "#38bdf8", radius: 3.9, angle: (Math.PI / 3) * 5, speed: 0.26, icon: "🐳" },
];

export default function Hero3DWorkspace() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  const { mouse } = useThree();
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  useFrame((state, delta) => {
    // Subtle mouse parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        mouse.x * 0.45 + state.clock.elapsedTime * 0.05,
        4,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -mouse.y * 0.3,
        4,
        delta
      );
    }

    // Core pulsing rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.25;
    }

    // Orbital ring counter-rotations
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.15;
      outerRingRef.current.rotation.x += delta * 0.08;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.2;
      innerRingRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[2.8, 0, 0]}>
      {/* 1. CENTRAL QUANTUM DEVELOPER CORE */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        {/* Holographic Glowing Icosahedron */}
        <mesh ref={coreRef} scale={1.2}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#f97316"
            emissive="#ea580c"
            emissiveIntensity={0.7}
            roughness={0.15}
            metalness={0.9}
            distort={0.35}
            speed={2.5}
            wireframe
          />
        </mesh>

        {/* Inner Solid Luminous Singularity */}
        <mesh scale={0.65}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        {/* Outer Gyroscope Rings */}
        <mesh ref={outerRingRef} scale={2.6}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>

        <mesh ref={innerRingRef} scale={2.2} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>
      </Float>

      {/* 2. ORBITING 3D FLOATING TECH BADGES */}
      {badges.map((b, i) => (
        <OrbitingBadge
          key={b.text}
          badge={b}
          index={i}
          isHovered={hoveredBadge === b.text}
          onHover={() => setHoveredBadge(b.text)}
          onLeave={() => setHoveredBadge(null)}
        />
      ))}
    </group>
  );
}

function OrbitingBadge({
  badge,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  badge: (typeof badges)[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * badge.speed + badge.angle;
    const x = Math.cos(t) * badge.radius;
    const z = Math.sin(t) * (badge.radius * 0.7);
    const y = Math.sin(t * 1.5) * 0.8;

    meshRef.current.position.set(x, y, z);
  });

  return (
    <group ref={meshRef}>
      <Html center distanceFactor={10}>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          data-cursor="3d"
          className="group relative cursor-pointer select-none transition-all duration-300"
          style={{
            transform: isHovered ? "scale(1.15)" : "scale(1)",
          }}
        >
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase backdrop-blur-xl border transition-all duration-300 whitespace-nowrap shadow-lg"
            style={{
              backgroundColor: isHovered ? "rgba(10, 15, 30, 0.95)" : "rgba(15, 23, 42, 0.8)",
              borderColor: isHovered ? badge.color : "rgba(255, 255, 255, 0.15)",
              color: isHovered ? "#ffffff" : "#e2e8f0",
              boxShadow: isHovered ? `0 0 25px ${badge.color}66` : "0 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            <span>{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        </div>
      </Html>
    </group>
  );
}
