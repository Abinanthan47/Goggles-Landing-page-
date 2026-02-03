import { div, section } from 'framer-motion/client';
import React, { useState } from 'react';

const collections = [
  { id: 1, title: 'ALPINE PURE', image: '/ski1.jpg' },
  { id: 2, title: 'MAGMA FLOW', image: '/ski2.jpg' },
  { id: 3, title: 'GLACIER STEALTH', image: '/ski3.jpg' },
  { id: 4, title: 'GOLDEN HOUR', image: '/ski4.jpg' },
  { id: 5, title: 'NIGHT SHRED', image: '/ski5.jpg' },
];

const Tryon = () => {
  const [activeId, setActiveId] = useState(1);

  return (
   <section className='w-full h-screen py-20 px-4 md:px-8   bg-zinc-950'>
<h2 className="text-white  text-5xl md:text-6xl font-bold text-center mb-12 uppercase tracking-wide">
        Elemental Series
      </h2>

<div className='flex w-full items-center h-160 max-w-7xl mx-auto overflow-hidden '>
  {collections.map((item)=>{
 const isActive = activeId === item.id;
 return(
<div key={item.id} onClick={()=> setActiveId(item.id)}  className={` relative h-full  overflow-hidden border-r transition-[flex] duration-700 ease-in-out border-white ${isActive ? 'flex-3' : 'flex-1'} `}>
<img src={item.image} alt={item.title} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100': 'scale-110 grayscale brightness-75'}`}/>
<div className={`absolute bottom-0 left-0 p-10 w-full transition-all duration-500
  ${isActive ? ' opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}
  `}>
  <h2 className='text-4xl font-bold text-white mb-2'>{item.title}</h2>
  <p className='text-sm text-white border-b border-white pb-1'>View LookBook</p>
</div>

<div className={`absolute bottom-10 left-8 origin-bottom-left -rotate-90 whitespace-nowrap transition-all duration-500
  ${isActive ? 'opacity-0' : 'opacity-100 delay-300'}
  `}>
  <h2 className="text-xl font-bold text-white tracking-widest uppercase">
                {item.title}
              </h2>
</div>
</div>
 )
  })}
</div>
   </section>
  );
};

export default Tryon;