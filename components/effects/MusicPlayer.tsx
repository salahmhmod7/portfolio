"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play, VolumeX } from "lucide-react";
import { musicConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none"; // don't download music until user presses play
    audio.src = musicConfig.src;
    audio.loop = true;
    audio.muted = true;
    audio.volume = 0.4;
    audio.onerror = () => setAvailable(false);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeAttribute("src");
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.muted = false;
        setMuted(false);
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className={cn(
        "glass-strong fixed bottom-5 right-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105",
      )}
    >
      {!playing ? (
        <Music className="h-5 w-5 text-ink-primary" />
      ) : muted ? (
        <VolumeX className="h-5 w-5 text-ink-primary" />
      ) : (
        <Pause className="h-5 w-5 text-ink-primary" />
      )}
      {playing && (
        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 animate-pulse rounded-full bg-accent-cyan" />
      )}
    </button>
  );
}