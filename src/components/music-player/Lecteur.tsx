
'use client';

import { MusicPlayer } from './MusicPlayer';
import { playlist } from '@/data/playlist';

export function MusicPlayerWrapper() {
  return <MusicPlayer tracks={playlist} fallbackCover="/default-cover.jpg" />;
}