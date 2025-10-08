import React, { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);


  return (
    <>
      <Navbar />

      {/* Footer Spacing */}
      <div className="pb-16">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Contact;
