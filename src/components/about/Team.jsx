import React from "react";

const teamMembers = [
  {
    name: "Khan Tufail",
    role: "Founder & CEO",
    image: "/public/tufail.png",
  },
  {
    name: "Khan Shoeb",
    role: "Creative Director",
    image: "/public/shoeb.png",
  },
  {
    name: "James Carter",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Emily Chen",
    role: "Head of Marketing",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
  },
];

const Team = () => {
  return (
    <section className="px-6 py-20 border-b md:py-32 border-dark/10 bg-lightGray">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-end justify-between mb-16 md:flex-row">
          <div>
            <span className="block mb-2 font-bold tracking-widest uppercase text-primary">
              The Squad
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase md:text-6xl text-dark">
              Meet the Team
            </h2>
          </div>
          <p className="max-w-md mt-6 text-grayText md:mt-0">
            The talented individuals behind our success. We are a diverse group
            of thinkers and makers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105 ${
                    member.name === "Khan Shoeb"
                      ? "object-top"
                      : "object-center"
                  }`}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-primary/20 group-hover:opacity-100 mix-blend-multiply"></div>
              </div>
              <h3 className="text-xl font-bold uppercase text-dark">
                {member.name}
              </h3>
              <p className="mt-1 text-sm tracking-widest uppercase text-grayText">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
