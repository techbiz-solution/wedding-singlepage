'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock as ClockIcon, Heart, Users, Phone, Mail, Globe, Camera, Utensils, Music, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const EventDetails = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const events = [
    {
      time: '3:00 PM',
      title: 'Ceremony',
      description: 'Exchange of vows in the beautiful garden',
      icon: Heart,
      color: 'bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2]'
    },
    {
      time: '4:00 PM',
      title: 'Cocktail Hour',
      description: 'Light refreshments and mingling',
      icon: Utensils,
      color: 'bg-gradient-to-r from-[#8BC34A] to-[#4CBFAD]'
    },
    {
      time: '5:00 PM',
      title: 'Photo Session',
      description: 'Family and couple photos',
      icon: Camera,
      color: 'bg-gradient-to-r from-[#FFD93D] to-[#FF7B54]'
    },
    {
      time: '6:00 PM',
      title: 'Dinner',
      description: 'Farm-to-table dinner service',
      icon: Utensils,
      color: 'bg-gradient-to-r from-[#C29DF2] to-[#E63946]'
    },
    {
      time: '8:00 PM',
      title: 'Reception & Dancing',
      description: 'Celebration and dancing under the stars',
      icon: Music,
      color: 'bg-gradient-to-r from-[#4CBFAD] to-[#FFD93D]'
    }
  ];

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#2C2C2C] mb-6">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8BC34A] to-[#4CBFAD] mx-auto rounded-full mb-8"></div>
          <p className="font-sans text-xl text-[#4B5563] max-w-2xl mx-auto">
            Join us for a day filled with love, laughter, and beautiful memories
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FFD93D] to-[#C29DF2] h-full rounded-full"></div>
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-4 w-[3px] bg-gradient-to-b from-[#FFD93D] to-[#C29DF2] h-full rounded-full"></div>
            
            {/* Events */}
            <div className="space-y-8 md:space-y-12">
              {events.map((event, index) => {
                const IconComponent = event.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start">
                      {/* Timeline Dot */}
                      <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-[#8BC34A] to-[#4CBFAD] rounded-full border-2 border-white shadow-lg z-10 transform -translate-x-1/2"></div>
                      
                      {/* Event Content */}
                      <div className="ml-8 w-full">
                        <div className="bg-white p-4 md:p-6 rounded-lg accent-shadow border-l-4 border-l-[#8BC34A]">
                          <div className="flex items-center mb-3">
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${event.color} flex items-center justify-center mr-3`}>
                              <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-serif text-base md:text-lg font-semibold text-[#2C2C2C]">
                                {event.title}
                              </div>
                              <div className="text-sm text-[#FF7B54] font-medium">
                                {event.time}
                              </div>
                            </div>
                          </div>
                          <p className="text-[#4B5563] leading-relaxed text-sm md:text-base">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center">
                      {/* Left Side Event */}
                      {isLeft && (
                        <div className="w-5/12 text-right pr-8">
                          <div className="bg-white p-6 rounded-lg accent-shadow border-l-4 border-l-[#FF9EBB]">
                            <div className="flex items-center mb-3 justify-end">
                              <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center mr-3`}>
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-right">
                                  <div className="font-serif text-lg font-semibold text-[#2C2C2C]">
                                    {event.title}
                                  </div>
                                  <div className="text-sm text-[#FF7B54] font-medium">
                                    {event.time}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-[#4B5563] leading-relaxed text-right">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#8BC34A] to-[#4CBFAD] rounded-full border-4 border-white shadow-lg z-10"></div>

                      {/* Right Side Event */}
                      {!isLeft && (
                        <div className="w-5/12 text-left pl-8 ml-auto">
                          <div className="bg-white p-6 rounded-lg accent-shadow border-l-4 border-l-[#8BC34A]">
                            <div className="flex items-center mb-3">
                              <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center mr-3`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="font-serif text-lg font-semibold text-[#2C2C2C]">
                                  {event.title}
                                </div>
                                <div className="text-sm text-[#FF7B54] font-medium">
                                  {event.time}
                                </div>
                              </div>
                            </div>
                            <p className="text-[#4B5563] leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-6">
            The Venue
          </h3>
          <div className="bg-[#FFFDF5] p-6 md:p-8 rounded-lg border border-[#E5E7EB] accent-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Venue Details */}
              <div className="text-left">
                <h4 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4">
                  RARIN – Bangkok Riverside Venue
                </h4>
                <p className="text-[#6B7280] mb-6 leading-relaxed text-sm md:text-base">
                  Located along the beautiful Chao Phraya River, RARIN offers a stunning backdrop for our wedding celebration.
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-serif text-base md:text-lg font-semibold text-[#8BC34A]">Address:</span>
                    <p className="text-[#6B7280] text-sm md:text-base">59 Rat Burana 11 Alley, Bang Pakok, Rat Burana, Bangkok 10140</p>
                  </div>
                  <div>
                    <span className="font-serif text-base md:text-lg font-semibold text-[#8BC34A]">Date & Time:</span>
                    <p className="text-[#6B7280] text-sm md:text-base">Friday, December 5, 2025 at 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Venue Image */}
              <div className="relative">
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/venue.png"
                    alt="RARIN Bangkok Riverside Venue"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-[#2C2C2C]">Venue</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4 font-light">Venue Location</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Google Maps Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 accent-shadow border border-[#E5E7EB]">
              <div className="text-center mb-4">
                <h4 className="font-serif text-xl md:text-2xl text-[#2C2C2C] mb-2">Interactive Map</h4>
                <p className="text-sm text-[#6B7280]">View the exact location</p>
              </div>
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.4490341855144!2d100.49002929999999!3d13.6912322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299bf6a84c907%3A0x560932bf43b5b621!2sRARIN-Bangkok%20Riverside%20Venue!5e0!3m2!1sen!2sth!4v1755905094120!5m2!1sen!2sth" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RARIN-Bangkok Riverside Venue Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com/?q=RARIN-Bangkok+Riverside+Venue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#8BC34A] to-[#4CBFAD] text-white font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 hover:from-[#7CB342] hover:to-[#3DB8A0] transition-all duration-300 transform hover:scale-105 accent-shadow-hover rounded-lg"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Location Image Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 accent-shadow border border-[#E5E7EB]">
              <div className="text-center mb-4">
                <h4 className="font-serif text-xl md:text-2xl text-[#2C2C2C] mb-2">Venue Preview</h4>
                <p className="text-sm text-[#6B7280]">See the beautiful location</p>
              </div>
              <div className="w-full rounded-xl overflow-hidden cursor-pointer group" onClick={() => setIsImageModalOpen(true)}>
                <Image
                  src="/travel/location.png"
                  alt="RARIN Bangkok Riverside Venue Location"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="text-sm font-medium text-[#2C2C2C]">Click to enlarge</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-sans text-sm text-[#4B5563] mb-2">
                  📍 RARIN – Bangkok Riverside Venue
                </p>
                <p className="text-xs text-[#6B7280]">
                  59 Rat Burana 11 Alley, Bang Pakok, Rat Burana, Bangkok 10140
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Modal */}
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5 text-[#2C2C2C]" />
              </button>
              
              {/* Image */}
              <div className="relative">
                <Image
                  src="/travel/location.png"
                  alt="RARIN Bangkok Riverside Venue Location - Full Size"
                  width={1200}
                  height={900}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>
              
              {/* Caption */}
              <div className="p-6 text-center bg-white">
                <h3 className="font-serif text-xl text-[#2C2C2C] mb-2">RARIN – Bangkok Riverside Venue</h3>
                <p className="text-sm text-[#6B7280]">59 Rat Burana 11 Alley, Bang Pakok, Rat Burana, Bangkok 10140</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventDetails; 