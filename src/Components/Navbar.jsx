// import React, { useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaUserCircle,
//   FaSignOutAlt,
//   FaSignInAlt,
//   FaHome,
//   FaInfoCircle,
//   FaEnvelope,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// function Navbar() {
//   const [open, setOpen] = useState(false); // Mobile menu
//   const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // User state

//   const navLinks = [
//     { name: "Work", href: "#work", icon: <FaHome /> },
//     { name: "About", href: "#about", icon: <FaInfoCircle /> },
//     { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
//   ];

//   const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-gray-900/80 via-black/50 to-gray-900/80 text-white shadow-lg border-b border-white/20"
//     >
//       <div className="flex items-center justify-between px-6 py-4 md:px-12">
//         {/* Logo */}
//         <h1 className="text-2xl md:text-3xl font-bold font-montserrat cursor-pointer">
//           Protifilo<span className="text-blue-400">.</span>
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg font-rubik font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
//               >
//                 {link.icon} {link.name}
//               </a>
//             </li>
//           ))}

//           {/* Profile / Login Dropdown */}
//           <li className="relative">
//             <button
//               onClick={() => setProfileOpen(!profileOpen)}
//               className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
//             >
//               <FaUserCircle size={20} />
//               {isLoggedIn ? "Profile" : "Login"}
//             </button>

//             {profileOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="absolute right-0 mt-2 w-44 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-white/20 overflow-hidden z-50"
//               >
//                 <ul className="flex flex-col font-lato">
//                   {isLoggedIn ? (
//                     <>
//                       <li className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-2">
//                         <FaUserCircle /> Profile
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-2"
//                         onClick={toggleLogin}
//                       >
//                         <FaSignOutAlt /> Logout
//                       </li>
//                     </>
//                   ) : (
//                     <li
//                       className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-2"
//                       onClick={toggleLogin}
//                     >
//                       <FaSignInAlt /> Login
//                     </li>
//                   )}
//                 </ul>
//               </motion.div>
//             )}
//           </li>
//         </ul>

//         {/* Hamburger Icon */}
//         <div
//           className="md:hidden cursor-pointer text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="md:hidden overflow-hidden bg-black/50 backdrop-blur-xl border-t border-white/20"
//       >
//         <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-rubik font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
//               >
//                 {link.icon} {link.name}
//               </a>
//             </li>
//           ))}

//           {/* Mobile profile/login */}
//           <li>
//             <button
//               onClick={toggleLogin}
//               className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
//             >
//               <FaUserCircle /> {isLoggedIn ? "Logout" : "Login"}
//             </button>
//           </li>
//         </ul>
//       </motion.div>
//     </motion.nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false); // Mobile menu
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User state

  const navLinks = [
    { name: "Work", href: "#work", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaInfoCircle /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-gray-900/80 via-black/50 to-gray-900/80 text-white shadow-lg border-b border-white/20"
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold font-montserrat cursor-pointer">
          Protifilo<span className="text-blue-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-rubik font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}

          {/* Profile / Login Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <FaUserCircle size={20} />
              {isLoggedIn ? "Profile" : "Login"}
            </button>

            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-44 bg-black/90 backdrop-blur-lg rounded-md shadow-lg border border-white/20 overflow-hidden z-50"
              >
                <ul className="flex flex-col font-lato">
                  {isLoggedIn ? (
                    <>
                      <li className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-2">
                        <FaUserCircle /> Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-2"
                        onClick={toggleLogin}
                      >
                        <FaSignOutAlt /> Logout
                      </li>
                    </>
                  ) : (
                    <li
                      className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-2"
                      onClick={toggleLogin}
                    >
                      <FaSignInAlt /> Login
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
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
        className="md:hidden overflow-hidden bg-[linear-gradient(180deg,#0a0a0a,#1a1a1a,#111111)] backdrop-blur-xl border-t border-white/20 shadow-lg"
      >
        <ul className="flex flex-col items-center py-6 space-y-4 text-lg font-rubik font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 w-full justify-center"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}

          {/* Mobile profile/login */}
          <li>
            <button
              onClick={toggleLogin}
              className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 w-full justify-center"
            >
              <FaUserCircle /> {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
