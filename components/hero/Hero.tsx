"use client";
// we will use hero swiper in the home page in future present hero with our brand logo we uisng. 
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero.png",
    title: "Hindu • Christian • Muslim Weddings",
    subtitle: "Capturing sacred traditions with elegance",
  },
  {
    image: "/images/gallery1.png",
    title: "Outdoor Shoots",
    subtitle: "Timeless moments in natural light",
  },
  {
    image: "/images/gallery2.png",
    title: "Birthday Celebrations",
    subtitle: "Joyful memories for every milestone",
  },
  {
    image: "/images/gallery3.png",
    title: "Candid & Model Shoots",
    subtitle: "Authentic emotions, beautifully framed",
  },
  {
    image: "/images/gallery4.png",
    title: "Phani Photography",
    subtitle: "Where every story becomes timeless",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen">

      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen flex items-center justify-center overflow-hidden">

              {/* Background Image with Subtle Zoom */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </motion.div>

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

              {/* Text */}
              <div className="relative text-center text-white px-6 max-w-3xl">
                <motion.h1
                  key={slide.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  key={slide.subtitle}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="mt-6 text-lg md:text-xl text-white/90"
                >
                  {slide.subtitle}
                </motion.p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}