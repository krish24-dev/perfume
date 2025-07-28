
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Al-Rashid",
      location: "Dubai, UAE",
      rating: 5,
      text: "Royal Attar's Oud Majesty is absolutely divine. The quality and longevity are unmatched. It's become my signature scent and I receive compliments everywhere I go.",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ahmed Hassan",
      location: "London, UK",
      rating: 5,
      text: "I've been collecting attars for over 15 years, and Royal Attar consistently delivers exceptional quality. Their Sandalwood Serenity is pure poetry in a bottle.",
      avatar: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Zahra",
      location: "Riyadh, SA",
      rating: 5,
      text: "The Jasmine Nights blend transported me to my grandmother's garden. The craftsmanship and attention to detail in every bottle is remarkable. Truly a luxury experience.",
      avatar: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Connoisseurs</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why fragrance enthusiasts worldwide choose Royal Attar for their 
            most precious moments and daily luxury experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-luxury hover:shadow-deep transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 text-primary/20 text-4xl font-playfair">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-primary mb-2">25</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
