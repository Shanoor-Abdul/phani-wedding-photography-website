"use client";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import supabase from "@/lib/supabaseClient";

export default function Gallery() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    async function getPhotos() {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        setPhotos(data);
      }
    }

    getPhotos();
  }, []);

  // 🔥 Extract image URLs for Lightbox
  const images = photos.map((photo) => photo.image_url);

  return (
    <section id="gallery" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Featured Work
        </h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={photo.image_url}
                alt={photo.title || "Wedding"}
                width={500}
                height={700}
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </Masonry>

        <Lightbox
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
}