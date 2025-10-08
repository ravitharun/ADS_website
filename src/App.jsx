import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import { lazy } from "react";
import Footer from "./Components/Footer";

const MarkdownPreview = lazy(() => import("./Components/Home"));
function App() {
  return (
    <>
      {/* <Navbar></Navbar>  */}
      <Suspense fallback={<Loader />}>
        <MarkdownPreview />
      </Suspense>

      <Work></Work>
      
    </>
  );
}

export default App;
