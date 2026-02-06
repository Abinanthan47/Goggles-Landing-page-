import React from 'react';
import { Facebook, Youtube, Instagram, ArrowRight, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">

      {/* --- TOP SECTION: SOCIALS & NEWSLETTER --- */}
      <div className="bg-white py-10 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Follow Us */}
        <div className="flex items-center gap-6">
          <h3 className="text-2xl font-bold uppercase tracking-wide  text-black">
            Follow Us:
          </h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={24} fill="black" className="text-black" /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={28} className="text-black" /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={24} className="text-black" /></a>
          </div>
        </div>

        {/* Right: Newsletter Form */}
        <div className="w-full md:w-auto flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Join Our Newsletter for Discounts and News!
          </label>
          <div className="flex h-12 w-full md:w-[400px]">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 bg-gray-100 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black/20"
            />
            <button className="bg-black text-white w-14 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- DECORATIVE "TORN EDGE" SEPARATOR --- */}
      {/* This SVG creates the rough black paint look dripping onto the white */}
      <div className="w-full leading-0 rotate-180 bg-white">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10  fill-black"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* --- MAIN BLACK FOOTER --- */}
      <div className="bg-black text-white pt-10 pb-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* LOGO COLUMN (Left Side) */}
          <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start items-start pt-4">
            {/* Custom Red 'X' / Star Shape Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Shred Logo" className="w-26 h-26 object-contain" />
              <span className="text-2xl font-bold uppercase tracking-wide  text-white">Shred</span>
            </div>
          </div>

          {/* LINKS GRID (Right Side) */}
          <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Column 1: SHOP */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold uppercase  tracking-wider">Shop</h4>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm font-medium">
                {['Goggles', 'Boards', 'Bindings', 'Apparel', 'Boots', 'Helmets', 'Gloves'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 2: TEAM */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold uppercase  tracking-wider">Team</h4>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm font-medium">
                {['Pro Lineup', 'Guides', 'Tutorials', 'Press', 'Media'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3: ABOUT */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold uppercase  tracking-wider">About</h4>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">About Shred</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jobs at Shred</a></li>
              </ul>
            </div>

            {/* Column 4: SUPPORT */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold uppercase  tracking-wider">Support</h4>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm font-medium">
                {['Customer Care', 'FAQ', 'Shipping', 'Distributors', 'Technical Documents', 'Newsletter'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* --- BOTTOM COPYRIGHT BAR --- */}
        <div className="mt-20 pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-medium">
          <p>© Copyright 2025, SHRED</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Statement</a>
            <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Jobs</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;