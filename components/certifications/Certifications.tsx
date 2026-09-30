"use client";

import { Award, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <SectionGlow color="purple" position="top" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning, verified."
          description="Formal certifications alongside continuous self-learning."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <GlassCard className="h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                    {c.status === "Completed" ? (
                      <Award className="h-5 w-5" />
                    ) : (
                      <Clock className="h-5 w-5" />
                    )}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                      c.status === "Completed"
                        ? "border-emerald-400/20 text-emerald-300"
                        : "border-white/15 text-ink-muted"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-dim">
                  {c.date}
                </p>
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-accent-cyan hover:underline"
                  >
                    View credential →
                  </a>
                ) : null}
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}