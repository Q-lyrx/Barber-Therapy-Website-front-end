import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Booking() {
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
          <div className="bg-brand-black rounded-lg p-8 mb-8">
            <div className="bg-brand-white rounded-lg overflow-hidden">
              {/* Calendly Embed */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/barbertherapy" 
                style={{
                  minWidth: "320px",
                  height: "630px",
                  width: "100%"
                }}
              >
                {/* Fallback content */}
                <div className="flex items-center justify-center h-full bg-gray-50">
                  <div className="text-center p-8">
                    <i className="fas fa-calendar-alt text-brand-gold text-4xl mb-4"></i>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Appointment</h3>
                    <p className="text-gray-600 mb-6">
                      Please visit our Calendly page to schedule your appointment
                    </p>
                    <a 
                      href="https://calendly.com/barbertherapy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-brand-gold text-brand-black px-6 py-3 rounded-md font-semibold hover:bg-brand-dark-gold transition-colors duration-300"
                    >
                      Open Calendly
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Add Calendly widget script */}
      <script 
        type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async
      />
    </div>
  );
}
