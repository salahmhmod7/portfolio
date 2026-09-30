"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const setT = (x: number, y: number) => {
    const el = ref.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const mx = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const my = (e.clientY - rect.top - rect.height / 2) * 0.25;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setT(mx, my));
  };

  const handleLeave = () => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setT(0, 0));
  };

  const base =
    "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/15 text-ink-primary hover:border-white/30 hover:bg-white/[0.04]";

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(base, styles, className)}
      onClick={onClick}
      role={href ? "link" : "button"}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-block"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return content;
}
