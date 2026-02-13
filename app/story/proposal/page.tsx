"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ProposalView } from "../../components/ProposalView";
import { FloatingHearts } from "../../components/FloatingHearts";
import { FloatingRosePetals } from "../../components/FloatingRosePetals";
import { ConfettiBurst } from "../../components/ConfettiBurst";
import { createConfettiParticles } from "../../utils/helpers";
import type { ConfettiParticle } from "../../utils/types";

export default function ProposalStoryPage() {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  const handleYesClick = () => {
    const particles = createConfettiParticles(30);
    setConfetti(particles);

    setTimeout(() => {
      router.push("/yes");
    }, 50);

    setTimeout(() => {
      setConfetti([]);
    }, 4000);
  };

  const handleNoHover = () => {
    setNoCount((prev) => prev + 1);
  };

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
        <ProposalView
          onYesClick={handleYesClick}
          noCount={noCount}
          onNoHover={handleNoHover}
        />
      </main>
    </motion.div>
  );
}
