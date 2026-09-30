"use client";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

function SectionGlow({
  color = "cyan",
  position = "top",
}: {
  color?: "cyan" | "blue" | "purple";
  position?: "top" | "center" | "bottom" | "left" | "right";
}) {
  const colors = {
    cyan: "bg-accent-cyan/[0.07]",
    blue: "bg-accent-blue/[0.07]",
    purple: "bg-accent-purple/[0.07]",
  };
  const positions = {
    top: "top-0 left-1/2 -translate-x-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
    left: "top-1/2 left-0 -translate-y-1/2",
    right: "top-1/2 right-0 -translate-y-1/2",
  };
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[130px]",
        colors[color],
        positions[position],
      )}
    />
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <SectionGlow color="blue" position="top" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who I Am"
          title="I build intelligent systems — not just use them."
          description="I don't want to remain static. I care about understanding what's under the surface, and turning ideas into working systems."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8">
              <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted">
                <p>
                  I&apos;m <span className="text-ink-primary">Salah Mahmoud</span>, an
                  Information Technology student at Egyptian E-Learning University
                  (ELU), deeply focused on Artificial Intelligence. My journey isn&apos;t
                  limited to coursework — it&apos;s built on continuous self-learning,
                  experiments, and real projects.
                </p>
                <p>
                  I enjoy the process of turning ideas into working systems. I move
                  from data and models to intelligent applications — from
                  Computer Vision and NLP, to LLMs, RAG, tool calling, and full AI
                  agents. I try to understand how these systems work beneath the
                  surface, not just how to call them.
                </p>
                <p>
                  My goal is to become a strong AI Engineer who can ship production
                  AI systems and contribute to meaningful work. I&apos;m also
                  interested in pursuing a Master&apos;s degree in AI in the future.
                </p>
              </div>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:col-span-2">
            <GlassCard className="h-full p-6 sm:p-8">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
                Open to
              </div>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {[
                  "Working with companies & startups",
                  "Freelance projects",
                  "AI products & research collaborations",
                  "Technical discussions & mentorship",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan/80" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}