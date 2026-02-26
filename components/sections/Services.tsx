"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-neutral-900">
          What We Capture
        </h2>
      </div>

      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[600px] rounded-3xl overflow-hidden">

              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7 }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-black/25" />

              <div className="relative h-full flex flex-col justify-center items-center text-center px-8 text-white">
                <motion.h3
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-3xl md:text-4xl font-light"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  key={service.description}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="mt-6 max-w-2xl text-lg text-white/90"
                >
                  {service.description}
                </motion.p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}