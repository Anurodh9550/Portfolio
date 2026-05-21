"use client";

import { motion } from "framer-motion";
import { LazyScrollParticles } from "./three/lazy-scene";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute inset-0 opacity-70">
        <LazyScrollParticles />
      </div>

      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-12%] left-[-8%] w-[520px] h-[520px] rounded-full bg-teal-400/35 dark:bg-teal-400/25 blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 110, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[-12%] w-[620px] h-[620px] rounded-full bg-violet-500/30 dark:bg-violet-500/25 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 80, -120, 0],
          y: [0, -60, 100, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[25%] w-[700px] h-[700px] rounded-full bg-orange-400/25 dark:bg-orange-400/15 blur-[160px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
    </div>
  );
}
