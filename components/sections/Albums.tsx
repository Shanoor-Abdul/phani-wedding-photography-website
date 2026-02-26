import Link from "next/link";
import Image from "next/image";
import { albums } from "../../lib/albums";

export default function Albums() {
  return (
    <section id="albums" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Wedding Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {albums.map((album) => (
            <Link
              key={album.slug}
              href={`/albums/${album.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl">{album.title}</h3>
                <p className="text-neutral-500">{album.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
