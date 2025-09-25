export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-brand-gold rotate-45"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-brand-gold rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-brand-gold rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-brand-gold rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-white mb-4 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
            </h2>
          </div>
          <p className="text-brand-white/80 text-lg max-w-2xl mx-auto mt-6">
            Have questions? Contact us. We'd love to hear from you!
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 bg-brand-gold"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Visit Our Shop Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-brand-black/80 to-brand-black/60 p-8 rounded-xl border border-brand-gold/30 backdrop-blur-sm hover:border-brand-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-store text-brand-gold text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-white">Visit Our Shop</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-brand-gold text-sm"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-brand-white font-semibold mb-1">Location</h4>
                      <a 
                        href="https://www.google.com/maps/place/Barber+Therapy/@43.6579818,-79.7487362,16z/data=!4m15!1m8!3m7!1s0x882b1544876e2f35:0x4457789336f7a586!2sBarber+Therapy!8m2!3d43.6581367!4d-79.748521!10e5!16s%2Fg%2F11wf_w8h7t!3m5!1s0x882b1544876e2f35:0x4457789336f7a586!8m2!3d43.6581367!4d-79.748521!16s%2Fg%2F11wf_w8h7t?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-white/80 hover:text-brand-gold transition-all duration-300 cursor-pointer block group-hover/item:translate-x-1"
                        data-testid="link-address"
                      >
                        34 Denlow Drive, Brampton, ON L6Y2L4
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-phone text-brand-gold text-sm"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-brand-white font-semibold mb-1">Phone</h4>
                      <a 
                        href="tel:647-746-7861"
                        className="text-brand-white/80 hover:text-brand-gold transition-all duration-300 cursor-pointer block group-hover/item:translate-x-1"
                        data-testid="link-phone"
                      >
                        647-746-7861
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-brand-gold/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-envelope text-brand-gold text-sm"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-brand-white font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:thebarbertherapy@gmail.com"
                        className="text-brand-white/80 hover:text-brand-gold transition-all duration-300 cursor-pointer block group-hover/item:translate-x-1"
                        data-testid="link-email"
                      >
                        thebarbertherapy@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-brand-black/80 to-brand-black/60 p-8 rounded-xl border border-brand-gold/30 backdrop-blur-sm hover:border-brand-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-brand-gold text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-white">Availability</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-brand-white/90 leading-relaxed">
                    We are proud to offer 24-hour service to accommodate your busy schedule.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold to-brand-gold/50 rounded-full"></div>
                      <div className="pl-6">
                        <div className="bg-brand-gold/10 p-4 rounded-lg border border-brand-gold/20">
                          <h4 className="text-brand-gold font-semibold text-lg flex items-center mb-2">
                            <i className="fas fa-star text-sm mr-2"></i>
                            Standard Services
                          </h4>
                          <p className="text-brand-white">Available 24/7</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold to-brand-gold/50 rounded-full"></div>
                      <div className="pl-6">
                        <div className="bg-brand-gold/10 p-4 rounded-lg border border-brand-gold/20">
                          <h4 className="text-brand-gold font-semibold text-lg flex items-center mb-2">
                            <i className="fas fa-crown text-sm mr-2"></i>
                            Premium After-Hours
                          </h4>
                          <p className="text-brand-white">Starting 8:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-brand-gold/5 rounded-lg border border-brand-gold/10">
                    <p className="text-brand-white/80 text-sm italic">
                      For after-hours premium services and special accommodations, please contact us directly for arrangements and pricing details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-gradient-to-br from-brand-black/80 to-brand-black/60 p-8 rounded-xl border border-brand-gold/30 backdrop-blur-sm hover:border-brand-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-map-marked-alt text-brand-gold text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-white">Find Us</h3>
            </div>
            <div className="h-96 rounded-xl overflow-hidden border border-brand-gold/20 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3905395048584!2d-79.75092098450293!3d43.65813597912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1544876e2f35%3A0x4457789336f7a586!2sBarber%20Therapy!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%" 
                height="100%"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}