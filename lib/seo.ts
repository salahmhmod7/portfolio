import type { Metadata } from "next";
import { siteConfig, socialLinks } from "@/data/site";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  const url = siteConfig.url;
  return {
    metadataBase: new URL(url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,

    // Icons
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },

    // Open Graph (Facebook, WhatsApp, LinkedIn)
    openGraph: {
      type: "website",
      url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: ["/og.png"],
    },

    alternates: { canonical: url },
    robots: { index: true, follow: true },

    ...overrides,
  };
}

export function buildJsonLd() {
  const sameAs = socialLinks
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: "AI Engineer",
        description: siteConfig.description,
        sameAs,
        knowsAbout: [
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "NLP",
          "LLMs",
          "RAG",
          "AI Agents",
        ],
      },
      {
        "@type": "WebSite",
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
      },
    ],
  };
}