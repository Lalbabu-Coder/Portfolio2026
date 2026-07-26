"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

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
  const [isTouch, setIsTouch] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
    }
  }, []);

  const effectiveTilt = isTouch ? 0 : tiltAngle;
  const effectiveDepth = isTouch ? 0 : translateDepth;

  const rotateX = useTransform(y, [0, 1], [effectiveTilt, -effectiveTilt]);
  const rotateY = useTransform(x, [0, 1], [-effectiveTilt, effectiveTilt]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    if (isTouch) return;
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div style={{ perspective: isTouch ? "none" : 1200 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: isTouch ? "flat" : "preserve-3d",
        }}
        className={className}
      >
        <div
          style={{
            transform: isTouch ? "none" : `translateZ(${effectiveDepth}px)`,
            transformStyle: isTouch ? "flat" : "preserve-3d",
          }}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

