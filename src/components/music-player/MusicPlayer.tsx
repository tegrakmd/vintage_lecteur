// components/music-player/MusicPlayer.tsx
'use client';
import React, { useState, useCallback } from 'react';
import { useClock } from '@/Hooks/useClock';
import { useAudio } from '@/Hooks/useAudio';
import { PlayerScreen } from './PlayerScreen';
import { Controls } from './Controls';

interface MusicPlayerProps {
  tracks: string[];           // Liste des chemins (ex: '/music/titre1.mp3')
  fallbackCover?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  tracks,
  fallbackCover,
}) => {
  const time = useClock();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracks[currentIndex] || tracks[0];

  const { isPlaying, togglePlay, metadata } = useAudio(currentTrack);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  }, [tracks.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
  }, [tracks.length]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f4f5] flex items-center justify-center p-4 select-none">
      <div
        className="w-[380px] bg-[#222222] rounded-[60px] p-[12px] flex flex-col relative transition-all duration-300"
        style={{
          boxShadow:
            '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 2px 3px rgba(255,255,255,0.08), inset 0 -2px 4px rgba(0,0,0,0.6)',
          border: '1px solid #141414',
        }}
      >
        <PlayerScreen
          metadata={metadata}
          isPlaying={isPlaying}
          time={time}
          fallbackCover={fallbackCover}
        />
        <Controls
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      </div>
    </div>
  );
};