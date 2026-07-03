"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

interface TreatmentsProps {
  onBookClick: () => void;
}

export default function Treatments({ onBookClick }: TreatmentsProps) {
  const treatmentList = [
    {
      id: "treatment-1",
      number: "01",
      title: "Constitutional Medicine",
      description: "A comprehensive analysis of ancestral health, metabolic architecture, and psychological profile to identify a singular constitutional remedy. Formulated for chronic autoimmune, systemic, and long-standing physical challenges.",
      timeline: "90-minute initial consultation / 6-week follow-up cycle",
      focus: "Chronic disease, nervous system restoration, deep biological alignment",
    },
    {
      id: "treatment-2",
      number: "02",
      title: "Acute Immune Activation",
      description: "Fast-acting biological stimulation targeting sudden inflammatory phases, seasonal sensitivities, and acute viral recoveries. Utilizes precise micro-diluted mineral and botanical isolates to trigger cellular immunity without side effects.",
      timeline: "30-minute rapid review / Daily active dosing cycle",
      focus: "Allergies, acute inflammations, respiratory strength, digestive recovery",
    },
    {
      id: "treatment-3",
      number: "03",
      title: "Somatic Nervous Calibration",
      description: "Designed specifically to counter persistent burnout, sympathetic nervous system overdrive, and circadian disruption. Integrates cell salt bio-mineral replenishment and cellular hydration support to re-establish sleep architecture.",
      timeline: "60-minute diagnostic session / Bi-weekly calibration",
      focus: "Nervous burnout, sleep quality, cognitive fatigue, emotional stress",
    },
    {
      id: "treatment-4",
      number: "04",
      title: "Generational & Pediatric Care",
      description: "Gentle biological training for developing immune systems. Avoids suppressive drugs, allowing infants and children to safely navigate inflammatory milestones and build long-term physiological resilience.",
      timeline: "45-minute family consultation / Seasonal reviews",
      focus: "Pediatric immunity, digestive development, skin sensitivities",
    },
  ];

  return (
    <section
      id="treatments"
      className="w-full bg-brand-canvas py-24 md:py-36 border-t border-brand-primary/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Treatments List */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-primary">
                02 / The Protocols
              </span>
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text tracking-tight">
                  Bespoke Treatment Paths
                </h2>
              </Reveal>
            </div>

            <Accordion type="single" collapsible defaultValue="treatment-1" className="w-full mt-4">
              {treatmentList.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>
                    <span className="font-mono text-xs text-brand-deep-accent/60 mr-4">{item.number}</span>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-6 pt-2">
                      <p className="text-brand-text/80 leading-relaxed font-light">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light py-4 border-t border-brand-primary/15">
                        <div>
                          <span className="block text-[10px] tracking-widest uppercase font-semibold text-brand-primary mb-1">Timeline</span>
                          <span className="text-brand-text/90 font-sans">{item.timeline}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] tracking-widest uppercase font-semibold text-brand-primary mb-1">Biological Focus</span>
                          <span className="text-brand-text/90 font-sans">{item.focus}</span>
                        </div>
                      </div>
                      <div>
                        <Button variant="accentOutline" size="sm" onClick={onBookClick}>
                          Enquire Now
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: Parallax Editorial Image */}
          <div className="lg:col-span-5 w-full relative z-0 pt-6 lg:pt-16">
            <div className="aspect-[4/5] w-full relative">
              <ParallaxImage
                src="/images/botanical.png"
                alt="Premium raw botanical ingredients and homeopathic vial"
                speed={0.25}
                containerClassName="w-full h-full border border-black/5"
              />
              {/* Small text annotation */}
              <div className="absolute top-4 left-4 z-10 bg-brand-background/60 backdrop-blur-sm py-1.5 px-3 border border-brand-primary/10">
                <span className="font-mono text-[9px] tracking-widest uppercase text-brand-text/80">
                  Active Dilutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
    </section>
  );
}
