import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      <Navbar />

      {/* Full width & full height footer section */}
      <div className="w-full min-h-screen flex flex-col">
        {/* Optional content area above footer */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Contact Me
          </h1>
        </div>

        {/* Footer fills remaining height */}
        <div className="w-full h-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
