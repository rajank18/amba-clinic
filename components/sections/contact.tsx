"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal, FadeIn } from "@/components/ui/reveal";

// Zod schema matching requested fields
const enquireSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid contact number"),
  concern: z.string().min(10, "Please outline your query (min. 10 characters)"),
});

type EnquireFormValues = z.infer<typeof enquireSchema>;

interface ContactProps {
  inline?: boolean;
  onSuccessClose?: () => void;
}

// Custom official WhatsApp SVG Icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.109-2.882-6.974C16.593 1.91 14.121.884 11.5.884c-5.44 0-9.865 4.42-9.869 9.858-.001 1.761.459 3.479 1.332 5.006L1.93 21.085l5.228-1.371c.001-.001.002-.001.003 0z" />
  </svg>
);

export default function Contact({ inline = true, onSuccessClose }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquireFormValues>({
    resolver: zodResolver(enquireSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      concern: "",
    },
  });

  const onSubmit = async (data: EnquireFormValues) => {
    // Simulate server post
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Enquiry registered:", data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    if (onSuccessClose) {
      onSuccessClose();
    }
  };

  const formContent = (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 w-full items-stretch">
      {/* Left Column: Enquire using WhatsApp */}
      <div className="md:col-span-5 flex flex-col border-b border-brand-primary/10 pb-8 md:border-b-0 md:border-r md:border-brand-primary/10 md:pr-12 md:pb-0">
        <div className="mb-6">
          <h4 className="font-serif text-lg md:text-xl text-brand-text leading-tight">Instant Chat</h4>
          <span className="text-xs font-light text-brand-text/50 block mt-0.5">
            Contact us using WhatsApp
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 border border-brand-primary/10 bg-brand-primary/[0.01] hover:bg-brand-primary/[0.02] transition-all duration-300 text-center group min-h-[250px]">
          <div className="w-14 h-14 rounded-none border border-brand-primary/15 flex items-center justify-center mb-6 overflow-hidden bg-white/20 p-3.5 transition-all duration-500">
            <img src="/images/whatsapp.png" alt="WhatsApp logo" className="w-full h-full object-contain" />
          </div>
          <h5 className="font-sans text-xs font-semibold tracking-wider uppercase text-brand-text mb-2">WhatsApp Direct</h5>
          <span className="text-[10px] font-sans font-light tracking-wide text-brand-primary/60 mb-6 block">
            Response within minutes
          </span>
          <p className="font-sans font-light text-xs text-brand-text/60 leading-relaxed mb-6 max-w-[200px]">
            Connect directly with our clinic representative for instantaneous responses.
          </p>
          <Button variant="accentOutline" size="sm" asChild>
            <a
              href="https://wa.me/919586771973?text=Hello%20Amba%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-widest font-sans"
            >
              Chat Direct
            </a>
          </Button>
        </div>
      </div>

      {/* Right Column: Enquire using Mail Form */}
      <div className="md:col-span-7 flex flex-col justify-between pl-0 md:pl-4">
        <div className="mb-6">
          <h4 className="font-serif text-lg md:text-xl text-brand-text leading-tight">Email Enquiry</h4>
          <span className="text-xs font-light text-brand-text/50 block mt-0.5">
            Contact us using Email
          </span>
        </div>
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="enquire-form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  placeholder="Evelyn"
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
                <Input
                  label="Last Name"
                  placeholder="Carter"
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="evelyn@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  label="Contact Number"
                  type="tel"
                  placeholder="+91 98980 12345"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>

              <Textarea
                label="How can we help you?"
                placeholder="Share details of your symptoms or wellness requirements..."
                error={errors.concern?.message}
                {...register("concern")}
              />

              <div className="mt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="default"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting enquiry..." : "Submit Enquiry"}
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="enquire-success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center text-center py-10 px-6 border border-brand-primary/10 bg-brand-primary/[0.01]"
            >
              <div className="w-12 h-12 border border-brand-accent flex items-center justify-center mb-6 text-brand-accent animate-pulse">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-brand-text mb-3">
                Enquiry Registered
              </h3>
              <p className="font-sans font-light text-xs md:text-sm leading-relaxed text-brand-text/70 max-w-sm mb-6">
                Thank you for reaching out. We have received your email enquiry, and our concierge will contact you via email or phone within 24 hours.
              </p>
              <Button variant="outline" size="sm" onClick={handleReset}>
                Close Window
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (!inline) {
    return <div className="w-full">{formContent}</div>;
  }

  return (
    <section
      id="contact"
      className="w-full bg-brand-canvas py-24 md:py-36 border-t border-brand-primary/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Text */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-deep-accent/80">
              06 / Clinic Enquiries
            </span>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text tracking-tight">
                Begin your Restoration
              </h2>
            </Reveal>
            <p className="font-sans font-light text-sm md:text-base leading-relaxed text-brand-text/75 mt-2">
              Connect directly with us to explore treatment matching. Choose between WhatsApp instant messaging or our detailed email registry.
            </p>
          </div>

          {/* Right Column Form & WhatsApp Panel */}
          <div className="lg:col-span-8 w-full pt-4 lg:pt-16">
            {formContent}
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
      <div className="absolute right-6 md:right-12 top-0 w-[1px] h-full bg-brand-primary/10 pointer-events-none" />
    </section>
  );
}
