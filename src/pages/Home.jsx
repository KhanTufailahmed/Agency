import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

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
