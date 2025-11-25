import React from "react";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="px-6 py-24 text-white md:py-40 bg-dark">
      <div className="mx-auto text-center max-w-7xl">
        <span className="block mb-6 font-bold tracking-widest uppercase text-primary">
          Join Our Team
        </span>
        <h2 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white uppercase md:text-6xl lg:text-8xl">
          We are <br />
          Hiring.
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg font-medium text-gray-400 md:text-xl">
          Are you a creative thinker? We are always looking for talented
          individuals to join our growing team.
        </p>
        <button className="inline-flex items-center px-10 py-5 space-x-3 font-bold tracking-widest uppercase transition-colors border border-white/20 hover:bg-white hover:text-dark">
          <span>View Openings</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
