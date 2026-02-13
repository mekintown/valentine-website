"use client";

import { motion } from "framer-motion";
import type { TimeLeft } from "../utils/types";

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

export const CountdownTimer = ({ timeLeft }: CountdownTimerProps) => (
  <motion.div
    className="mt-4 rounded-2xl bg-white/60 px-4 py-4 sm:px-6 sm:py-6 shadow-lg backdrop-blur-sm mx-4"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.p
      className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-rose-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Counting down until our date 💕
    </motion.p>
    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap">
      {timeLeft.days > 0 && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <motion.span
            className="text-2xl font-bold text-rose-600 sm:text-3xl"
            key={timeLeft.days}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {timeLeft.days}
          </motion.span>
          <span className="text-xs text-rose-400">
            day{timeLeft.days !== 1 ? "s" : ""}
          </span>
        </motion.div>
      )}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
      >
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-600"
          key={timeLeft.hours}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(timeLeft.hours).padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-rose-400">hours</span>
      </motion.div>
      <span className="text-xl sm:text-2xl text-rose-300 self-center">:</span>
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-600"
          key={timeLeft.minutes}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(timeLeft.minutes).padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-rose-400">min</span>
      </motion.div>
      <span className="text-xl sm:text-2xl text-rose-300 self-center">:</span>
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.6 }}
      >
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-600"
          key={timeLeft.seconds}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(timeLeft.seconds).padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-rose-400">sec</span>
      </motion.div>
    </div>
    <motion.p
      className="mt-3 sm:mt-4 text-xs sm:text-sm text-rose-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      See you at 5:30 PM! 🕕
    </motion.p>
  </motion.div>
);
