import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "High-performance websites built with modern technologies like React, Next.js, and Tailwind.",
  },
  {
    id: "02",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that provide seamless user experiences.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "User-centric design that combines aesthetics with functionality to drive engagement.",
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "Data-driven strategies to increase brand visibility and convert leads into customers.",
  },
  {
    id: "05",
    title: "Social Media",
    description:
      "Strategic content creation and management to grow your community across platforms.",
  },
  {
    id: "06",
    title: "SEO Optimization",
    description:
      "Improving your search engine rankings to drive organic traffic to your digital assets.",
  },
  {
    id: "07",
    title: "E-Commerce",
    description:
      "Scalable online stores built on Shopify or custom solutions to boost your sales.",
  },
  {
    id: "08",
    title: "Maintenance",
    description:
      "Ongoing support and updates to ensure your digital products remain secure and efficient.",
  },
];


const Services = () => {
  return (
    <section className="px-6 py-20 border-b md:py-32 border-dark/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between mb-16 md:flex-row md:items-end md:mb-24">
          <h2 className="text-4xl font-bold tracking-tighter uppercase md:text-6xl text-dark">Our Services</h2>
          <a href="#" className="items-center hidden mt-4 space-x-2 text-sm font-bold tracking-widest uppercase transition-colors md:flex text-dark hover:text-grayText md:mt-0">
            <span>View All Services</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-4 bg-dark/10 border-dark/10">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 md:p-10 hover:bg-primary transition-colors group h-full flex flex-col justify-between min-h-[300px]">
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-sm text-grayText group-hover:text-dark">/{service.id}</span>
                <ArrowUpRight className="transition-opacity opacity-0 group-hover:opacity-100 text-dark" size={20} />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase md:text-2xl text-dark">{service.title}</h3>
                <p className="text-sm leading-relaxed text-grayText group-hover:text-dark">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
            <a href="#" className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase transition-colors text-dark hover:text-grayText">
            <span>View All Services</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
