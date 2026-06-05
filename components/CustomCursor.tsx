"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Dynamic hover listeners for interactive elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const addHoverEvents = () => {
      const targets = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button'], .group, iframe"
      );
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Keep dynamic elements updated
    const observer = new MutationObserver(() => {
      addHoverEvents();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Trailing Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-blue-500/50 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered
            ? "rgba(59, 130, 246, 0.15)"
            : "rgba(59, 130, 246, 0)",
          borderColor: isHovered
            ? "rgba(34, 211, 238, 0.8)"
            : "rgba(59, 130, 246, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      {/* Snappy Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_rgba(34,211,238,1)]"
        animate={{
          scale: isHovered ? 0.4 : 1,
        }}
      />
    </>
  );
}
