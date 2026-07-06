"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Reveal } from "@/components/ui/reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const clinicImages = [

  { src: "/images/clinic/main-desk.webp" },
  { src: "/images/clinic/bed.webp" },
  { src: "/images/clinic/gate.webp" },
  { src: "/images/clinic/desk.webp" },

];

// const clinicImages = [
//   { src: "/images/clinic/outdoor.webp", alt: "Amba H.Q. Serene Exterior Layout" },
//   { src: "/images/clinic/main-desk.webp", alt: "Amba Clinic Reception Main Desk Area" },
//   { src: "/images/clinic/bed.webp", alt: "Restorative treatment consultation room" },
//   { src: "/images/clinic/gate.webp", alt: "Amba Clinic Gate & Entrance Architecture" },
//   { src: "/images/clinic/desk.webp", alt: "Consultation desk space" },
//   { src: "/images/clinic/outdoor (2).webp", alt: "Veranda and surrounding greenery" },
// ];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-brand-canvas py-24 md:py-32 border-t border-brand-primary/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-primary">
              Sanctuary / The Space
            </span>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text tracking-tight">
                Architectural Space
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans font-light text-xs md:text-sm text-brand-text/70 leading-relaxed max-w-lg">
              A physical extension of our classical philosophy, designed to re-establish spatial and mental equilibrium. Every line, raw texture, and shadow is curated to foster quiet recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Wide Carousel Wrapper */}
      <div className="max-w-[60vw] mx-auto w-full mt-12 relative">
        <div className="border border-brand-primary/15 p-1.5 bg-brand-canvas/30 backdrop-blur-sm shadow-sm relative overflow-hidden">
          <div className="aspect-[4/3] md:aspect-[16/10] w-full relative overflow-hidden bg-brand-canvas/10 rounded-none">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              speed={1000}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
                bulletClass: "custom-swiper-bullet",
                bulletActiveClass: "custom-swiper-bullet-active",
              }}
              className="w-full h-full"
            >
              {clinicImages.map((image, i) => (
                <SwiperSlide key={i} className="relative w-full h-full">
                  <img
                    src={image.src}
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Subtle caption overlay */}
                  <div className="absolute bottom-4 left-6 z-10 hidden sm:block">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 bg-black/25 backdrop-blur-sm px-3 py-1.5 border border-white/5">
                      {image.alt}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper Custom Pagination Bullet Dots */}
            <div className="custom-swiper-pagination flex items-center justify-center gap-1.5 absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5" />
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/5 pointer-events-none" />
    </section>
  );
}
