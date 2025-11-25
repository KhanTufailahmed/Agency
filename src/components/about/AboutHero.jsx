import React from "react";
import { ArrowDown } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative px-6 pt-32 pb-20 overflow-hidden border-b md:pt-48 md:pb-32 border-dark/10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <span className="mb-4 font-bold tracking-widest uppercase text-primary">
            Who We Are
          </span>
          <h1 className="mb-8 text-5xl font-bold leading-none tracking-tighter uppercase md:text-7xl lg:text-9xl text-dark">
            We Are <br />
            Builders.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-grayText md:text-xl">
            We are a team of creative minds dedicated to building digital
            experiences that leave a lasting impression.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute transform -translate-y-1/2 pointer-events-none select-none top-1/2 -right-20 md:-right-40 -z-0">
        <span className="text-[12rem] md:text-[20rem] font-bold uppercase text-dark/5 leading-none whitespace-nowrap">
          About
        </span>
      </div>
    </section>
  );
};

export default AboutHero;
