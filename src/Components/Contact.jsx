import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-out" });
  }, []);

  return (
    <>
      <Navbar />

      {/* Page Wrapper */}
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Main content area */}
        <div className="flex-1 flex items-center justify-center px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-center"
            data-aos="fade-down"
          >
            Contact Us
          </h1>
        </div>

        {/* Footer sticks to bottom and full width */}
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Contact;
