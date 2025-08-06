const testimonials = [
  {
    text: "Absolutely amazing service. Marco is a true professional.",
    author: "James W."
  },
  {
    text: "Best barbershop experience I've ever had. Highly recommend!",
    author: "Michael C."
  },
  {
    text: "Consistent quality every time. Worth every penny.",
    author: "David T."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Client Reviews
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star text-brand-gold text-lg"></i>
                ))}
              </div>
              <p className="text-brand-white/90 mb-4 text-lg italic">
                "{testimonial.text}"
              </p>
              <div className="text-brand-gold font-medium">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
