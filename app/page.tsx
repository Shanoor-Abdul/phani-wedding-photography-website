import Header from "@/components/layout/Header";
// import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Albums from "@/components/sections/Albums";
import FadeSection from "@/components/ui/FadeSection";
import Services from "@/components/sections/Services";
import Hero from "@/components/sections/Hero";
import Videos from "@/components/sections/Videos";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main>
      <FadeSection>
        <Header />
      </FadeSection>
      <FadeSection>
        <Hero />
      </FadeSection>
      <FadeSection>
       <Services />
      </FadeSection>
      <FadeSection>
        <About />
      </FadeSection>
      <FadeSection>
        <Gallery />
      </FadeSection>
      <FadeSection>
        <Albums />
      </FadeSection>
      <FadeSection>
        <Videos />
      </FadeSection>
      <FadeSection>
        <ContactPage />
      </FadeSection>
    </main>
  );
}
