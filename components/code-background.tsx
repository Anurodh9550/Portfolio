"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const snippets = [
  [
    { c: "text-rose-400", t: "from" },
    { c: "text-foreground/60", t: " django.db " },
    { c: "text-rose-400", t: "import" },
    { c: "text-foreground/60", t: " models" },
  ],
  [
    { c: "text-violet-400", t: "class " },
    { c: "text-teal-300", t: "Project" },
    { c: "text-foreground/60", t: "(models." },
    { c: "text-teal-300", t: "Model" },
    { c: "text-foreground/60", t: "):" },
  ],
  [
    { c: "text-foreground/60", t: "  name = models." },
    { c: "text-teal-300", t: "CharField" },
    { c: "text-foreground/60", t: "(max_length=" },
    { c: "text-amber-300", t: "200" },
    { c: "text-foreground/60", t: ")" },
  ],
  [
    { c: "text-violet-400", t: "const " },
    { c: "text-teal-300", t: "App" },
    { c: "text-foreground/60", t: " = () => (" },
  ],
  [
    { c: "text-foreground/60", t: "<" },
    { c: "text-rose-400", t: "Portfolio" },
    { c: "text-amber-300", t: " name" },
    { c: "text-foreground/60", t: "=" },
    { c: "text-emerald-300", t: "{\"Anurodh\"}" },
    { c: "text-foreground/60", t: " />" },
  ],
  [
    { c: "text-violet-400", t: "async function " },
    { c: "text-teal-300", t: "build" },
    { c: "text-foreground/60", t: "() {" },
  ],
  [
    { c: "text-violet-400", t: "return " },
    { c: "text-emerald-300", t: "'shipping'" },
  ],
  [
    { c: "text-rose-400", t: "GET " },
    { c: "text-emerald-300", t: "/api/projects" },
          { c: "text-foreground/60", t: " → " },
    { c: "text-teal-300", t: "200 OK" },
  ],
];

interface FloatingBlock {
  id: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  scale: number;
  snippet: typeof snippets[number];
}

function useBlocks(count: number, seed: number): FloatingBlock[] {
  return useMemo(() => {
    let s = seed;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${10 + rand() * 75}%`,
      left: `${rand() * 80}%`,
      delay: rand() * 8,
      duration: 18 + rand() * 14,
      scale: 0.7 + rand() * 0.4,
      snippet: snippets[i % snippets.length],
    }));
  }, [count, seed]);
}

function CodeBlock({ block }: { block: FloatingBlock }) {
  return (
    <motion.pre
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: [0, 0.35, 0.35, 0],
        y: [-10, -50, -90, -130],
      }}
      transition={{
        duration: block.duration,
        delay: block.delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        top: block.top,
        left: block.left,
        scale: block.scale,
        transformOrigin: "left center",
      }}
      className="absolute font-mono text-[11px] sm:text-xs leading-relaxed pointer-events-none whitespace-pre select-none"
    >
      {block.snippet.map((part, i) => (
        <span key={i} className={part.c}>
          {part.t}
        </span>
      ))}
    </motion.pre>
  );
}

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="absolute top-[22%] left-[5%] hidden xl:block w-[300px] rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl font-mono text-[11px] shadow-2xl"
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(20,184,166,0.25), 0 0 40px -10px rgba(139,92,246,0.15)",
      }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/70">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-[10px] text-muted-foreground">
          ~/anurodh/portfolio
        </span>
      </div>
      <div className="p-3.5 leading-relaxed space-y-1.5">
        <div>
          <span className="text-teal-300">$ </span>
          <span className="text-foreground/80">npm run dev</span>
        </div>
        <div className="text-emerald-300">▲ Next.js 15 ready in 2.9s</div>
        <div className="text-muted-foreground">
          - Local: http://localhost:3000
        </div>
        <div className="text-violet-300">✓ compiled successfully</div>
        <div className="flex items-center">
          <span className="text-teal-300">$ </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1 inline-block w-1.5 h-3 bg-foreground/80"
          />
        </div>
      </div>
    </motion.div>
  );
}

function BigSymbols() {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[12%] right-[8%] hidden lg:block font-mono font-bold text-7xl text-primary/10 select-none pointer-events-none"
      >
        {"</>"}
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[14%] left-[6%] hidden lg:block font-mono font-bold text-6xl text-accent/10 select-none pointer-events-none"
      >
        {"{ }"}
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] right-[20%] hidden lg:block font-mono font-bold text-5xl text-highlight/10 select-none pointer-events-none"
      >
        {"=>"}
      </motion.div>
    </>
  );
}

function GradientOrbs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[420px] h-[420px] rounded-full bg-teal-400/30 dark:bg-teal-500/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] right-[15%] w-[500px] h-[500px] rounded-full bg-violet-500/25 dark:bg-violet-500/20 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[5%] w-[380px] h-[380px] rounded-full bg-orange-400/20 dark:bg-orange-400/10 blur-[130px] pointer-events-none"
      />
    </>
  );
}

export default function CodeBackground() {
  const blocks = useBlocks(8, 42);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_25%,hsl(220_60%_10%)_0%,transparent_70%)] opacity-80" />

      <GradientOrbs />

      <div
        className="absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      {blocks.map((b) => (
        <CodeBlock key={b.id} block={b} />
      ))}

      <BigSymbols />
      <TerminalCard />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/50 to-transparent" />
    </div>
  );
}
