import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export const GlassCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { strong?: boolean }
>(({ className, strong, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      strong ? "glass-strong" : "glass",
      "relative rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]",
      className,
    )}
    {...props}
  />
));
GlassCard.displayName = "GlassCard";