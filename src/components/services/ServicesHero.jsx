import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative px-6 pt-32 pb-20 overflow-hidden border-b md:pt-48 md:pb-32 border-dark/10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <span className="mb-4 font-bold tracking-widest uppercase text-primary">
            What We Do
          </span>
          <h1 className="mb-8 text-5xl font-bold leading-none tracking-tighter uppercase md:text-7xl lg:text-9xl text-dark">
            Our <br />
            Services.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-grayText md:text-xl">
            We provide comprehensive digital solutions tailored to your business
            needs. From strategy to execution, we handle it all with precision
            and creativity.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute transform -translate-y-1/2 pointer-events-none select-none top-1/2 right-0 -z-0">
        <div className="text-[10rem] md:text-[18rem] font-bold uppercase text-dark/5 leading-none whitespace-nowrap flex">
          {['S', 'E', 'R', 'V', 'I', 'C', 'E', 'S'].map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-slide-in"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
