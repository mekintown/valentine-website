"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ConfettiBurst } from "../components/ConfettiBurst";
import { FloatingHearts } from "../components/FloatingHearts";
import { FloatingRosePetals } from "../components/FloatingRosePetals";
import { SuccessView } from "../components/SuccessView";
import { TARGET_DATE } from "../utils/constants";
import { calculateTimeLeft, createConfettiParticles } from "../utils/helpers";
import type { ConfettiParticle, TimeLeft } from "../utils/types";

export default function YesPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE));
    }, 1000);

    // Trigger confetti on page load
    const particles = createConfettiParticles(30);
    setConfetti(particles);

    setTimeout(() => {
      setConfetti([]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingHearts />
      <FloatingRosePetals />
      <ConfettiBurst particles={confetti} />

      <main className="relative flex min-h-screen flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <SuccessView timeLeft={timeLeft} />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/">
            <motion.button
              className="mt-6 sm:mt-8 rounded-full border-2 border-rose-200 bg-white/80 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-rose-400 shadow-md"
              whileHover={{
                scale: 1.05,
                borderColor: "rgb(251, 113, 133)",
                backgroundColor: "white",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              ← Back to proposal
            </motion.button>
          </Link>
        </motion.div>
      </main>
    </motion.div>
  );
}
