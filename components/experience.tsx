"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Check } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "./section-heading";
import Scroll3DCard from "./scroll-3d-card";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          subtitle="Internships and roles that shaped how I build."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-highlight md:-translate-x-px" />

            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex md:items-stretch gap-6 mb-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, duration: 0.4 }}
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-6 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 via-violet-500 to-orange-400 text-white shadow-lg glow z-10"
                  >
                    <Briefcase className="w-4 h-4" />
                  </motion.div>

                  <div
                    className={`md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    } pl-14 md:pl-0`}
                  >
                    <Scroll3DCard
                      index={i}
                      tiltIntensity={7}
                      scrollIntensity={9}
                      className="glass rounded-2xl overflow-hidden h-full"
                      innerClassName="p-6"
                    >
                      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                      <div className="relative">
                        <h3 className="font-display font-bold text-lg leading-tight">
                          {exp.role}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-2">
                          <span className="text-primary font-semibold">
                            {exp.company}
                          </span>
                          {exp.location && (
                            <>
                              <span className="text-muted-foreground">·</span>
                              <span className="inline-flex items-center gap-1 text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
                          {exp.period}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((h, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 inline-flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-primary" />
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs rounded-md bg-card/60 border border-border/50 text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Scroll3DCard>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
