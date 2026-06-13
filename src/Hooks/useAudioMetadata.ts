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

        // Précharge le cover avant de l'afficher
        if (data.coverUrl) {
          const img = new Image();
          img.onload = () => {
            setMetadata({
              title: data.title,
              artist: data.artist,
              coverUrl: data.coverUrl,
            });
          };
          img.onerror = () => {
            // En cas d'erreur de chargement, affiche quand même les métadonnées
            setMetadata({
              title: data.title,
              artist: data.artist,
              coverUrl: data.coverUrl,
            });
          };
          img.src = data.coverUrl;
        } else {
          setMetadata({
            title: data.title,
            artist: data.artist,
          });
        }
      } catch (err) {
        console.warn("Impossible de récupérer les métadonnées", err);
        setMetadata({});
      }
    };
    fetchMetadata();
  }, [audioPath]);

  return metadata;
}
