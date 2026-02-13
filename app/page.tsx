"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to story letter page to start the storytelling journey
    router.push("/story/letter");
  }, [router]);

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="text-4xl sm:text-5xl md:text-6xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >
          💕
        </motion.span>
        <p className="mt-4 text-sm sm:text-base text-rose-600 px-4">
          Loading your message...
        </p>
      </motion.div>
    </motion.div>
  );
}
