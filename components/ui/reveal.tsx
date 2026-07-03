"use client";

import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function Reveal({
  children,
  width = "fit-content",
  delay = 0.15,
  duration = 0.8,
  y = 30,
  className,
}: RevealProps) {
  return (
    <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration,
          delay,
          ease: [0.25, 1, 0.5, 1], // premium cubic bezier
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0.2,
  duration = 0.8,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
