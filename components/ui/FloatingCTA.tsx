"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link
        href="/#contact"
        className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-neutral-800 transition"
      >
        Book Now
      </Link>
    </motion.div>
  );
}