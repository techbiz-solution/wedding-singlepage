'use client';

import { motion } from 'framer-motion';
import { Heart, Camera, MapPin } from 'lucide-react';
import { CodeBlock } from '@/components/ui/CodeBlock';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

type Polaroid = { src: string; alt: string; caption: string };

const ShufflingPolaroids = ({
  images,
  intervalMs = 2600,
}: {
  images: Polaroid[];
  intervalMs?: number;
}) => {
  const [order, setOrder] = useState<number[]>(
    images.map((_, i) => i) // [0,1,2,...]
  );
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // rotate order: [0,1,2] -> [1,2,0]
  const shuffle = () =>
    setOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(shuffle, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, intervalMs]);

  const positions = useMemo(
    () => [
      // top card
      { x: 0, y: 0, rotate: -4, z: 30, scale: 1 },
      // middle
      { x: 18, y: 18, rotate: 6, z: 20, scale: 0.96 },
      // bottom
      { x: -18, y: 26, rotate: -2, z: 10, scale: 0.92 },
    ],
    []
  );

  return (
    <div
      className="relative h-80 lg:h-96 w-full flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={shuffle} // tap to shuffle on mobile
    >
      <AnimatePresence initial={false}>
        {order.slice(0, 3).map((imgIndex, stackIndex) => {
          const p = positions[stackIndex];
          const img = images[imgIndex];
          return (
            <motion.div
              key={imgIndex}
              className="absolute"
              style={{ zIndex: p.z }}
              initial={{ opacity: 0, scale: 0.9, rotate: p.rotate - 6 }}
              animate={{
                opacity: 1,
                x: p.x,
                y: p.y,
                rotate: p.rotate,
                scale: p.scale,
                transition: { type: 'spring', stiffness: 300, damping: 26 },
              }}
              exit={{ opacity: 0, scale: 0.9, y: 40, transition: { duration: 0.2 } }}
              whileHover={{ y: p.y - 6, rotate: p.rotate + 1 }}
            >
              <div className="bg-white p-2 rounded-md shadow-xl ring-1 ring-black/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={272}
                  height={272}
                  className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-sm"
                />
                <p className="mt-2 text-center text-xs text-[#6B7280] font-medium">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const OurStory = () => {
  const images: Polaroid[] = [
    {
      src: "/our_story/flower.jpg",
      alt: "Wedding Flowers",
      caption: "Wedding Flowers"
    },
    {
      src: "/our_story/cartier.jpg",
      alt: "Wedding Ring",
      caption: "Wedding Ring"
    },
    {
      src: "/our_story/cafe_1.png",
      alt: "Cafe",
      caption: "Cafe"
    }
  ];

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
              <ShufflingPolaroids images={images} />
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