"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { projects } from "@/data/projects";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter as never));
  }, [filter]);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <SectionGlow color="blue" position="center" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Seven systems. One direction."
          description="Real projects across ML, CV, NLP, RAG, and AI agents — each built to be understood end-to-end."
        />

        <div className="mt-10">
          <ProjectFilter active={filter} onChange={setFilter} />
        </div>

        <motion.div
          layout
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-sm text-ink-muted">
            No projects match this filter yet.
          </div>
        )}
      </div>
    </section>
  );
}