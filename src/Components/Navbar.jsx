import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg border-b border-white/20 transition-colors duration-500 ${
        scrolled
          ? "bg-gray-900/90"
          : "bg-gradient-to-r from-gray-900/40 via-black/30 to-gray-900/40"
      } text-white`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://www.logotypes101.com/logos/647/1B2CB7FD06FF2F3991B6C6B60C2F21F3/tn_Company_2_Give.png"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          <span className="text-xl md:text-2xl font-bold font-montserrat">
            AdVision
          </span>
        </div>
            </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaBriefcase /> Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/20 shadow-lg"
      >
        <ul className="flex flex-col items-center py-6 space-y-4 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaBriefcase /> Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
