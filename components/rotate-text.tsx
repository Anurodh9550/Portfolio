"use client";

import {
  motion,
  useAnimationControls,
  type AnimationDefinition,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RotateTextProps extends Omit<HTMLMotionProps<"span">, "children"> {
  children: ReactNode;
  spinDeg?: number;
  duration?: number;
  className?: string;
  axis?: "y" | "x" | "z";
  trigger?: "hover" | "auto";
}

export default function RotateText({
  children,
  spinDeg = 210,
  duration = 0.9,
  className,
  axis = "y",
  trigger = "hover",
  ...rest
}: RotateTextProps) {
  const controls = useAnimationControls();

  const onEnter = useCallback(() => {
    if (trigger !== "hover") return;
    const def: AnimationDefinition =
      axis === "y"
        ? {
            rotateY: [0, spinDeg, 360],
            transition: { duration, ease: [0.22, 1, 0.36, 1] },
          }
        : axis === "x"
          ? {
              rotateX: [0, spinDeg, 360],
              transition: { duration, ease: [0.22, 1, 0.36, 1] },
            }
          : {
              rotate: [0, spinDeg, 360],
              transition: { duration, ease: [0.22, 1, 0.36, 1] },
            };
    controls.start(def);
  }, [controls, spinDeg, duration, axis, trigger]);

  const onLeave = useCallback(() => {
    if (axis === "y") controls.set({ rotateY: 0 });
    else if (axis === "x") controls.set({ rotateX: 0 });
    else controls.set({ rotate: 0 });
  }, [controls, axis]);

  return (
    <motion.span
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      animate={controls}
      style={{
        display: "inline-block",
        transformStyle: "preserve-3d",
        transformPerspective: 800,
        willChange: "transform",
      }}
      className={cn("inline-block", className)}
      {...rest}
    >
      {children}
    </motion.span>
  );
}
