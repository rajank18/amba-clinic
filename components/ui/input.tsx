import * as React from "react";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, ...props }, ref) => {
    return (
      <div className="w-full relative flex flex-col gap-1.5 font-sans">
        {label && (
          <label className="text-[10px] tracking-widest uppercase text-brand-primary font-medium">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full border-b border-brand-primary/20 bg-transparent py-3 text-sm transition-all duration-300 placeholder:text-brand-text/30 focus:border-brand-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-light",
            error && "border-brand-deep-accent focus:border-brand-deep-accent",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-brand-deep-accent tracking-wide uppercase mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full relative flex flex-col gap-1.5 font-sans">
        {label && (
          <label className="text-[10px] tracking-widest uppercase text-brand-primary font-medium">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[100px] w-full border-b border-brand-primary/20 bg-transparent py-3 text-sm transition-all duration-300 placeholder:text-brand-text/30 focus:border-brand-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-light resize-none",
            error && "border-brand-deep-accent focus:border-brand-deep-accent",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-brand-deep-accent tracking-wide uppercase mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
