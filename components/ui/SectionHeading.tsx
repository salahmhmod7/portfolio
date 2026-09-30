import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
          <span className="h-1 w-1 rounded-full bg-accent-cyan" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
