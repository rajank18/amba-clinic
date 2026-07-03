"use client";

import React from "react";
import { Compass, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Reveal, FadeIn } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function Location() {
  const details = [
    {
      icon: Compass,
      label: "Address",
      value: "Toran Residency, 14, Gotri Rd, Chandramauleshwar Nagar, Gotri, Vadodara, Gujarat 390021",
    },
    {
      icon: Calendar,
      label: "Consultation Hours",
      value: "Mon — Sat: 09:00 — 13:00, 16:00 — 20:30 | Sun: 10:00 — 13:00",
    },
    {
      icon: Phone,
      label: "Concierge Telephone",
      value: "+91 (265) 299-0148",
    },
    {
      icon: Mail,
      label: "Electronic Inquiries",
      value: "concierge@ambaclinic.com",
    },
  ];

  return (
    <section
      id="location"
      className="w-full bg-brand-canvas py-24 md:py-36 border-t border-brand-primary/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-primary">
                05 / The Location
              </span>
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text tracking-tight">
                  Location & Coordinates
                </h2>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {details.map((item, idx) => (
                <FadeIn key={item.label} delay={idx * 0.1} className="flex gap-4 border-b border-brand-primary/10 pb-4">
                  <item.icon className="w-5 h-5 text-brand-primary/60 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-primary">
                      {item.label}
                    </span>
                    <span className="text-sm font-light text-brand-text/80 leading-relaxed font-sans">
                      {item.value}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 w-full pt-4 lg:pt-16 flex flex-col gap-4">
            <FadeIn delay={0.3} className="aspect-[16/10] md:aspect-[16/9] w-full border border-brand-primary/10 bg-brand-primary/[0.02] relative overflow-hidden group">
              <iframe
                src="https://maps.google.com/maps?q=22.313091,73.1262568&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amba Clinic Vadodara Map Location"
                className="w-full h-full"
              />
              {/* Fine border decoration framing the map */}
              <div className="absolute inset-0 border border-brand-primary/10 pointer-events-none group-hover:border-brand-accent/25 transition-colors duration-500" />
            </FadeIn>
            <FadeIn delay={0.4} className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-brand-primary/20 text-brand-primary hover:border-brand-accent hover:text-brand-background transition-all"
              >
                <a
                  href="https://www.google.com/maps/dir//Amba+Clinic,+Toran+Residency,+14,+Gotri+Rd,+Chandramauleshwar+Nagar,+Gotri,+Vadodara,+Gujarat+390021/@22.313091,73.1262568,113m/data=!3m1!1e3!4m17!1m7!3m6!1s0x395fc900091f727f:0x9cd4a0ce60fe91a1!2sAmba+Clinic!8m2!3d22.3130689!4d73.12617!16s%2Fg%2F11zkd780ln!4m8!1m0!1m5!1m1!1s0x395fc900091f727f:0x9cd4a0ce60fe91a1!2m2!1d73.12617!2d22.3130689!3e0?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
    </section>
  );
}
