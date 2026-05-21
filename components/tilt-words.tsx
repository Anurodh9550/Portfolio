"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Pointer = { x: MotionValue<number>; y: MotionValue<number> };

const PointerContext = createContext<Pointer | null>(null);

export function PointerProvider({ children }: { children: ReactNode }) {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);

  useEffect(() => {
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onLeave = () => {
      x.set(-9999);
      y.set(-9999);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  const value = useMemo(() => ({ x, y }), [x, y]);
  return (
    <PointerContext.Provider value={value}>{children}</PointerContext.Provider>
  );
}

function usePointer() {
  return useContext(PointerContext);
}

interface TiltCellProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  radius?: number;
  withSpace?: boolean;
}

export function TiltCell({
  children,
  className,
  intensity = 22,
  radius = 220,
  withSpace = true,
}: TiltCellProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const pointer = usePointer();

  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const proximity = useMotionValue(0);

  useEffect(() => {
    if (!pointer) return;
    let raf = 0;
    const tick = () => {
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const ddx = pointer.x.get() - cx;
        const ddy = pointer.y.get() - cy;
        const d = Math.sqrt(ddx * ddx + ddy * ddy);
        dx.set(Math.max(-1, Math.min(1, ddx / radius)));
        dy.set(Math.max(-1, Math.min(1, ddy / radius)));
        proximity.set(Math.max(0, 1 - d / radius));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pointer, dx, dy, proximity, radius]);

  const rotateY = useSpring(
    useTransform([dx, proximity] as never, ([x, f]: number[]) =>
      x * f * intensity
    ),
    { stiffness: 220, damping: 16 }
  );

  const rotateX = useSpring(
    useTransform([dy, proximity] as never, ([y, f]: number[]) =>
      -y * f * intensity
    ),
    { stiffness: 220, damping: 16 }
  );

  const z = useSpring(useTransform(proximity, [0, 1], [0, 28]), {
    stiffness: 220,
    damping: 16,
  });

  const scale = useSpring(useTransform(proximity, [0, 1], [1, 1.08]), {
    stiffness: 220,
    damping: 16,
  });

  return (
    <motion.span
      ref={ref}
      style={{
        display: "inline-block",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        z,
        scale,
        willChange: "transform",
      }}
      className={cn("inline-block", className)}
    >
      {children}
      {withSpace && "\u00A0"}
    </motion.span>
  );
}

interface TiltWordsProps {
  text: string;
  className?: string;
  intensity?: number;
  radius?: number;
  gradientLastWord?: boolean;
  gradientAll?: boolean;
}

export default function TiltWords({
  text,
  className,
  intensity = 22,
  radius = 220,
  gradientLastWord = false,
  gradientAll = false,
}: TiltWordsProps) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  return (
    <span
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      className={cn("inline-block", className)}
    >
      {words.map((w, i) => {
        const isLast = i === words.length - 1;
        const useGradient = gradientAll || (gradientLastWord && isLast);
        return (
          <TiltCell key={`${w}-${i}`} intensity={intensity} radius={radius}>
            <span className={useGradient ? "text-gradient" : undefined}>
              {w}
            </span>
          </TiltCell>
        );
      })}
    </span>
  );
}
