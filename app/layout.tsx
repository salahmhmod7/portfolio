import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { MusicPlayer } from "@/components/effects/MusicPlayer";
import { AmbientBackground } from "@/components/effects/AmbientBackground";
import { GlobalParticles } from "@/components/effects/GlobalParticles";
import { siteConfig } from "@/data/site";
import { buildMetadata, buildJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  verification: {
    google: "klYhcOTAeXFMmE7o1_yfdKg1KClFchtiX9myaThs9g4",
  },
});
export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-base-900 font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        <AmbientBackground />
        <GlobalParticles density={45} />

        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <CustomCursor />
        <MusicPlayer />
        <span className="sr-only">
          {siteConfig.name} — {siteConfig.tagline}
        </span>
      </body>
    </html>
  );
}