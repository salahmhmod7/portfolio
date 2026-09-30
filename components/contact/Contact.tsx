"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig, socialLinks } from "@/data/site";
import { copyToClipboard } from "@/lib/utils";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  instagram: Instagram,
  whatsapp: MessageCircle,
} as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <SectionGlow color="cyan" position="center" />
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent."
          description="Open to collaborations, freelance projects, companies, AI products, and technical discussions."
          align="center"
        />

        <GlassCard strong className="mt-12 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleCopy}
              className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-colors hover:border-white/20"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ink-dim">
                    Email
                  </div>
                  <div className="text-sm font-medium text-ink-primary">
                    {siteConfig.email}
                  </div>
                </div>
              </div>
              <span className="flex items-center gap-2 text-xs text-ink-muted">
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy
                  </>
                )}
              </span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((s) => {
                const Icon = ICONS[s.icon];
                if (!s.href) return null;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-ink-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Send me an email
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}