'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    guestCount: '',
    guestSide: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to our API route that will handle Google Sheets
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          guestCount: formData.guestCount,
          guestSide: formData.guestSide,
          timestamp: new Date().toISOString(),
          source: 'Wedding Website'
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Submission failed: ${errorText}`);
      }

      const result = await response.json();
      console.log('Response result:', result);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', guestCount: '', guestSide: '' });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
      
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding bg-gradient-to-br from-[#FFFDF5] to-[#F9FAFB]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#FF9EBB] mr-3" />
            <h2 className="font-serif text-5xl md:text-6xl text-[#2C2C2C]">
              RSVP
            </h2>
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#FF9EBB] ml-3" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2] mx-auto rounded-full mb-8"></div>
          <p className="font-sans text-xl text-[#4B5563] max-w-2xl mx-auto">
            Please let us know if you can join us on our special day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 accent-shadow border border-[#E5E7EB]">
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block font-sans text-sm font-medium text-[#4B5563] mb-2 tracking-wide">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#FF9EBB] focus:border-transparent transition-all duration-200 font-sans text-[#2C2C2C] placeholder-[#9CA3AF]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Number of Guests Field */}
              <div className="mb-6">
                <label htmlFor="guestCount" className="block font-sans text-sm font-medium text-[#4B5563] mb-2 tracking-wide">
                  NUMBER OF GUESTS (INCLUDING YOURSELF)
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#FF7B54] focus:border-transparent transition-all duration-200 font-sans text-[#2C2C2C]"
                >
                  <option value="">Select number of guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10+ Guests</option>
                </select>
              </div>

              {/* Guest Side Field */}
              <div className="mb-8">
                <label htmlFor="guestSide" className="block font-sans text-sm font-medium text-[#4B5563] mb-2 tracking-wide">
                  RELATIONSHIP TO COUPLE
                </label>
                <select
                  id="guestSide"
                  name="guestSide"
                  value={formData.guestSide}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#FF7B54] focus:border-transparent transition-all duration-200 font-sans text-[#2C2C2C]"
                >
                  <option value="">Please select your relationship</option>
                  <option value="bride">Bride&apos;s Family & Friends</option>
                  <option value="groom">Groom&apos;s Family & Friends</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#FF9EBB] to-[#C29DF2] text-white font-sans text-sm tracking-[0.3em] uppercase py-4 hover:from-[#FF8BA8] hover:to-[#B08DE8] transition-all duration-300 transform hover:scale-105 accent-shadow-hover rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-gradient-to-r from-[#8BC34A]/20 to-[#4CBFAD]/20 border border-[#8BC34A]/30 rounded-lg"
                >
                  <p className="text-[#2E7D32] text-sm text-center font-medium">Thank you for your RSVP! 💕</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-gradient-to-r from-[#E63946]/20 to-[#FF7B54]/20 border border-[#E63946]/30 rounded-lg"
                >
                  <p className="text-[#C62828] text-sm text-center font-medium">There was an error submitting your RSVP. Please try again.</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Thank You Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 md:p-10 max-w-3xl mx-auto accent-shadow border border-[#E5E7EB]">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#FF9EBB] mr-3" />
                <h3 className="font-serif text-2xl md:text-3xl text-[#2C2C2C]">
                  Thank You for Your RSVP
                </h3>
                <Heart className="w-8 h-8 text-[#FF9EBB] ml-3" />
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="font-sans text-lg text-[#4B5563] leading-relaxed">
                  Your presence at our wedding means the world to us. We can&apos;t wait to celebrate this special day with you and create beautiful memories together.
                </p>
                <p className="font-sans text-base text-[#6B7280]">
                  We&apos;ll see you on <span className="font-semibold text-[#FF7B54]">December 05, 2025</span> at the beautiful RARIN Bangkok Riverside Venue.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#FF9EBB]/10 to-[#C29DF2]/10 p-6 rounded-lg border border-[#FF9EBB]/20">
                <p className="font-serif text-lg text-[#2C2C2C] mb-2">
                  ✨ What to Expect ✨
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#6B7280]">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF9EBB] rounded-full mr-2"></div>
                    <span>Beautiful riverside ceremony</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#8BC34A] rounded-full mr-2"></div>
                    <span>Delicious Thai cuisine</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#C29DF2] rounded-full mr-2"></div>
                    <span>Unforgettable celebrations</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVP; 