import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import React from "react";

const NewArravials = () => {
  const products = [
    {
      id: 1,
      title: "PRO AM 172'S",
      price: "£149.99",
      // Using a placeholder that matches the orange color
      image: "/blue_goggle.png",
      badge: "NEW",
    },
    {
      id: 2,
      title: "PRO AM 172'S",
      price: "£149.99",
      // Using a placeholder that matches the green color
      image: "/yellow_goggle.png",
      badge: "NEW",
    },
    {
      id: 3,
      title: "PRO AM 172'S",
      price: "£149.99",
      // Using a placeholder that matches the white/grey color
      image: "/purple_goggle.png",
      badge: "NEW",
    },
  ];

  return (
    <section className="h-screen w-full bg-white max-w-7xl mx-auto  pt-10 ">
      <div className="flex items-end justify-between mb-4">
        <div className="">
          <h1 className="text-6xl tracking-tight text-black">New Arrivals</h1>
          <p className="text-gray-500 text-sm font-mono uppercase ">
            This seasons favorite picks
          </p>
        </div>

        <div className="flex gap-2 ">
          <button>
            <ArrowLeftSquare className="w-10 h-10 text-white bg-black " />
          </button>
          <button>
            <ArrowRightSquare className="w-10 h-10 text-white bg-black" />
          </button>
        </div>
      </div>

      {/* products card */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 min-h-100 relative flex  justify-between flex-col p-8 group"
          >
            <div className="flex flex-col w-full items-center ">
              {product.badge && (
                <span className="text-md font-mono bg-red-500 rounded-2xl px-2  text-white ">
                  {product.badge}
                </span>
              )}
              <h3 className="mt-4 text-4xl text-gray-700">{product.title}</h3>
            </div>

            {/* image section */}

            <div className="w-full flex justify-center py-6">
              <img src={product.image} alt={product.title} className="w-full max-h-96 hover:scale-110 "/>
            </div>

            <div className="flex justify-center text-xl">
              <h3>{product.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArravials;
