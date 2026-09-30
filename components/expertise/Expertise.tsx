"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { expertiseJourney } from "@/data/skills";

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      <SectionGlow color="purple" position="left" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Journey"
          title="A path, not a checklist."
          description="From foundations to production systems — the layers I've been moving through, one at a time."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />

          <ol className="space-y-6">
            {expertiseJourney.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`relative flex ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="relative ml-12 w-full max-w-xl rounded-2xl glass p-5 md:ml-0 md:w-[46%]">
                  <span className="absolute -left-9 top-6 flex h-4 w-4 items-center justify-center md:left-auto md:right-[-1.55rem] md:top-6">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent-cyan/30" />
                    <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(94,234,212,0.8)]" />
                  </span>
                  <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-cyan">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}