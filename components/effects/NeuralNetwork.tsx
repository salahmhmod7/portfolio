"use client";

import { useEffect, useRef } from "react";

const FRAME_INTERVAL = 1000 / 30; // 30fps: halves O(n²) line work, looks identical

export function NeuralNetwork({ density = 40 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const count = reduced
      ? 0
      : isMobile
        ? Math.min(18, Math.floor(density / 2))
        : density;
    if (count === 0) return;

    const dpr = 1;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let inView = true;

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const createPoints = () => {
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      const newW = Math.max(1, Math.floor(rect.width));
      const newH = Math.max(1, Math.floor(rect.height));

      if (newW === w && newH === h) return false;

      w = newW;
      h = newH;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return true;
    };

    const init = () => {
      const changed = setSize();
      if (changed || pts.length === 0) {
        createPoints();
      }
    };

    const ro = new ResizeObserver(() => {
      const changed = setSize();
      if (changed) {
        for (const p of pts) {
          if (p.x > w) p.x = Math.random() * w;
          if (p.y > h) p.y = Math.random() * h;
        }
      }
    });
    ro.observe(canvas);

    // Pause when hero scrolled out of view — biggest single saving
    // (this canvas is the most expensive loop on the page).
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!inView || document.hidden) {
        last = now;
        return;
      }
      if (now - last < FRAME_INTERVAL) return;
      last = now;
      if (w === 0 || h === 0) return;

      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      const maxDist = Math.min(150, Math.max(100, w * 0.1));
      const maxD2 = maxDist * maxDist;
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          if (dx > maxDist || dx < -maxDist) continue;
          const dy = a.y - b.y;
          if (dy > maxDist || dy < -maxDist) continue;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD2) {
            const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.22;
            ctx.strokeStyle = `rgba(96,165,250,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "rgba(229,231,235,0.75)";
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const rafInit = requestAnimationFrame(() => {
      init();
      raf = requestAnimationFrame(draw);
    });

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rafInit);
      ro.disconnect();
      io.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
