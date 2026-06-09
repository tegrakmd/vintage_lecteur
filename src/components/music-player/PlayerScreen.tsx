import React from 'react';
import { cn } from '@/lib/utils';
import type { AudioMetadata } from '@/lib/audio';

interface PlayerScreenProps {
  metadata: AudioMetadata;
  isPlaying: boolean;
  time: string;
  fallbackCover?: string;
}

export const PlayerScreen: React.FC<PlayerScreenProps> = ({
  metadata,
  isPlaying,
  time,
  fallbackCover = '/default-cover.jpg',
}) => {
  const cover = metadata.coverUrl || fallbackCover;

  return (
    <div className="relative w-full h-[220px] bg-black rounded-t-[46px] rounded-b-[18px] overflow-hidden border-b border-[#111] shadow-inner">
      <img
        src={cover}
        alt="Pochette"
        className={cn(
          'w-full h-full object-cover duration-2000 ease-out',
          isPlaying && 'scale-100'
        )}
      />
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      <div
        className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white"
        style={{ fontFamily: '"Courier New", Courier, monospace', letterSpacing: '0.05em' }}
      >
        <div className="flex items-center gap-2 max-w-[70%]">
          <div
            className={cn(
              'shrink-0 w-[8px] h-[8px] rounded-full bg-[#e53e3e] transition-all duration-300',
              isPlaying ? 'shadow-[0_0_8px_rgba(229,62,62,0.8)] animate-pulse' : 'opacity-40'
            )}
          />
          <span className="text-[13px] font-bold text-white/95 drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
            {isPlaying ? 'Playing' : 'Paused'} {metadata.title ? `- ${metadata.title}` : ''}
          </span>
        </div>
        <span className="text-[12px] font-bold text-white/90 drop-shadow-md shrink-0">
          {time}
        </span>
      </div>
    </div>
  );
};