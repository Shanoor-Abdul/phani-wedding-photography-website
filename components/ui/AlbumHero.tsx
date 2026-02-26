"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  cover: string;
};

export default function AlbumHero({ title, date, cover }: Props) {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Slow Zoom Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={cover}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* Text */}
      <div className="relative text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-light tracking-wide"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg sm:text-xl tracking-widest uppercase text-white/80"
        >
          {date}
        </motion.p>
      </div>
    </section>
  );
}