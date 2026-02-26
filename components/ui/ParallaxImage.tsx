"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ParallaxImage({ src, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div
      ref={ref}
      className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-2xl"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}