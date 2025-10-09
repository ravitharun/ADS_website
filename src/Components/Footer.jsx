import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // animate every time it enters viewport
      mirror: true, // animate out when scrolling past
      easing: "ease-out",
    });
  }, []);
  return (
    <footer
      className="w-full backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-800/80 border-t border-white/10 text-gray-200 py-12 px-6 md:px-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            AdVision
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            We build visually striking ad campaigns that stand out and leave a
            lasting impression. Empower your brand through design and strategy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "Work", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <div className="flex space-x-4 mt-5 text-xl">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm text-gray-500">
        © {new Date().getFullYear()} AdVision. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
