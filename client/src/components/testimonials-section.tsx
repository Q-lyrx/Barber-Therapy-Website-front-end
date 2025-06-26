const testimonials = [
  {
    rating: 5,
    text: "Marco is an absolute artist. The attention to detail and level of service is unmatched. This is the only place I trust with my hair.",
    author: "James Wilson",
    title: "CEO, Tech Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    rating: 5,
    text: "The experience here is therapeutic, just like the name suggests. Professional, relaxing, and the results speak for themselves.",
    author: "Michael Chen",
    title: "Investment Banker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    rating: 5,
    text: "I've been coming here for 3 years and never been disappointed. The consistency and quality are exceptional every single time.",
    author: "David Thompson",
    title: "Real Estate Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-brand-black rounded-lg p-8 border border-brand-gold/20"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-brand-gold"></i>
                ))}
              </div>
              <p className="text-brand-white/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`Client ${testimonial.author}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="text-brand-white font-semibold">{testimonial.author}</div>
                  <div className="text-brand-gold text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
