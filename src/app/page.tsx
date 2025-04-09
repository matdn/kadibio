import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Solutions from "@/components/Solutions";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero
        title="KADIBIO"
        images={[
          { filename: "/images/header2.jpeg" },
          { filename: "/images/header1.jpeg" },
        ]}
      />
      <Solutions />
      <About />
      <MenuSection />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
    </>

  );
}
