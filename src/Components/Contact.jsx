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
      <div className="mt-30 w-full">

        <Footer></Footer>
     
      </div>
    </>
  );
}

export default Contact;
