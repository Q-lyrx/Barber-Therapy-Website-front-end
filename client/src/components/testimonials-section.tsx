const testimonials = [
  {
    text: "I've been getting my haircut for 75+ years and I've never experienced a barber like this. This guy is absolutely amazing at his job. He gives you the best service possible I have now found the barber that I'm gonna use for the rest of my life. Whatever is left. I strongly recommend everybody to go at least once to this barber. He will change your whole experience and outlook of what a good haircut looks and feels like.",
    author: "Inayat Daya",
    source: "Verified Google Review"
  },
  {
    text: "He takes time to learn your hair, talks to you through the process and most importantly listens! He is extremely detail oriented and you can see and feel the passion he has for his work. Highly recommend!",
    author: "Sulmaan Azmat",
    source: "Verified Google Review"
  },
  {
    text: "Barber Therapy is THE spot for your clean fade and beard lineup. From the moment we stepped into the shop until we got to the car, my kid and I had a great experience! Mujjy was friendly and very patient with my son (who loves his new barber). Not too many barbers are comfortable cutting a 4 year old boy's hair, but Mujjy did not disappoint. My boy gets compliments on his fade everywhere we go... My beard lineup and fade was also a flawless. When I go to a barber, I don't just want a haircut... I want the whole \"experience\" and that's what you get when you come to Barber Therapy... You're never rushed and he doesn't stop until you're happy with your cut. I feel like a new person every time I walk out after... To anyone thinking about it, just stop and go check Mujjy at Barber Therapy. You won't be disappointed.",
    author: "Rishi Mehrotra",
    source: "Verified Google Review"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gold mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            See what our clients have to say about their experience at Barber Therapy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-brand-black rounded-lg p-8 border border-brand-gold/20"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star text-brand-gold text-lg"></i>
                ))}
              </div>
              <p className="text-brand-white/90 mb-6 text-base italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <div className="text-brand-gold font-semibold text-lg mb-1">
                  {testimonial.author}
                </div>
                <div className="text-brand-white/60 text-sm">
                  {testimonial.source}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://g.page/r/CYal9zaTeFdEEBE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brand-gold text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark-gold transition-colors duration-300"
            data-testid="link-write-review"
          >
            <i className="fas fa-star mr-2"></i>
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
