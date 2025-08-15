
import React from 'react';
import { Star, Clock, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const reviews = [
    {
      name: "Kausar Afeef",
      text: "I went to this shop for a custom ring, this shop was recommended by a local. I'm very happy with the service and honesty from Mr. M Vajeeh and his assistants at the shop. They have a wide variety of Kurtas, Attar and jewelry at an affordable price. His assistant Roxana was very helpful and honest in picking women's Kurtas and I'll be more than happy to come back to this shop. I'd recommend this shop for Maldivians travelling in Bangalore or just any travellers in general. May god bless this business.",
      rating: 5
    },
    {
      name: "Khalid",
      text: "He has a lot of beautiful shawls and pashmina.",
      rating: 5
    },
    {
      name: "Ahmed Almurar",
      text: "need your number i love the oud i bout and i need more",
      rating: 5
    },
    {
      name: "Adrian Constantin",
      text: "Very nice shop!",
      rating: 5
    },
    {
      name: "Granth Smith",
      text: "Good products, friendly service.",
      rating: 5
    },
    {
      name: "Pavan Ubeeoi",
      text: "Nice",
      rating: 5
    },
    {
      name: "Djalel Hioel",
      text: "Excellent showpiece, excellent products I really liked.",
      rating: 5
    },
    {
      name: "Prakash Poojari",
      text: "Super amazing",
      rating: 5
    },
    { name: "Roxana", text: "", rating: 5 },
    { name: "Mohammed Shujath", text: "", rating: 5 },
    { name: "King Maker", text: "", rating: 5 },
    { name: "Santosh Kumar", text: "", rating: 5 },
    { name: "Creative Doodler", text: "", rating: 5 },
    { name: "Kedar Charan Dehury", text: "", rating: 4 },
    { name: "Saif Ali", text: "", rating: 5 },
    { name: "Ayesha Sadaf", text: "", rating: 5 },
  ];

  const businessHours = [
    { day: "Monday", hours: "10:30 am–9:30 pm" },
    { day: "Tuesday", hours: "10:30 am–9:30 pm" },
    { day: "Wednesday", hours: "10:30 am–9:30 pm" },
    { day: "Thursday", hours: "10:30 am–9:30 pm" },
    { day: "Friday", hours: "10:30 am–9:30 pm" },
    { day: "Saturday", hours: "10:30 am–9:30 pm" },
    { day: "Sunday", hours: "10:30 am–9:30 pm" },
  ];

  const products = [
    "Oudh & Bakhoor Perfumes",
    "Silk Sarees & Kashmiri Shawls",
    "Jalabiyas & Traditional Wear",
    "Turma & Dress Materials",
    "Kids Wear",
    "Home Decor Items",
    "Jewellery"
  ];

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
                  Al Wajhi Oudh
                </h3>
                <p className="text-xs text-white/70 tracking-wider">
                  PREMIUM PERFUMERY
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Step into a world of timeless elegance and pure indulgence with our handcrafted ittars — natural perfumes derived from the heart of flowers, herbs, woods, and resins.
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

          {/* Why Choose Us */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Why Choose Us?</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>🌿</span>
                <span className="text-white/80">100% Natural Ingredients</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕋</span>
                <span className="text-white/80">Inspired by Traditional Arabic & Indian Scents</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🧪</span>
                <span className="text-white/80">No Alcohol or Synthetic Additives</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎁</span>
                <span className="text-white/80">Elegant Packaging for Gifting</span>
              </li>
              <li className="flex items-start gap-2">
                <span>👥</span>
                <span className="text-white/80">Unisex, Spiritual, and Everyday Wear</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Business Hours</h4>
            <div className="space-y-2">
              {businessHours.map((item, index) => (
                <div key={index} className="flex justify-between text-white/80">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-white/90">Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-white/90">9035511918</p>
                </div>
              </div>
              <a href="tel:9035511918" className="inline-block mt-2">
                <button className="bg-gold-gradient px-6 py-2 rounded-full font-medium hover:shadow-luxury transition-all duration-300 text-sm">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Al Wajhi Oudh. All rights reserved.
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
