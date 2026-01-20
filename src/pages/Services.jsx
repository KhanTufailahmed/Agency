import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServiceDetails from "../components/services/ServicesDetails";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-lightGray">
        <ServicesHero />
        <ServiceDetails />
        <ServicesCTA />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
