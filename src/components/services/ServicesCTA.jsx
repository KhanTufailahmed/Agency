import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="px-6 py-24 text-white border-t md:py-40 bg-dark border-white/10">
      <div className="mx-auto text-center max-w-7xl">
        <span className="block mb-6 font-bold tracking-widest uppercase text-primary">
          Let's Get Started
        </span>
        <h2 className="mb-10 text-4xl font-bold leading-none tracking-tighter text-white uppercase md:text-6xl lg:text-8xl">
          Have a project <br /> in mind?
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="inline-flex items-center justify-center w-full px-10 py-5 space-x-3 font-bold tracking-widest uppercase transition-colors bg-primary text-dark hover:bg-white sm:w-auto">
            <span>Start a Project</span>
            <ArrowRight size={20} />
          </button>
          <button className="w-full px-10 py-5 font-bold tracking-widest text-white uppercase transition-colors border border-white/20 hover:bg-white hover:text-dark sm:w-auto">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
