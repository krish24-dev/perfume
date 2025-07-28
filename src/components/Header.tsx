import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Menu, X, Crown, Award } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpaque(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${isOpaque ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-sm">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <Crown className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-base font-medium text-yellow-800">Al Wajhi Oudh</h1>
              <div className="flex items-center gap-1">
                <p className="text-[8px] sm:text-[10px] text-gray-600 tracking-wider uppercase">Premium Perfumery</p>
                <p className="text-[8px] sm:text-[10px] text-yellow-600">Est. 1985</p>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'Collection', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-amber-900 hover:text-amber-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" /> : 
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {['Home', 'Collection', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-amber-900 hover:text-amber-600 transition-colors py-2 border-b border-amber-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
