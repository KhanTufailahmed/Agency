import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-lightGray text-dark selection:bg-primary selection:text-dark">
        <Navbar></Navbar>
        <div>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
