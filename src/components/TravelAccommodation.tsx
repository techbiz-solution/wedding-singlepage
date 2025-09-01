'use client';

import { motion } from 'framer-motion';
import { Hotel, Car as Parking, Waves as Pool, Wifi, Utensils, Plane, TramFront, Dumbbell, Wine, Flower2, Heart, Trophy } from 'lucide-react';

const TravelAccommodation = () => {
  const hotels = [
    {
      name: 'Avani Riverside Bangkok Hotel',
      type: 'Hotel',
      price: '฿3,000–4,000',
      distance: '2.2km from venue',
      amenities: ['Free WiFi', 'Fitness Center', 'On site dining', 'Pool'],
      color: 'from-[#FF9EBB] to-[#C29DF2]'
    },
    {
      name: 'Ibis Bangkok Riverside',
      type: 'Hotel',
      price: '฿1,200–1,800',
      distance: '4km from venue',
      amenities: ['Free WiFi', 'Fitness Center', 'On site dining', 'Pool'],
      color: 'from-[#8BC34A] to-[#4CBFAD]'
    },
    {
      name: 'Bangkok River Loka',
      type: 'Hotel',
      price: '฿1,300–1,600',
      distance: '1.2 km from venue',
      amenities: ['Free WiFi', 'Free Parking'],
      color: 'from-[#FFD93D] to-[#FF7B54]'
    },
    {
      name: 'The Sunreno Hotel Bangkok',
      type: 'Hotel',
      price: '฿1,800–2,200',
      distance: '1.8 km from venue',
      amenities: ['Free WiFi', 'Free Parking'],
      color: 'from-[#FF7B54] to-[#E63946]'
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
            Suggested hotels in case you want to stay overnight.
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
          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-[#374151] mb-2">Price:</h5>
                        <span className="text-[#FF7B54] font-semibold text-lg">{hotel.price}</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-[#374151] mb-2">Distance:</h5>
                        <span className="text-sm text-[#6B7280]">{hotel.distance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium text-[#374151] mb-2">Amenities:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.amenities.map((amenity, idx) => {
                        // Icon mapping for amenities
                        const getAmenityIcon = (amenityName: string) => {
                          switch (amenityName) {
                            case 'Free WiFi':
                              return <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Free Parking':
                              return <Parking className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'On site dining':
                            case 'Restaurant':
                              return <Utensils className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Pool':
                              return <Pool className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Fitness Center':
                              return <Dumbbell className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Wine Tasting':
                              return <Wine className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Garden':
                              return <Flower2 className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Spa':
                              return <Heart className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            case 'Golf':
                              return <Trophy className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                            default:
                              return <Wifi className="w-4 h-4 mr-2 text-[#FF7B54]" />;
                          }
                        };

                        return (
                          <div key={idx} className="flex items-center text-sm text-[#6B7280]">
                            {getAmenityIcon(amenity)}
                            {amenity}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelAccommodation; 