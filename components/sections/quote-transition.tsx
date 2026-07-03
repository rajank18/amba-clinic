"use client";

import React from "react";
import { Reveal, FadeIn } from "@/components/ui/reveal";

export default function QuoteTransition() {
  return (
    <section className="w-full bg-brand-sage py-24 md:py-32 flex items-center justify-center text-center relative overflow-hidden border-t border-brand-primary/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-primary/60">
          Resonance
        </span>
        <Reveal>
          <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-brand-text">
            &ldquo;The highest ideal of therapy is to restore health rapidly, gently, and permanently; to cure in the shortest, most reliable, and safest manner.&rdquo;
          </p>
        </Reveal>
        <FadeIn delay={0.3}>
          <span className="text-xs font-mono tracking-widest uppercase text-brand-text/50 mt-2 block">
            &mdash; Samuel Hahnemann, Organon of Medicine
          </span>
        </FadeIn>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
    </section>
  );
}
