import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
