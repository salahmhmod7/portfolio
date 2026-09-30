"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { skillCategories } from "@/data/skills";
import {
  Bot,
  Brain,
  Circle,
  Code2,
  Database,
  Eye,
  Languages,
  Server,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Eye,
  Languages,
  Sparkles,
  Database,
  Bot,
  Server,
  Code2,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <SectionGlow color="cyan" position="right" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Breadth with depth."
          description="Not a list of buzzwords — categories I actually work inside across the AI stack."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const IconCmp = iconMap[cat.icon] || Circle;
            return (
              <RevealOnScroll key={cat.title} delay={i * 0.04}>
                <GlassCard className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold">{cat.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <TechBadge key={s}>{s}</TechBadge>
                    ))}
                  </div>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}