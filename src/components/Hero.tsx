'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Typewriter } from '@/components/ui/Typewriter';
import Image from 'next/image';

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
      const distance = weddingDate - now;
      
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
    const nextSection = document.querySelector('#story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/pp_logo_white.png"
            alt="Wedding Logo"
            width={200}
            height={200}
            className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto transition-all duration-300"
          />
        </div>
        
        {/* Couple Names */}
        <h1 className="couple-names text-6xl md:text-8xl lg:text-9xl text-white text-center leading-none mb-6 text-shadow">
          <Typewriter 
            text="Pumpuiz & Pete" 
            speed={150} 
            delay={500}
            className="text-white"
          />
        </h1>
        
        {/* Date */}
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-8 text-shadow">
          December 05, 2025
        </p>
        
        {/* Location */}
        <p className="font-sans text-lg md:text-xl mb-10 text-shadow opacity-90">
          RARIN – Bangkok Riverside Venue
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
        <button 
          onClick={scrollToNext}
          className="bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2] hover:from-[#FF8BA8] hover:to-[#B08DE8] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Our Story
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="text-white hover:text-[#FFD93D] transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero; 