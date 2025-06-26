export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
                About Our Master Barber
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-white mt-4 mb-6">
                Meet Marco Rodriguez
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-white/90 leading-relaxed">
              <p className="text-lg">
                With over 15 years of experience in premium men's grooming, Marco has honed his craft in the most prestigious barbershops across Europe and North America.
              </p>
              <p className="text-lg">
                His philosophy combines traditional barbering techniques with modern styling, creating a therapeutic experience that goes beyond just a haircut.
              </p>
              <p className="text-lg">
                Marco believes every client deserves personalized attention and leaves feeling confident, refreshed, and looking their absolute best.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">15+</div>
                <div className="text-sm text-brand-white/70 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">5000+</div>
                <div className="text-sm text-brand-white/70 uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">★★★★★</div>
                <div className="text-sm text-brand-white/70 uppercase tracking-wide">Google Reviews</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Master Barber Marco Rodriguez" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
