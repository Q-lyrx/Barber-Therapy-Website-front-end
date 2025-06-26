export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-gold mb-4">Barber Therapy</h3>
            <p className="text-brand-white/80 mb-6 leading-relaxed">
              Premium barbershop experience combining traditional craftsmanship with modern sophistication. Where every cut is therapy for the mind and soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors duration-300">
                <i className="fab fa-google text-xl"></i>
              </a>
              <a href="#" className="text-brand-white hover:text-brand-gold transition-colors duration-300">
                <i className="fab fa-yelp text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-brand-white/80">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-brand-gold w-5 mt-1"></i>
                <span className="ml-3">123 Financial Street<br />Downtown District, City 12345</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-brand-gold w-5"></i>
                <span className="ml-3">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-brand-gold w-5"></i>
                <span className="ml-3">info@barbertherapy.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Hours</h4>
            <div className="space-y-2 text-brand-white/80 text-sm">
              <div className="flex justify-between">
                <span>Tuesday - Friday</span>
                <span>9 AM - 7 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8 AM - 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10 AM - 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="text-brand-gold">Closed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-gold/20 mt-12 pt-8 text-center">
          <p className="text-brand-white/60">
            &copy; 2024 Barber Therapy. All rights reserved. | Premium Men's Grooming Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
