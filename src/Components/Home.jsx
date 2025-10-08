import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Background Video */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-20 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-black/40 to-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6 md:space-y-10">
          {/* Gradient Heading */}
          <h1
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(45deg, #007aff, #616161)",
              fontFamily: "'Monoton', cursive",
            }}
          >
            Create Ads That Captivate
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl font-raleway max-w-3xl text-gray-300">
            We design professional ad campaigns that attract attention and drive
            results across all digital platforms. Showcase your brand with style
            and impact.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="#work"
            className="px-8 py-3 bg-blue-600 rounded-lg text-white text-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-lg"
          >
            View Our Work
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
