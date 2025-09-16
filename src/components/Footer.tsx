'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#374151] to-[#1F2937] text-white">
      <div className="container-custom">
        <div className="py-20 px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="font-serif text-4xl md:text-5xl text-[#FF9EBB] mb-8">Pumpuiz & Pete</h3>
              <p className="font-sans text-lg text-[#D1D5DB] leading-relaxed mb-8 max-w-lg">
                Two hearts, one love story. We&apos;re excited to share our special day with you and create memories that will last a lifetime.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Heart className="w-5 h-5 text-[#FF9EBB] animate-pulse" />
                <span className="font-serif text-lg text-[#FF9EBB] font-medium">December 05, 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="font-serif text-2xl md:text-3xl font-semibold text-[#FF9EBB] mb-8">Share the Love</h4>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="font-serif text-lg text-[#D1D5DB] mb-4">Share your moments with us using our wedding hashtags!</p>
                <div className="bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2] bg-clip-text">
                  <p className="text-2xl md:text-2xl font-bold text-transparent">#PumpuizPeteDay | #PPWedding</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#6B7280]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-[#374151] to-[#1F2937] px-6 text-[#9CA3AF] text-sm">
              ✦ ✦ ✦
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <p className="font-sans text-[#D1D5DB] text-sm">© 2025 Pumpuiz & Pete&apos;s Wedding. All rights reserved.</p>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-[#FF9EBB] rounded-full"></div>
              <div className="w-1 h-1 bg-[#C29DF2] rounded-full"></div>
              <div className="w-1 h-1 bg-[#8BC34A] rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 