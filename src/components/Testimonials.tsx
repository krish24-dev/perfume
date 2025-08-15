import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Kausar Afeef",
      location: "Bangalore, India",
      rating: 5,
      text: "I went to this shop for a custom ring, this shop was recommended by a local. I'm very happy with the service and honesty from Mr. M Vajeeh and his assistants at the shop. They have a wide variety of Kurtas, Attar and jewelry at an affordable price. His assistant Roxana was very helpful and honest in picking women's Kurtas and I'll be more than happy to come back to this shop. I'd recommend this shop for Maldivians travelling in Bangalore or just any travellers in general. May god bless this business.",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face",
      featured: true
    },
    {
      name: "Khalid",
      location: "Unknown",
      rating: 5,
      text: "He has a lot of beautiful shawls and pashmina.",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ahmed Almurar",
      location: "Unknown",
      rating: 5,
      text: "need your number i love the oud i bout and i need more",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face",
      featured: true
    },
    {
      name: "Adrian Constantin",
      location: "Unknown",
      rating: 5,
      text: "Very nice shop!",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Granth Smith",
      location: "Unknown",
      rating: 5,
      text: "Good products, friendly service.",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Pavan Ubeeoi",
      location: "Unknown",
      rating: 5,
      text: "Nice",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Djalel Hioel",
      location: "Unknown",
      rating: 5,
      text: "Excellent showpiece, excellent products I really liked.",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face",
      featured: true
    },
    {
      name: "Prakash Poojari",
      location: "Unknown",
      rating: 5,
      text: "Super amazing",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Roxana",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mohammed Shujath",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "King Maker",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Santosh Kumar",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Creative Doodler",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Kedar Charan Dehury",
      location: "Unknown",
      rating: 4,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Saif Ali",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ayesha Sadaf",
      location: "Unknown",
      rating: 5,
      text: "",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop&crop=face"
    }
  ];
  
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setIsAutoPlaying(false);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerSlide;
    return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#f8efe3] via-[#f6e7d7] to-[#f3e3c3] ornament-pattern-ultra relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Connoisseurs</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why fragrance enthusiasts worldwide choose Royal Attar for their 
            most precious moments and daily luxury experiences.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-luxury rounded-full p-3 hover:shadow-deep transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-luxury rounded-full p-3 hover:shadow-deep transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 min-h-[300px]">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={`${currentSlide}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-luxury hover:shadow-deep transition-all duration-500 transform hover:-translate-y-2 relative"
                style={{ 
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic line-clamp-4">
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

                {/* Featured Badge */}
                {testimonial.featured && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    ⭐ Featured
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator - Hidden but functional */}
          <div className="hidden">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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

      <style >{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;