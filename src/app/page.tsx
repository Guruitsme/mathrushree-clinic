import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FacilitiesGrid } from "@/components/FacilitiesGrid";
import { DoctorsSection } from "@/components/DoctorsSection";
import { Gallery } from "@/components/Gallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <FacilitiesGrid />
        <DoctorsSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
