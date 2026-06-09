// hooks/useAudio.ts
"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { useAudioMetadata } from "./useAudioMetadata";
import type { AudioMetadata } from "@/lib/audio";

interface UseAudioReturn {
  isPlaying: boolean;
  togglePlay: () => void;
  metadata: AudioMetadata;
}

export function useAudio(audioPath: string): UseAudioReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const metadata = useAudioMetadata(audioPath);

  useEffect(() => {
    // Crée un nouvel objet Audio à chaque changement de chemin
    const audio = new Audio(audioPath);
    audioRef.current = audio;
    setIsPlaying(false); // reset lecture

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioPath]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  return { isPlaying, togglePlay, metadata };
}
