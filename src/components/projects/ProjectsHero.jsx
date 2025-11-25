import React from "react";

const ProjectsHero = () => {
  return (
    <section className="relative px-6 pt-32 pb-20 overflow-hidden border-b md:pt-48 md:pb-32 border-dark/10 bg-lightGray">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <span className="mb-4 font-bold tracking-widest uppercase text-primary">
            Our Work
          </span>
          <h1 className="mb-8 text-5xl font-bold leading-none tracking-tighter uppercase md:text-7xl lg:text-9xl text-dark">
            Selected <br />
            Projects.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-grayText md:text-xl">
            A showcase of our finest work. We take pride in crafting digital
            experiences that make a difference for brands and users alike.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute transform -translate-y-1/2 pointer-events-none select-none top-1/2 -right-20 md:-right-40 -z-0">
        <span className="text-[10rem] md:text-[18rem] font-bold uppercase text-dark/5 leading-none whitespace-nowrap">
          Projects
        </span>
      </div>
    </section>
  );
};

export default ProjectsHero;
