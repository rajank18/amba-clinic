"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans text-xs tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden relative group",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-brand-background hover:bg-brand-deep-accent hover:text-white border border-transparent",
        accent:
          "bg-brand-accent text-brand-background hover:bg-brand-deep-accent hover:text-white border border-transparent",
        outline:
          "border border-brand-primary/30 text-brand-primary bg-transparent hover:border-brand-primary hover:bg-brand-primary hover:text-brand-background",
        accentOutline:
          "border border-brand-accent/30 text-brand-accent bg-transparent hover:border-brand-accent hover:bg-brand-accent hover:text-brand-background",
        ghost:
          "text-brand-text bg-transparent hover:bg-black/5 hover:text-brand-deep-accent",
        link: "text-brand-primary underline-offset-4 hover:underline bg-transparent p-0",
      },
      size: {
        default: "h-11 px-8 py-2 rounded-none",
        sm: "h-9 px-6 py-1.5 rounded-none text-[10px]",
        lg: "h-14 px-10 py-3 rounded-none text-sm",
        icon: "h-10 w-10 rounded-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, magnetic = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // pull multiplier (0.35 is good for subtle magnet)
      setPosition({ x: x * 0.35, y: y * 0.35 });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    // Combine external ref with internal ref
    const combinedRef = (node: HTMLButtonElement | null) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
      (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    return (
      <motion.button
        ref={combinedRef as any}
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={magnetic ? { x: position.x, y: position.y } : undefined}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center justify-center gap-2 overflow-hidden">
          {children}
        </span>
        {/* Subtle reflection overlay on hover */}
        <span className="absolute inset-0 z-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
