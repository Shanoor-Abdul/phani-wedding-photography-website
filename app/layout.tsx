import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import PageTransition from "@/components/ui/PageTransition";
import Header from "@/components/layout/Header";
import FloatingCTA from "@/components/ui/FloatingCTA";
import GrainOverlay from "@/components/ui/GrainOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Phani Photography | Wedding & Event Photographer",
  description:
    "Luxury wedding photography capturing Hindu, Christian, Muslim weddings, outdoor shoots, birthday celebrations, and candid portraits.",
  keywords: [
    "Wedding Photographer",
    "Hindu Wedding Photography",
    "Christian Wedding Photography",
    "Muslim Wedding Photography",
    "Outdoor Photoshoot",
    "Birthday Photography",
    "Candid Photographer",
  ],
  openGraph: {
    title: "Phani Photography",
    description:
      "Capturing timeless love stories with elegance and emotion.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#f8f5f1] text-neutral-800 antialiased`}
      >
        {/* Soft Grain Overlay */}
        <GrainOverlay />

        <Header />

        <PageTransition>{children}</PageTransition>

        <FloatingCTA />
      </body>
    </html>
  );
}