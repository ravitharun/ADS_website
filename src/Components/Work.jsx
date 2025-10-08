import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const adsData = [
  {
    id: 1,
    title: "Creative Product Launch Campaign",
    description:
      "We build attention-grabbing ad strategies that spark excitement and engagement. From concept to execution, every frame speaks your brand’s language.",
    image: "https://source.unsplash.com/800x600/?product,advertising",
  },
  {
    id: 2,
    title: "Brand Awareness Visuals",
    description:
      "Our bold and memorable visuals help brands rise above the noise. Perfect for dark-themed ad spaces and high-impact digital experiences.",
    image: "https://source.unsplash.com/800x600/?branding,poster",
  },
  {
    id: 3,
    title: "E-commerce Growth Campaign",
    description:
      "Boost your online store visibility with ad creatives optimized for clicks, conversions, and customer loyalty.",
    image: "https://source.unsplash.com/800x600/?ecommerce,shopping,marketing",
  },
  {
    id: 4,
    title: "Digital Strategy & Targeting",
    description:
      "Our data-driven digital ad strategies ensure your content reaches the right audience, at the right time, every time.",
    image: "https://source.unsplash.com/800x600/?digital,analytics,marketing",
  },
];

function Work() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Navbar />

      {/* Work Section */}
      <div
        className="min-h-screen flex flex-col items-center px-6 md:px-20 text-white pt-20 pb-32 font-poppins"
        style={{
          background: "linear-gradient(135deg, #000000, #0a0a0a, #111111)",
        }}
      >
        {/* Title */}
       <h1
  className="text-5xl md:text-7xl mb-6 text-center tracking-wide bg-clip-text text-transparent"
  style={{
    backgroundImage: "linear-gradient(45deg, #007aff, #616161)",
    fontFamily: "'Monoton', cursive", // unique creative font
  }}
>
  Our Creative Work
</h1>


        {/* Subtitle */}
        <p className="text-lg md:text-2xl font-raleway text-center max-w-3xl mb-16 text-gray-200"style={{ color: "#9d9595" }}>
          Discover how we blend strategy, design, and technology to create ad
          campaigns that leave a lasting impact.
        </p>

        {/* Zig-Zag Cards */}
        <div className="flex flex-col w-full space-y-24">
          {adsData.map((ad, index) => (
            <div
              key={ad.id}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger effect: 0ms, 200ms, 400ms, 600ms
              className={`flex flex-col md:flex-row items-center md:items-start gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full overflow-hidden border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-blue-400">
                  {ad.title}
                </h2>
                <p className="text-base md:text-lg font-raleway mb-6 text-gray-300 leading-relaxed">
                  {ad.description}
                </p>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-md">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="w-full mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Work;



{/* background-image: linear-gradient(45deg, #007aff, #616161);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;X */}
      {/* Footer (Perfectly Fitted, Full Width) */}
     {/* #9d9595    {/* #9d9595    border-radius: 3px;  w-isse,h-isse*/ }

{/* sub rmv  login-rmv */}