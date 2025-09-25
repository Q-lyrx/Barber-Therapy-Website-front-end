import { Button } from "@/components/ui/button";
import barbershopHeroImage from "@/assets/images/barbershop-hero.webp";

export default function HeroSection() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat brightness-75 contrast-110" 
        style={{
          backgroundImage: `url(${barbershopHeroImage})`,
          backgroundPosition: 'center 40%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-block rounded-2xl bg-black/35 backdrop-blur-[2px] px-6 py-6 md:px-10 md:py-8 shadow-2xl ring-1 ring-white/5">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up drop-shadow-2xl">
          <span className="text-brand-gold drop-shadow-2xl">Experience</span><br />
          <span className="text-brand-white drop-shadow-2xl">Barber</span><br />
          <span className="text-brand-gold drop-shadow-2xl">Therapy</span>
        </h1>
        <p className="text-xl md:text-2xl text-brand-white/95 mb-8 font-light leading-relaxed animate-fade-in-up drop-shadow-lg">
          A space where you can transform both your look and your mindset all at once. It is more than just a haircut.
        </p>
        <div className="flex justify-center animate-fade-in-up">
          <Button 
            onClick={scrollToServices}
            className="bg-brand-gold text-brand-black hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
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
