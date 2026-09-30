"use client";

import { useEffect, useRef, useState } from "react";

// Lightweight cursor: single rAF lerp loop, no spring lib, direct
// transform writes (no React re-render per mousemove).
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (isTouch || reduced || !fine) return;
    setEnabled(true);

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let hovering = false;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const dot = dotRef.current;
      if (dot) dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      hovering = Boolean(el.closest("a, button, [role='button']"));
    };
    const loop = () => {
      raf = requestAnimationFrame(loop);
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      const ring = ringRef.current;
      if (ring) {
        const s = hovering ? 44 : 28;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        ring.style.width = `${s}px`;
        ring.style.height = `${s}px`;
      }
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      >
        <div
          ref={ringRef}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 opacity-40"
          style={{ width: 28, height: 28 }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden md:block"
      >
        <div ref={dotRef}>
          <div className="-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </>
  );
}
