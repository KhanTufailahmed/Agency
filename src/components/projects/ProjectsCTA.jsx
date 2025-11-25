import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectsCTA = () => {
  return (
    <section className="px-6 py-24 text-white md:py-40 bg-dark">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white uppercase md:text-6xl lg:text-8xl">
          Seen enough? <br />
          Let's <span className="text-primary">Build.</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg font-medium text-gray-400 md:text-xl">
          We transform bold ideas into digital reality. If you have a vision, we
          have the tools to make it happen.
        </p>
        <button className="inline-flex items-center px-10 py-5 space-x-3 font-bold tracking-widest uppercase transition-colors bg-primary text-dark hover:bg-white">
          <span>Start a Project</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ProjectsCTA;
