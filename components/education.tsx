"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { education, certificates } from "@/lib/data";
import SectionHeading from "./section-heading";
import Scroll3DCard from "./scroll-3d-card";

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education & Certificates"
          title="Always learning, always shipping"
          subtitle="My academic background and the certifications I've earned along the way."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-xl mb-5 inline-flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </motion.h3>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={card}
                >
                <Scroll3DCard
                  index={i}
                  tiltIntensity={8}
                  scrollIntensity={8}
                  className="glass rounded-2xl overflow-hidden group"
                  innerClassName="p-5"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-violet-500 to-orange-400 opacity-80 pointer-events-none" />
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative pl-2">
                    <h4 className="font-semibold text-base leading-tight">
                      {edu.degree}
                    </h4>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                      <span className="text-primary font-medium">
                        {edu.institute}
                      </span>
                      {edu.location && (
                        <>
                          <span className="text-muted-foreground">·</span>
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {edu.period}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold border border-primary/20">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </Scroll3DCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-xl mb-5 inline-flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-accent" />
              Certificates
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {certificates.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={card}
                  >
                  <Scroll3DCard
                    index={i + 3}
                    tiltIntensity={8}
                    scrollIntensity={8}
                    className="glass rounded-2xl group overflow-hidden"
                    innerClassName="p-5"
                  >
                    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative flex items-start gap-3">
                      <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-teal-400/20 via-violet-500/20 to-orange-400/20 border border-primary/20 flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                        {cert.period && (
                          <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                            {cert.period}
                          </span>
                        )}
                      </div>
                    </div>
                  </Scroll3DCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
