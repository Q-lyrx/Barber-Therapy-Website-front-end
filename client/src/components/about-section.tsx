import aboutBarberImage from "@/assets/images/about-barber.webp";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">
            About Barber Therapy
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-brand-white/90 leading-relaxed">
              <p className="text-lg">
                Barber Therapy is more than just a barber shop - it's a space filled with positive energy, offering a transformative experience for both your appearance and mindset.
              </p>
              <p className="text-lg">
                We pride ourselves on providing an exceptional grooming experience, from classic cuts to modern styles, hot towel shaves, and expert beard care—all in a luxurious, welcoming atmosphere.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">10+</div>
                <div className="text-sm text-brand-white/70 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">2000+</div>
                <div className="text-sm text-brand-white/70 uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">★★★★★</div>
                <div className="text-sm text-brand-white/70 uppercase tracking-wide">Google Reviews</div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#services"
                className="inline-flex items-center bg-brand-gold text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark-gold transition-colors duration-300"
                data-testid="link-book-appointment"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book an Appointment
              </a>
              <p className="text-brand-white/60 text-sm mt-3">
                Join thousands of satisfied clients who trust Barber Therapy for their grooming needs
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={aboutBarberImage}
              alt="Professional barber at work at Barber Therapy" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              data-testid="img-about-barber"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
