import React from "react";
import FloatingNavbar from "./NavBar";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden w-full bg-[#6bd3ff]">
      <FloatingNavbar/>
      <div className="absolute inset-0  overflow-hidden z-0 ">
        <div className="flex animate-marquee h-full w-full">
          <img src="/clouds.webp" alt="" className="w-full h-full object-cover " />
          <img src="/clouds2.webp" alt="" className="w-full h-[80%] object-cover scale-x-[-5]" />
        
        </div> 

      </div>

      <img
        src="/mountain.png"
        alt=""
        className="absolute inset-0 shadow-7xl   shadow-black w-full h-full object-cover opacity-70 z-10"
      />
      <div className="flex relative z-20 justify-center w-full pt-12">
        <h1 className="text-[400px]   leading-none  font-bebas tracking-[-0.035em] text-gradient bg-linear-to-b from-white to-[#a9e5ff] whitespace-nowrap ">
          PRO SERIES
        </h1>
      </div>
      <div className="flex justify-center z-30 relative">
        <img
          src="/hero.png"
          alt=""
          className="h-100  top-1/2 -translate-y-75"
        />
           <img src="/snow-texture.png" alt="" className="w-full bottom-14 opacity-100  absolute object-center object-cover  h-full " />
      </div>
      
    </div>
    
  );
};

export default Hero;
