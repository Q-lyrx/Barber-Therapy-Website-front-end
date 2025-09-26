import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

// Declare Calendly for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string }) => void;
    };
  }
}

export default function Booking() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly script is already loaded
    if ((window as any).Calendly) {
      setScriptLoaded(true);
      return;
    }

    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount if it exists
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Header */}
      <header className="bg-brand-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <h1 className="text-2xl font-bold text-brand-gold cursor-pointer">
                Barber Therapy
              </h1>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
              Ready to Book?
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-white mt-4 mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
              Experience the finest in men's grooming. Book your appointment today and discover the Barber Therapy difference.
            </p>
          </div>

          {/* Calendly Integration */}
          <div className="bg-brand-black rounded-lg p-4 mb-8">
            {!scriptLoaded && (
              <div className="flex items-center justify-center h-96 bg-brand-black rounded-lg">
                <div className="text-center p-8">
                  <div className="w-12 h-12 border-3 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-brand-white">Loading booking calendar...</p>
                </div>
              </div>
            )}
            
            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/mujahidlila313/line-up?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffd700&primary_color=ffd700" 
              style={{
                minWidth: "320px",
                height: "700px",
                display: scriptLoaded ? 'block' : 'none'
              }}
            ></div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="fas fa-clock text-brand-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-semibold text-brand-white mb-2">Flexible Hours</h4>
              <p className="text-brand-white/70">
                Tuesday - Saturday<br />
                9 AM - 7 PM
              </p>
            </div>
            <div>
              <i className="fas fa-map-marker-alt text-brand-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-semibold text-brand-white mb-2">Prime Location</h4>
              <p className="text-brand-white/70">
                Downtown Financial District<br />
                Easy Parking Available
              </p>
            </div>
            <div>
              <i className="fas fa-phone text-brand-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-semibold text-brand-white mb-2">Quick Contact</h4>
              <p className="text-brand-white/70">
                Call for same-day appointments<br />
                (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
