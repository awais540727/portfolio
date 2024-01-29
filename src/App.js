import React from "react";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";
import TopBar from "./components/navbar/topbar/TopBar";
import Footer from "./components/footer/Footer";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
