"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectFilters } from "@/data/projects";

export function ProjectFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="scrollbar-none -mx-6 flex gap-2 overflow-x-auto px-6 pb-1">
      {projectFilters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            "relative whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors",
            active === f
              ? "border-transparent text-black"
              : "border-white/10 text-ink-muted hover:border-white/20 hover:text-ink-primary",
          )}
        >
          {active === f && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            />
          )}
          <span className="relative z-10">{f}</span>
        </button>
      ))}
    </div>
  );
}