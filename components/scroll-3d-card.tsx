"use client";

import {
  motion,
  useAnimationControls,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Scroll3DCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tiltIntensity?: number;
  scrollIntensity?: number;
  spinDeg?: number;
  glow?: "teal" | "violet" | "orange" | "rose" | "cyan" | "auto";
  index?: number;
}

const GLOW_COLORS: Record<NonNullable<Scroll3DCardProps["glow"]>, string> = {
  teal: "20,184,166",
  violet: "139,92,246",
  orange: "251,146,60",
  rose: "244,63,94",
  cyan: "6,182,212",
  auto: "139,92,246",
};

const AUTO_PALETTE = ["teal", "violet", "orange", "rose", "cyan"] as const;

export default function Scroll3DCard({
  children,
  className,
  innerClassName,
  tiltIntensity = 10,
  scrollIntensity = 14,
  spinDeg = 210,
  glow = "auto",
  index = 0,
}: Scroll3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const spinControls = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollRotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [scrollIntensity, scrollIntensity * 0.3, 0, -scrollIntensity * 0.3, -scrollIntensity]
  );
  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scrollScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.94, 1, 0.96]
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hovered = useMotionValue(0);

  const smx = useSpring(mx, { stiffness: 240, damping: 20 });
  const smy = useSpring(my, { stiffness: 240, damping: 20 });
  const sHover = useSpring(hovered, { stiffness: 240, damping: 22 });

  const hoverRotateX = useTransform(smy, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const hoverRotateY = useTransform(smx, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const totalRotateX = useTransform(
    [scrollRotateX, hoverRotateX] as never,
    ([s, h]: number[]) => s + h
  );

  const glareX = useTransform(smx, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(smy, [-0.5, 0.5], ["15%", "85%"]);
  const glareOpacity = useTransform(sHover, [0, 1], [0, 0.25]);

  const liftY = useTransform(
    [scrollY, sHover] as never,
    ([s, h]: number[]) => s - h * 8
  );

  const liftScale = useTransform(
    [scrollScale, sHover] as never,
    ([s, h]: number[]) => s + h * 0.03
  );

  const glowRgb =
    glow === "auto"
      ? GLOW_COLORS[AUTO_PALETTE[index % AUTO_PALETTE.length]]
      : GLOW_COLORS[glow];

  const shadowBase = `0 10px 30px -10px rgba(${glowRgb},0.25)`;
  const shadowHover = `0 30px 80px -10px rgba(${glowRgb},0.55), 0 0 60px -10px rgba(${glowRgb},0.35)`;

  const boxShadow = useTransform(
    sHover,
    [0, 1],
    [shadowBase, shadowHover]
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleEnter = () => {
    hovered.set(1);
    spinControls.start({
      rotateY: [0, spinDeg, 360],
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    });
  };
  const handleLeave = () => {
    hovered.set(0);
    mx.set(0);
    my.set(0);
    spinControls.set({ rotateY: 0 });
  };

  const glare = useTransform(
    [glareX, glareY, glareOpacity] as never,
    ([gx, gy, op]: (string | number)[]) =>
      `radial-gradient(600px circle at ${gx} ${gy}, rgba(255,255,255,${op}), transparent 45%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX: totalRotateX,
        rotateY: hoverRotateY,
        y: liftY,
        scale: liftScale,
        boxShadow,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
        willChange: "transform",
      }}
      className={cn(
        "relative rounded-[inherit] transition-shadow",
        className
      )}
    >
      <motion.div
        animate={spinControls}
        initial={{ rotateY: 0 }}
        className="relative h-full rounded-[inherit]"
        style={{
          transformStyle: "preserve-3d",
          transformPerspective: 1200,
          willChange: "transform",
        }}
      >
        <motion.div
          aria-hidden
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
        />
        <div
          className={cn("relative h-full", innerClassName)}
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
