import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import Team from "../components/about/Team";
import CTA from "../components/about/Cta";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-lightGray">
        <AboutHero />
        <CompanyIntro />
        <MissionVision />
        <Values />
        <Team />
        <CTA />
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
