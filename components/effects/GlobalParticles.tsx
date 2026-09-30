"use client";

import { useEffect, useRef } from "react";

const FRAME_INTERVAL = 1000 / 30; // 30fps is plenty for ambient dust

export function GlobalParticles({ density = 25 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // Mobile GPUs: drastically fewer particles
    const count = isMobile ? Math.min(12, Math.floor(density / 2)) : density;
    if (count === 0) return;

    // DPR 1: halves fill-rate cost vs 1.5x with negligible visual loss
    // for tiny low-alpha dots.
    const dpr = 1;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    };
    const pts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.5 + 0.15,
    }));

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < FRAME_INTERVAL) return;
      last = now;
      if (document.hidden) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,200,255,${p.a})`;
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[9] h-full w-full"
    />
  );
}
