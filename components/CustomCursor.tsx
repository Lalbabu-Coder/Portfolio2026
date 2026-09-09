"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[data-cursor='pointer']") ||
        target.getAttribute("role") === "button"
      );
      setIsPointer(isInteractive);

      const isSpecial3D = Boolean(target.closest("[data-cursor='3d']"));
      setIsHovered(isSpecial3D);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Halo Ring */}
      <motion.div
        className="absolute rounded-full border border-cyan-400/60"
        animate={{
          x: mousePosition.x - (isPointer ? 24 : isHovered ? 32 : 16),
          y: mousePosition.y - (isPointer ? 24 : isHovered ? 32 : 16),
          width: isPointer ? 48 : isHovered ? 64 : 32,
          height: isPointer ? 48 : isHovered ? 64 : 32,
          scale: isClicking ? 0.75 : 1,
          borderColor: isHovered
            ? "rgba(249, 115, 22, 0.9)"
            : isPointer
            ? "rgba(6, 182, 212, 0.9)"
            : "rgba(147, 197, 253, 0.4)",
          backgroundColor: isHovered
            ? "rgba(249, 115, 22, 0.12)"
            : isPointer
            ? "rgba(6, 182, 212, 0.1)"
            : "rgba(255, 255, 255, 0.02)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 350,
          mass: 0.4,
        }}
        style={{
          boxShadow: isHovered
            ? "0 0 25px rgba(249, 115, 22, 0.5)"
            : isPointer
            ? "0 0 20px rgba(6, 182, 212, 0.45)"
            : "0 0 10px rgba(6, 182, 212, 0.2)",
        }}
      />

      {/* Inner Glowing Core Dot */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: 6,
          height: 6,
          scale: isClicking ? 1.8 : isPointer ? 1.3 : 1,
          backgroundColor: isHovered
            ? "#f97316"
            : isPointer
            ? "#06b6d4"
            : "#38bdf8",
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 700,
          mass: 0.1,
        }}
        style={{
          boxShadow: "0 0 12px #38bdf8, 0 0 24px #06b6d4",
        }}
      />
    </div>
  );
}
