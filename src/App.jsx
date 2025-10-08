import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import { lazy } from "react";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

const MarkdownPreview = lazy(() => import("./Components/Home"));
function App() {
  return (
    <>
      {/* <Navbar></Navbar>  */}
      <Suspense fallback={<Loader />}>
        <MarkdownPreview />
      </Suspense>
      <Work req={false}></Work>
      <About req={false} ></About>
      <Contact></Contact>
    </>
  );
}

export default App;
