export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Gradient orbs — pure CSS transform animations (compositor thread,
          zero JS per frame). Smaller radii keep blur compositing cheap. */}
      <div className="orb orb-a absolute -left-60 -top-40 h-[560px] w-[560px] rounded-full bg-accent-blue/[0.10] blur-[120px]" />
      <div className="orb orb-b absolute -right-60 top-1/3 h-[640px] w-[640px] rounded-full bg-accent-purple/[0.09] blur-[130px]" />
      <div className="orb orb-c absolute -bottom-60 left-1/3 h-[480px] w-[480px] rounded-full bg-accent-cyan/[0.08] blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Noise */}
      <div className="noise absolute inset-0" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
