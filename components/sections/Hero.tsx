import Image from "next/image";

export default function Hero() {
  return (
    // <section id="hero" className="relative h-screen flex items-center justify-center" >
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center py-20">
      <Image
        src="/images/hero.jpg"
        alt="Wedding Photography"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl mb-6">
          Capturing Love Stories
        </h1>

        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Timeless wedding photography crafted with emotion and elegance.
        </p>
      </div>
    </section>
  );
}