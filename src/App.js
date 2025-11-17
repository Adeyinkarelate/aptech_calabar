import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "animate.css/animate.min.css";
import "react-on-scroll-animation/build/index.css";

import Nav from "./partials/Navbar";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";

import Adse from "./partials/courses/Adse";
import Acns from "./partials/courses/Acns";
import SmartPro from "./partials/courses/SmartPro";

function App() {
  return (
    <div className="App ">
      <Nav />
      <div className="mt-12 sm:mt-16 ">
        <Routes forceRefresh>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/adse" element={<Adse />} />
          <Route path="/courses/acns" element={<Acns />} />
          <Route path="/courses/smart-pro" element={<SmartPro />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
