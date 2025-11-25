import React from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-6 py-20 md:py-32 bg-primary">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold tracking-tighter uppercase md:text-6xl lg:text-7xl text-dark">
          Ready to make <br /> something great?
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg font-medium text-dark/80 md:text-xl">
          We are always looking for new challenges and interesting partners.
          Let's discuss your next project.
        </p>
        <button className="inline-flex items-center px-10 py-5 space-x-3 font-bold tracking-widest text-white uppercase transition-colors bg-dark hover:bg-white hover:text-dark">
          <span>Get in Touch</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTA;
