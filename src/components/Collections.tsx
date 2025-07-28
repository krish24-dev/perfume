import React from 'react';
import { Heart, Sparkles, Award, Home } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const attarCollections = [
  {
    name: "Amber Oud",
    description: "A luxurious blend of golden amber and rare oud, exuding warmth and sophistication.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=400&fit=crop",
  },
  {
    name: "Rose Musk",
    description: "Delicate rose petals entwined with sensual musk for a timeless floral embrace.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=400&fit=crop",
  },
  {
    name: "Sandal Serenity",
    description: "Creamy sandalwood and subtle spices create a serene, meditative aura.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&h=400&fit=crop",
  },
  {
    name: "Jasmine Veil",
    description: "Fresh jasmine blossoms layered with hints of citrus and white musk.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?w=500&h=400&fit=crop",
  },
  {
    name: "Royal Saffron",
    description: "Precious saffron threads and honeyed resins for a regal, golden scent.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=400&fit=crop",
  },
  {
    name: "Musk Al Tahara",
    description: "A clean, powdery musk with a soft, comforting finish, perfect for daily wear.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=400&fit=crop",
  },
  {
    name: "Oudh Hind",
    description: "Deep, resinous Indian oud with smoky undertones and a touch of spice.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&h=400&fit=crop",
  },
  {
    name: "Majmua",
    description: "A complex, earthy blend of vetiver, patchouli, and floral notes, beloved in South Asia.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=400&fit=crop",
  },
  {
    name: "White Lotus",
    description: "Ethereal lotus petals with aquatic freshness and a hint of green.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=400&fit=crop",
  },
  {
    name: "Dehn Al Oudh Cambodi",
    description: "Rare Cambodian oud oil, intensely woody and sweet, for true connoisseurs.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=400&fit=crop",
  },
  {
    name: "Mitti Attar",
    description: "The scent of the first rain on dry earth, captured in a bottle with baked clay and sandalwood.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=400&fit=crop",
  },
  {
    name: "Khus (Vetiver)",
    description: "Cooling, green vetiver roots distilled for a refreshing, earthy aroma.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=400&fit=crop",
  },
];

const badgeData = [
  { label: 'Bestseller', icon: <Award className="w-4 h-4" />, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
  { label: 'Limited', icon: <Sparkles className="w-4 h-4" />, color: 'bg-gradient-to-r from-green-400 to-green-600' },
  { label: 'New', icon: <Sparkles className="w-4 h-4" />, color: 'bg-gradient-to-r from-blue-400 to-blue-600' },
  { label: 'Premium', icon: <Award className="w-4 h-4" />, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
  { label: 'Exclusive', icon: <Award className="w-4 h-4" />, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
];
const getBadge = (index) => {
  // Cycle through badges for demo
  return badgeData[index % badgeData.length];
};
const getRating = (index) => 4.7 + (index % 3) * 0.1;
const getReviews = (index) => 80 + index * 17;
const getPrice = (index) => 99 + index * 30;
const getOriginalPrice = (index) => getPrice(index) + 50;
const getDiscount = (index) => Math.round(((getOriginalPrice(index) - getPrice(index)) / getOriginalPrice(index)) * 100);

const Collections = () => {
  const navigate = useNavigate();
  // Assume current user is admin
  const isAdmin = true;
  // State for attar collection (so we can add new ones)
  const [attars, setAttars] = useState(attarCollections);
  // State for new attar form
  const [newAttar, setNewAttar] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  });
  // State for modal
  const [showModal, setShowModal] = useState(false);
  // Handle form input
  const handleInputChange = (e) => {
    setNewAttar({ ...newAttar, [e.target.name]: e.target.value });
  };
  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAttar((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  // Handle form submit
  const handleAddAttar = (e) => {
    e.preventDefault();
    if (!newAttar.name || !newAttar.description || !newAttar.image || !newAttar.price) return;
    setAttars([{ ...newAttar }, ...attars]);
    setNewAttar({ name: '', description: '', image: '', price: '' });
    setShowModal(false); // Close modal on successful add
  };
  return (
    <section className="mobile-section-padding min-h-screen bg-gradient-to-br from-[#f8efe3] via-[#f6e7d7] to-[#f3e3c3] ornament-pattern-ultra">
      <div className="container mx-auto mobile-padding">
        
        {/* Modal for Add Attar Form */}
        {isAdmin && showModal && ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setShowModal(false)}>
            <div className="bg-white/90 border border-yellow-200 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold" onClick={() => setShowModal(false)} aria-label="Close">&times;</button>
              <form onSubmit={handleAddAttar} className="flex flex-col gap-4">
                <h3 className="font-playfair text-2xl font-bold text-gold-800 mb-2">Add New Attar</h3>
                <input
                  type="text"
                  name="name"
                  value={newAttar.name}
                  onChange={handleInputChange}
                  placeholder="Attar Name"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 outline-none"
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 outline-none"
                  required
                />
                {newAttar.image && (
                  <img src={newAttar.image} alt="Preview" className="w-32 h-32 object-cover rounded-xl mx-auto border border-gray-200" />
                )}
                <input
                  type="number"
                  name="price"
                  value={newAttar.price}
                  onChange={handleInputChange}
                  placeholder="Price (₹)"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 outline-none"
                  min="1"
                  required
                />
                <textarea
                  name="description"
                  value={newAttar.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 outline-none resize-none"
                  rows={3}
                  required
                />
                <button type="submit" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300 text-base">Add Attar</button>
              </form>
            </div>
          </div>,
          document.body
        )}
        <div className="text-center mb-12 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6 lg:mb-8">
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gold-gradient-ultra mr-4 sm:mr-6"></div>
            <div className="flex items-center mobile-gap">
              <Sparkles className="mobile-icon text-gold-500 animate-luxury-pulse" />
              <span className="text-gold-700 font-playfair font-bold tracking-wider uppercase mobile-text-lg drop-shadow-lg">Attar Collections</span>
              <Award className="mobile-icon text-gold-500 animate-luxury-pulse" />
            </div>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gold-gradient-ultra ml-4 sm:ml-6"></div>
          </div>
          <h2 className="font-playfair mobile-hero-text font-bold mb-6 lg:mb-8 text-shadow-ultra text-gold-900">
            Discover Our <span className="text-gradient-ultra">Attars</span>
          </h2>
          <p className="mobile-text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Explore our curated selection of attars, each crafted with the finest ingredients and a passion for olfactory artistry. Find your signature scent and save your favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
          {attars.map((attar, index) => {
            const badge = getBadge(index);
            const rating = getRating(index);
            const reviews = getReviews(index);
            // Use admin price if present, else fallback to generated
            const hasPrice = Object.prototype.hasOwnProperty.call(attar as any, 'price') && (attar as any).price !== undefined && (attar as any).price !== '';
            const price = hasPrice ? parseInt((attar as any).price) : getPrice(index);
            const originalPrice = hasPrice ? price + 50 : getOriginalPrice(index);
            const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
            const isPremium = badge.label === 'Premium' || badge.label === 'Exclusive';
            // Delete handler
            const handleDelete = () => {
              if (window.confirm('Are you sure you want to delete this product?')) {
                setAttars(attars.filter((_, i) => i !== index));
              }
            };
            return (
              <div
                key={index}
                className={`group relative flex flex-col rounded-2xl shadow-xl bg-white overflow-hidden border ${isPremium ? 'border-yellow-400' : 'border-gray-100'} transition-all duration-500 w-full max-w-[370px] h-[500px] mx-auto animate-scale-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Admin Delete Button */}
                {isAdmin && (
                  <button
                    onClick={handleDelete}
                    className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-red-500 hover:text-white text-red-500 rounded-full p-2 shadow transition-colors duration-300"
                    title="Delete Product"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
                {/* Image & Badges */}
                <div className="relative w-full h-[220px]">
                  <img
                    src={attar.image}
                    alt={attar.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-3 left-3 flex gap-2 z-10">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white shadow ${badge.color}`}>
                      {badge.icon}
                      {badge.label}
                    </div>
                    {isPremium && (
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white shadow bg-gradient-to-r from-yellow-500 to-yellow-700">
                        <Award className="w-4 h-4" /> Exclusive
                      </div>
                    )}
                  </div>
                </div>
                {/* Card Body */}
                <div className="flex-1 flex flex-col px-5 pt-4 pb-6 bg-white">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <svg className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                      </span>
                    ))}
                    <span className="ml-2 text-xs text-gray-500 font-semibold">{rating.toFixed(1)} ({reviews} reviews)</span>
                  </div>
                  {/* Name */}
                  <h3 className="font-playfair text-xl font-bold mb-2 text-gray-900">{attar.name}</h3>
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{attar.description}</p>
                  {/* Price Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-yellow-600">₹{price}</span>
                      <span className="text-gray-400 line-through text-sm">₹{originalPrice}</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Save {discount}%</span>
                  </div>
                  {/* Add to Collection Button */}
                
                </div>
              </div>
            );
          })}
        </div>
        {/* Home Button and Add Attar Button at Bottom Center */}
        <div className="flex justify-center items-center gap-4 mt-10 sm:mt-12 mb-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-gold-gradient-ultra text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-luxury hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-base sm:text-lg"
          >
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
            Home
          </button>
          {isAdmin && (
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-base sm:text-lg"
            >
              + Add Attar
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collections;
