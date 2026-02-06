import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Example data based on your image. Replace with your actual image URLs.
const collections = [
  {
    id: 'alpine',
    title: 'ALPINE PURE',
    description: 'High-altitude clarity for bright, sun-exposed conditions.',
    // Use your 9:16 vertical images here
    image: '/ski1.jpg', 
    color: 'from-blue-900/80 to-blue-600/20'
  },
  {
    id: 'magma',
    title: 'MAGMA FLOW',
    description: 'High-contrast optics for aggressive riding and flat light.',
    // Use your 9:16 vertical images here
    image: '/ski2.jpg',
    color: 'from-orange-900/80 to-red-600/20'
  },
  {
    id: 'glacier',
    title: 'GLACIER STEALTH',
    description: 'Low-profile gear for overcast days and technical terrain.',
    // Use your 9:16 vertical images here
    image: '/ski3.jpg',
    color: 'from-gray-900/80 to-slate-600/20'
  },
  {
    id: 'golden',
    title: 'GOLDEN HOUR',
    description: 'Enhanced polarization for sunset and sunrise sessions.',
    // Use your 9:16 vertical images here
    image: '/ski4.jpg',
    color: 'from-yellow-900/80 to-amber-600/20'
  },
  {
    id: 'night',
    title: 'NIGHT SHRED',
    description: 'Clear and low-light lenses for after-hours riding.',
    // Use your 9:16 vertical images here
    image: '/ski5.jpg',
    color: 'from-red-950/90 to-rose-800/30'
  },
];

const ElementalSeries = () => {
  // 'magma' is the default active panel, matching your image
  const [activeId, setActiveId] = useState('golden');

  return (
    <section className="bg-zinc-950 py-12 px-4 md:px-8">
      
      {/* Section Title */}
      <h2 className="text-white  text-5xl md:text-6xl font-bold text-center mb-6 border-b border-white pb-2 rounded-full mask-b-from-0.5 to-0  uppercase tracking-wide">
        Elemental Series
      </h2>

      {/* Accordion Container */}
      {/* h-[600px] sets the height for the 9:16 images to fill */}
      <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] w-full max-w-7xl mx-auto gap-1">
        
        {collections.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              layout // This prop enables the smooth width animation
              onClick={() => setActiveId(item.id)}
              // The flex-grow values determine how much space each panel takes
              // Active panel gets flex-[3], inactive gets flex-[1]
              className={`relative h-full cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                ${isActive ? 'flex-[3]' : 'flex-[1] hover:flex-[1.2]'}
                // On mobile, stack them vertically and give them equal height
                md:flex-row flex-col basis-0
              `}
              // Add a slight border between panels
              style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
            >
              
              {/* Background Image with object-fit: cover */}
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700
                  ${isActive ? 'scale-100' : 'scale-110 grayscale-[50%] brightness-75'}
                `}
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-80`} />

              {/* --- CONTENT LAYERS --- */}
              <AnimatePresence mode="wait">
                
                {isActive ? (
                  // Content for the ACTIVE (Expanded) Panel
                  <motion.div
                    key="active-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col items-start z-20"
                  >
                    {/* Horizontal Title */}
                    <h3 className="text-white  text-4xl md:text-6xl font-bold uppercase tracking-wide leading-none mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base max-w-md mb-6 font-light tracking-wide">
                      {item.description}
                    </p>
                    <button className="px-6 py-3 border-2 border-white text-white font-[Oswald] font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                      Shop Collection
                    </button>
                  </motion.div>
                ) : (
                  // Content for INACTIVE (Narrow) Panels
            
                  <div className={`absolute bottom-10 left-12 origin-bottom-left -rotate-90 whitespace-nowrap transition-all duration-500
                    ${isActive ? 'opacity-0' : 'opacity-100 delay-300'}
                    `}>
                                  <h2 className="text-4xl font-bold text-white tracking-wide uppercase">
                                    {item.title}
                                  </h2>
                                </div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default ElementalSeries;