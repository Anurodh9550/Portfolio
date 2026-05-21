"use client";

import { techStack } from "@/lib/data";

export default function Marquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="py-8 border-y border-border/50 mask-fade-x overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex items-center gap-12 mx-6 text-2xl md:text-3xl font-display font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
          >
            {tech}
            <span className="text-primary text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
