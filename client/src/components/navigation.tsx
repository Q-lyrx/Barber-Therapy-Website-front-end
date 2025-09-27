import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "../assets/optimized/barber-therapy-logo-small.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on different page, navigate to home
      setLocation("/");
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-black/98 backdrop-blur-md shadow-lg" : "bg-brand-black/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <a 
              href="/" 
              onClick={handleHomeClick}
              className="flex items-center space-x-3"
              data-testid="home-link"
            >
              <img 
                src={logoImage} 
                alt="Barber Therapy Logo" 
                className="h-10 w-auto cursor-pointer"
                width="60"
                height="40"
                data-testid="logo-image"
              />
              <h1 className="text-2xl font-bold text-brand-gold cursor-pointer drop-shadow-lg">
                Barber Therapy
              </h1>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-brand-white hover:text-brand-gold transition-colors duration-300 font-medium drop-shadow-md"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-brand-gold text-brand-black hover:bg-brand-dark-gold font-semibold"
                onClick={() => {
                  const servicesSection = document.querySelector('#services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-white hover:text-brand-gold focus:outline-none focus:text-brand-gold"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-brand-white hover:text-brand-gold transition-colors duration-300 drop-shadow-md"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="w-full mt-4 mx-3 bg-brand-gold text-brand-black hover:bg-brand-dark-gold font-semibold"
              onClick={() => {
                setIsMenuOpen(false);
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
