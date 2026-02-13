"use client";

import { motion } from "framer-motion";
import { BOUNCING_HEARTS, HANDWRITTEN_FONT } from "../utils/constants";
import type { TimeLeft } from "../utils/types";
import { MemoryGallery } from "./MemoryGallery";

interface SuccessViewProps {
  timeLeft: TimeLeft;
}

export const SuccessView = ({ timeLeft: _timeLeft }: SuccessViewProps) => (
  <div className="flex flex-col items-center gap-6 sm:gap-8 text-center pb-6 sm:pb-8 w-full">
    <motion.div
      className="flex gap-1 sm:gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {BOUNCING_HEARTS.map((emoji, i) => (
        <motion.span
          key={i}
          className="text-3xl sm:text-4xl md:text-5xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: i * 0.1,
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {emoji}
        </motion.span>
      ))}
    </motion.div>
    <motion.img
      src="https://media.giphy.com/media/5xJIIRPC23yZG/giphy.gif"
      alt="Minions celebrating"
      className="h-40 w-auto rounded-2xl object-cover shadow-lg sm:h-48 md:h-56"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
    />

    <motion.h2
      className="max-w-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-600 px-4"
      style={{ fontFamily: HANDWRITTEN_FONT }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Yay! See you 🎉
    </motion.h2>

    <motion.p
      className="max-w-md text-base sm:text-lg md:text-xl text-rose-500/90 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Can&apos;t wait to celebrate our first Valentine&apos;s together! 💝
    </motion.p>
    {/* <CountdownTimer timeLeft={timeLeft} /> */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <MemoryGallery />
    </motion.div>
  </div>
);
