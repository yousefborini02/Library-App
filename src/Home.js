import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import Catalog from "./Catalog";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Home;
