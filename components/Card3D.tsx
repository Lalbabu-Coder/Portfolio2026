"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  tiltAngle?: number;
  translateDepth?: number;
}

export default function Card3D({
  children,
  className = "",
  tiltAngle = 10,
  translateDepth = 30,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [tiltAngle, -tiltAngle]);
  const rotateY = useTransform(x, [0, 1], [-tiltAngle, tiltAngle]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={className}
      >
        <div
          style={{
            transform: `translateZ(${translateDepth}px)`,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
