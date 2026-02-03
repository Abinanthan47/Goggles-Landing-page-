import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'red',
    color: '#F43F5E',
    // Using a high-reliability image from Unsplash to ensure it loads
    image: '/blue_goggle.png',
    shadowColor: 'rgba(244, 63, 94, 0.4)'
  },
  {
    id: 'blue',
    color: '#3B82F6',
    image: '/yellow_goggle.png',
    shadowColor: 'rgba(59, 130, 246, 0.4)'
  }
];

const ProductShowcase = () => {
  const [selectedColor, setSelectedColor] = useState('red');
  const currentProduct = products.find(p => p.id === selectedColor) || products[0];

  return (
    <section className="relative w-full h-screen bg-white flex flex-col justify-between font-sans overflow-hidden">
      
      {/* 1. Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[15vw] font-bold text-gray-100 uppercase leading-none">
          DRAG MODEL
        </h1>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full h-full">
        
        {/* Color Selector Buttons */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white/80 backdrop-blur-md p-3 rounded-full border border-gray-200 shadow-lg z-20">
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

        {/* --- IMAGE DEBUG AREA --- */}
        {/* I added 'border-2 border-red-500' so you can SEE the container */}
        <div className="relative w-full max-w-4xl h-[500px] border-2 border-red-500 flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={currentProduct.id}
              src={currentProduct.image}
              alt="Product"
              
              // REMOVED 'initial={{ opacity: 0 }}' to prevent it from being invisible
              initial={{ scale: 0.9 }} 
              animate={{ 
                scale: 1,
                y: [0, -20, 0] // Simple floating animation
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
              }}
              
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </AnimatePresence>

        </div>

      </div>

      {/* 3. Footer */}
      <div className="relative z-20 w-full bg-white border-t border-gray-100 py-6 px-10 flex justify-between items-center">
        <h2 className="text-2xl font-black uppercase text-black">Oakley Encoder</h2>
        <div className="flex items-center gap-6">
            <span className="text-2xl font-bold">276$</span>
            <button className="flex items-center gap-2 px-6 py-2 bg-black text-white uppercase font-bold text-sm">
                Shop Now <ArrowUpRight size={16} />
            </button>
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;