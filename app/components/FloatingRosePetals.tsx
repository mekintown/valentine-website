"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FloatingRosePetals = () => {
  const [petalPositions, setPetalPositions] = useState<
    Array<{
      left: number;
      delay: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    setPetalPositions(
      Array.from({ length: 12 }, (_, i) => ({
        left: Math.random() * 90 + 5,
        delay: i * 0.8 + Math.random() * 0.5,
        size: 20 + (i % 4) * 4,
      })),
    );
  }, []);

  if (petalPositions.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petalPositions.map((position, i) => (
        <motion.span
          key={`petal-${i}`}
          className="absolute text-rose-300"
          style={{
            left: `${position.left}%`,
            top: "-5vh",
            fontSize: `${position.size}px`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [0, 300, 600, 1000],
            x: [
              0,
              Math.sin(i) * 30,
              Math.sin(i * 2) * 50,
              Math.sin(i * 3) * 70,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            delay: position.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
        >
          🌹
        </motion.span>
      ))}
    </div>
  );
};
