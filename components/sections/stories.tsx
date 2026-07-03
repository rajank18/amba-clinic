"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function Stories() {
  const testimonials = [
    {
      quote: "Amba has completely recalibrated my relationship with my health. After years of thyroid fatigue that conventional medicine merely managed, Dr. Amba’s constitutional protocol restored my baseline energy within months.",
      author: "Olivia V.",
      role: "Creative Director",
      case: "Constitutional Medicine / Endocrine Alignment",
    },
    {
      quote: "Finding a medical professional who doesn't immediately rely on suppressive steroids was paramount. The pediatric immune activations have done wonders for my daughter's chronic skin eczema and respiratory health.",
      author: "Marcus K.",
      role: "Architect",
      case: "Generational Care / Pediatric Immunity",
    },
    {
      quote: "The somatic nervous calibration treatment is a masterpiece. My chronic insomnia and adrenal fatigue are completely gone. I felt treated as an integrated biological system, not just a series of symptoms.",
      author: "Eleanor R.",
      role: "Writer",
      case: "Somatic Nervous Calibration",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  const active = testimonials[activeIndex];
  return (
    <section
      id="stories"
      className="w-full bg-brand-canvas py-24 md:py-36 border-t border-brand-primary/10 overflow-hidden relative text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Title column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-primary">
              04 / Client Journals
            </span>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text tracking-tight">
                Patient Recovery Stories
              </h2>
            </Reveal>
          </div>

          {/* Testimonial slider column */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[350px] lg:pt-16">
            <div className="relative overflow-hidden w-full mb-8">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full flex flex-col gap-6 md:gap-8"
                >
                  <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-brand-text/90 pr-4 md:pr-12">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-brand-primary/15">
                    <div>
                      <span className="block text-sm font-medium text-brand-text">
                        {active.author}
                      </span>
                      <span className="block text-[10px] tracking-widest uppercase text-brand-text/50">
                        {active.role}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono tracking-widest uppercase text-brand-primary border border-brand-primary/20 px-3 py-1 bg-brand-primary/[0.02]">
                      {active.case}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="border border-brand-primary/10 hover:border-brand-primary p-3 transition-colors cursor-pointer text-brand-primary hover:text-brand-primary/80 group"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-4.5 h-4.5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="border border-brand-primary/10 hover:border-brand-primary p-3 transition-colors cursor-pointer text-brand-primary hover:text-brand-primary/80 group"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-brand-text/40 ml-4">
                {activeIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
    </section>
  );
}
