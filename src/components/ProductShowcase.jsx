import React, { useRef, useState } from 'react';
import { motion as Motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'blue',
    color: '#3B82F6',
    title: 'DRAG BLUE',
    image: '/blue_goggle.png',
    shadowColor: 'rgba(59, 130, 246, 0.4)'
  },
  {
    id: 'yellow',
    color: '#F59E0B',
    title: 'DRAG YELLOW',
    image: '/yellow_goggle.png',
    shadowColor: 'rgba(245, 158, 11, 0.4)'
  },

  {
    id: 'purple',
      color: '#8B5CF6',
      title: 'DRAG PURPLE',
    image: '/purple_goggle.png',
    shadowColor: 'rgba(139, 92, 246, 0.4)'
  },
  {
    id: 'orange',
    color: '#FF7F00',
    title: 'DRAG ORANGE',
    image: '/orange_goggle.png',
    shadowColor: 'rgba(255, 127, 0, 0.4)'
  }
];

const ProductShowcase = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const currentProduct = products.find(p => p.id === selectedColor) || products[0];

  const parallaxRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.35 });

  const rotateY = useTransform(springX, [-35, 35], [-6, 6]);
  const rotateX = useTransform(springY, [-25, 25], [5, -5]);

  const handleMouseMove = (e) => {
    const el = parallaxRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = x / rect.width - 0.5; 
    const yPct = y / rect.height - 0.5; 

    mouseX.set(xPct * 35);
    mouseY.set(yPct * 25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full min-h-svh bg-white/80 flex flex-col justify-between font-sans overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      
      {/* 1. Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[12vw] font-bold text-gray-100 uppercase leading-none">{currentProduct.title}</h1>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        
        {/* Color Selector Buttons */}
        <div className="absolute left-1/2 bottom-5 -translate-x-1/2 flex flex-row gap-3 bg-white/80 backdrop-blur-md p-3 rounded-full border border-gray-200 shadow-lg z-20 md:left-6 md:top-1/2 md:bottom-auto md:translate-x-0 md:-translate-y-1/2 md:flex-col md:gap-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedColor(product.id)}
              className="w-6 h-6 rounded-full relative flex items-center justify-center"
              style={{ backgroundColor: product.color }}
            >
              {selectedColor === product.id && (
                <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
              )}
            </button>
          ))}
        </div>

        {/* Product image (cursor-follow parallax) */}
        <div
          ref={parallaxRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-4xl h-80 sm:h-105 md:h-140 flex items-center justify-center perspective-[900px]"
        >
          <Motion.div
            style={{ x: springX, y: springY, rotateX, rotateY }}
            className="w-full h-full flex items-center justify-center will-change-transform transform-3d"
          >
          
            <AnimatePresence mode="wait">
              <Motion.img
                key={currentProduct.id}
                src={currentProduct.image}
                alt={currentProduct.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -18, 0], // subtle floating
                }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.25 },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{
                  filter: `drop-shadow(0 28px 55px ${currentProduct.shadowColor})`,
                }}
                className="w-full h-full object-contain select-none pointer-events-none"
                draggable={false}
              />
            </AnimatePresence>

          </Motion.div>
        </div>

      </div>

      {/* product info */}
      <div className="relative z-20 w-full bg-white border-t border-gray-100 py-5 px-4 sm:px-8 md:px-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-black">{currentProduct.title}</h2>
        <div className="flex items-center justify-between sm:justify-start gap-5">
          <span className="text-xl sm:text-2xl font-bold">149.99£</span>
          <button className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-black text-white uppercase font-bold text-sm">
            Shop Now <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;