"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) setHovered(true);
    };
    const out = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [x, y, visible]);

  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        animate={{
          scale: hovered ? 2.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="pointer-events-none fixed top-0 left-0 z-[200] w-8 h-8 rounded-full border border-teal-400/70 mix-blend-difference hidden md:block"
      />
      <motion.div
        style={{ translateX: x, translateY: y }}
        animate={{ opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed top-0 left-0 z-[200] w-8 h-8 flex items-center justify-center hidden md:flex"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
      </motion.div>
    </>
  );
}
