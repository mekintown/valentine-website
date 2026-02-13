"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HANDWRITTEN_FONT } from "../utils/constants";
import {
  getNoButtonPosition,
  getNoButtonText,
  isLastVariant,
} from "../utils/helpers";

interface ProposalViewProps {
  onYesClick: () => void;
  noCount: number;
  onNoHover: () => void;
}

export const ProposalView = ({
  onYesClick,
  noCount,
  onNoHover,
}: ProposalViewProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const basePosition = getNoButtonPosition(noCount);
  const isLast = isLastVariant(noCount);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scale down positions on small screens (iPhone is ~375px)
  const getResponsivePosition = () => {
    if (windowWidth === 0) return basePosition; // SSR fallback

    // On screens smaller than 640px (sm breakpoint), scale down positions more aggressively
    const scale = windowWidth < 640 ? 0.4 : windowWidth < 768 ? 0.6 : 1;

    // Constrain to ensure button stays within bounds
    // Account for button width (~120-160px) and container padding
    // On mobile: container ~375px - padding 32px = 343px usable, button ~120px, so max offset ~100px
    const maxOffsetX = windowWidth < 640 ? 90 : windowWidth < 768 ? 130 : 180;
    const maxOffsetY = windowWidth < 640 ? 60 : windowWidth < 768 ? 80 : 100;

    return {
      x: Math.max(-maxOffsetX, Math.min(maxOffsetX, basePosition.x * scale)),
      y: Math.max(-maxOffsetY, Math.min(maxOffsetY, basePosition.y * scale)),
    };
  };

  const noButtonPosition = getResponsivePosition();

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 text-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <motion.img
          src="https://media.giphy.com/media/ffzhLUixCtlsc/giphy.gif"
          alt="Puss in Boots 🥺"
          className="h-40 w-auto rounded-2xl object-cover shadow-lg sm:h-48 md:h-56"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.span
          className="text-4xl sm:text-5xl md:text-6xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.4,
          }}
        >
          💕
        </motion.span>
        <motion.h1
          className="max-w-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-600 px-4"
          style={{ fontFamily: HANDWRITTEN_FONT }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Will you be my Valentine?
        </motion.h1>
        <motion.p
          className="max-w-md text-base sm:text-lg text-rose-400/90 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I&apos;d love to spend this Valentine&apos;s Day with you. 💕
        </motion.p>
      </motion.div>

      <motion.div
        className="relative flex h-32 sm:h-36 md:h-40 w-full max-w-md items-center justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {!isLast && (
          <motion.button
            onClick={onYesClick}
            className="group relative z-20 overflow-hidden rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-rose-200"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">Yes! 💖</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        )}

        <motion.button
          onClick={isLast ? onYesClick : onNoHover}
          onMouseEnter={!isLast ? onNoHover : undefined}
          className={`absolute z-20 overflow-hidden rounded-full px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 text-base sm:text-lg font-semibold shadow-lg pointer-events-auto border-2 ${
            isLast ? "" : "bg-white/90"
          }`}
          animate={{
            left: isLast ? "50%" : `calc(50% + ${noButtonPosition.x}px)`,
            top: isLast ? "50%" : `calc(50% + ${noButtonPosition.y}px)`,
            scale: isLast ? 1.05 : 1,
            borderColor: isLast ? "transparent" : "rgb(251, 182, 193)",
            color: isLast ? "white" : "rgb(251, 113, 133)",
            boxShadow: isLast
              ? "0 10px 25px rgba(236, 72, 153, 0.3)"
              : "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          whileHover={
            isLast
              ? {
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                }
              : { scale: 1.05, borderColor: "rgb(251, 113, 133)" }
          }
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.6,
          }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLast ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.span
            className="relative z-10"
            animate={{ scale: isLast ? 1.05 : 1 }}
            transition={
              isLast
                ? {
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }
                : {}
            }
          >
            {getNoButtonText(noCount)}
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
};
