// import MusicPlayer from "@/components/lecteur";
// <MusicPlayer />
import { MusicPlayerWrapper } from '@/components/music-player/Lecteur';


export default function Home() {
  return (
    <div className="flex w-full flex-col h-screen overflow-hidden  bg-zinc-50 font-sans dark:bg-black">

 
      <MusicPlayerWrapper/>

    </div>
  );
}
