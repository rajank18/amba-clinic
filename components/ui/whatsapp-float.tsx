"use client";

import React from "react";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1.5 group select-none pointer-events-auto">
      <a
        href="https://wa.me/919586771973?text=Hello%20Amba%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white flex items-center justify-center rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 p-3.5"
        aria-label="Enquire via WhatsApp"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp logo" className="w-full h-full object-contain" />

      </a>
      <span className="text-[9px] font-sans font-bold tracking-wider uppercase text-brand-text bg-brand-background/95 border border-brand-primary/10 py-1 px-2.5 shadow-sm rounded-full backdrop-blur-sm pointer-events-none transition-transform duration-300 group-hover:scale-105">

        Enquire Now
      </span>
    </div>
  );
}
