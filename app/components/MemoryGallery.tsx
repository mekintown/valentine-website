"use client";

import { motion } from "framer-motion";
import { HANDWRITTEN_FONT } from "../utils/constants";

export const MemoryGallery = () => {
  const memories = [
    { src: "/memories/memory1.png", alt: "A beautiful moment together" },
    { src: "/memories/memory2.png", alt: "Our special memories" },
    { src: "/memories/memory3.png", alt: "More wonderful times" },
    { src: "/memories/memory4.png", alt: "Another beautiful memory" },
  ];

  return (
    <div className="mt-6 sm:mt-8 w-full max-w-3xl">
      <motion.h3
        className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-rose-600 px-4"
        style={{ fontFamily: HANDWRITTEN_FONT }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Can&apos;t wait to add more photos to our gallery ☺️
      </motion.h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-start px-4">
        {memories.map((memory, i) => (
          <motion.div
            key={i}
            className="group relative flex justify-center w-full"
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: i === 0 ? -2 : i === 1 ? 2 : i === 2 ? -1.5 : 1.5,
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            {/* Polaroid-style frame */}
            <div className="rounded-lg bg-white p-3 shadow-lg w-full">
              <div className="relative overflow-hidden rounded-md w-full">
                <motion.img
                  src={memory.src}
                  alt={memory.alt}
                  className="w-full h-auto object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              {/* Decorative heart */}
              <motion.div
                className="mt-2 flex justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-xl text-rose-300">💕</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
