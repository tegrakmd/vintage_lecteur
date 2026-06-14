"use client";
import { MusicPlayer } from "./MusicPlayer";
import { playlist } from "@/data/playlist";
import Image from "next/image";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";

interface LayoutProps {
  children?: React.ReactNode;
}
const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

export function MusicPlayerWrapper() {
  return (
    <div className="min-h-dvh  overflow-hidden flex flex-col  items-center justify-center relative">
      <div className="relative z-10 w-full max-w-md px-4">
        <MusicPlayer tracks={playlist} fallbackCover="/default-cover.jpg" />
      </div>
      {/* <List /> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-[0]">
        <h1 className="text-[25rem] md:text-[60rem] font-chunky-retro font-normal text-white opacity-60 tracking-[-0.02em]  select-none pointer-events-none">
          Retro
        </h1>
      </div>
    </div>
  );
}

export function BorderLeft() {
  return (
    <div className="pointer-events-none absolute top-0 -right-2 bottom-0 z-0 w-2 border-l border-neutral-200 md:-right-6 md:w-6 dark:border-neutral-800"></div>
  );
}
export function BorderRight() {
  return (
    <div className="pointer-events-none absolute top-0 bottom-0 -left-2 z-0 w-2 border-r border-neutral-200 md:-left-6 md:w-6 dark:border-neutral-800"></div>
  );
}

export function List() {
  return (
    <>
      <div className="flex w-full max-w-md flex-col mt-12 gap-6">
        <ItemGroup className="gap-4">
          {music.map((song) => (
            <Item key={song.title} variant="outline" asChild role="listitem">
              <Link href="#">
                <ItemMedia variant="image">
                  <Image
                    src={`/cocover.png`}
                    alt={song.title}
                    width={100}
                    height={100}
                    className="object-cover size-full  "
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="line-clamp-1">
                    {song.title} -{" "}
                    <span className="text-muted-foreground">{song.album}</span>
                  </ItemTitle>
                  <ItemDescription>{song.artist}</ItemDescription>
                </ItemContent>
                <ItemContent className="flex-none text-center">
                  <ItemDescription>{song.duration}</ItemDescription>
                </ItemContent>
              </Link>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </>
  );
}
