import React from "react";
import { ArrowUpRight } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Eco Travel App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern Furniture",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Art Gallery",
    category: "Branding & Web",
    image:
      "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Crypto Wallet",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Health Tracker",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Urban Architecture",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Neon Brand",
    category: "Identity",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Tech Conference",
    category: "Event Site",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
  },
];

const ProjectsGrid = () => {
  return (
    <section className="px-6 py-20 border-b md:py-32 border-dark/10 bg-lightGray">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl font-bold tracking-tighter uppercase md:text-6xl text-dark">
            All Projects
          </h2>
          <p className="max-w-2xl text-lg text-grayText">
            A comprehensive list of our digital explorations and client work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <div key={project.id} className="cursor-pointer group">
              <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-primary/20 group-hover:opacity-100 mix-blend-multiply"></div>

                {/* Overlay Icon */}
                <div className="absolute p-2 transition-all duration-300 translate-y-2 bg-white rounded-full opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowUpRight size={20} className="text-dark" />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="mb-1 text-2xl font-bold tracking-tight uppercase transition-colors text-dark group-hover:text-primary">
                  {project.title}
                </h3>
                <span className="text-sm font-bold tracking-widest uppercase text-grayText/70">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="px-10 py-4 text-sm font-bold tracking-widest uppercase transition-colors border border-dark/20 text-dark hover:bg-dark hover:text-white">
            Load More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
