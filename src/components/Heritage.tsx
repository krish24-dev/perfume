import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image1 from '../assets/image1.png';

const heritageData = [
  {
    title: "Arabian Legacy",
    description:
      "Traditional Arabian distillation methods passed down through generations of master perfusers.",
    image:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=1000&fit=crop",
    stat: "35+",
    statLabel: "Years of Excellence",
    bg: "from-[#f8efe3] via-[#f6e7d7] to-[#f3e3c3]",
  },
  {
    title: "Authentic Ingredients",
    description:
      "We source only the finest raw materials from across the Middle East, India, and Southeast Asia.",
    image:
      Image1,
    stat: "100%",
    statLabel: "Pure & Natural",
    bg: "from-[#f6e7d7] via-[#f3e3c3] to-[#f8efe3]",
  },
  {
    title: "Master Craftsmanship",
    description:
      "Each fragrance is meticulously crafted by our master perfusers with decades of experience in Arabian perfumery.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=1000&fit=crop",
    stat: "500+",
    statLabel: "Unique Blends",
    bg: "from-[#f3e3c3] via-[#f8efe3] to-[#f6e7d7]",
  },
];

const Heritage = () => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  
  // Track scroll position for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Remove the spring animation for immediate response
  // const smoothProgress = useSpring(scrollYProgress, { 
  //   stiffness: 100,   
  //   damping: 90,     
  //   restDelta: 0.01 
  // });

  // Optionally, compress the scroll progress for even slower effect:
  // const slowedProgress = useTransform(smoothProgress, v => v * 0.6);

  // Update active section based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      const sectionIndex = Math.min(
        heritageData.length - 1,
        Math.floor(value * heritageData.length)
      );
      setCurrentSection(sectionIndex);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="w-full h-[300vh] relative bg-gradient-to-br from-[#f8efe3] via-[#f6e7d7] to-[#f3e3c3] ornament-pattern-ultra"
    >
      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {heritageData.map((item, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, amount: 0.5 });
          
          // Use scrollYProgress directly for transforms
          const opacity = useTransform(
            scrollYProgress,
            [idx / heritageData.length, (idx + 0.8) / heritageData.length, (idx + 1) / heritageData.length],
            [0, 1, 0]
          );
          
          const imageY = useTransform(
            scrollYProgress,
            [idx / heritageData.length, (idx + 1) / heritageData.length],
            ["-5%", "5%"]
          );
          
          const textX = useTransform(
            scrollYProgress,
            [idx / heritageData.length, (idx + 0.3) / heritageData.length, (idx + 0.8) / heritageData.length],
            ["10%", "0%", "0%"]
          );

          return (
            <motion.div
              key={idx}
              ref={ref}
              style={{ 
                opacity,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              className={`flex flex-col md:flex-row items-center justify-center bg-gradient-to-br ${item.bg} ornament-pattern-ultra relative overflow-hidden`}
            >
              {/* Image with parallax */}
              <motion.div 
                className="w-full md:w-1/2 h-[350px] md:h-[600px] flex items-center justify-center p-6 md:p-12"
                style={{ y: imageY }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-3xl shadow-2xl object-cover w-full h-full max-h-[600px] transition-transform duration-700"
                    style={{
                      transform: isInView ? "scale(1)" : "scale(0.95)",
                    }}
                  />
                  {/* Stat badge */}
                  <motion.div 
                    className="absolute bottom-6 left-6 bg-white/90 rounded-2xl px-6 py-4 shadow-lg flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="text-3xl font-bold text-amber-700">{item.stat}</div>
                    <div className="text-sm text-amber-900 font-medium">{item.statLabel}</div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Description with slide-in effect */}
              <motion.div 
                className="w-full md:w-1/2 flex flex-col items-center md:items-start px-6 md:px-12 py-8 md:py-0"
                style={{ x: textX }}
              >
                <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-amber-900 text-center md:text-left drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-amber-800/90 mb-8 leading-relaxed text-center md:text-left max-w-xl">
                  {item.description}
                </p>
                <div className="flex gap-4 mt-2">
                  <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg">
                    Discover Our Story
                  </button>
                  <button className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-all duration-300 shadow-lg">
                    Master Perfumers
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* Progress indicator */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {heritageData.map((_, idx) => (
            <div 
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === idx ? 'bg-amber-600 scale-125' : 'bg-amber-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heritage;