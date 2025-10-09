import React, { Suspense, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import { lazy } from "react";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Aos from "aos";

const MarkdownPreview = lazy(() => import("./Components/Home"));
function App() {
  useEffect(() => {
    // AOS.init({ duration: 1000, once: false, easing: "ease-out" });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // optional for smooth scroll
    });
    //  console.log(window.scrollX)
  }, []);

  return (
    <>
      {/* <Navbar></Navbar>  */}
      <Suspense fallback={<Loader />}>
        <MarkdownPreview />
      </Suspense>
      <Work req={false}></Work>
      <About req={false} show={true}></About>
      {/* <Contact></Contact> */}
    </>
  );
}

export default App;
