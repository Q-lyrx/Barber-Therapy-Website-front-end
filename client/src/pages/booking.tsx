import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
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
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-gold mb-4">
              Line-Up Service
            </h1>
            <div className="flex justify-center items-center gap-6 mb-4">
              <span className="text-brand-white text-lg font-semibold">
                <i className="fas fa-clock text-brand-gold mr-2"></i>15 minutes
              </span>
              <span className="text-brand-white text-lg font-semibold">
                <i className="fas fa-dollar-sign text-brand-gold mr-2"></i>$15
              </span>
            </div>
            <p className="text-lg text-brand-white/90 mb-6 max-w-xl mx-auto">
              Book your appointment now and get that perfect lineup.
            </p>
          </div>

          {/* Calendly Integration */}
          <div className="bg-brand-black rounded-lg p-4 mb-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/mujahidlila313/line-up?hide_gdpr_banner=1&text_color=ffd700&primary_color=ffd700" 
              style={{
                minWidth: "320px",
                height: "700px"
              }}
            ></div>
          </div>

          {/* Contact Information */}
          <div className="text-center bg-brand-black/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-brand-gold mb-3">Questions? Call us at 647-746-7861</h4>
            <p className="text-brand-white/70 mb-2">
              Standard Services: Available 24/7
            </p>
            <p className="text-brand-white/70">
              Premium After-Hours: Starting 8:00 PM
            </p>
          </div>
        </div>
      </main>

    </div>
  );
}
