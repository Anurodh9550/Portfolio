"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Mouse,
} from "lucide-react";
import { siteConfig, stats } from "@/lib/data";
import CodeBackground from "./code-background";
import TiltWords, { TiltCell } from "./tilt-words";
import Scroll3DCard from "./scroll-3d-card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-32 pb-16"
    >
      <CodeBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-6"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-muted-foreground">
                Open to internships & opportunities
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              style={{ perspective: 1000 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="block text-foreground/95">
                <TiltWords text="Hi, I'm" intensity={18} radius={200} />
                <TiltCell intensity={28} radius={260}>
                  <span className="text-gradient">Anurodh</span>
                </TiltCell>
              </span>
              <span className="block text-foreground/95">
                <TiltWords text="A" intensity={18} radius={200} />
                <span className="relative inline-block">
                  <TiltCell intensity={28} radius={260} withSpace={false}>
                    <span className="text-gradient">Full</span>
                  </TiltCell>
                  &nbsp;
                  <TiltCell intensity={28} radius={260} withSpace={false}>
                    <span className="text-gradient">Stack</span>
                  </TiltCell>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-violet-500 rounded-full origin-left"
                  />
                </span>
              </span>
              <span className="block text-foreground/95">
                <TiltWords text="Developer." intensity={22} radius={220} />
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Computer Science engineering student crafting scalable web apps
              with{" "}
              <span className="text-primary font-medium">Django</span>,{" "}
              <span className="text-accent font-medium">React</span>, and a
              splash of{" "}
              <span className="text-highlight font-medium">Machine Learning</span>
              .
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="mt-9 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { Icon: Github, href: siteConfig.social.github, label: "GitHub" },
                { Icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { Icon: Code2, href: siteConfig.social.leetcode, label: "LeetCode" },
                { Icon: Mail, href: siteConfig.social.email, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-full glass hover:bg-primary/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[300px] h-[420px] sm:w-[340px] sm:h-[480px] md:w-[380px] md:h-[540px]"
              style={{ perspective: 1200 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.35, 0.6, 0.35],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-12 rounded-[3rem] blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 55% at 50% 45%, hsl(var(--primary) / 0.55), transparent 70%)",
                }}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                aria-hidden
                className="absolute -inset-3 rounded-[2.4rem] pointer-events-none"
                style={{
                  padding: "2px",
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 25%, hsl(var(--highlight)) 50%, hsl(var(--accent)) 75%, hsl(var(--primary)) 100%)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  filter: "blur(0.5px)",
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                aria-hidden
                className="absolute -inset-6 rounded-[2.6rem] border border-dashed border-primary/30 pointer-events-none"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                aria-hidden
                className="absolute -inset-10 rounded-[3rem] border border-dashed border-accent/15 pointer-events-none"
              />

              <div
                className="relative w-full h-full overflow-hidden rounded-[2.2rem] glass"
                style={{
                  boxShadow:
                    "0 30px 80px -20px rgba(20,184,166,0.35), 0 0 60px -15px rgba(139,92,246,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={siteConfig.avatar}
                  alt={siteConfig.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, 380px"
                  className="object-cover object-top select-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.7) 60%, hsl(var(--background)) 100%)",
                  }}
                />
              </div>

              {[
                {
                  text: "Django",
                  style:
                    "top-6 -left-4 sm:-left-10 bg-teal-500/90 text-white",
                  delay: 0,
                },
                {
                  text: "React",
                  style:
                    "top-1/3 -right-2 sm:-right-8 bg-violet-500/90 text-white",
                  delay: 0.3,
                },
                {
                  text: "Python",
                  style:
                    "bottom-12 left-0 sm:-left-6 bg-orange-500/90 text-white",
                  delay: 0.6,
                },
                {
                  text: "ML",
                  style:
                    "bottom-32 -right-2 sm:-right-6 bg-rose-500/90 text-white",
                  delay: 0.9,
                },
              ].map((badge) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + badge.delay,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`absolute px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-md ${badge.style}`}
                >
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: badge.delay,
                    }}
                    className="block"
                  >
                    {badge.text}
                  </motion.span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-left-12 glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-highlight" />
                <span className="text-xs font-medium">
                  Open to work
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <Scroll3DCard
              key={stat.label}
              index={i}
              tiltIntensity={10}
              scrollIntensity={8}
              className="glass rounded-2xl"
              innerClassName="px-4 py-5 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </Scroll3DCard>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <Mouse className="w-5 h-5" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
