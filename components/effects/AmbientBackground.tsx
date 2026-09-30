"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-60 -top-40 h-[700px] w-[700px] rounded-full bg-accent-blue/[0.10] blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.15, 1, 1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-60 top-1/3 h-[800px] w-[800px] rounded-full bg-accent-purple/[0.09] blur-[160px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-60 left-1/3 h-[600px] w-[600px] rounded-full bg-accent-cyan/[0.08] blur-[140px]"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Noise */}
      <div className="noise absolute inset-0" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}