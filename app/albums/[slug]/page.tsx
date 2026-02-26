import { albums } from "@/lib/albums";
import { notFound } from "next/navigation";
import ParallaxImage from "@/components/ui/ParallaxImage";
import AlbumHero from "@/components/ui/AlbumHero";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);

  if (!album) return notFound();

  return (
    <main className="bg-white text-neutral-900">
      <AlbumHero title={album.title} date={album.date} cover={album.cover} />

      {/* <section className="py-20 sm:py-24 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {album.images.map((img, index) => (
          <ParallaxImage
            key={index}
            src={img}
            alt={`Wedding ${index + 1}`}
          />
        ))}
      </section> */}

      <section className="py-24 max-w-6xl mx-auto px-6 space-y-24">
        {album.images.map((img, index) => {
          if (index % 3 === 0) {
            return (
              <ParallaxImage
                key={index}
                src={img}
                alt={`Wedding ${index + 1}`}
              />
            );
          }

          return (
            <div key={index} className="grid md:grid-cols-2 gap-8">
              <ParallaxImage src={img} alt={`Wedding ${index + 1}`} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
