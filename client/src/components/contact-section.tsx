export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-white mb-4">
            Get In Touch
          </h2>
          <p className="text-brand-white/80 text-lg max-w-2xl mx-auto">
            Ready to experience the finest in men's grooming? Contact us to schedule your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-brand-black/50 p-8 rounded-lg border border-brand-gold/20">
              <h3 className="text-2xl font-bold text-brand-white mb-6">Visit Our Shop</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-brand-gold text-xl w-6"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-brand-white font-semibold mb-1">Location</h4>
                    <a 
                      href="https://www.google.com/maps/place/Barber+Therapy/@43.6579818,-79.7487362,16z/data=!4m15!1m8!3m7!1s0x882b1544876e2f35:0x4457789336f7a586!2sBarber+Therapy!8m2!3d43.6581367!4d-79.748521!10e5!16s%2Fg%2F11wf_w8h7t!3m5!1s0x882b1544876e2f35:0x4457789336f7a586!8m2!3d43.6581367!4d-79.748521!16s%2Fg%2F11wf_w8h7t?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-white/80 hover:text-brand-gold transition-all duration-300 cursor-pointer underline-offset-4 hover:underline"
                      data-testid="link-address"
                    >
                      34 Denlow Drive, Brampton, ON L6Y2L4
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-phone text-brand-gold text-xl w-6"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-brand-white font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:647-746-7861"
                      className="text-brand-white/80 hover:text-brand-gold transition-all duration-300 cursor-pointer underline-offset-4 hover:underline"
                      data-testid="link-phone"
                    >
                      647-746-7861
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-envelope text-brand-gold text-xl w-6"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-brand-white font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:thebarbertherapy@gmail.com"
                      className="text-brand-white/80 hover:text-brand-gold transition-all duration-300 cursor-pointer underline-offset-4 hover:underline"
                      data-testid="link-email"
                    >
                      thebarbertherapy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-brand-black/50 p-8 rounded-lg border border-brand-gold/20">
              <h3 className="text-2xl font-bold text-brand-white mb-6">Availability</h3>
              <div className="space-y-4">
                <p className="text-brand-white/90 leading-relaxed">
                  We are proud to offer 24-hour service to accommodate your busy schedule.
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-brand-gold pl-4">
                    <h4 className="text-brand-gold font-semibold text-lg">Standard Services</h4>
                    <p className="text-brand-white">Available 24/7</p>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-4">
                    <h4 className="text-brand-gold font-semibold text-lg">Premium After-Hours</h4>
                    <p className="text-brand-white">Starting 8:00 PM</p>
                  </div>
                </div>
                <p className="text-brand-white/80 text-sm italic">
                  For after-hours premium services and special accommodations, please contact us directly for arrangements and pricing details.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-black/50 p-8 rounded-lg border border-brand-gold/20">
            <h3 className="text-2xl font-bold text-brand-white mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-brand-white font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    data-testid="input-first-name"
                    className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-brand-white placeholder-brand-white/50 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-brand-white font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    data-testid="input-last-name"
                    className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-brand-white placeholder-brand-white/50 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-brand-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  data-testid="input-email"
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-brand-white placeholder-brand-white/50 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-brand-white font-medium mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  data-testid="input-phone"
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-brand-white placeholder-brand-white/50 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  data-testid="textarea-message"
                  className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-brand-white placeholder-brand-white/50 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="Tell us what you're looking for or ask any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                data-testid="button-send-message"
                className="w-full bg-brand-gold text-brand-black font-semibold py-3 px-6 rounded-lg hover:bg-brand-dark-gold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-brand-black/50 p-8 rounded-lg border border-brand-gold/20">
            <h3 className="text-2xl font-bold text-brand-white mb-6 text-center">Find Us</h3>
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://storage.googleapis.com/maps-solutions-fzlrpwv5yq/locator-plus/opik/locator-plus.html"
                width="100%" 
                height="100%"
                style={{border: 0}}
                loading="lazy"
                data-testid="map-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}