import { Button } from "@/components/ui/button";
import barbershopHeroImage from "@/assets/images/barbershop-hero.webp";
import barbershopHeroMobile from "@/assets/images/responsive/barbershop-hero-mobile.webp";
import barbershopHeroTablet from "@/assets/images/responsive/barbershop-hero-tablet.webp";

export default function HeroSection() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <picture className="absolute inset-0">
        <source media="(max-width: 768px)" srcSet={barbershopHeroMobile} />
        <source media="(max-width: 1280px)" srcSet={barbershopHeroTablet} />
        <img
          src={barbershopHeroImage}
          alt="Barber Therapy interior"
          className="w-full h-full object-cover brightness-75 contrast-110"
          style={{ objectPosition: 'center 40%' }}
          decoding="async"
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      <div className="relative z-10 text-center max-w-7xl mx-auto px-3 sm:px-6">
        <div className="inline-block rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-black/35 backdrop-blur-[2px] px-6 py-6 sm:px-12 sm:py-10 md:px-16 md:py-12 lg:px-20 lg:py-16 xl:px-24 xl:py-20 shadow-2xl ring-1 ring-white/5 max-w-[95vw] sm:max-w-none">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 lg:mb-10 xl:mb-12 leading-[0.85] animate-fade-in-up drop-shadow-2xl">
          <span className="text-brand-gold drop-shadow-2xl">Experience</span><br />
          <span className="text-brand-white drop-shadow-2xl">Barber</span><br />
          <span className="text-brand-gold drop-shadow-2xl">Therapy</span>
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-brand-white/95 mb-8 sm:mb-10 lg:mb-12 xl:mb-14 font-light leading-relaxed animate-fade-in-up drop-shadow-lg max-w-5xl mx-auto">
          A space where you can transform both your look and your mindset all at once. It is more than just a haircut.
        </p>
        <div className="flex justify-center animate-fade-in-up">
          <Button
            onClick={scrollToServices}
            className="bg-brand-gold text-brand-black hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-8 xl:px-20 xl:py-10 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
          >
            Our clippers got PhDs in glow ups.
          </Button>
        </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-brand-gold text-2xl"></i>
      </div>
    </section>
  );
}