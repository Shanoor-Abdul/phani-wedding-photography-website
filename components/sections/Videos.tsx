"use client";

import { useEffect, useState, useRef } from "react";
import supabase from "@/lib/supabaseClient";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

interface Video {
  id: string;
  video_url: string;
  title: string;
}

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    async function getVideos() {
      const { data } = await supabase.from("videos").select("*");
      setVideos(data || []);
    }
    getVideos();
  }, []);

  return (
    <Swiper onSwiper={(s) => (swiperRef.current = s)} loop>
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <video src={video.video_url} controls />
          <h3>{video.title}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}