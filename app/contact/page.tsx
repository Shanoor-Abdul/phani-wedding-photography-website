import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main id="contact" className="min-h-screen bg-white text-neutral-900 py-32 px-6">

      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Get In Touch
        </h1>

        <p className="text-neutral-600 mb-16">
          We would love to capture your special moments.
        </p>

        {/* Contact Card */}
        <div className="bg-neutral-50 rounded-3xl p-12 shadow-sm space-y-8">

          <div>
            <h2 className="text-2xl font-light">
              Phani Photography
            </h2>
            <p className="text-neutral-600 mt-2">
              B. Phani
            </p>
          </div>

          {/* Mobile */}
          <div>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">
              Mobile
            </p>
            <a
              href="tel:944257403"
              className="text-xl text-neutral-900 hover:underline"
            >
              +91-9440257403
            </a>
          </div>

          {/* Email */}
          <div>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">
              Email
            </p>
            <a
              href="mailto:b.phani@gmail.com"
              className="text-xl text-neutral-900 hover:underline"
            >
              b.phani@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 flex justify-center gap-8">

            <Link
              href="https://facebook.com/yourpage"
              target="_blank"
              className="text-neutral-700 hover:text-black transition"
            >
              <Facebook size={28} />
            </Link>

            <Link
              href="https://instagram.com/yourpage"
              target="_blank"
              className="text-neutral-700 hover:text-black transition"
            >
              <Instagram size={28} />
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}