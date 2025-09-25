import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: "fas fa-cut",
    title: "Classic Cut",
    description: "Traditional scissor cut with consultation, wash, and styling",
    duration: "45 min",
    price: "$65"
  },
  {
    icon: "fas fa-user-tie",
    title: "Beard Grooming",
    description: "Precision trimming, shaping, and conditioning treatment",
    duration: "30 min",
    price: "$45"
  },
  {
    icon: "fas fa-fire",
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    duration: "60 min",
    price: "$85"
  },
  {
    icon: "fas fa-crown",
    title: "Royal Treatment",
    description: "Complete grooming experience with cut, shave, and styling",
    duration: "90 min",
    price: "$120"
  },
  {
    icon: "fas fa-spa",
    title: "Scalp Treatment",
    description: "Relaxing scalp massage with premium oils and treatment",
    duration: "25 min",
    price: "$35"
  },
  {
    icon: "fas fa-male",
    title: "Styling & Grooming",
    description: "Professional styling with premium products and finishing",
    duration: "20 min",
    price: "$25"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
            <span className="text-brand-white">Our</span> Services
          </span>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto mt-4 mb-4">
            Choose your preferred service below and click "Book Now" to schedule your appointment with our custom booking system.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gold">
            Individual Grooming Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-brand-black rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 border border-brand-gold/20 hover:border-brand-gold/50"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-brand-gold text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-brand-white mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-brand-gold font-semibold">{service.duration}</span>
                  <span className="text-2xl font-bold text-brand-white">{service.price}</span>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-brand-gold text-brand-black hover:bg-brand-dark-gold transition-colors duration-300 font-semibold">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
