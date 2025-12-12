import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import CatalogSection from "@/components/CatalogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <CatalogSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
