'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#374151] to-[#1F2937] text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-[#FF9EBB] mb-6">Pumpuiz & Pete</h3>
              <p className="font-sans text-[#D1D5DB] leading-relaxed mb-6">
                Two hearts, one love story. We&apos;re excited to share our special day with you and create memories that will last a lifetime.
                Join us on <span className="font-serif text-[#FF9EBB]">December 05, 2025</span> as we begin this beautiful journey together.
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <Heart className="w-5 h-5 text-[#FF9EBB] mr-2" />
                <span className="font-serif text-[#FF9EBB]">June 15, 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="font-serif text-xl font-semibold text-[#FF9EBB] mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-[#FF9EBB] mr-3" />
                  <a href="mailto:hello@wedding.com" className="text-[#D1D5DB] hover:text-[#FF9EBB] transition-colors">
                    hello@wedding.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-[#FF9EBB] mr-3" />
                  <a href="tel:+15551234567" className="text-[#D1D5DB] hover:text-[#FF9EBB] transition-colors">
                    (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-[#FF9EBB] mr-3" />
                  <span className="text-[#D1D5DB]">Napa Valley, California</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="font-serif text-xl font-semibold text-[#FF9EBB] mb-6">Share the Love</h4>
              <div className="mb-6">
                <p className="font-serif text-lg text-[#D1D5DB] mb-3">Wedding Hashtag</p>
                <div className="bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2] bg-clip-text">
                  <p className="text-2xl font-bold text-transparent">#SarahMichael2025</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a href="#" className="w-10 h-10 bg-[#6B7280] hover:bg-[#FF9EBB] rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#6B7280] hover:bg-[#FF9EBB] rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#6B7280] hover:bg-[#FF9EBB] rounded-full flex items-center justify-center transition-colors duration-300" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-[#6B7280]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="py-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-sans text-[#D1D5DB] text-sm mb-4 md:mb-0">© 2025 Pumpuiz & Pete&apos;s Wedding. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-[#D1D5DB] hover:text-[#FF9EBB] transition-colors font-serif">Privacy Policy</a>
              <a href="#" className="text-[#D1D5DB] hover:text-[#FF9EBB] transition-colors font-serif">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>

    
    </footer>
  );
};

export default Footer; 