"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-70">
        <NeuralNetwork density={70} />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.14),transparent_60%)]" />

      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
            Available for collaborations & opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-lg text-ink-muted sm:text-xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 font-display text-2xl font-medium tracking-tight text-ink-primary sm:text-3xl"
          >
            {siteConfig.tagline}
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-accent-cyan align-middle" />
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href="#projects">
              <span className="flex items-center gap-2">
                View My Work <ArrowRight className="h-4 w-4" />
              </span>
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Let&apos;s Connect
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim hover:text-ink-primary"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}