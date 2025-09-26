import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Prefetch booking page chunks for instant navigation
const preloadBooking = () => import('@/pages/booking');
const preloadBeardBooking = () => import('@/pages/beard-booking');
const preloadBeardHotTowelBooking = () => import('@/pages/beard-hot-towel-booking');
const preloadHaircutBooking = () => import('@/pages/haircut-booking');

const individualServices = [
  {
    icon: "fas fa-cut",
    title: "Line Up",
    description: "Clean, defined lineup to sharpen your appearance.",
    duration: "15 mins",
    price: "$15"
  },
  {
    icon: "fas fa-user-tie",
    title: "Beard",
    description: "Expert beard trimming and shaping for a polished look.",
    duration: "30 mins",
    price: "$20"
  },
  {
    icon: "fas fa-fire",
    title: "Beard + Hot Towel",
    description: "Premium beard service with a relaxing hot towel treatment.",
    duration: "30 mins",
    price: "$25"
  },
  {
    icon: "fas fa-scissors",
    title: "Haircut",
    description: "Premium haircut with expert scissor work and styling.",
    duration: "45 mins",
    price: "$40"
  },
  {
    icon: "fas fa-crown",
    title: "Haircut + Beard",
    description: "Complete grooming with precision haircut and beard trimming.",
    duration: "1 hour",
    price: "$50"
  },
  {
    icon: "fas fa-spa",
    title: "Haircut + Beard and Hot Towel",
    description: "Premium service with a soothing hot towel treatment.",
    duration: "1 hour",
    price: "$55"
  },
  {
    icon: "fas fa-gem",
    title: "Full-Service",
    description: "Complete luxury experience including haircut, beard trimming, razor lineup, hot towel, oil head massage, black mask facial, eyebrow shaping, and nose/ear hair waxing.",
    duration: "1.5 hours",
    price: "$80"
  }
];

const monthlyPackages = [
  {
    icon: "fas fa-trophy",
    title: "The Ultimate Package",
    description: "2 Full Services ($70 each value)\n2 Lineups ($15 each value)\nTotal Value of $170\nYou Save $20 in Services",
    duration: "VALID FOR 1 MONTH (30 DAYS)",
    price: "$150",
    savings: "You Save $20"
  },
  {
    icon: "fas fa-star",
    title: "The Essentials Package",
    description: "2 Haircuts with Beard and Hot Towel ($50 each value)\n2 Lineups ($15 each value)\nTotal Value of $130\nYou Save $15 in Services",
    duration: "VALID FOR 1 MONTH (30 DAYS)",
    price: "$115",
    savings: "You Save $15"
  },
  {
    icon: "fas fa-users",
    title: "The Tag Team Package",
    description: "2 People Required\n4 Haircuts with Beard and Hot Towel (2 each alternating weeks)\nTotal Value of $200\nYou Save $40 in Services",
    duration: "VALID FOR 1 MONTH (30 DAYS)",
    price: "$160",
    savings: "You Save $40"
  },
  {
    icon: "fas fa-cogs",
    title: "Custom Package",
    description: "Personalized services tailored to your needs\nFlexible scheduling options\nPriority booking\nContact us to create your custom package",
    duration: "Flexible",
    price: "Contact for Pricing",
    savings: null
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">
            Services & Packages
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Choose your preferred service below and click "Book Now" to schedule your appointment with our custom booking system.
          </p>
        </div>

        {/* Individual Services Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-brand-white text-center mb-12">
            Individual Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {individualServices.map((service, index) => (
              <div
                key={index}
                className="bg-brand-black rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-brand-gold/20 hover:border-brand-gold/50"
                data-testid={`individual-service-${index}`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${service.icon} text-brand-gold text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-brand-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-brand-white/70 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-brand-gold font-semibold text-sm">{service.duration}</span>
                    <span className="text-xl font-bold text-brand-white">{service.price}</span>
                  </div>
                  <Link href={
                    service.title === "Beard" ? "/beard-booking" :
                    service.title === "Beard + Hot Towel" ? "/beard-hot-towel-booking" :
                    service.title === "Haircut" ? "/haircut-booking" :
                    "/booking"
                  }>
                    <Button
                      className="w-full bg-brand-gold text-brand-black hover:bg-brand-dark-gold transition-colors duration-300 font-semibold text-sm py-2"
                      data-testid={`button-book-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      onMouseEnter={
                        service.title === "Beard" ? preloadBeardBooking :
                        service.title === "Beard + Hot Towel" ? preloadBeardHotTowelBooking :
                        service.title === "Haircut" ? preloadHaircutBooking :
                        preloadBooking
                      }
                      onFocus={
                        service.title === "Beard" ? preloadBeardBooking :
                        service.title === "Beard + Hot Towel" ? preloadBeardHotTowelBooking :
                        service.title === "Haircut" ? preloadHaircutBooking :
                        preloadBooking
                      }
                      onTouchStart={
                        service.title === "Beard" ? preloadBeardBooking :
                        service.title === "Beard + Hot Towel" ? preloadBeardHotTowelBooking :
                        service.title === "Haircut" ? preloadHaircutBooking :
                        preloadBooking
                      }
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Packages Section */}
        <div>
          <h3 className="text-4xl font-bold text-brand-white text-center mb-12">
            Monthly Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {monthlyPackages.map((packageItem, index) => (
              <div
                key={index}
                className="bg-brand-black rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 border border-brand-gold/20 hover:border-brand-gold/50 relative"
                data-testid={`monthly-package-${index}`}
              >
                {packageItem.savings && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-black px-4 py-1 rounded-full text-sm font-bold">
                    {packageItem.savings}
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${packageItem.icon} text-brand-gold text-2xl`}></i>
                  </div>
                  <h4 className="text-2xl font-semibold text-brand-white mb-4">
                    {packageItem.title}
                  </h4>
                  <div className="text-3xl font-bold text-brand-gold mb-4">
                    {packageItem.price}
                  </div>
                  <p className="text-brand-gold font-semibold mb-4 text-sm">
                    {packageItem.duration}
                  </p>
                  <div className="text-brand-white/70 mb-6 text-sm leading-relaxed whitespace-pre-line">
                    {packageItem.description}
                  </div>
                  <Link href="/booking">
                    <Button
                      className="w-full bg-brand-gold text-brand-black hover:bg-brand-dark-gold transition-colors duration-300 font-semibold"
                      data-testid={`button-book-package-${packageItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                      onMouseEnter={preloadBooking}
                      onFocus={preloadBooking}
                      onTouchStart={preloadBooking}
                    >
                      Book Package
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}