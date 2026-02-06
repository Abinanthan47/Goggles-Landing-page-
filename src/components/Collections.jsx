import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import React, { useCallback, useRef } from "react";
import { motion as Motion } from "motion/react";
const NewArravials = () => {
  const scrollerRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "PRO AM 172'S",
      price: "£149.99",
      image: "/blue_goggle.png",
      badge: "NEW",
    },
    {
      id: 2,
      title: "PRO AM 172'S",
      price: "£149.99",
      image: "/yellow_goggle.png",
      badge: "NEW",
    },
    {
      id: 3,
      title: "PRO AM 172'S",
      price: "£149.99",
      image: "/purple_goggle.png",
      badge: "NEW",
    },
    {
      id: 4,
      title: "PRO AM 172'S",
      price: "£149.99",
      image: "/orange_goggle.png",
      badge: "NEW",
    },
  ];

  const scrollCarousel = useCallback((direction) => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if (maxScrollLeft <= 0) return;

    const tolerance = 6;
    const isAtStart = el.scrollLeft <= tolerance;
    const isAtEnd = el.scrollLeft >= maxScrollLeft - tolerance;

    if (direction === "next") {
      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
      }
      return;
    }

    // prev
    if (isAtStart) {
      el.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -el.clientWidth * 0.9, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black">
              New Arrivals
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm font-mono uppercase">
            This seasons favorite picks
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous products"
              className="p-2 rounded-lg bg-black text-white hover:bg-neutral-800 active:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              <ArrowLeftSquare className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Next products"
              className="p-2 rounded-lg bg-black text-white hover:bg-neutral-800 active:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              <ArrowRightSquare className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
          </div>
        </div>

        {/* products carousel */}
        <div
          ref={scrollerRef}
          className="mt-8 mb-4 flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-[85%] xs:w-[75%] sm:w-[48%] md:w-[32%] bg-gray-100 rounded-2xl relative flex justify-between flex-col p-5 sm:p-6 md:p-8 group"
            >
              <div className="flex flex-col w-full items-center text-center">
                {product.badge && (
                  <span className="text-xs sm:text-sm font-mono bg-red-500 rounded-2xl px-3 py-1 text-white">
                    {product.badge}
                  </span>
                )}
                <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl text-gray-700">
                  {product.title}
                </h3>
              </div>

              {/* image section */}
              <div className="w-full flex justify-center py-6">
                <Motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-contain"
                  draggable={false}
                />
              </div>

              <div className="flex justify-center text-lg sm:text-xl">
                <h3 className="font-medium">{product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArravials;
