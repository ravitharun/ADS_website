// Footer.jsx
import Aos from "aos";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);
  return (
    <footer
      className="w-full bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-800/80 text-gray-200 py-12 px-6 md:px-20"
      data-aos="fade-up"
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
            <li>
              <Link
                to="/"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ourwork"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe & Social */}
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
