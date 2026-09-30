import type { SocialLink } from "@/types";

export const siteConfig = {
  name: "Salah Mahmoud",
  tagline: "Building Intelligence",
  title: "Salah Mahmoud | Building Intelligence",
  role: "AI Engineer | LLMs | Agents | Computer Vision",
  description:
    "Salah Mahmoud — AI Engineer focused on Machine Learning, Deep Learning, Computer Vision, NLP, LLMs, RAG, and AI Agents. Building real intelligent systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://salah-mahmoud.vercel.app",  email: "flaysefeco.1@gmail.com",
  keywords: [
    "Salah Mahmoud",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "LLMs",
    "RAG",
    "AI Agents",
    "Generative AI",
    "Portfolio",
  ],
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201103058041",
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/salahmhmod7",
    icon: "instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/salahmhmod7",
    icon: "github",
  },
  { label: "LinkedIn", href: "", icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
];

export const musicConfig = {
  src: "/audio/background-music.mp3",
  title: "I'm Just a Bit Tired Give Me a Sec",
  autoplay: false,
} as const;

export const analyticsConfig = {
  domain: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN || "",
  id: process.env.NEXT_PUBLIC_ANALYTICS_ID || "",
  enabled: Boolean(
    process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN ||
      process.env.NEXT_PUBLIC_ANALYTICS_ID,
  ),
} as const;