'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Typewriter } from '@/components/ui/Typewriter';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-12-05T16:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - weddingDate;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#rsvp');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/pp_logo_white.png"
            alt="Wedding Logo"
            width={200}
            height={200}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto transition-all duration-300"
          />
        </div>
        
        {/* Couple Names */}
        <motion.h1 
          className="couple-names text-6xl md:text-8xl lg:text-9xl text-white text-center leading-none mb-6 text-shadow"
          animate={{
            scale: [1, 1.02, 1],
            textShadow: [
              "0 0 20px rgba(255, 158, 187, 0.3)",
              "0 0 30px rgba(255, 158, 187, 0.6)",
              "0 0 20px rgba(255, 158, 187, 0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Typewriter 
            text="Pumpuiz & Pete" 
            speed={150} 
            delay={500}
            className="text-white"
          />
        </motion.h1>
        
        {/* Date */}
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-8 text-shadow">
          December 05, 2025
        </p>
        
        {/* Location */}
        <p className="font-sans text-lg md:text-xl mb-10 text-shadow opacity-90">
          RARIN – Bangkok Riverside Venue
        </p>

        {/* Marriage Duration Text */}
        <p className="font-sans text-lg md:text-xl text-white/90 mb-6 text-shadow">
          We have been married for
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-md mx-auto">
          {[
            { label: 'Days', value: timeLeft.days, color: 'from-[#FFD93D] to-[#FF9EBB]' },
            { label: 'Hours', value: timeLeft.hours, color: 'from-[#8BC34A] to-[#4CBFAD]' },
            { label: 'Minutes', value: timeLeft.minutes, color: 'from-[#FF7B54] to-[#C29DF2]' },
            { label: 'Seconds', value: timeLeft.seconds, color: 'from-[#E63946] to-[#FFD93D]' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 backdrop-blur-custom rounded-lg p-3 md:p-4 border border-white/30">
                <div className={`font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base opacity-80">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color Theme Display */}
        <div className="text-center mb-8">
          <p className="font-sans text-lg md:text-xl text-white/90 mb-4 text-shadow">
            Dress code
          </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-[#FFD93D] shadow-lg"></div>
            <div className="w-4 h-4 rounded-full bg-[#FF9EBB] shadow-lg"></div>
            <div className="w-4 h-4 rounded-full bg-[#8BC34A] shadow-lg"></div>
            <div className="w-4 h-4 rounded-full bg-[#FF7B54] shadow-lg"></div>
            <div className="w-4 h-4 rounded-full bg-[#4CBFAD] shadow-lg"></div>
            <div className="w-4 h-4 rounded-full bg-[#C29DF2] shadow-lg"></div>
            <div className="w-4 h-4 rounded-full bg-[#E63946] shadow-lg"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9EBB] via-[#8BC34A] to-[#C29DF2] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            {/* Button */}
            <button 
              onClick={scrollToNext}
              className="relative bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2] hover:from-[#FF8BA8] hover:to-[#B08DE8] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base w-auto"
            >
              RSVP
            </button>
          </div>
        </div>

        {/* Gradient Line below button */}
        <div className="w-full max-w-2xl mx-auto mt-8">
          <div className="w-full h-1 bg-gradient-to-r from-[#FF9EBB] via-[#8BC34A] to-[#FF9EBB]"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="text-white hover:text-[#FFD93D] transition-colors"
          aria-label="Scroll to RSVP"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero; 