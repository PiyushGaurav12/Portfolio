import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certification from "./components/Certification";

function App() {
  return (
    <>
     <Navbar />
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Certification/>
     <Contact/>
     <SocialLinks/>
    </>
  );
}

export default App;
