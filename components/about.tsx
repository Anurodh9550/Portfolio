"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Code2, Coffee, Zap } from "lucide-react";
import { siteConfig, services } from "@/lib/data";
import SectionHeading from "./section-heading";
import Scroll3DCard from "./scroll-3d-card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Code, coffee & curiosity"
          subtitle="A bit about my journey, philosophy, and what I love to build."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid lg:grid-cols-2 gap-6 mt-16"
        >
          <motion.div
            variants={fadeUp}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-400/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Who I am
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
                I&apos;m {siteConfig.firstName}, a{" "}
                <span className="text-gradient-subtle">
                  Python Full Stack Developer
                </span>{" "}
                with a soft spot for clean code.
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {siteConfig.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently in my final year of B.Tech Computer Science
                Engineering, I&apos;ve shipped real-time attendance systems,
                IoT-powered AQI monitoring, and full-stack platforms for
                organisations. I love the moment when an idea turns into a
                working product.
              </p>

              <div className="mt-7 space-y-2.5">
                {[
                  { Icon: MapPin, label: siteConfig.location },
                  { Icon: Mail, label: siteConfig.email },
                  { Icon: Phone, label: siteConfig.phone },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="p-2 rounded-lg bg-card/60 border border-border/50">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </span>
                    <span className="break-all">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { icon: Code2, label: "Clean Code" },
                  { icon: Zap, label: "Fast Ship" },
                  { icon: Coffee, label: "Lots of Chai" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/50 border border-border/50"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground text-center">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Scroll3DCard
                  key={service.title}
                  index={i}
                  tiltIntensity={10}
                  scrollIntensity={10}
                  className="glass rounded-2xl group cursor-default overflow-hidden"
                  innerClassName="p-6"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-400/20 via-violet-500/20 to-orange-400/20 border border-primary/20 mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-lg mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Scroll3DCard>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
