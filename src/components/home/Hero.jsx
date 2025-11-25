import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Heading */}
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase leading-none tracking-tighter mb-6 text-dark">
              Creative <br />
              <span className="text-grayText">Digital</span> <br />
              Agency
            </h1>
          </div>

          {/* Intro Text */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-2">
            <p className="text-grayText text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              We are Poomo, a creative agency that helps brands to grow and succeed in the digital era. We craft digital experiences.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center">
                <ArrowDownRight className="text-dark" size={20} />
              </div>
              <span className="uppercase text-sm font-bold tracking-widest text-dark">Scroll Down</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
