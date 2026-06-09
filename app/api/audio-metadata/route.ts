import { NextRequest, NextResponse } from "next/server";
import { parseFile, selectCover } from "music-metadata";
import path from "path";
import fs from "fs";
import { playlist } from "@/data/playlist";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filePath =
    searchParams.get("file") ||
    playlist[Math.floor(Math.random() * playlist.length)]; // ex: /music/ma-chanson.mp3

  if (!filePath) {
    return NextResponse.json(
      { error: "Paramètre file manquant" },
      { status: 400 }
    );
  }

  // Sécurise l'accès : interdit de sortir de public
  const safePath = path.join(process.cwd(), "public", filePath);
  if (!safePath.startsWith(path.join(process.cwd(), "public"))) {
    return NextResponse.json({ error: "Chemin non autorisé" }, { status: 403 });
  }

  if (!fs.existsSync(safePath)) {
    return NextResponse.json({ error: "Fichier introuvable" }, { status: 404 });
  }

  try {
    const metadata = await parseFile(safePath);
    const cover = selectCover(metadata.common.picture); // prend la première cover

    let coverUrl: string | undefined = undefined;
    if (cover) {
      const base64 = Buffer.from(cover.data).toString("base64");
      coverUrl = `data:${cover.format};base64,${base64}`;
    }

    return NextResponse.json({
      title: metadata.common.title,
      artist: metadata.common.artist,
      coverUrl,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erreur lors de la lecture des métadonnées" },
      { status: 500 }
    );
  }
}
