"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Float, Line } from "@react-three/drei";
import * as THREE from "three";

export interface SkillNodeData {
  id: string;
  name: string;
  category: "ai" | "frontend" | "backend" | "devops";
  color: string;
  level: number;
  description: string;
  pos: [number, number, number];
}

export const skillNodesData: SkillNodeData[] = [
  // AI & Autonomous Agents (Cluster: Left-Top)
  { id: "langgraph", name: "LangGraph", category: "ai", color: "#f97316", level: 95, description: "Multi-agent coordination & state graphs", pos: [-3.2, 1.8, 0.5] },
  { id: "ai-agents", name: "AI Agents", category: "ai", color: "#fb923c", level: 96, description: "Autonomous swarms & tool execution loops", pos: [-2.0, 2.5, -0.8] },
  { id: "groq-gemini", name: "Groq & Gemini", category: "ai", color: "#a855f7", level: 94, description: "Llama 3.3 70B & Gemini 2.5 Flash", pos: [-3.8, 0.6, -0.4] },
  { id: "rag-qdrant", name: "RAG & Qdrant", category: "ai", color: "#06b6d4", level: 92, description: "Vector embeddings & semantic retrieval", pos: [-1.8, 1.2, 1.0] },
  { id: "langchain-py", name: "LangChain & Python", category: "ai", color: "#38bdf8", level: 90, description: "Agentic context chains & tool calling", pos: [-2.9, 0.0, 1.5] },

  // Frontend & UI (Cluster: Right-Top)
  { id: "react", name: "React.js", category: "frontend", color: "#06b6d4", level: 96, description: "Component architecture & Virtual DOM", pos: [2.5, 2.2, -0.5] },
  { id: "nextjs", name: "Next.js 15", category: "frontend", color: "#ffffff", level: 95, description: "SSR, App Router & Server Actions", pos: [3.8, 1.6, 0.2] },
  { id: "ts-js", name: "TypeScript / ES6+", category: "frontend", color: "#38bdf8", level: 98, description: "Type safety, async workflows & closures", pos: [1.8, 1.2, 1.2] },
  { id: "redux", name: "Redux Toolkit", category: "frontend", color: "#a855f7", level: 90, description: "Global state management & RTK Query", pos: [3.2, 0.4, 1.6] },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", color: "#38bdf8", level: 96, description: "Responsive layouts & custom animations", pos: [4.2, 0.2, -0.8] },

  // Backend & APIs (Cluster: Left-Bottom)
  { id: "nodejs", name: "Node.js", category: "backend", color: "#22c55e", level: 95, description: "High-throughput asynchronous event loops", pos: [-2.8, -1.5, 0.4] },
  { id: "express", name: "Express.js", category: "backend", color: "#94a3b8", level: 94, description: "RESTful architecture & custom middleware", pos: [-1.6, -1.0, 1.2] },
  { id: "jwt-rbac", name: "JWT & RBAC", category: "backend", color: "#f59e0b", level: 94, description: "Role-Based Access Control & security", pos: [-3.8, -1.2, -0.6] },
  { id: "microservices", name: "Microservices", category: "backend", color: "#ec4899", level: 92, description: "Decoupled services & API gateways", pos: [-1.9, -2.4, -0.5] },
  { id: "rest-apis", name: "REST APIs", category: "backend", color: "#06b6d4", level: 96, description: "High-performance endpoint engineering", pos: [-3.2, -2.5, 0.8] },

  // Database & DevOps (Cluster: Right-Bottom)
  { id: "mongodb", name: "MongoDB & Mongoose", category: "devops", color: "#10b981", level: 92, description: "Schema design & aggregation pipelines", pos: [2.2, -1.2, 0.8] },
  { id: "redis", name: "Redis Caching", category: "devops", color: "#ef4444", level: 90, description: "In-memory caching & session stores", pos: [3.4, -0.9, -0.5] },
  { id: "docker", name: "Docker", category: "devops", color: "#38bdf8", level: 90, description: "Containerization & multi-stage builds", pos: [3.0, -2.2, 0.3] },
  { id: "aws-azure", name: "AWS & Azure", category: "devops", color: "#f59e0b", level: 88, description: "Cloud EC2, S3, Vercel & micro-deployments", pos: [4.1, -1.8, -0.6] },
  { id: "dsa-system", name: "DSA & System Design", category: "devops", color: "#8b5cf6", level: 92, description: "Algorithms, OOP principles & scalability", pos: [1.8, -2.5, -0.8] },
];

// Pre-defined connectivity graph between related technologies
const connections: [string, string][] = [
  ["langgraph", "ai-agents"],
  ["ai-agents", "groq-gemini"],
  ["ai-agents", "rag-qdrant"],
  ["rag-qdrant", "langchain-py"],
  ["rag-qdrant", "mongodb"],
  ["react", "nextjs"],
  ["react", "ts-js"],
  ["react", "redux"],
  ["react", "tailwind"],
  ["nextjs", "nodejs"],
  ["nodejs", "express"],
  ["express", "jwt-rbac"],
  ["express", "microservices"],
  ["express", "rest-apis"],
  ["rest-apis", "react"],
  ["mongodb", "nodejs"],
  ["mongodb", "redis"],
  ["docker", "microservices"],
  ["docker", "aws-azure"],
  ["dsa-system", "microservices"],
];

interface Skills3DUniverseProps {
  selectedCategory?: string;
  onSelectNode?: (node: SkillNodeData) => void;
}

export default function Skills3DUniverse({ selectedCategory = "all", onSelectNode }: Skills3DUniverseProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const nodeMap = useMemo(() => {
    const map = new Map<string, SkillNodeData>();
    skillNodesData.forEach((n) => map.set(n.id, n));
    return map;
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. CONNECTING ENERGY LINES */}
      {connections.map(([fromId, toId], idx) => {
        const fromNode = nodeMap.get(fromId);
        const toNode = nodeMap.get(toId);
        if (!fromNode || !toNode) return null;

        const isHighlighted =
          hoveredNodeId === fromId || hoveredNodeId === toId;

        const isFilteredOut =
          selectedCategory !== "all" &&
          fromNode.category !== selectedCategory &&
          toNode.category !== selectedCategory;

        if (isFilteredOut) return null;

        return (
          <Line
            key={`conn-${idx}`}
            points={[fromNode.pos, toNode.pos]}
            color={isHighlighted ? "#f97316" : "#38bdf8"}
            lineWidth={isHighlighted ? 2.5 : 0.8}
            transparent
            opacity={isHighlighted ? 0.9 : 0.25}
          />
        );
      })}

      {/* 2. 3D SKILL NODES */}
      {skillNodesData.map((node) => {
        const isHovered = hoveredNodeId === node.id;
        const isMatchedCategory =
          selectedCategory === "all" || node.category === selectedCategory;

        return (
          <SkillNode
            key={node.id}
            node={node}
            isHovered={isHovered}
            isDimmed={!isMatchedCategory}
            onHover={() => setHoveredNodeId(node.id)}
            onLeave={() => setHoveredNodeId(null)}
            onClick={() => onSelectNode?.(node)}
          />
        );
      })}
    </group>
  );
}

function SkillNode({
  node,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
  onClick,
}: {
  node: SkillNodeData;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const scale = isHovered ? 1.5 : isDimmed ? 0.6 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  return (
    <group position={node.pos}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover();
        }}
        onPointerOut={() => onLeave()}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isHovered ? 2.0 : isDimmed ? 0.2 : 0.8}
          roughness={0.2}
          metalness={0.8}
          wireframe={isDimmed}
        />
      </mesh>

      {/* Outer Glow Halo on Hover */}
      {isHovered && (
        <mesh scale={1.8}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      )}

      {/* Floating 3D Label & Info HUD */}
      <Html distanceFactor={12} position={[0, 0.4, 0]} center>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          onClick={onClick}
          data-cursor="3d"
          className="select-none cursor-pointer transition-all duration-300"
          style={{
            opacity: isDimmed ? 0.35 : 1,
            transform: isHovered ? "scale(1.2)" : "scale(1)",
          }}
        >
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wide backdrop-blur-xl border transition-all whitespace-nowrap shadow-xl"
            style={{
              backgroundColor: isHovered ? "rgba(2, 6, 23, 0.95)" : "rgba(15, 23, 42, 0.75)",
              borderColor: isHovered ? node.color : "rgba(255, 255, 255, 0.15)",
              color: isHovered ? "#ffffff" : "#cbd5e1",
              boxShadow: isHovered ? `0 0 20px ${node.color}88` : "none",
            }}
          >
            <span>{node.name}</span>
            {isHovered && (
              <span
                className="px-1.5 py-0.2 rounded text-[9px] font-bold"
                style={{ backgroundColor: `${node.color}33`, color: node.color }}
              >
                {node.level}%
              </span>
            )}
          </div>

          {isHovered && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 p-2 rounded-xl bg-slate-950/95 border border-white/20 text-center shadow-2xl backdrop-blur-2xl">
              <p className="text-[10px] text-slate-300 font-sans leading-tight">
                {node.description}
              </p>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}
