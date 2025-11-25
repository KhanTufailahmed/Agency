import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectsCTA from "../components/projects/ProjectsCTA";

const featuredData = [
  {
    id: 101,
    title: "Nexus Financial",
    description:
      "A complete digital overhaul for a leading fintech firm. We redesigned their core banking platform to improve user retention and simplify complex financial data visualization.",
    role: "UI/UX Design, Frontend Development, Design System",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 102,
    title: "Aura Smart Home",
    description:
      "An intuitive mobile application for controlling smart home devices. The focus was on creating a seamless, lag-free experience that connects users to their environment instantly.",
    role: "Mobile App Dev, IoT Integration, User Testing",
    techStack: ["React Native", "Node.js", "GraphQL", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="bg-lightGray">
        <ProjectsHero />

        {/* Render Featured Projects */}
        {featuredData.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            reversed={index % 2 !== 0}
          />
        ))}

        <ProjectsGrid  />
        <ProjectsCTA />
      </div>
      <Footer />
    </>
  );
};

export default Projects;

