"use client";

import dynamic from "next/dynamic";

export const LazyHeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => null,
});

export const LazyTechGlobe = dynamic(() => import("./tech-globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
    </div>
  ),
});

export const LazyScrollParticles = dynamic(
  () => import("./scroll-particles"),
  { ssr: false, loading: () => null }
);
