import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Brand Strategy',
    description: 'We help you define your brand vision and strategy to stand out in the market.',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences for web and mobile applications.',
  },
  {
    id: '03',
    title: 'Development',
    description: 'Robust front-end and back-end solutions built with modern technologies.',
  },
  {
    id: '04',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to reach your target audience effectively.',
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-b border-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-dark">Our Services</h2>
          <a href="#" className="hidden md:flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-dark hover:text-grayText transition-colors mt-4 md:mt-0">
            <span>View All Services</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/10 border border-dark/10">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 md:p-10 hover:bg-primary transition-colors group h-full flex flex-col justify-between min-h-[300px]">
              <div className="flex justify-between items-start mb-8">
                <span className="text-sm font-mono text-grayText group-hover:text-dark">/{service.id}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-dark" size={20} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-dark">{service.title}</h3>
                <p className="text-grayText text-sm leading-relaxed group-hover:text-dark">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
            <a href="#" className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-dark hover:text-grayText transition-colors">
            <span>View All Services</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
