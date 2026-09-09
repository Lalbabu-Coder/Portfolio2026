"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import SpaceEnvironment from "./SpaceEnvironment";
import Contact3DPortal from "./Contact3DPortal";
import ScrollCameraController from "./ScrollCameraController";

interface SceneContainerProps {
  hasEntered: boolean;
  activeSection?: string;
  selectedSkillCategory?: string;
  onPortalClick?: () => void;
}

export default function SceneContainer({
  hasEntered,
  activeSection = "hero",
  selectedSkillCategory = "all",
  onPortalClick,
}: SceneContainerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: isMobile ? 55 : 45 }}
        dpr={[1, isMobile ? 1.25 : 1.75]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ pointerEvents: "auto" }}
      >
        <Suspense fallback={null}>
          {/* 1. Universal Cosmic Environment */}
          <SpaceEnvironment activeSection={activeSection} />

          {/* 2. Scroll-Synchronized Camera Controller */}
          <ScrollCameraController
            hasEntered={hasEntered}
            activeSection={activeSection}
          />

          {/* 3. Subtle Contact Portal (Mesh only, no HTML overlays) */}
          {activeSection === "contact" && (
            <group position={[0, -0.2, 0]}>
              <Contact3DPortal onPortalClick={onPortalClick} />
            </group>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
