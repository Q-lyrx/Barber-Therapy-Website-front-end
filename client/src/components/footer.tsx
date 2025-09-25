export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-gold mb-4">Barber Therapy</h3>
            <p className="text-brand-white/80 mb-6 leading-relaxed">
              Wow… you made it to the end. Either you really like what you see, or you're procrastinating on something important. Either way, we're flattered.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/thebarbertherapy?igsh=bW81eWdwdGx0YW9t" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-white hover:text-brand-gold transition-colors duration-300"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@thebarbertherapy?_t=ZM-8wXtnDhmjCQ&_r=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-white hover:text-brand-gold transition-colors duration-300"
                data-testid="link-tiktok"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-brand-white/80">
              <a href="/" className="block hover:text-brand-gold transition-colors duration-300">Home</a>
              <a href="#gallery" className="block hover:text-brand-gold transition-colors duration-300">Gallery</a>
              <a href="#services" className="block hover:text-brand-gold transition-colors duration-300">Services</a>
              <a href="/booking" className="block hover:text-brand-gold transition-colors duration-300">Book Now</a>
            </div>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Connect</h4>
            <div className="space-y-2 text-brand-white/80">
              <a href="#about" className="block hover:text-brand-gold transition-colors duration-300">About Us</a>
              <a href="#testimonials" className="block hover:text-brand-gold transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="block hover:text-brand-gold transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-brand-gold/20">
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Contact Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-brand-white/80">
              <div className="space-y-2">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-brand-gold w-5 mt-1"></i>
                  <span className="ml-3">34 Denlow Drive, Brampton, ON L6Y2L4</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-brand-gold w-5"></i>
                  <a href="tel:647-746-7861" className="ml-3 hover:text-brand-gold transition-colors duration-300">647-746-7861</a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-brand-gold w-5"></i>
                  <a href="mailto:thebarbertherapy@gmail.com" className="ml-3 hover:text-brand-gold transition-colors duration-300">thebarbertherapy@gmail.com</a>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-clock text-brand-gold w-5"></i>
                  <span className="ml-3">Available 24/7</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-crown text-brand-gold w-5"></i>
                  <span className="ml-3">Premium After-Hours: 8PM+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-gold/20 mt-8 pt-8 text-center">
          <p className="text-brand-white/60">
            &copy; 2024 Barber Therapy. All rights reserved. | Premium Men's Grooming Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
