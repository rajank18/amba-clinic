"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Gallery from "@/components/sections/gallery";
import Philosophy from "@/components/sections/philosophy";
import Treatments from "@/components/sections/treatments";
import Doctor from "@/components/sections/doctor";
import Stories from "@/components/sections/stories";
import QuoteTransition from "@/components/sections/quote-transition";
import Location from "@/components/sections/location";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Home() {
  const [isBookOpen, setIsBookOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative w-full">
      {/* Editorial Navbar */}
      <Navbar onBookClick={() => setIsBookOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Gallery />
        <Philosophy />
        <Treatments onBookClick={() => setIsBookOpen(true)} />
        <Doctor />
        <Stories />
        <QuoteTransition />
        <Location />
        <Contact inline={true} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Consultation Booking Dialog */}
      <Dialog open={isBookOpen} onOpenChange={setIsBookOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl">
          <DialogHeader className="mb-4">
            <DialogTitle>Enquire Now</DialogTitle>
            <DialogDescription>
              Connect directly via WhatsApp or submit a detailed email enquiry below.
            </DialogDescription>
          </DialogHeader>
          <Contact inline={false} onSuccessClose={() => setIsBookOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Floating WhatsApp Widget */}
      <WhatsAppFloat />
    </div>
  );
}
