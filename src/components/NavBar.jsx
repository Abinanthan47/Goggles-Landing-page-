import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const FloatingNavbar = () => {
  return (
    <div className="sticky top-6 z-[50] flex justify-center">
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full 
        bg-white/80 backdrop-blur-md 
        shadow-lg border border-white/30">

        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-sm">
         <img src="/logo.png" alt="Logo" className="h-7 w-7 rounded-full" />
            <span className="text-lg tracking-wide">Shred</span>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm text-gray-700">
          <li className="hover:text-black cursor-pointer">Shop</li>
          <li className="hover:text-black cursor-pointer">Team</li>
          <li className="hover:text-black cursor-pointer">About</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <Search size={16} />
          <ShoppingCart size={16} />
          <User size={16} />
        </div>

      </nav>
    </div>
  );
};

export default FloatingNavbar;
