import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


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
    { href: "/#about", label: "About" },
    { href: "/#testimonials", label: "Reviews" },
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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-black/95 backdrop-blur-md" : "bg-brand-black/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-brand-gold cursor-pointer">
                Barber Therapy
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-brand-white hover:text-brand-gold transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Link href="/booking">
                <Button className="bg-brand-gold text-brand-black hover:bg-brand-dark-gold font-semibold">
                  Book Now
                </Button>
              </Link>
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
                className="block w-full text-left px-3 py-2 text-brand-white hover:text-brand-gold transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <Link href="/booking">
              <Button 
                className="w-full mt-4 mx-3 bg-brand-gold text-brand-black hover:bg-brand-dark-gold font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
