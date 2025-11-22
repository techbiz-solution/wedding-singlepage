'use client';

import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const photos = [
    {
      src: "/gallery/pre2.jpg",
      alt: "Pre-wedding photo 2",
      caption: "Our beautiful moments"
    },
    {
      src: "/gallery/pre3.jpg",
      alt: "Pre-wedding photo 3",
      caption: "Captured memories"
    },
    {
      src: "/gallery/pre4.jpg",
      alt: "Pre-wedding photo 4",
      caption: "Love in every frame"
    },
    {
      src: "/gallery/pre7.jpg",
      alt: "Pre-wedding photo 7",
      caption: "Special moments"
    },
    {
      src: "/gallery/pre8.jpg",
      alt: "Pre-wedding photo 8",
      caption: "Together forever"
    },
    {
      src: "/gallery/pre9.jpg",
      alt: "Pre-wedding photo 9",
      caption: "Our journey"
    },
    {
      src: "/gallery/pre10.jpg",
      alt: "Pre-wedding photo 10",
      caption: "Perfect memories"
    },
    {
      src: "/gallery/pre11.jpg",
      alt: "Pre-wedding photo 11",
      caption: "Love story"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#2C2C2C] mb-6">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4CBFAD] to-[#8BC34A] mx-auto rounded-full mb-8"></div>
          <p className="font-sans text-xl text-[#4B5563] max-w-2xl mx-auto">
            A collection of moments that tell our story
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="polaroid cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-sm">
                <Image 
                  src={photo.src} 
                  alt={photo.alt} 
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-[#6B7280] font-medium">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#4CBFAD] to-[#8BC34A] p-8 rounded-lg border border-[#4CBFAD] max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">More Photos Coming Soon!</h3>
            <p className="text-white/90 leading-relaxed">
              We&apos;ll be adding more photos from our engagement, wedding planning, and special moments leading up to our big day. Check back often for updates!
            </p>
            <p className="font-sans text-[#4B5563] text-sm">
              Don&apos;t forget to use our wedding hashtag when sharing photos!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery; 