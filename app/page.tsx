import {
  Compass,
  FlaskConical,
  Hammer,
  Lightbulb,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Expertise } from "@/components/expertise/Expertise";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Certifications } from "@/components/certifications/Certifications";
import { Contact } from "@/components/contact/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const principles = [
  {
    icon: RefreshCw,
    title: "I don't want to stay still",
    body: "I keep learning because the field moves — and so should I. Stagnation is the only real risk.",
  },
  {
    icon: Hammer,
    title: "Build more than I study",
    body: "Understanding comes from trying to make things work. I learn faster when I'm building something real.",
  },
  {
    icon: FlaskConical,
    title: "Curiosity over hype",
    body: "I care about how systems actually work — not just what they claim to do. Depth beats buzzwords.",
  },
  {
    icon: Lightbulb,
    title: "Ideas into systems",
    body: "An idea only becomes valuable when it works. I enjoy the process of taking a concept and turning it into something functioning.",
  },
  {
    icon: Compass,
    title: "Learn from mistakes",
    body: "Errors are the fastest teacher. I read failures carefully, understand the root cause, and move forward.",
  },
  {
    icon: Sparkles,
    title: "Engineering + creativity",
    body: "AI is technical — but it's also craft. I try to bring both to what I build, from architecture down to the details.",
  },
];

function BeyondTheCode() {
  return (
    <section id="beyond" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-purple/[0.06] blur-[130px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Beyond the Code"
          title="How I think about the work."
          description="Not a philosophy essay — just the principles I actually build by."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <RevealOnScroll key={p.title} delay={i * 0.04}>
                <GlassCard className="h-full p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Certifications />
      <BeyondTheCode />
      <Contact />
    </>
  );
}