"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder, Calendar } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./section-heading";
import { cn } from "@/lib/utils";
import Scroll3DCard from "./scroll-3d-card";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const gradientPalette = [
  "from-teal-400/30 via-cyan-400/20 to-violet-500/30",
  "from-violet-500/30 via-purple-400/20 to-fuchsia-500/30",
  "from-orange-400/30 via-amber-400/20 to-rose-500/30",
  "from-emerald-400/30 via-teal-400/20 to-cyan-500/30",
  "from-sky-400/30 via-blue-400/20 to-indigo-500/30",
  "from-rose-400/30 via-pink-400/20 to-fuchsia-500/30",
  "from-amber-400/30 via-orange-400/20 to-red-500/30",
  "from-cyan-400/30 via-blue-400/20 to-violet-500/30",
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of products, tools, and experiments I've shipped."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={item}
              className={cn(
                project.featured && "sm:col-span-2 lg:col-span-2"
              )}
            >
            <Scroll3DCard
              index={i}
              tiltIntensity={10}
              scrollIntensity={12}
              className={cn(
                "group glass rounded-3xl overflow-hidden h-full"
              )}
              innerClassName="flex flex-col h-full"
            >
              <div
                className={cn(
                  "relative overflow-hidden flex items-center justify-center p-8",
                  project.featured ? "h-44 md:h-52" : "h-36",
                  "bg-gradient-to-br",
                  gradientPalette[i % gradientPalette.length]
                )}
              >
                <div className="absolute inset-0 grid-bg opacity-40" />

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="relative z-10 inline-flex p-4 rounded-2xl glass-strong shadow-xl"
                >
                  <Folder className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                </motion.div>

                {project.category && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-background/70 backdrop-blur-md text-xs font-medium border border-border/50">
                    {project.category}
                  </span>
                )}
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-foreground text-background text-xs font-bold">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg md:text-xl leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all flex-shrink-0 mt-1" />
                </div>

                {project.period && (
                  <div className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-border/40">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                  {project.href && project.href !== "#" && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:opacity-80 transition-opacity"
                    >
                      Live
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Scroll3DCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Anurodh9550"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-primary/10 transition-colors font-medium"
          >
            <Github className="w-4 h-4" />
            See all 20+ repositories on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
