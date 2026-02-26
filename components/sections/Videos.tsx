"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";
import { videos } from "@/lib/videos";

export default function Videos() {
  const swiperRef = useRef<any>(null);

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section id="videos" className="py-32 bg-neutral-50">

      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-neutral-900">
          Wedding Stories
        </h2>
        <p className="mt-6 text-lg text-neutral-600">
          Relive the moments through cinematic storytelling
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="max-w-5xl mx-auto"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-3xl overflow-hidden shadow-xl">

              <video
                src={video.src}
                controls
                autoPlay
                muted
                playsInline
                className="w-full h-[500px] object-cover"
                onEnded={handleVideoEnd}
              />

              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-light text-neutral-900">
                  {video.title}
                </h3>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}