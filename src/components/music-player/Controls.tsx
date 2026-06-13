import React from "react";
import { PlayIcon } from "./icons/PlayIcon";
import { PauseIcon } from "./icons/PauseIcon";
import { FastForwardIcon } from "./icons/FastForwardIcon";
import { RewindIcon } from "./icons/RewindIcon";

interface ControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const buttonStyle: React.CSSProperties = {
  boxShadow:
    "inset 0px 1.5px 0px rgba(255, 255, 255, 0.08), inset 0px -2px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0,0,0,0.5)",
};

export const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
}) => {
  return (
    <>
      {/* Grille haut-parleur */}
      <div className="w-full h-9 flex items-center justify-center px-6">
        <div
          className="w-full h-4.5 opacity-40"
          style={{
            backgroundImage: "radial-gradient(#000 55%, transparent 55%)",
            backgroundSize: "5px 5px",
          }}
        />
      </div>
      {/* Conteneur boutons */}
      <div
        className="h-25 w-full bg-[#121212] rounded-t-[26px] rounded-b-[50px] p-0.5 flex gap-0.75"
        style={{
          boxShadow:
            "inset 0 4px 10px rgba(0,0,0,0.7), 0 1px 1px rgba(255,255,255,0.06)",
        }}>
        <button
          onClick={onPrev}
          className="flex-1 bg-[#262626] rounded-tl-[25px] rounded-r-[12px] rounded-bl-[50px] flex items-center justify-center active:scale-[0.97] transition-all duration-75 hover:bg-[#2a2a2a]"
          style={buttonStyle}>
          <div className="opacity-80 hover:opacity-100">
            <RewindIcon />
          </div>
        </button>

        <button
          onClick={onTogglePlay}
          className="flex-1 bg-[#262626] rounded-[10px] flex items-center justify-center active:scale-[0.97] transition-all duration-75 hover:bg-[#2a2a2a]"
          style={buttonStyle}>
          <div className="opacity-90 hover:opacity-100 drop-shadow-md">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>
        </button>

        <button
          onClick={onNext}
          className="flex-1 bg-[#262626] rounded-tr-[25px] rounded-l-[12px] rounded-br-[50px] flex items-center justify-center active:scale-[0.97] transition-all duration-75 hover:bg-[#2a2a2a]"
          style={buttonStyle}>
          <div className="opacity-80 hover:opacity-100">
            <FastForwardIcon />
          </div>
        </button>
      </div>
    </>
  );
};
