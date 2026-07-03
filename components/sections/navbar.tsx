"use client";

import React, { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { offset: -90, duration: 1.4 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Treatments", href: "#treatments" },
    { label: "Dr. Makwana", href: "#doctor" },
    { label: "Stories", href: "#stories" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500 py-6 md:py-8",
        scrolled
          ? "bg-brand-sage/80 backdrop-blur-md  py-4 md:py-5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, "#")}
          className="font-serif text-lg md:text-xl tracking-[0.25em] uppercase text-brand-text hover:text-brand-accent transition-colors duration-300 font-semibold"
        >
          Amba Clinic
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative text-[10px] font-medium tracking-widest uppercase text-brand-text/70 hover:text-brand-text transition-colors duration-300 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-accent after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <div className="enquire-btn-wrapper">
            <button onClick={onBookClick} className="enquire-btn">
              {/* Enquire PNG Icon */}
              <img src="/images/enquire.png" alt="Enquire Icon" className="w-4 h-5 object-contain mr-2.5 shrink-0 invert" />
              <div className="enquire-txt-wrapper">
                <div className="enquire-txt-1">
                  <span className="enquire-btn-letter">E</span>
                  <span className="enquire-btn-letter">n</span>
                  <span className="enquire-btn-letter">q</span>
                  <span className="enquire-btn-letter">u</span>
                  <span className="enquire-btn-letter">i</span>
                  <span className="enquire-btn-letter">r</span>
                  <span className="enquire-btn-letter">e</span>
                  <span className="enquire-btn-letter">&nbsp;</span>
                  <span className="enquire-btn-letter">N</span>
                  <span className="enquire-btn-letter">o</span>
                  <span className="enquire-btn-letter">w</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
