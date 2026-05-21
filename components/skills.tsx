"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./section-heading";
import { LazyTechGlobe } from "./three/lazy-scene";
import Scroll3DCard from "./scroll-3d-card";

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="A curated set of tools and technologies — spin the globe to explore my stack."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full max-w-[480px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/10 via-violet-500/10 to-orange-400/10 blur-2xl" />
              <div className="relative w-full h-full">
                <LazyTechGlobe />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Drag to rotate · auto-spin
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={card}
                >
                  <Scroll3DCard
                    index={i}
                    tiltIntensity={8}
                    scrollIntensity={10}
                    className="group glass rounded-2xl overflow-hidden h-full"
                    innerClassName="p-5"
                  >
                    <div
                      className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-3xl group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}
                    />

                    <div className="relative">
                      <div
                        className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-lg mb-4`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <h3 className="font-display font-bold text-base mb-3">
                        {cat.title}
                      </h3>

                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs rounded-md bg-card/60 border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Scroll3DCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
