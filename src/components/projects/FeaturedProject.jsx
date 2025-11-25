import React from "react";
import { ArrowRight, Layers } from "lucide-react";

const FeaturedProject = ({ project, reversed = false }) => {
  return (
    <section className="px-6 py-20 bg-white border-b md:py-32 border-dark/10">
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden group aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-dark/20 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-6 space-x-4">
              <span className="text-sm font-bold tracking-widest uppercase text-primary">
                Featured Case Study
              </span>
              <div className="w-12 h-px bg-dark/20"></div>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-none tracking-tighter uppercase md:text-6xl text-dark">
              {project.title}
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-grayText">
              {project.description}
            </p>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-bold tracking-widest uppercase text-dark">
                Role & Deliverables
              </h4>
              <p className="text-grayText">{project.role}</p>
            </div>

            <div className="mb-10">
              <h4 className="mb-4 text-sm font-bold tracking-widest uppercase text-dark">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-bold uppercase border border-dark/10 text-dark bg-lightGray"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center space-x-2 text-sm font-bold tracking-widest uppercase transition-colors text-dark hover:text-primary">
              <span>View Case Study</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
