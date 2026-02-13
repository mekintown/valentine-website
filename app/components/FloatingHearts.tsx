"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FloatingHearts = () => {
  const [heartPositions, setHeartPositions] = useState<
    Array<{
      left: number;
      top: number;
      delay: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    setHeartPositions(
      Array.from({ length: 12 }, (_, i) => ({
        left: Math.random() * 90 + 5,
        top: Math.random() * 80 + 10,
        delay: i * 0.4 + Math.random() * 0.3,
        size: 20 + Math.random() * 16,
      })),
    );
  }, []);

  if (heartPositions.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {heartPositions.map((position, i) => (
        <motion.span
          key={i}
          className="absolute opacity-20 text-rose-300"
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
            fontSize: `${position.size}px`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.2, 0.2, 0],
            y: [0, -20, -40, -60],
            x: [
              0,
              Math.sin(i) * 10,
              Math.sin(i * 2) * 15,
              Math.sin(i * 3) * 20,
            ],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: position.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
};
