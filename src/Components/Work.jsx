import React, { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const adsData = [
  {
    id: 1,
    title: "Creative Product Launch Campaign",
    description:
      "We build attention-grabbing ad strategies that spark excitement and engagement. From concept to execution, every frame speaks your brand’s language.",
    image: "https://source.unsplash.com/800x600/?product,advertising",
    dataaos: "fade-right",
    dataAosDuration: "1200",
  },
  {
    id: 2,
    title: "Brand Awareness Visuals",
    description:
      "Our bold and memorable visuals help brands rise above the noise. Perfect for dark-themed ad spaces and high-impact digital experiences.",
    image: "https://source.unsplash.com/800x600/?branding,poster",
    dataaos: "fade-left",
    dataAosDuration: "1200",
  },
  {
    id: 3,
    title: "E-commerce Growth Campaign",
    description:
      "Boost your online store visibility with ad creatives optimized for clicks, conversions, and customer loyalty.",
    image: "https://source.unsplash.com/800x600/?ecommerce,shopping,marketing",
    dataaos: "fade-right",
    dataAosDuration: "1200",
  },
  {
    id: 4,
    title: "Digital Strategy & Targeting",
    description:
      "Our data-driven digital ad strategies ensure your content reaches the right audience, at the right time, every time.",
    image: "https://source.unsplash.com/800x600/?digital,analytics,marketing",
    dataaos: "fade-left",
    dataAosDuration: "1200",
  },
];

function Work() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
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
        <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat mb-6 text-center tracking-wide">
          Our Creative Work
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl font-raleway text-center max-w-3xl mb-16 text-gray-300">
          Discover how we blend strategy, design, and technology to create ad
          campaigns that leave a lasting impact.
        </p>

        {/* Zig-Zag Cards */}
        <div className="flex flex-col w-full space-y-24">
          {adsData.map((ad, index) => (
            <div
              key={ad.id}
              data-aos={ad.dataaos}
              data-aos-duration={ad.dataAosDuration}
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
         <div className="w-full">
        <Footer />
      </div>
      </div>

      {/* Footer (Perfectly Fitted, Full Width) */}
     
    </>
  );
}

export default Work;
