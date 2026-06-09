'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Icônes SVG avec strokeLinejoin="round" pour adoucir les pointes
const IconeRetourRapide = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
    strokeLinejoin="round"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 5L6.5 12L17 19V5Z" />
    <line x1="4" y1="5" x2="4" y2="19" strokeWidth="2.5" />
  </svg>
);

const IconeLecture = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 4.5L20 12L7 19.5V4.5Z" />
  </svg>
);

const IconePause = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="4.5" width="4" height="15" rx="1" />
    <rect x="14" y="4.5" width="4" height="15" rx="1" />
  </svg>
);

const IconeAvanceRapide = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
    strokeLinejoin="round"
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 5L17.5 12L7 19V5Z" />
    <line x1="20" y1="5" x2="20" y2="19" strokeWidth="2.5" />
  </svg>
);

export default function MusicPlayer() {
  const [enLecture, setEnLecture] = useState(false);
  const [heureActuelle, setHeureActuelle] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  // La cover de votre choix
  const youtubeVideoId = 'H7jQxZwKhZo';
  const coverUrl = `/smile.jpg`;
  const audioDemoUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

  // Mettre à jour l'horloge
  useEffect(() => {
    const majHeure = () => {
      const date = new Date();
      let heures = date.getHours();
      let minutes = date.getMinutes();
      const ampm = heures >= 12 ? 'pm' : 'am';
      heures = heures % 12;
      heures = heures ? heures : 12;

      minutes = Number(minutes < 10 ? '0' + minutes : minutes);
      setHeureActuelle(
        `${heures < 10 ? '0' + heures : heures}:${minutes} ${ampm}`
      );
    };
    majHeure();
    const interval = setInterval(majHeure, 60000);
    return () => clearInterval(interval);
  }, []);

  // Fonction infaillible avec le tag HTML5 <audio>
  const basculerLecture = () => {
    if (audioRef.current) {
      if (enLecture) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setEnLecture(!enLecture);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] w-full flex items-center justify-center p-4 select-none">
      {/* Lecteur audio HTML5 natif (Garantit que le son marche !) */}
      <audio
        ref={audioRef}
        src={audioDemoUrl}
        onEnded={() => setEnLecture(false)}
      />
      {/* Boîtier principal de l'appareil */}
      <div
        className="w-[380px] bg-[#222222] rounded-[60px] p-[12px] flex flex-col relative transition-all duration-300"
        style={{
          boxShadow:
            '0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 2px 3px rgba(255,255,255,0.08), inset 0 -2px 4px rgba(0,0,0,0.6)',
          border: '1px solid #141414',
        }}
      >
        {/* Zone de l'écran */}
        <div className="relative w-full h-[230px] bg-black rounded-t-[46px] rounded-b-[18px] overflow-hidden group border-b border-[#111] shadow-inner">
          {/* Cover de la vidéo YouTube avec filtres retro */}
          <img
            src={coverUrl}
            alt="Pochette YouTube"
            className={cn(
              'w-full h-full object-cover opacity-90 sepia-[.2] hue-rotate-[-15deg] saturate-[.8] transition-transform duration-[2000ms] ease-out',
              enLecture ? 'scale-110' : 'scale-100'
            )}
          />

          {/* Effet d'écran cathodique (scanlines) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] mix-blend-overlay" />

          {/* Superposition de l'écran pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Texte d'information de l'écran */}
          <div
            className="absolute bottom-3  left-4 right-4 flex justify-between items-center text-white"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: '0.05em',
            }}
          >
            <div className="flex items-center gap-2 max-w-[70%]">
              {/* Point rouge animé */}
              <div
                className={cn(
                  'shrink-0 w-[8px] h-[8px] rounded-full bg-[#e53e3e] transition-all duration-300',
                  enLecture
                    ? 'shadow-[0_0_8px_rgba(229,62,62,0.8)] animate-pulse'
                    : 'opacity-40'
                )}
              />
              <span className="text-[13px] font-bold text-white/95 drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
                {enLecture ? 'Playing' : 'Paused'}
              </span>
            </div>
            <span className=" font-semibold text-white/90 drop-shadow-md text-xs shrink-0">
              {heureActuelle}
            </span>
          </div>
        </div>

        {/* Zone de la grille du haut-parleur */}
        <div className="w-full h-[36px] flex items-center justify-center px-1 my-1">
          <div
            className="w-full h-[24px] opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#000 55%, transparent 55%)',
              backgroundSize: '5px 5px',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Conteneur en retrait des boutons */}
        <div
          className="h-[100px] w-full bg-[#121212] rounded-t-[26px] rounded-b-[50px] p-[2px] flex gap-[3px]"
          style={{
            boxShadow:
              'inset 0 4px 10px rgba(0,0,0,0.7), 0 1px 1px rgba(255,255,255,0.06)',
          }}
        >
          {/* Bouton Précédent */}
          <button
            className="flex-1 bg-[#262626] rounded-tl-[25px] rounded-r-[10px] rounded-bl-[50px] flex items-center justify-center relative active:scale-[0.97] transition-all duration-75 hover:bg-[#2a2a2a] cursor-pointer"
            style={{
              boxShadow:
                'inset 0px 1.5px 0px rgba(255, 255, 255, 0.08), inset 0px -2px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            <div className="opacity-80 hover:opacity-100 transition-opacity drop-shadow-md">
              <IconeRetourRapide />
            </div>
          </button>

          {/* Bouton Lecture/Pause */}
          <button
            onClick={basculerLecture}
            className="flex-1 bg-[#262626] rounded-[10px] flex items-center justify-center relative active:scale-[0.97] transition-all duration-75 hover:bg-[#2a2a2a] cursor-pointer"
            style={{
              boxShadow:
                'inset 0px 1.5px 0px rgba(255, 255, 255, 0.08), inset 0px -2px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            <div
              className={cn(
                'opacity-90 hover:opacity-100 transition-opacity drop-shadow-md',
                !enLecture && 'ml-1'
              )}
            >
              {enLecture ? <IconePause /> : <IconeLecture />}
            </div>
          </button>

          {/* Bouton Suivant */}
          <button
            className="flex-1 bg-[#262626] rounded-tr-[25px] rounded-l-[10px] rounded-br-[50px] flex items-center justify-center relative active:scale-[0.97] transition-all duration-75 hover:bg-[#2a2a2a] cursor-pointer"
            style={{
              boxShadow:
                'inset 0px 1.5px 0px rgba(255, 255, 255, 0.08), inset 0px -2px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            <div className="opacity-80 hover:opacity-100 transition-opacity drop-shadow-md">
              <IconeAvanceRapide />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}