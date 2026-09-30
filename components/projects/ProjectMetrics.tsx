"use client";

import { motion } from "framer-motion";
import type { ProjectMetric } from "@/types";

export function ProjectMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="glass rounded-2xl p-4"
        >
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-dim">
            {m.label}
          </div>
          <div className="mt-1.5 text-lg font-semibold text-ink-primary sm:text-xl">
            {m.value}
          </div>
        </motion.div>
      ))}
    </div>
  );
}