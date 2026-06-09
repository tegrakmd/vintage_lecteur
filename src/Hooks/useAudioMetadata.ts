"use client";
import { useEffect, useState } from "react";
import type { AudioMetadata } from "@/lib/audio";

export function useAudioMetadata(audioPath: string): AudioMetadata {
  const [metadata, setMetadata] = useState<AudioMetadata>({});

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const res = await fetch(
          `/api/audio-metadata?file=${encodeURIComponent(audioPath)}`
        );
        if (!res.ok) throw new Error("Erreur API");
        const data = await res.json();
        setMetadata({
          title: data.title,
          artist: data.artist,
          coverUrl: data.coverUrl,
        });
      } catch (err) {
        console.warn("Impossible de récupérer les métadonnées", err);
        setMetadata({});
      }
    };
    fetchMetadata();
  }, [audioPath]);

  return metadata;
}
