"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Tag {
  text: string;
  x: number;
  y: number;
  z: number;
  x2d: number;
  y2d: number;
  scale: number;
  opacity: number;
  color: string;
}

const skillsList = [
  { name: "React", color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20" },
  { name: "Next.js", color: "text-white border-white/20 bg-white/5" },
  { name: "Redux", color: "text-purple-400 border-purple-500/30 bg-purple-950/20" },
  { name: "Tailwind", color: "text-sky-400 border-sky-500/30 bg-sky-950/20" },
  { name: "JavaScript", color: "text-yellow-400 border-yellow-500/30 bg-yellow-950/20" },
  { name: "Python", color: "text-blue-400 border-blue-500/30 bg-blue-950/20" },
  { name: "Node.js", color: "text-green-400 border-green-500/30 bg-green-950/20" },
  { name: "Express", color: "text-slate-300 border-slate-500/30 bg-slate-900/20" },
  { name: "MongoDB", color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20" },
  { name: "Docker", color: "text-blue-500 border-blue-500/30 bg-blue-950/20" },
  { name: "Git", color: "text-orange-400 border-orange-500/30 bg-orange-950/20" },
  { name: "GitHub", color: "text-slate-200 border-slate-500/30 bg-slate-800/20" },
  { name: "Vercel", color: "text-zinc-300 border-zinc-500/30 bg-zinc-950/20" },
  { name: "AWS", color: "text-amber-500 border-amber-500/30 bg-amber-950/20" },
  { name: "REST APIs", color: "text-teal-400 border-teal-500/30 bg-teal-950/20" },
  { name: "JWT", color: "text-pink-400 border-pink-500/30 bg-pink-950/20" },
  { name: "RBAC", color: "text-rose-400 border-rose-500/30 bg-rose-950/20" },
  { name: "HTML5", color: "text-orange-500 border-orange-500/30 bg-orange-950/20" },
  { name: "CSS3", color: "text-sky-500 border-sky-500/30 bg-sky-950/20" },
  { name: "Postman", color: "text-orange-400 border-orange-500/30 bg-orange-950/20" },
  { name: "Microservices", color: "text-violet-400 border-violet-500/30 bg-violet-950/20" },
  { name: "MySQL", color: "text-cyan-500 border-cyan-500/30 bg-cyan-950/20" },
  { name: "Mongoose", color: "text-red-400 border-red-500/30 bg-red-950/20" },
  { name: "CI/CD", color: "text-emerald-500 border-emerald-500/30 bg-emerald-950/20" },
];

export default function Skills3DSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Tracking rotation velocities
  const speedXRef = useRef(0.0006);
  const speedYRef = useRef(0.0006);
  const currentAngleXRef = useRef(0);
  const currentAngleYRef = useRef(0);

  // Mouse drag state
  const isDraggingRef = useRef(false);
  const startMouseXRef = useRef(0);
  const startMouseYRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width || 380;
    const radius = Math.min(width * 0.4, 180); // Sphere radius
    const cameraDistance = radius * 1.5;

    // Fibonacci Sphere distribution
    const numTags = skillsList.length;
    const initialTags: Tag[] = skillsList.map((skill, i) => {
      // theta goes from acos(1) = 0 to acos(-1) = PI
      const k = -1 + (2 * i + 1) / numTags;
      const theta = Math.acos(k);
      // golden ratio spacing
      const phi = Math.sqrt(numTags * Math.PI) * theta;

      // 3D coordinates
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      return {
        text: skill.name,
        color: skill.color,
        x,
        y,
        z,
        x2d: 0,
        y2d: 0,
        scale: 1,
        opacity: 1,
      };
    });

    let localTags = [...initialTags];
    let animationId: number;

    const updateRotation = () => {
      // Apply constant drag rotation deceleration if not dragging
      if (!isDraggingRef.current) {
        speedXRef.current *= 0.95;
        speedYRef.current *= 0.95;

        // Maintain minimum floating rotation
        if (Math.abs(speedXRef.current) < 0.0002) speedXRef.current = (speedXRef.current > 0 ? 1 : -1) * 0.0002;
        if (Math.abs(speedYRef.current) < 0.0002) speedYRef.current = (speedYRef.current > 0 ? 1 : -1) * 0.0002;
      }

      const rx = speedXRef.current;
      const ry = speedYRef.current;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      localTags = localTags.map((tag, idx) => {
        // Rotate around Y-axis
        let x1 = tag.x * cosY - tag.z * sinY;
        let z1 = tag.x * sinY + tag.z * cosY;

        // Rotate around X-axis
        let y2 = tag.y * cosX - z1 * sinX;
        let z2 = tag.y * sinX + z1 * cosX;

        // Calculate 2D perspective projection details
        // Camera distance acts as the offset
        const scale = cameraDistance / (cameraDistance + z2);
        const x2d = x1 * scale;
        const y2d = y2 * scale;

        // Depth shading: closer tags (z < 0) are opaque, farther ones are transparent
        const opacity = Math.min(1.0, Math.max(0.18, 0.6 + (radius - z2) / (2 * radius) * 0.4));

        return {
          ...tag,
          x: x1,
          y: y2,
          z: z2,
          x2d,
          y2d,
          scale,
          opacity: idx === hoveredIndex ? 1.0 : opacity,
        };
      });

      setTags([...localTags]);
      animationId = requestAnimationFrame(updateRotation);
    };

    updateRotation();

    // Mouse movement to influence spin direction
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const deltaX = e.clientX - startMouseXRef.current;
        const deltaY = e.clientY - startMouseYRef.current;
        speedYRef.current = deltaX * 0.0001;
        speedXRef.current = -deltaY * 0.0001;
        startMouseXRef.current = e.clientX;
        startMouseYRef.current = e.clientY;
      } else {
        const bounds = container.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const relativeX = e.clientX - centerX;
        const relativeY = e.clientY - centerY;

        // Hover within boundary speeds up rotation towards mouse angle
        if (
          e.clientX >= bounds.left &&
          e.clientX <= bounds.right &&
          e.clientY >= bounds.top &&
          e.clientY <= bounds.bottom
        ) {
          speedYRef.current = relativeX * 0.00001;
          speedXRef.current = -relativeY * 0.00001;
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const bounds = container.getBoundingClientRect();
      if (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      ) {
        isDraggingRef.current = true;
        startMouseXRef.current = e.clientX;
        startMouseYRef.current = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [hoveredIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-[400px] select-none cursor-grab active:cursor-grabbing overflow-visible"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Core sphere ambient glow */}
        <div className="w-[180px] h-[180px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[40px] pointer-events-none" />
      </div>

      <div className="relative w-0 h-0 overflow-visible">
        {tags.map((tag, idx) => {
          const depthZIndex = Math.round(tag.scale * 100);
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={idx}
              className={`absolute flex items-center justify-center px-4 py-1.5 rounded-full border text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md transition-shadow duration-300 ${tag.color}`}
              style={{
                left: tag.x2d,
                top: tag.y2d,
                transform: `translate(-50%, -50%) scale(${tag.scale})`,
                zIndex: depthZIndex,
                opacity: tag.opacity,
                boxShadow: isHovered
                  ? "0 0 25px rgba(59, 130, 246, 0.45), inset 0 0 10px rgba(59, 130, 246, 0.2)"
                  : "0 0 0px transparent",
                transformOrigin: "center center",
              }}
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsHovering(false);
              }}
              animate={{
                scale: isHovered ? tag.scale * 1.25 : tag.scale,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                {tag.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
