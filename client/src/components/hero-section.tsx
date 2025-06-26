import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&h=1200')"
        }}
      />
      <div className="absolute inset-0 bg-brand-black/60" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          <span className="text-brand-gold">Premium</span><br />
          <span className="text-brand-white">Barbershop</span><br />
          <span className="text-brand-gold">Experience</span>
        </h1>
        <p className="text-xl md:text-2xl text-brand-white/90 mb-8 font-light leading-relaxed animate-fade-in-up">
          Where traditional craftsmanship meets modern sophistication
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Link href="/booking">
            <Button className="bg-brand-gold text-brand-black hover:bg-brand-dark-gold transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold">
              Book Appointment
            </Button>
          </Link>
          <Button 
            variant="outline"
            onClick={scrollToServices}
            className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            View Services
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-brand-gold text-2xl"></i>
      </div>
    </section>
  );
}
