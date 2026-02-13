"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { HANDWRITTEN_FONT } from "../../utils/constants";

export default function LetterPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      router.push("/story/proposal");
    }, 3000);
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center px-3 sm:px-4 md:px-6 py-4 sm:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              className="relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Envelope Container - Entire envelope is clickable */}
              <motion.div
                className="relative cursor-pointer"
                onClick={handleOpenEnvelope}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileTap={{ scale: 0.99 }}
              >
                {/* Envelope Back */}
                <div className="bg-gradient-to-br from-rose-200/80 to-pink-200/80 rounded-lg shadow-2xl p-4 sm:p-6 md:p-10 relative">
                  {/* Envelope Flap - Animates when envelope is hovered */}
                  <motion.div
                    className="absolute -top-2 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-rose-300 to-pink-300 rounded-t-lg origin-top z-30"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 95% 85%, 5% 85%)",
                      boxShadow: "0 -4px 12px rgba(0,0,0,0.2)",
                    }}
                    animate={
                      isOpen
                        ? { rotateX: -160, y: -10 }
                        : isHovered
                          ? { y: -3, boxShadow: "0 -6px 16px rgba(0,0,0,0.3)" }
                          : { y: 0, boxShadow: "0 -4px 12px rgba(0,0,0,0.2)" }
                    }
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Heart Seal - Inside flap */}
                    <motion.div
                      className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl border-2 sm:border-3 md:border-4 border-white"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-xl sm:text-2xl md:text-3xl">
                        💕
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Address Section */}
                  <div className="mt-20 sm:mt-24 md:mt-32 space-y-2 sm:space-y-3">
                    <motion.div
                      className="text-left pl-2 sm:pl-4 space-y-2 sm:space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <motion.p
                          className="text-rose-900 text-lg sm:text-xl font-bold mb-1"
                          style={{ fontFamily: HANDWRITTEN_FONT }}
                        >
                          To: Lin
                        </motion.p>
                        <motion.div
                          className="h-px bg-rose-300 w-24 sm:w-32 mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: "auto" }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <motion.p
                          className="text-rose-800 text-lg sm:text-xl font-bold mb-1"
                          style={{ fontFamily: HANDWRITTEN_FONT }}
                        >
                          From: Mek
                        </motion.p>
                        <motion.div
                          className="h-px bg-rose-300 w-24 sm:w-32 mt-2"
                          initial={{ width: 0 }}
                          animate={{ width: "auto" }}
                          transition={{ delay: 1.1, duration: 0.5 }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.p
                      className="text-rose-700 text-xs sm:text-sm text-center mt-4 sm:mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      Click anywhere to open ✉️
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              className="relative"
              initial={{ scale: 0.8, opacity: 0, y: 50, rotateZ: -3 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Letter Paper */}
              <motion.div
                className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      transparent,
                      transparent 31px,
                      rgba(236, 72, 153, 0.1) 31px,
                      rgba(236, 72, 153, 0.1) 32px
                    )
                  `,
                }}
              >
                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />

                {/* Letter Content */}
                <div className="relative z-10">
                  <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-rose-800"
                    style={{ fontFamily: HANDWRITTEN_FONT }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Dear Lin...
                  </motion.h1>

                  <motion.div
                    className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-rose-700 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      I have something important to ask you...
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-4 right-4 sm:top-10 sm:right-10 text-3xl sm:text-4xl md:text-5xl opacity-20 pointer-events-none"
        animate={{ rotate: [0, 15, -15, 0], y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 text-2xl sm:text-3xl md:text-4xl opacity-20 pointer-events-none"
        animate={{ rotate: [0, -15, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-2 sm:left-5 text-xl sm:text-2xl md:text-3xl opacity-15 pointer-events-none"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        💝
      </motion.div>
    </motion.div>
  );
}
