"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { FadeIn } from "@/components/ui/reveal";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-forest-foot pt-24 pb-12 border-t border-brand-canvas/10 px-6 md:px-12 w-full overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Massive Editorial Brand Headline */}
        <div className="w-full flex justify-center py-4 border-b border-brand-canvas/10 select-none overflow-hidden">
          <h2 className="font-serif text-2xl sm:text-[2vw] md:text-[8vw] leading-none tracking-[0.12em] sm:tracking-[0.2em] uppercase text-brand-canvas/10 text-center font-bold translate-y-4">
            Amba Clinic
          </h2>
        </div>

        {/* Secondary footer columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Bio info */}
          <div className="sm:col-span-2 md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
            <span className="font-serif text-xl md:text-2xl text-white tracking-tight">
              Re-establishing equilibrium.
            </span>
            <p className="font-sans font-light text-xs md:text-sm text-brand-canvas/70 leading-relaxed max-w-sm">
              Classical homeopathy practiced with laboratory precision. Amba is an architectural clinic dedicated to high-potency micro-immunology and generational health.
            </p>
          </div>

          {/* Links column 1 */}
          <div className="sm:col-span-1 md:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-canvas/80 font-mono">
              Clinic Navigation
            </span>
            <ul className="flex flex-col items-center sm:items-start gap-2.5 text-xs font-light text-white/70">
              <li>
                <a href="#philosophy" className="hover:text-brand-canvas transition-colors duration-300">
                  Origin Philosophy
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-brand-canvas transition-colors duration-300">
                  Treatment Protocols
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-brand-canvas transition-colors duration-300">
                  Dr. Maheshwari Makwana
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-brand-canvas transition-colors duration-300">
                  Patient Journals
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-canvas transition-colors duration-300">
                  Clinic Location
                </a>
              </li>
            </ul>
          </div>

          {/* Links column 2 (Socials / Legals) */}
          <div className="sm:col-span-1 md:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-canvas/80 font-mono">
              External / Inquiries
            </span>
            <ul className="flex flex-col items-center sm:items-start gap-2.5 text-xs font-light text-white/70">
              <li>
                <a href="#" className="hover:text-brand-canvas transition-colors duration-300">
                  Instagram Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-canvas transition-colors duration-300">
                  Vimeo Archives
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-canvas transition-colors duration-300">
                  Medical Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-canvas transition-colors duration-300">
                  Privacy Charter
                </a>
              </li>
            </ul>
          </div>

          {/* Controls */}
          <div className="sm:col-span-2 md:col-span-2 flex justify-center sm:justify-start md:justify-end items-start pt-2">
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-white border border-white/20 hover:border-brand-canvas hover:text-brand-canvas transition-colors duration-300 group cursor-pointer py-2.5 px-4"
            >
              Top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-canvas/10 pt-8 font-mono text-[9px] tracking-[0.2em] text-brand-canvas/50 uppercase">
          <span>&copy; {new Date().getFullYear()} Amba Clinic. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Designed by Antigravity / Site of the Day
          </span>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-canvas/5 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-canvas/5 pointer-events-none" />
    </footer>
  );
}
