'use client';

import { motion } from 'framer-motion';
import { Heart, Camera, MapPin } from 'lucide-react';
import { CodeBlock } from '@/components/ui/CodeBlock';
import Image from 'next/image';

const OurStory = () => {
  const loveStoryCode = `def love_story():
    place = "coffee shop"
    moments = [
        "laughter",
        "adventures", 
        "dreams",
        "memories"
    ]

    print(f"We met at a {place} ☕")
    for m in moments:
        print(f"Our days were filled with {m} ❤️")

    print("Then one day... the proposal 💍")
    print("And now, happily ever after 🎉")

love_story()`;

  return (
    <section id="story" className="section-padding bg-[#FFFDF5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#2C2C2C] mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD93D] to-[#FF9EBB] mx-auto rounded-full mb-8"></div>
          <p className="font-sans text-xl text-[#4B5563] max-w-2xl mx-auto">
            A love story that began with a chance encounter and blossomed into forever
          </p>
        </motion.div>

        {/* Code Block and Photos Section - Side by side on desktop, stacked on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* "Our Love Story in Code" Subheading */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4 font-light">Our Love Story in Code</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#FFD93D] to-transparent mx-auto mb-6"></div>
          </div>
          
          {/* Two-column layout on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Code Block - Full width on mobile, 60% width on desktop (3/5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-3 w-full"
            >
              <div className="w-full overflow-hidden">
                <CodeBlock
                  language="python"
                  filename="love_story.py"
                  code={loveStoryCode}
                />
              </div>
            </motion.div>

            {/* Photo Stack - Full width on mobile, 40% width on desktop (2/5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative h-80 lg:h-96 flex items-center justify-center"
            >
              {/* Photo 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute polaroid cursor-pointer transition-all duration-300 z-20"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="First meeting at coffee shop" 
                  width={192}
                  height={192}
                  className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-sm"
                />
                <div className="mt-2 text-center">
                  <p className="text-xs text-[#6B7280] font-medium">First meeting at coffee shop</p>
                </div>
              </motion.div>

              {/* Photo 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="absolute polaroid cursor-pointer transition-all duration-300 z-10"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="First date at the park" 
                  width={192}
                  height={192}
                  className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-sm"
                />
                <div className="mt-2 text-center">
                  <p className="text-xs text-[#6B7280] font-medium">First date at the park</p>
                </div>
              </motion.div>

              {/* Photo 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute polaroid cursor-pointer transition-all duration-300 z-0"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Proposal at sunset" 
                  width={192}
                  height={192}
                  className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-sm"
                />
                <div className="mt-2 text-center">
                  <p className="text-xs text-[#6B7280] font-medium">Proposal at sunset</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Story Text - Full width below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="space-y-6">
            <p className="font-sans text-lg text-[#4B5563] leading-relaxed">
              It all began on a rainy afternoon in downtown Bangkok. Pumpuiz was reading her favorite book at the corner coffee shop when Pete walked in, completely drenched from the unexpected downpour.
            </p>
            <p className="font-sans text-lg text-[#4B5563] leading-relaxed">
              What started as a simple gesture of offering a napkin turned into hours of conversation about dreams, aspirations, and the little things that make life beautiful. That day, we discovered that sometimes the best love stories begin with the most ordinary moments.
            </p>
            <p className="font-sans text-lg text-[#4B5563] leading-relaxed">
              Three years later, on a mountaintop at sunset, Pete got down on one knee and asked the question that would change our lives forever. Now, we&apos;re excited to celebrate our love with all of you on our special day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory; 