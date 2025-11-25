import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="px-6 py-20 border-b md:py-32 border-dark/10 bg-lightGray">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="p-10 transition-colors duration-300 bg-white border md:p-16 border-dark/5 hover:border-primary group">
            <div className="flex items-center justify-center w-16 h-16 mb-8 transition-colors rounded-full bg-lightGray group-hover:bg-primary">
              <Target className="text-dark" size={32} />
            </div>
            <h3 className="mb-6 text-3xl font-bold tracking-tighter uppercase text-dark">
              Our Mission
            </h3>
            <p className="leading-relaxed text-grayText">
              To empower businesses with cutting-edge digital solutions that
              drive growth, foster engagement, and create meaningful connections
              in an increasingly digital world.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 border bg-dark md:p-16 border-dark/5 group">
            <div className="flex items-center justify-center w-16 h-16 mb-8 transition-colors rounded-full bg-white/10 group-hover:bg-primary">
              <Eye className="text-white group-hover:text-dark" size={32} />
            </div>
            <h3 className="mb-6 text-3xl font-bold tracking-tighter text-white uppercase">
              Our Vision
            </h3>
            <p className="leading-relaxed text-gray-400 transition-colors group-hover:text-white">
              To be the global standard for creative innovation, setting new
              benchmarks in design and technology while maintaining a
              human-centric approach to digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
