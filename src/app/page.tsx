"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Solutions from "@/components/Solutions";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (pathname === "/" && hash === "#contact") {
      const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };

      setTimeout(scrollToContact, 300);
    }
  }, [pathname]);
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
      <ReviewSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>

  );
}
