"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function DeveloperTechCore() {
  const groupRef = useRef<THREE.Group>(null);
  const outerGeomRef = useRef<THREE.Mesh>(null);
  const innerGeomRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Smooth auto rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (outerGeomRef.current) {
      outerGeomRef.current.rotation.x += delta * 0.35;
      outerGeomRef.current.rotation.z -= delta * 0.2;
    }

    if (innerGeomRef.current) {
      innerGeomRef.current.rotation.y -= delta * 0.4;
      innerGeomRef.current.rotation.x += delta * 0.2;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.25;
      ring2Ref.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Outer Cybernetic Wireframe Icosahedron */}
      <mesh ref={outerGeomRef} scale={1.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#ea580c"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* 2. Inner Quantum Octahedron */}
      <mesh ref={innerGeomRef} scale={1.05}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={1.0}
          roughness={0.15}
          metalness={0.85}
          wireframe
        />
      </mesh>

      {/* 3. Glowing Luminous Core Sphere */}
      <mesh ref={coreRef} scale={0.52}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffedd5"
          emissive="#f97316"
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>

      {/* 4. Sleek Orbital Gyro Rings */}
      <mesh ref={ring1Ref} scale={2.1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>

      <mesh ref={ring2Ref} scale={2.35} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.0}
          wireframe
        />
      </mesh>

      {/* 5. Surrounding Satellite Nodes (Pure 3D geometry, no HTML) */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * 2.2;
        const z = Math.sin(angle) * 2.2;
        const y = Math.sin(i * 1.5) * 0.4;
        return (
          <mesh key={i} position={[x, y, z]} scale={0.065}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#f97316" : "#38bdf8"}
              emissive={i % 2 === 0 ? "#f97316" : "#38bdf8"}
              emissiveIntensity={1.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3DVisualizer() {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] flex items-center justify-center select-none">
      {/* Ambient background glow behind the 3D model */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-orange-500/20 via-cyan-500/15 to-purple-500/20 blur-[70px]" />
      </div>

      {/* Status HUD Header Tag */}
      <div className="absolute top-2 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>3D CORE ACTIVE</span>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, 2]} intensity={1.2} color="#f97316" />
        <pointLight position={[5, -3, 3]} intensity={1.0} color="#06b6d4" />

        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
          <DeveloperTechCore />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.6}
        />
      </Canvas>

      {/* Subtle Bottom Interaction Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 tracking-wider pointer-events-none uppercase">
        <span>✦ Drag to rotate 3D core ✦</span>
      </div>
    </div>
  );
}
