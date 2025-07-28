
import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-primary">
                  Royal Attar
                </h3>
                <p className="text-xs text-white/70 tracking-wider">
                  HERITAGE PERFUMERY
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Crafting exceptional fragrances that tell stories of tradition, 
              luxury, and timeless elegance for over 25 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">ig</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">tw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#collection" className="text-white/80 hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#about" className="text-white/80 hover:text-primary transition-colors">Our Heritage</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Oud Collection</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Floral Essence</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Woody Harmony</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Limited Editions</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm">Address</p>
                <p className="text-white/90">123 Perfume Street<br />Dubai, UAE</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Phone</p>
                <p className="text-white/90">+971 4 123 4567</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <p className="text-white/90">info@royalattar.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-playfair text-2xl font-bold mb-4">
              Join Our <span className="text-primary">Exclusive Circle</span>
            </h4>
            <p className="text-white/80 mb-6">
              Be the first to discover new collections and receive special offers
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary"
              />
              <button className="bg-gold-gradient px-6 py-3 rounded-r-full font-medium hover:shadow-luxury transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Royal Attar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
