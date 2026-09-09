"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Float, Line } from "@react-three/drei";
import * as THREE from "three";

interface ArchNode {
  title: string;
  subtitle: string;
  pos: [number, number, number];
  color: string;
  icon: string;
  details: string;
}

const archNodes: ArchNode[] = [
  {
    title: "CLIENT LAYER",
    subtitle: "React 19 & Next.js 15",
    pos: [-4.2, 0, 0],
    color: "#06b6d4",
    icon: "💻",
    details: "Server Components, Client Hooks, Tailwind CSS UI, and WebSocket streams.",
  },
  {
    title: "API GATEWAY",
    subtitle: "Reverse Proxy & Rate Limit",
    pos: [-2.1, 0.8, 0],
    color: "#38bdf8",
    icon: "🛡️",
    details: "CORS handling, request throttling, SSL termination, and routing.",
  },
  {
    title: "AUTH & RBAC",
    subtitle: "JWT & Permission Trees",
    pos: [0, -0.8, 0],
    color: "#f59e0b",
    icon: "🔐",
    details: "Stateless JSON Web Tokens, bcrypt hashing, and multi-tier role verification.",
  },
  {
    title: "APP SERVICES",
    subtitle: "Express / Node & AI Swarms",
    pos: [2.1, 0.8, 0],
    color: "#f97316",
    icon: "⚡",
    details: "LangGraph autonomous agents, REST controller endpoints, and business logic.",
  },
  {
    title: "DATA & VECTOR DB",
    subtitle: "MongoDB Atlas & Qdrant",
    pos: [4.2, 0, 0],
    color: "#10b981",
    icon: "🗄️",
    details: "Document store, aggregation pipelines, and high-dimensional semantic vectors.",
  },
];

export default function Architecture3DVisualizer() {
  const groupRef = useRef<THREE.Group>(null);
  const packetRef = useRef<THREE.Mesh>(null);
  const [activeNode, setActiveNode] = useState<ArchNode | null>(null);

  useFrame((state) => {
    // Animate data packet along the pipeline x-axis (-4.2 to +4.2)
    if (packetRef.current) {
      const cycle = (state.clock.elapsedTime * 0.8) % 1;
      const x = -4.2 + cycle * 8.4;
      const y = Math.sin(cycle * Math.PI * 2) * 0.8;
      packetRef.current.position.set(x, y, 0);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. PIPELINE CONDUIT LINES */}
      {archNodes.slice(0, -1).map((node, i) => {
        const nextNode = archNodes[i + 1];
        return (
          <Line
            key={`arch-line-${i}`}
            points={[node.pos, nextNode.pos]}
            color="#38bdf8"
            lineWidth={2}
            transparent
            opacity={0.4}
            dashed
            dashScale={2}
          />
        );
      })}

      {/* 2. TRAVELING GLOWING DATA PACKET */}
      <mesh ref={packetRef}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color="#f97316" />
      </mesh>
      <pointLight position={[0, 0, 1]} color="#f97316" intensity={2} distance={3} />

      {/* 3. INTERACTIVE 3D NODES */}
      {archNodes.map((node, i) => (
        <ArchNodeItem
          key={node.title}
          node={node}
          isActive={activeNode?.title === node.title}
          onClick={() => setActiveNode(activeNode?.title === node.title ? null : node)}
        />
      ))}
    </group>
  );
}

function ArchNodeItem({
  node,
  isActive,
  onClick,
}: {
  node: ArchNode;
  isActive: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <group position={node.pos}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={hovered || isActive ? 2.2 : 0.9}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        <mesh scale={0.22}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={node.color} />
        </mesh>
      </Float>

      {/* 3D Label & Details Overlay */}
      <Html distanceFactor={11} position={[0, -0.65, 0]} center>
        <div
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-cursor="3d"
          className="select-none cursor-pointer transition-all duration-300 text-center"
          style={{
            transform: hovered || isActive ? "scale(1.08)" : "scale(1)",
          }}
        >
          <div
            className="px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono font-bold tracking-wide backdrop-blur-xl border transition-all whitespace-nowrap shadow-xl"
            style={{
              backgroundColor: hovered || isActive ? "rgba(2, 6, 23, 0.95)" : "rgba(15, 23, 42, 0.8)",
              borderColor: hovered || isActive ? node.color : "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              boxShadow: hovered || isActive ? `0 0 25px ${node.color}66` : "none",
            }}
          >
            <div className="flex items-center justify-center gap-1.5">
              <span>{node.icon}</span>
              <span>{node.title}</span>
            </div>
            <div className="text-[9px] text-slate-400 font-sans font-normal mt-0.5">
              {node.subtitle}
            </div>
          </div>

          {(hovered || isActive) && (
            <div className="mt-2 w-52 p-2.5 rounded-xl bg-slate-950/95 border border-white/20 text-left shadow-2xl backdrop-blur-2xl mx-auto">
              <p className="text-[10px] text-slate-300 font-sans leading-relaxed">
                {node.details}
              </p>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}
