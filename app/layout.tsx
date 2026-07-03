import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/ui/smooth-scroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Amba Clinic — Homeopathic Medicine & Luxury Wellness",
  description: "A premium editorial wellness clinic dedicated to architectural healing, classic homeopathy, and natural rejuvenation. Experience a higher state of health.",
  keywords: ["homeopathy", "luxury wellness clinic", "Amba Clinic", "classical homeopathy", "natural health", "editorial wellness"],
  openGraph: {
    title: "Amba Clinic — Homeopathic Medicine & Luxury Wellness",
    description: "A premium editorial wellness clinic dedicated to architectural healing, classic homeopathy, and natural rejuvenation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} min-h-screen antialiased selection:bg-brand-accent selection:text-white`}
    >
      <body className="min-h-screen flex flex-col bg-brand-background text-brand-text font-sans selection:bg-brand-accent selection:text-white">
        <SmoothScroll>
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
