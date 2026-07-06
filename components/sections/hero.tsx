"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Premium intro animation on page load
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line-span", {
        y: "100%",
        duration: 1.6,
        stagger: 0.2,
      })
        .from(
          ".hero-fade",
          {
            opacity: 0,
            y: 20,
            duration: 1.2,
            stagger: 0.15,
          },
          "-=1.0"
        )
        .from(
          ".hero-image-container",
          {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.8,
            ease: "power3.inOut",
          },
          "-=1.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 md:pb-24 w-full bg-brand-canvas overflow-hidden border-b border-brand-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Editorial Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8 z-10">
            <div ref={titleRef} className="flex flex-col mb-8 md:mb-12">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] xl:text-[7.5rem] leading-[0.9] tracking-tighter text-brand-text select-none">
                <div className="overflow-hidden h-fit pt-1 pb-4 -mb-4">
                  <span className="hero-line-span inline-block font-bold will-change-transform">
                    Amba
                  </span>
                </div>
                <div className="overflow-hidden h-fit pt-1 pb-2 -mb-2 ml-32">
                  <span className="hero-line-span inline-block will-change-transform text-brand-accent italic font-normal">
                    Clinic
                  </span>
                </div>
              </h1>
            </div>

            <div className="max-w-md flex flex-col gap-6 hero-fade">
              <p className="font-light text-base md:text-lg leading-relaxed text-brand-text/80">
                Classical homeopathy curated for the design-conscious individual. We approach physical restoration through a biomimetic architectural framework.
              </p>
              <div className="flex items-center gap-6 mt-2">
                <Button
                  variant="primary"
                  size="lg"
                  magnetic
                  onClick={() => {
                    document.querySelector("#philosophy")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our philosophy
                </Button>
                <a
                  href="#treatments"
                  className="group flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-primary hover:text-brand-accent transition-colors duration-300"
                >
                  Explore treatments
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Cinematic Framed Photo Column */}
          <div className="lg:col-span-6 w-full hero-image-container will-change-transform relative z-0">
            <div className="border border-brand-primary/15 p-1.5 bg-brand-canvas/30 backdrop-blur-sm shadow-sm">
              <img
                src="/images/hero-1.webp"
                alt="Luxury homeopathic wellness lobby at Amba Clinic"
                className="w-full h-auto object-contain block"
              />
            </div>
            {/* Architectural coordinates overlay */}
            <div className="absolute -bottom-6 right-0 text-[9px] tracking-[0.25em] uppercase text-brand-text/40 font-mono hidden sm:block pointer-events-none hero-fade">
              Coord. 22°18&apos;N 73°07&apos;E / Amba H.Q.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines representing structure */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
    </section>
  );
}
