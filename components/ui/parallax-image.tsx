"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // 0.1 to 0.9 range (higher = more parallax motion)
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.4,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    // Movement calculation
    const yShift = speed * 15; // Shift percentage range

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -yShift },
        {
          yPercent: yShift,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert(); // clean up ScrollTrigger contexts cleanly in React
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative select-none bg-black/5", containerClassName)}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full h-full object-cover scale-120 will-change-transform",
          className
        )}
      />
    </div>
  );
}
