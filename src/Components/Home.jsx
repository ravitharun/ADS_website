import React from "react";
import Navbar from "./Navbar";

const featuredAds = [
  {
    id: 1,
    title: "Social Media Campaign",
    image: "https://source.unsplash.com/500x300/?social,media,ads",
  },
  {
    id: 2,
    title: "Billboard Design",
    image: "https://source.unsplash.com/500x300/?billboard,advertisement",
  },
  {
    id: 3,
    title: "E-commerce Ads",
    image: "https://source.unsplash.com/500x300/?ecommerce,ads",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Background Video/Image */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4" // Example video
            type="video/mp4"
          />
        </video>

        {/* Optional: Background Image instead of video */}
        {/* <img
          src="https://source.unsplash.com/1600x900/?advertisement,digital"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        /> */}

        {/* Gradient overlay for dark effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-black/40 to-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat mb-6">
            Create Ads That Captivate
          </h1>
          <p className="text-lg md:text-2xl font-lato max-w-3xl mb-10">
            We design professional ad campaigns that attract attention and drive
            results across all digital platforms. Showcase your brand with style
            and impact.
          </p>
          <a
            href="#work"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-lg font-raleway transition-all duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Featured Ads Section */}
      <div
        className="py-20 px-6 md:px-20 text-white"
        style={{
          background: "linear-gradient(180deg, #111111, #1c1c1c)",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12">
          Featured Ads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredAds.map((ad) => (
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
                <h3 className="text-2xl font-bold font-montserrat mb-2">
                  {ad.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
