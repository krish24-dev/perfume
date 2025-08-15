import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image2 from "../Assets/image1.png";
import { Link } from "react-router-dom";

// Placeholder image component
const Image1 = () => (
  <div className="w-full h-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
    <div className="absolute top-4 left-4 w-6 h-12 bg-gradient-to-r from-white to-transparent opacity-40 rounded-full blur-sm"></div>
    <div className="absolute top-6 right-5 w-3 h-16 bg-gradient-to-b from-white to-transparent opacity-30 rounded-full blur-sm"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-black bg-opacity-20 rounded backdrop-blur-sm flex items-center justify-center">
      <span className="text-white text-sm font-bold tracking-wider">ATTAR</span>
    </div>
  </div>
);

// Premium Decorative Elements
const PremiumDecorations = () => {
  return (
    <>
      {/* Elegant corner ornaments - Top Left */}
      <div className="absolute top-12 left-12 w-20 h-20 opacity-20">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-700 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-700 to-transparent"></div>
        <div className="absolute top-2 left-2 w-4 h-4 border border-amber-600 transform rotate-45"></div>
      </div>

      {/* Elegant corner ornaments - Top Right */}
      <div className="absolute top-12 right-12 w-20 h-20 opacity-20 transform rotate-90">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-700 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-700 to-transparent"></div>
        <div className="absolute top-2 left-2 w-4 h-4 border border-amber-600 transform rotate-45"></div>
      </div>
      
      {/* Elegant corner ornaments - Bottom Right */}
      <div className="absolute bottom-12 right-12 w-20 h-20 opacity-20 transform rotate-180">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-700 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-700 to-transparent"></div>
        <div className="absolute top-2 left-2 w-4 h-4 border border-amber-600 transform rotate-45"></div>
      </div>
      
      {/* Elegant corner ornaments - Bottom Left */}
      <div className="absolute bottom-12 left-12 w-20 h-20 opacity-20 transform -rotate-90">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-700 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-700 to-transparent"></div>
        <div className="absolute top-2 left-2 w-4 h-4 border border-amber-600 transform rotate-45"></div>
      </div>

      {/* Floating luxury elements */}
      <motion.div
        className="absolute top-1/3 left-[20%] w-1 h-1 bg-amber-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-[20%] w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle geometric patterns */}
      <div className="absolute top-1/2 left-8 w-px h-32 bg-gradient-to-b from-transparent via-amber-600 to-transparent opacity-20"></div>
      <div className="absolute top-1/2 right-8 w-px h-32 bg-gradient-to-b from-transparent via-amber-600 to-transparent opacity-20"></div>
    </>
  );
};

// Premium Badge Component


// Main Hero Component
const AttarHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const bottleVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8efe3] via-[#f6e7d7] to-[#f3e3c3] ornament-pattern-ultra relative overflow-hidden flex items-center py-2 px-3 sm:py-4 sm:px-8 lg:py-12 lg:px-4 pt-[80px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Add the premium decorations */}
      <PremiumDecorations />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 max-w-2xl space-y-4 md:space-y-8 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Brand Name */}
          <motion.div variants={itemVariants} className="mb-1 md:mb-2">
            <motion.h1
              className="text-lg sm:text-2xl md:text-3xl font-light text-[#8B4513] tracking-[0.2em] md:tracking-[0.25em] mb-1 md:mb-2"
              style={{ fontFamily: "serif" }}
            >
              PREMIUM ITTARS
            </motion.h1>
            <p className="text-xs sm:text-sm text-amber-800/80 tracking-[0.1em] md:tracking-[0.15em] uppercase">
              NATURAL PERFUMERY
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h2 className="font-playfair">
              <motion.span className="block text-2xl sm:text-4xl md:text-6xl font-bold text-[#8B4513] leading-tight">
                Experience the 
              </motion.span>
              <motion.span className="block text-2xl sm:text-4xl md:text-6xl font-bold text-[#B8860B] leading-tight">
                Essence of Nature
              </motion.span>
            </h2>
            <motion.p className="text-lg sm:text-xl md:text-3xl font-serif italic text-[#8B4513] mt-1 md:mt-2">
              With Our Premium Ittars
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 md:space-y-4"
          >
            <p className="text-sm sm:text-base md:text-lg text-amber-900/80 leading-relaxed">
              Step into a world of timeless elegance and pure indulgence with our handcrafted ittars.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-amber-800/70 italic">
              Handcrafted natural perfumes made from pure essential oils — alcohol-free, long-lasting, and truly unforgettable.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start mt-4 md:mt-6"
          >
            {["100% NATURAL", "TRADITIONAL SCENTS", "NO ALCOHOL"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-amber-900">
                    {feature}
                  </span>
                </div>
              )
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-6 md:mt-8">
            <Link to="/collections">
              <motion.button
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#FFB800] text-white text-sm sm:text-base md:text-lg font-medium tracking-wider rounded-full hover:bg-[#E5A500] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Products
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={bottleVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="relative w-[220px] h-[280px] sm:w-[300px] sm:h-[380px] md:w-[420px] md:h-[540px] lg:w-[520px] lg:h-[650px]">
            <motion.img
              src={Image2}
              alt="Al Wajhi Oudh & Perfumes"
              className="w-full h-full object-cover"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttarHeroSection;