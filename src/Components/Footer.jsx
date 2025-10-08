import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="relative mt-20 rounded-t-3xl border-t border-gray-700 backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-800/80 text-gray-200 py-12 px-6 md:px-20 shadow-[0_-4px_30px_rgba(0,0,0,0.5)]"
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
            {["Home", "Our Work", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Subscribe to Updates
          </h3>
          <div className="flex items-center bg-white/10 border border-white/20 rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-2 outline-none text-gray-200 placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 px-5 py-2 text-sm font-medium hover:opacity-90 transition-all">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
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

      {/* Bottom Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm text-gray-500">
        © {new Date().getFullYear()} AdVision. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
