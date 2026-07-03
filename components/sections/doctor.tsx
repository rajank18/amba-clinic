"use client";

import React from "react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal, FadeIn } from "@/components/ui/reveal";

export default function Doctor() {
  return (
    <section
      id="doctor"
      className="w-full bg-brand-forest-doc py-24 md:py-36 border-t border-brand-canvas/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 w-full relative z-0">
            <div className="aspect-[3/4] w-full relative">
              <ParallaxImage
                src="/images/doctor.png"
                alt="Dr. Maheshwari Makwana, founder of Amba Clinic"
                speed={0.2}
                containerClassName="w-full h-full border border-black/5"
              />
            </div>
            {/* Subtle label */}
            <div className="absolute -bottom-6 left-0 text-[9px] tracking-[0.25em] uppercase text-brand-canvas/40 font-mono">
              Founder & Clinical Director
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-canvas/80">
                03 / Clinical Leadership
              </span>
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white tracking-tight">
                  Dr. Maheshwari Makwana
                </h2>
              </Reveal>
              <p className="text-xs tracking-widest uppercase font-semibold text-brand-canvas/70">
                BHMS — Classic Homeopath
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm md:text-base font-light leading-relaxed text-white/70 font-sans">
              <FadeIn delay={0.2}>
                <p>
                  Dr. Maheshwari Makwana started her medical journey in classical homeopathic therapeutics. Seeking a methodology that supports the body’s innate self-restoration, she pursued detailed training in Classical Homeopathy, aligning modern diagnostics with generational health.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  For over fifteen years, Dr. Makwana has bridged clinical therapeutics with natural homeopathy, creating an environment that respects both laboratory analysis and the subtle energetics of botanical medicine. Her work focuses on restorative protocols for chronic systemic challenges, endocrine balance, and family wellness.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="font-serif text-lg md:text-xl text-white italic pl-4 border-l border-brand-canvas/30 py-1">
                  &ldquo;We do not suppress symptoms. We look at the body as an ecosystem. My role is to understand the language of your symptoms, map their structure, and introduce the precise natural stimulus to restore health.&rdquo;
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.5} className="mt-4 flex flex-col">
              <span className="font-serif text-3xl italic text-brand-canvas select-none opacity-80">
                Maheshwari Makwana
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-white/30 mt-1">
                Dr. Maheshwari Makwana, BHMS
              </span>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-canvas/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-canvas/5 pointer-events-none" />
    </section>
  );
}
