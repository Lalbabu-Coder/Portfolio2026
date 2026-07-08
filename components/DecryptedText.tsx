"use client";

import { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number; // Speed of decryption tick in ms
  className?: string;
  triggerOnLoad?: boolean;
}

const symbols = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!@#$%&*?/";

export default function DecryptedText({
  text,
  speed = 30,
  className = "",
  triggerOnLoad = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggeredRef = useRef(false);

  const startDecryption = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    let iterations = 0;
    const originalText = text;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            
            // Decrypt character if iteration exceeds index
            if (index < iterations) {
              return originalText[index];
            }
            
            // Otherwise, show a random symbol
            return symbols[Math.floor(Math.random() * symbols.length)];
          })
          .join("");
      });

      if (iterations >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iterations += 1 / 2; // Decrypts 1 character every 2 ticks
    }, speed);
  };

  useEffect(() => {
    if (triggerOnLoad && !hasTriggeredRef.current) {
      startDecryption();
      hasTriggeredRef.current = true;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    startDecryption();
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} inline-block font-mono tracking-wide`}
    >
      {displayText}
    </span>
  );
}
