"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import RotateText from "./rotate-text";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300",
            scrolled
              ? "glass shadow-lg shadow-primary/10"
              : "bg-transparent"
          )}
          style={
            scrolled
              ? {
                  boxShadow:
                    "0 10px 40px -10px rgba(20,184,166,0.15), 0 0 30px -10px rgba(139,92,246,0.1)",
                }
              : undefined
          }
        >
          <a
            href="#home"
            className="group flex items-center gap-1 font-display font-bold text-lg"
            style={{ perspective: 800 }}
          >
            <motion.span
              animate={{ rotate: [0, -8, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="text-primary font-mono"
            >
              {"<"}
            </motion.span>
            <RotateText spinDeg={210} duration={1} className="text-gradient">
              Anurodh
            </RotateText>
            <motion.span
              animate={{ rotate: [0, 8, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="text-primary font-mono"
            >
              {"/>"}
            </motion.span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    style={{ perspective: 600 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/15 via-accent/15 to-highlight/15 border border-primary/25"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative inline-block">
                      <RotateText spinDeg={210} duration={0.9}>
                        {item.name}
                      </RotateText>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileTap={{ scale: 0.9, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative p-2.5 rounded-full glass hover:bg-primary/10 transition-colors overflow-hidden"
              aria-label="Toggle theme"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)/0.4), transparent 50%, hsl(var(--accent)/0.4))",
                }}
              />
              {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="relative block"
                    >
                      <Sun className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="relative block"
                    >
                      <Moon className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              )}
            </motion.button>

            <a
              href="#contact"
              className="group relative hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background overflow-hidden"
              style={{ perspective: 600 }}
            >
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, hsl(var(--primary) / 0.45) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.6s linear infinite",
                }}
              />
              <RotateText spinDeg={210} duration={0.9} className="relative">
                Hire me
              </RotateText>
              <motion.span
                aria-hidden
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2.5 rounded-full glass"
              aria-label="Menu"
            >
              {open ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        active === item.href
                          ? "bg-primary/10 text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <RotateText spinDeg={210} duration={0.9}>
                        {item.name}
                      </RotateText>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block mt-2 text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-foreground text-background"
                  >
                    Hire me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
