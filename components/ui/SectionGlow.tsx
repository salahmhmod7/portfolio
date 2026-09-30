import { cn } from "@/lib/utils";

export function SectionGlow({
  className,
  color = "cyan",
  position = "center",
}: {
  className?: string;
  color?: "cyan" | "blue" | "purple";
  position?: "top" | "center" | "bottom" | "left" | "right";
}) {
  const colors = {
    cyan: "bg-accent-cyan/[0.07]",
    blue: "bg-accent-blue/[0.07]",
    purple: "bg-accent-purple/[0.07]",
  };
  const positions = {
    top: "top-0 left-1/2 -translate-x-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
    left: "top-1/2 left-0 -translate-y-1/2",
    right: "top-1/2 right-0 -translate-y-1/2",
  };
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[130px]",
        colors[color],
        positions[position],
        className,
      )}
    />
  );
}