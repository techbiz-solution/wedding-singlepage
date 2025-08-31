'use client';

import { motion } from 'framer-motion';
import { Hotel, Car as Parking, Waves as Pool, Wifi, Utensils, Plane, TramFront } from 'lucide-react';

const TravelAccommodation = () => {
  const hotels = [
    {
      name: 'The Napa Valley Inn',
      type: 'Hotel',
      description: 'Luxury accommodations with vineyard views',
      price: '$250/night',
      distance: '0.5 miles from venue',
      amenities: ['Free WiFi', 'Free Parking', 'Restaurant', 'Pool'],
      color: 'from-[#FF9EBB] to-[#C29DF2]'
    },
    {
      name: 'Vineyard Lodge',
      type: 'Boutique Hotel',
      description: 'Charming boutique hotel in the heart of wine country',
      price: '$200/night',
      distance: '1.2 miles from venue',
      amenities: ['Free WiFi', 'Free Parking', 'Wine Tasting', 'Garden'],
      color: 'from-[#8BC34A] to-[#4CBFAD]'
    },
    {
      name: 'Napa Valley Resort',
      type: 'Resort',
      description: 'Full-service resort with spa and golf course',
      price: '$350/night',
      distance: '2.0 miles from venue',
      amenities: ['Free WiFi', 'Free Parking', 'Spa', 'Golf'],
      color: 'from-[#FFD93D] to-[#FF7B54]'
    }
  ];

  const transportOptions = [
    {
      name: 'Rental Car',
      description: 'Flexible transportation around Napa Valley',
      details: 'Multiple rental companies available at SFO and OAK airports',
      icon: Parking,
      color: 'from-[#FF7B54] to-[#E63946]'
    },
    {
      name: 'Airport Shuttle',
      description: 'Direct service from SFO and OAK airports',
      details: 'Pre-booked shuttles available for wedding guests',
      icon: Plane,
      color: 'from-[#4CBFAD] to-[#8BC34A]'
    },
    {
      name: 'Public Transit',
      description: 'BART and local bus services available',
      details: 'Limited service on weekends, plan accordingly',
      icon: TramFront,
      color: 'from-[#C29DF2] to-[#FFD93D]'
    }
  ];

  return (
    <section id="travel" className="section-padding bg-[#FFFDF5]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#2C2C2C] mb-6">
            Travel & Accommodation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF7B54] to-[#E63946] mx-auto rounded-full mb-8"></div>
          <p className="font-sans text-xl text-[#4B5563] max-w-3xl mx-auto">
            We&apos;ve arranged special rates and transportation options to make your stay comfortable and convenient
          </p>
        </motion.div>

        {/* Hotels Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-8 text-center">Where to Stay</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg accent-shadow overflow-hidden border border-[#E5E7EB]"
              >
                <div className={`bg-gradient-to-r ${hotel.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <Hotel className="w-8 h-8" />
                    <span className="text-sm font-medium opacity-90">{hotel.type}</span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold">{hotel.name}</h4>
                </div>
                <div className="p-6">
                  <p className="text-[#4B5563] mb-4 leading-relaxed">{hotel.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#FF7B54] font-semibold">{hotel.price}</span>
                      <span className="text-sm text-[#6B7280]">{hotel.distance}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium text-[#374151] mb-2">Amenities:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-[#6B7280]">
                          {amenity === 'Free WiFi' && <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Free Parking' && <Parking className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Restaurant' && <Utensils className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Pool' && <Pool className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Wine Tasting' && <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Garden' && <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Spa' && <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity === 'Golf' && <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />}
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">
                    <p className="text-xs text-[#6B7280] font-medium">Book with code: SARAHMICHAEL2025</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transportation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] mb-8 text-center">Getting Around</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg accent-shadow p-6 border border-[#E5E7EB] text-center"
              >
                <div className={`bg-gradient-to-r ${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#374151] mb-3">{option.name}</h4>
                <p className="text-[#4B5563] mb-4 leading-relaxed">{option.description}</p>
                <p className="text-sm text-[#6B7280] bg-[#F9FAFB] p-3 rounded border border-[#E5E7EB]">{option.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-lg accent-shadow border border-[#E5E7EB] max-w-4xl mx-auto">
            <h4 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4">Need Help Planning?</h4>
            <p className="text-[#4B5563] mb-6 leading-relaxed">
              Our wedding coordinator is available to help with travel arrangements and answer any questions about accommodations or transportation. Don&apos;t hesitate to reach out!
            </p>
            <div className="bg-gradient-to-r from-[#FFD93D] to-[#FF9EBB] p-4 rounded-lg border border-[#FFD93D]">
              <p className="text-[#2C2C2C] font-medium">📧 Email: travel@wedding.com | 📱 Phone: (555) 123-4567</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelAccommodation; 