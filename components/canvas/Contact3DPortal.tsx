"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Contact3DPortal({ onPortalClick }: { onPortalClick?: () => void }) {
  const portalRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const orbRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * (hovered ? 0.8 : 0.3);
    if (ring2Ref.current) ring2Ref.current.rotation.x -= delta * (hovered ? 0.6 : 0.25);
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * (hovered ? 0.9 : 0.35);

    if (orbRef.current) {
      const targetScale = hovered ? 1.3 : 1.0;
      orbRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group ref={portalRef} position={[0, -0.2, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Core Luminous Singularity */}
        <mesh
          ref={orbRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            onPortalClick?.();
          }}
        >
          <sphereGeometry args={[0.9, 32, 32]} />
          <MeshDistortMaterial
            color="#f97316"
            emissive="#ea580c"
            emissiveIntensity={hovered ? 2.5 : 1.4}
            distort={hovered ? 0.45 : 0.25}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Outer Plasma Aura */}
        <mesh scale={1.35}>
          <sphereGeometry args={[0.9, 24, 24]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={hovered ? 0.35 : 0.18}
            wireframe
          />
        </mesh>

        {/* Ring 1 - Cyan */}
        <mesh ref={ring1Ref} scale={2.2}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Ring 2 - Orange */}
        <mesh ref={ring2Ref} scale={2.6} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Ring 3 - Violet */}
        <mesh ref={ring3Ref} scale={3.0} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={1.2}
          />
        </mesh>
      </Float>
    </group>
  );
}
