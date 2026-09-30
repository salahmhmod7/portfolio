"use client";

import { useEffect, useRef } from "react";

export function NeuralNetwork({ density = 60 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const count = reduced
      ? Math.floor(density / 3)
      : isMobile
        ? Math.floor(density / 2)
        : density;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let paused = false;

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

    // أول ما نعرف الأبعاد الصح، نعمل النقاط
    const init = () => {
      const changed = setSize();
      if (changed || pts.length === 0) {
        createPoints();
      }
    };

    // ResizeObserver: لما الـ container يتغيّر حجمه، نعيد الحساب
    const ro = new ResizeObserver(() => {
      const changed = setSize();
      if (changed) {
        // اعد توزيع النقاط على الأبعاد الجديدة
        for (const p of pts) {
          if (p.x > w) p.x = Math.random() * w;
          if (p.y > h) p.y = Math.random() * h;
        }
      }
    });
    ro.observe(canvas);

    // ننتظر فريم عشان الـ layout يخلص
    const rafInit = requestAnimationFrame(() => {
      init();
      draw();
    });

    const draw = () => {
      if (paused) return;
      if (w === 0 || h === 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // حركة
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // الوصلات
      const maxDist = Math.min(150, Math.max(100, w * 0.1));
      const maxD2 = maxDist * maxDist;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD2) {
            const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.22;
            ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // النقاط
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(229,231,235,0.75)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      paused = document.hidden;
      if (!paused) draw();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rafInit);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
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