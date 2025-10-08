import React from "react";
import Navbar from "./Navbar";

// Example ad/project data
const adsData = [
  {
    id: 1,
    title: "Product Launch Campaign",
    description: "High-impact social media ads for new product launch.",
    image: "https://source.unsplash.com/400x300/?advertising,marketing",
  },
  {
    id: 2,
    title: "Brand Awareness Ads",
    description: "Creative ads designed to boost brand recognition.",
    image: "https://source.unsplash.com/400x300/?advertisement,billboard",
  },
  {
    id: 3,
    title: "E-commerce Campaign",
    description: "Ads optimized for conversions on e-commerce platforms.",
    image: "https://source.unsplash.com/400x300/?ecommerce,ads",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    description: "Comprehensive ad strategy for online campaigns.",
    image: "https://source.unsplash.com/400x300/?digital,marketing",
  },
];

function Work() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-center px-6 md:px-20 text-white py-20"
        style={{
          background: "linear-gradient(135deg, #0a0a0a, #1c1c1c, #111111)",
        }}
      >
        {/* Section Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat mb-6 text-center">
          Our Work
        </h1>

        {/* Section Subtitle */}
        <p className="text-lg md:text-2xl font-lato text-center max-w-3xl mb-16">
          We craft professional ads that stand out on dark-themed platforms.
          Each campaign is designed to capture attention while keeping the focus
          on your brand.
        </p>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {adsData.map((ad) => (
            <div
              key={ad.id}
              className="bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold font-montserrat mb-2">
                  {ad.title}
                </h2>
                <p className="text-base font-lato mb-4">{ad.description}</p>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-raleway transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
