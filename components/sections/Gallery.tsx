"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

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
          {images.map((src, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              // onClick={() => setSelectedImage(src)}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={src}
                alt="Wedding"
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