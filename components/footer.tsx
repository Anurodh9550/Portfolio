"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { siteConfig, navItems } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

function useLocalTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function MagneticIcon({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: typeof Github;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative inline-flex items-center justify-center w-11 h-11 rounded-full glass hover:bg-primary/10 transition-colors"
    >
      <Icon className="w-4 h-4 transition-colors group-hover:text-primary" />
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-foreground text-background text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  );
}

function BrandReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const bg = useTransform(
    [mx, my] as never,
    ([x, y]: number[]) =>
      `radial-gradient(280px circle at ${x}px ${y}px, hsl(var(--primary)) 0%, hsl(var(--accent)) 40%, hsl(var(--highlight)) 80%, transparent 100%)`
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative mt-16 cursor-default select-none"
    >
      <div className="text-center font-display font-black tracking-tighter leading-none text-[20vw] text-foreground/[0.04]">
        ANURODH
      </div>
      <motion.div
        aria-hidden
        style={{ backgroundImage: bg }}
        className="absolute inset-0 text-center font-display font-black tracking-tighter leading-none text-[20vw] bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        ANURODH
      </motion.div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const time = useLocalTime();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-24 pb-10 border-t border-border/50 overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(var(--primary) / 0.35), transparent 30%, hsl(var(--accent) / 0.3) 60%, transparent 80%, hsl(var(--primary) / 0.35))",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Let&apos;s talk
            </span>
            <h3 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Got an idea?
              <br />
              <span className="text-gradient">Let&apos;s build it.</span>
            </h3>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Send me an email
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:bg-primary/10 transition-colors text-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="font-mono text-xs">
                      {siteConfig.email}
                    </span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="glass rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                    Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-medium">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Available
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/40">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">
                      Local time
                    </div>
                    <div className="font-mono font-semibold text-xl tabular-nums">
                      {time}
                      <span className="text-muted-foreground text-xs ml-1">
                        IST
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">
                      Based in
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      Delhi, IN
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2">
                    Currently building
                  </div>
                  <div className="font-mono text-xs space-y-1">
                    <div>
                      <span className="text-primary">→</span>{" "}
                      <span className="text-foreground/90">
                        Kalpna Traders full-stack platform
                      </span>
                    </div>
                    <div>
                      <span className="text-accent">→</span>{" "}
                      <span className="text-foreground/90">
                        Side projects with Django + Next.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-border/40">
          <div>
            <div className="font-display font-bold text-lg text-gradient">
              Anurodh Kumar
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Python Full Stack Developer crafting clean, scalable web
              experiences with Django & React.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-3">
              Quick links
            </div>
            <nav className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 text-primary transition-opacity">
                    →
                  </span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-3">
              Connect
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <MagneticIcon
                href={siteConfig.social.github}
                label="GitHub"
                Icon={Github}
              />
              <MagneticIcon
                href={siteConfig.social.linkedin}
                label="LinkedIn"
                Icon={Linkedin}
              />
              <MagneticIcon
                href={siteConfig.social.leetcode}
                label="LeetCode"
                Icon={Code2}
              />
              <MagneticIcon
                href={siteConfig.social.email}
                label="Email"
                Icon={Mail}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40 text-xs text-muted-foreground">
          <div className="font-mono">
            © {year} Anurodh Kumar — All rights reserved.
          </div>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass hover:bg-primary/10 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Back to top</span>
          </button>
        </div>

        <BrandReveal />
      </div>
    </footer>
  );
}
