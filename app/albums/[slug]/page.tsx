"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import supabase from "@/lib/supabaseClient";
import ParallaxImage from "@/components/ui/ParallaxImage";
import AlbumHero from "@/components/ui/AlbumHero";

export default function AlbumPage() {
  const { slug } = useParams();

  const [album, setAlbum] = useState<any>(null);

  useEffect(() => {
    async function fetchAlbum() {
      const { data, error } = await supabase
        .from("albums")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.log(error);
      } else {
        setAlbum(data);
      }
    }

    fetchAlbum();
  }, [slug]);

  if (!album) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <main className="bg-white text-neutral-900">
      <AlbumHero
        title={album.title}
        date={album.date}
        cover={album.cover_url}
      />

      {/* 🔥 USE album.images DIRECTLY */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-24">
        {album.images?.map((img: string, index: number) => {
          if (index % 3 === 0) {
            return (
              <ParallaxImage
                key={index}
                src={img}
                alt={`Wedding ${index + 1}`}
              />
            );
          }

          return (
            <div key={index} className="grid md:grid-cols-2 gap-8">
              <ParallaxImage
                src={img}
                alt={`Wedding ${index + 1}`}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}