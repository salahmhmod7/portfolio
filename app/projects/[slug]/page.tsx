import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectMetrics } from "@/components/projects/ProjectMetrics";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project not found" });
  return buildMetadata({
    title: project.title,
    description: project.description,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const heroImage = project.images[0];
  const galleryImages = project.images.slice(1);

  return (
    <article className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <TechBadge
              key={c}
              className="border-accent-cyan/20 text-accent-cyan/90"
            >
              {c}
            </TechBadge>
          ))}
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">
          {project.longDescription}
        </p>

        {project.github ? (
          <div className="mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/30"
            >
              <Github className="h-4 w-4" /> View on GitHub
            </a>
          </div>
        ) : null}

        {/* Hero image */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-base-800">
          <div className="relative aspect-[16/9]">
            <Image
              src={heroImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Sections */}
        <Section title="Overview">{project.overview}</Section>
        <Section title="Problem">{project.problem}</Section>
        <Section title="Solution">{project.solution}</Section>

        <Section title="Architecture">
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02] p-4 font-mono text-xs text-ink-muted sm:text-sm">
            {project.architecture}
          </div>
        </Section>

        <Section title="Technologies">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </Section>

        <Section title="Features">
          <ul className="space-y-2 text-ink-muted">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan/80" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        {project.pipeline && (
          <Section title="Pipeline">
            <ol className="space-y-2 text-ink-muted">
              {project.pipeline.map((p, i) => (
                <li key={p + i} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {project.results && project.results.length > 0 && (
          <Section title="Results">
            <ProjectMetrics metrics={project.results} />
          </Section>
        )}

        {project.disclaimer && (
          <Section title="Disclaimer">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4 text-sm text-amber-200/90">
              {project.disclaimer}
            </div>
          </Section>
        )}

        {galleryImages.length > 0 && (
          <Section title="Screenshots">
            <ProjectGallery images={galleryImages} title={project.title} />
          </Section>
        )}

        <Section title="Future Improvements">
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.futureImprovements.map((f) => (
              <li key={f} className="text-sm text-ink-muted">
                → {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* Next project */}
        <div className="mt-16 border-t border-white/5 pt-8">
          <div className="text-xs uppercase tracking-[0.2em] text-ink-dim">
            Next project
          </div>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-2 inline-flex items-center gap-2 text-lg font-semibold hover:text-accent-cyan"
          >
            {next.title}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}