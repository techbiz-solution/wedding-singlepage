'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar, MapPin, Camera, Users, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Our Story', href: '#story', color: 'hover:text-[#FFD93D]' },
    { name: 'Event Details', href: '#events', color: 'hover:text-[#8BC34A]' },
    { name: 'Travel', href: '#travel', color: 'hover:text-[#FF7B54]' },
    { name: 'Gallery', href: '#gallery', color: 'hover:text-[#4CBFAD]' },
    { name: 'RSVP', href: '#rsvp', color: 'hover:text-[#C29DF2]' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFDF5]/95 backdrop-blur-custom shadow-lg border-b border-[#E5E7EB]' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src={scrolled ? "/pp_logo.png" : "/pp_logo_white.png"}
              alt="Wedding Logo"
              width={48}
              height={48}
              className="w-12 h-12 transition-all duration-300"
            />
            <span className={`font-serif text-2xl transition-colors duration-300 ${
              scrolled ? 'text-[#2C2C2C]' : 'text-white'
            }`}>
              P & P
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-200 font-medium ${item.color} ${
                  scrolled ? 'text-[#4B5563]' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled 
                ? 'text-[#4B5563] hover:text-[#FF9EBB]' 
                : 'text-white hover:text-[#FF9EBB]'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/pp_logo.png"
                    alt="Wedding Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="font-serif text-xl text-[#2C2C2C]">P & P</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-[#FF9EBB] transition-colors rounded-full hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-6 bg-white">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-6 py-4 rounded-xl transition-all duration-300 hover:bg-gray-50 group"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Icon based on section */}
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {item.name === 'Our Story' && <Heart className="w-5 h-5 text-[#FFD93D]" />}
                          {item.name === 'Event Details' && <Calendar className="w-5 h-5 text-[#8BC34A]" />}
                          {item.name === 'Travel' && <MapPin className="w-5 h-5 text-[#FF7B54]" />}
                          {item.name === 'Gallery' && <Camera className="w-5 h-5 text-[#4CBFAD]" />}
                          {item.name === 'RSVP' && <Users className="w-5 h-5 text-[#C29DF2]" />}
                        </div>
                        
                        <div>
                          <div className="font-serif text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors">
                            {item.name === 'Our Story' && 'Learn about our journey'}
                            {item.name === 'Event Details' && 'Ceremony & reception info'}
                            {item.name === 'Travel' && 'Accommodation & transport'}
                            {item.name === 'Gallery' && 'Photo memories'}
                            {item.name === 'RSVP' && 'Confirm your attendance'}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                    Questions?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Need help or have special requests? We're here to help!
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#FF9EBB]" />
                      <span className="text-gray-700">
                        rsvp@wedding.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#8BC34A]" />
                      <span className="text-gray-700">
                        (555) 123-4567
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 