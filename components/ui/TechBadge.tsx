import { cn } from "@/lib/utils";

export function TechBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}