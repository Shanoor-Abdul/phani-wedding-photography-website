"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl tracking-wide font-semibold">
          Phani Photography
        </h1>

        <nav className="space-x-8 text-sm tracking-wide">
          <Link href="/" className="ml-2 text-neutral-700 hover:text-black transition">
            Home
          </Link>
          <Link href="/#about" className="hover:opacity-60 transition">
            About
          </Link>
          <Link href="/#gallery" className="hover:opacity-60 transition">
            Work
          </Link>
          <Link href="/#albums" className="hover:opacity-60 transition">
            Albums
          </Link>
          <Link href="/#videos" className="hover:opacity-60 transition">
            Videos
          </Link>
          <Link href="/#contact" className="hover:opacity-60 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}