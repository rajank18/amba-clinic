"use client";

import React from "react";
import { Reveal, FadeIn } from "@/components/ui/reveal";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="w-full bg-brand-canvas py-24 md:py-36 border-t border-brand-primary/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Header Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-primary">
              01 / Origin Philosophy
            </span>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text tracking-tight">
                An architecture of the organism.
              </h2>
            </Reveal>
          </div>

          {/* Detailed Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:pt-16">
            {/* Main Statement */}
            <div className="flex flex-col gap-6 border-l border-brand-primary/10 pl-6 md:pl-8">
              <FadeIn delay={0.2}>
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-brand-text/90">
                  &ldquo;Modern wellness is often cosmetic. Homeopathy is structural. We guide the body back to its native intelligence, restoring equilibrium from within.&rdquo;
                </p>
              </FadeIn>
              <div className="h-[1px] w-12 bg-brand-primary/40" />
            </div>

            {/* Core explanation */}
            <div className="flex flex-col gap-6 text-sm md:text-base font-light leading-relaxed text-brand-text/75 font-sans pt-4 md:pt-0">
              <FadeIn delay={0.3}>
                <p>
                  Founded on the law of similars, homeopathy is a biomimetic science. We select natural substances that mirror the body’s distress signals, stimulating a precise, self-healing immune response.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  At Amba, we avoid quick patches. We treat chronic, acute, and mental imbalances through bespoke dilutions designed to target systemic vulnerabilities, not just isolate symptoms. It is a slow, structural alchemy designed for permanent health.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
    </section>
  );
}
