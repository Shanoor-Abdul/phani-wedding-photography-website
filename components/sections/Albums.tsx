"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

interface Album {
  id: string;
  slug: string;
  cover_url: string;
  title: string;
}

export default function Albums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  console.log(albums);

  useEffect(() => {
    async function getAlbums() {
      const { data } = await supabase.from("albums").select("*");
      setAlbums(data || []);
    }
    getAlbums();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {albums.map((album) => (
        <Link key={album.id} href={`/albums/${album.slug}`}>
          <Image src={album.cover_url} alt="" width={800} height={600} />
          <h3>{album.title}</h3>
        </Link>
      ))}
    </div>
  );
}