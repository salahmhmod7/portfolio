"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";

export function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const hero = project.images[0];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard className="group h-full overflow-hidden">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden bg-base-800">
            {!imgError && hero ? (
              <Image
                src={hero}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.15),transparent_60%)]">
                <span className="text-xs uppercase tracking-[0.2em] text-ink-dim">
                  {project.tags[0] || "Project"}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-base-900/20 to-transparent" />
          </div>
        </Link>

        <div className="p-5">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.slice(0, 2).map((c) => (
              <TechBadge key={c} className="border-accent-cyan/20 text-accent-cyan/90">
                {c}
              </TechBadge>
            ))}
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-snug">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-ink-muted">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
            {project.technologies.length > 4 && (
              <TechBadge>+{project.technologies.length - 4}</TechBadge>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-primary hover:text-accent-cyan"
            >
              Details <ArrowUpRight className="h-4 w-4" />
            </Link>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted hover:border-white/25 hover:text-ink-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}