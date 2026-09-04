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
  { name: "MERN Stack", color: "text-orange-400 border-orange-400/40 bg-orange-950/40 font-bold" },
  { name: "LangGraph", color: "text-purple-300 border-purple-400/40 bg-purple-950/40 font-bold" },
  { name: "Groq Llama", color: "text-amber-300 border-amber-400/40 bg-amber-950/30" },
  { name: "Gemini API", color: "text-cyan-300 border-cyan-400/40 bg-cyan-950/30" },
  { name: "Qdrant Vector DB", color: "text-rose-300 border-rose-400/40 bg-rose-950/30" },
  { name: "React.js", color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20 font-bold" },
  { name: "Next.js", color: "text-white border-white/20 bg-white/5" },
  { name: "Node.js", color: "text-green-400 border-green-500/30 bg-green-950/20 font-bold" },
  { name: "Express.js", color: "text-slate-300 border-slate-500/30 bg-slate-900/20" },
  { name: "MongoDB", color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20 font-bold" },
  { name: "JavaScript", color: "text-yellow-400 border-yellow-500/30 bg-yellow-950/20" },
  { name: "TypeScript", color: "text-blue-400 border-blue-500/30 bg-blue-950/20" },
  { name: "Python", color: "text-sky-400 border-sky-500/30 bg-sky-950/20" },
  { name: "AWS (EC2/S3)", color: "text-amber-400 border-amber-500/30 bg-amber-950/20" },
  { name: "Azure", color: "text-blue-500 border-blue-500/30 bg-blue-950/20" },
  { name: "Docker", color: "text-blue-400 border-blue-500/30 bg-blue-950/20" },
  { name: "REST APIs", color: "text-teal-400 border-teal-500/30 bg-teal-950/20" },
  { name: "JWT & RBAC", color: "text-pink-400 border-pink-500/30 bg-pink-950/20" },
  { name: "Microservices", color: "text-violet-400 border-violet-500/30 bg-violet-950/20" },
  { name: "Redux", color: "text-purple-400 border-purple-500/30 bg-purple-950/20" },
  { name: "Tailwind CSS", color: "text-sky-400 border-sky-500/30 bg-sky-950/20" },
  { name: "Git & CI/CD", color: "text-orange-400 border-orange-500/30 bg-orange-950/20" },
  { name: "DSA & SDLC", color: "text-emerald-300 border-emerald-400/40 bg-emerald-950/30" },
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
    const width = rect.width || 340;
    // Scale sphere radius dynamically to prevent screen overflow on mobile (width <= 480px)
    const isMobile = width < 480;
    const radius = isMobile ? Math.min(width * 0.3, 115) : Math.min(width * 0.36, 160);
    const cameraDistance = radius * 1.5;

    // Fibonacci Sphere distribution
    const numTags = skillsList.length;
    const initialTags: Tag[] = skillsList.map((skill, i) => {
      const k = -1 + (2 * i + 1) / numTags;
      const theta = Math.acos(k);
      const phi = Math.sqrt(numTags * Math.PI) * theta;

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
      if (!isDraggingRef.current) {
        speedXRef.current *= 0.95;
        speedYRef.current *= 0.95;

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
        let x1 = tag.x * cosY - tag.z * sinY;
        let z1 = tag.x * sinY + tag.z * cosY;

        let y2 = tag.y * cosX - z1 * sinX;
        let z2 = tag.y * sinX + z1 * cosX;

        const scale = cameraDistance / (cameraDistance + z2);
        const x2d = x1 * scale;
        const y2d = y2 * scale;

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

    // Mouse & Touch movement listeners
    const handleMove = (clientX: number, clientY: number) => {
      if (isDraggingRef.current) {
        const deltaX = clientX - startMouseXRef.current;
        const deltaY = clientY - startMouseYRef.current;
        speedYRef.current = deltaX * 0.00015;
        speedXRef.current = -deltaY * 0.00015;
        startMouseXRef.current = clientX;
        startMouseYRef.current = clientY;
      } else {
        const bounds = container.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const relativeX = clientX - centerX;
        const relativeY = clientY - centerY;

        if (
          clientX >= bounds.left &&
          clientX <= bounds.right &&
          clientY >= bounds.top &&
          clientY <= bounds.bottom
        ) {
          speedYRef.current = relativeX * 0.00001;
          speedXRef.current = -relativeY * 0.00001;
        }
      }
    };

    const handleStart = (clientX: number, clientY: number) => {
      const bounds = container.getBoundingClientRect();
      if (
        clientX >= bounds.left &&
        clientX <= bounds.right &&
        clientY >= bounds.top &&
        clientY <= bounds.bottom
      ) {
        isDraggingRef.current = true;
        startMouseXRef.current = clientX;
        startMouseYRef.current = clientY;
      }
    };

    const handleEnd = () => {
      isDraggingRef.current = false;
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onMouseDown = (e: MouseEvent) => handleStart(e.clientX, e.clientY);
    const onMouseUp = () => handleEnd();

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchEnd = () => handleEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);

      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [hoveredIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-[320px] sm:h-[380px] md:h-[400px] select-none cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Core sphere ambient glow */}
        <div className="w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[40px] pointer-events-none" />
      </div>

      <div className="relative w-0 h-0 overflow-visible">
        {tags.map((tag, idx) => {
          const depthZIndex = Math.round(tag.scale * 100);
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={idx}
              className={`absolute flex items-center justify-center px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md transition-shadow duration-300 ${tag.color}`}
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
              <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
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
