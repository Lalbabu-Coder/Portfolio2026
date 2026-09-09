"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollCameraController({
  hasEntered,
  activeSection = "hero",
}: {
  hasEntered: boolean;
  activeSection?: string;
}) {
  const { camera } = useThree();
  const targetCameraPos = useRef(new THREE.Vector3(0, 0, 8));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Welcome Screen positioning vs Entered
    if (!hasEntered) {
      targetCameraPos.current.set(0, 0, 11);
      targetLookAt.current.set(0, 0, 0);
      return;
    }

    // Camera positions defined per section along the 3D space path
    const sectionsConfig = [
      { id: "hero", cam: [0, 0, 7.5], look: [0.8, 0, 0] },
      { id: "about", cam: [-2.5, 0.5, 6.8], look: [-0.5, 0, 0] },
      { id: "experience", cam: [2.8, -0.4, 7.2], look: [0, 0, 0] },
      { id: "skills", cam: [0, 0.8, 8.5], look: [0, 0.2, 0] },
      { id: "projects", cam: [-1.5, -0.6, 7.0], look: [0, 0, 0] },
      { id: "architecture", cam: [0, 0.2, 7.8], look: [0, 0, 0] },
      { id: "education", cam: [1.8, 0.4, 6.9], look: [0, 0, 0] },
      { id: "contact", cam: [0, -0.2, 6.2], look: [0, -0.2, 0] },
    ];

    const triggers: ScrollTrigger[] = [];

    sectionsConfig.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          targetCameraPos.current.set(sec.cam[0], sec.cam[1], sec.cam[2]);
          targetLookAt.current.set(sec.look[0], sec.look[1], sec.look[2]);
        },
        onEnterBack: () => {
          targetCameraPos.current.set(sec.cam[0], sec.cam[1], sec.cam[2]);
          targetLookAt.current.set(sec.look[0], sec.look[1], sec.look[2]);
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [hasEntered]);

  useFrame((state, delta) => {
    // Smooth damp camera position
    camera.position.lerp(targetCameraPos.current, 0.045);

    // Smooth damp lookAt target
    currentLookAt.current.lerp(targetLookAt.current, 0.045);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
