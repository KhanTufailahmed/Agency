import React from "react";
import { Zap, Heart, Shield, Globe, Users, Lightbulb } from "lucide-react";

const values = [
  { icon: Zap, title: "Innovation", desc: "Pushing boundaries every day." },
  { icon: Heart, title: "Passion", desc: "We love what we do." },
  { icon: Shield, title: "Integrity", desc: "Honest and transparent work." },
  { icon: Globe, title: "Global", desc: "Thinking beyond borders." },
  { icon: Users, title: "Collaboration", desc: "Better together." },
  { icon: Lightbulb, title: "Creativity", desc: "Solving problems uniquely." },
];

const Values = () => {
  return (
    <section className="px-6 py-20 bg-white border-b md:py-32 border-dark/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl font-bold tracking-tighter uppercase md:text-6xl text-dark">
            Our Core Values
          </h2>
          <p className="max-w-2xl text-lg text-grayText">
            The principles that guide our culture and our work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-3 bg-dark/10 border-dark/10">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-10 transition-colors bg-white hover:bg-lightGray group"
            >
              <value.icon
                className="mb-6 transition-colors text-dark group-hover:text-primary"
                size={32}
              />
              <h4 className="mb-2 text-xl font-bold uppercase text-dark">
                {value.title}
              </h4>
              <p className="text-sm text-grayText">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
