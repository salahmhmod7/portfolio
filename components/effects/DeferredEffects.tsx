"use client";

import dynamic from "next/dynamic";

// Non-critical, interaction-only effects. Split into separate chunks and
// loaded after hydration so they never block FCP / LCP.
const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);
const MusicPlayer = dynamic(
  () => import("@/components/effects/MusicPlayer").then((m) => m.MusicPlayer),
  { ssr: false },
);

export function DeferredEffects() {
  return (
    <>
      <CustomCursor />
      <MusicPlayer />
    </>
  );
}
