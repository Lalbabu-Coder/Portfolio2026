"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SpaceEnvironment({ activeSection = "hero" }: { activeSection?: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const nebulaRef = useRef<THREE.Points>(null);

  // 1. Generate primary cosmic starfield
  const { positions, colors, count } = useMemo(() => {
    const starCount = 1200;
    const pos = new Float32Array(starCount * 3);
    const col = new Float32Array(starCount * 3);

    const colorA = new THREE.Color("#38bdf8"); // Cyan
    const colorB = new THREE.Color("#f97316"); // Orange
    const colorC = new THREE.Color("#a855f7"); // Violet
    const colorD = new THREE.Color("#ffffff"); // White

    for (let i = 0; i < starCount; i++) {
      const radius = 15 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const dice = Math.random();
      let chosenColor = colorD;
      if (dice < 0.3) chosenColor = colorA;
      else if (dice < 0.55) chosenColor = colorB;
      else if (dice < 0.8) chosenColor = colorC;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return { positions: pos, colors: col, count: starCount };
  }, []);

  // 2. Generate floating ethereal dust nebula
  const { nebulaPositions, nebulaColors, nebulaCount } = useMemo(() => {
    const count = 400;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color("#06b6d4");
    const purple = new THREE.Color("#8b5cf6");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const mixed = Math.random() > 0.5 ? cyan : purple;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return { nebulaPositions: pos, nebulaColors: col, nebulaCount: count };
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.008;
    }
    if (nebulaRef.current) {
      nebulaRef.current.rotation.y -= delta * 0.015;
      nebulaRef.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group>
      {/* Primary Stars */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Nebula Dust */}
      <points ref={nebulaRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nebulaPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[nebulaColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.25}
          vertexColors
          transparent
          opacity={0.4}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Atmospheric Fog & Ambient Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[-10, -5, -5]} intensity={1.5} color="#f97316" />
      <pointLight position={[0, 10, -10]} intensity={1.0} color="#a855f7" />
    </group>
  );
}
