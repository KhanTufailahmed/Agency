import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/public/shopsphere.png',
    size: 'large'
  },
  {
    id: 2,
    title: 'Library Management System',
    category: 'Web Development',
    image: '/public/sieslibrary.png',
    size: 'small'
  },
  {
    id: 3,
    title: 'Job Portal',
    category: 'Web Development',
    image: '/public/jobportal.png',
    size: 'small'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/public/stitchandstyle.png',
    size: 'large'
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-b border-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-dark">Selected Works</h2>
          <p className="text-grayText max-w-xl text-lg">Explore our latest projects and see how we help brands to stand out in the digital landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3] md:aspect-[16/9]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-end border-b border-dark/20 pb-4 group-hover:border-dark transition-colors">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-1 text-dark">{project.title}</h3>
                  <span className="text-sm text-grayText uppercase tracking-widest">{project.category}</span>
                </div>
                <span className="text-sm font-mono text-grayText">2025</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-8 py-4 border border-dark/20 text-dark uppercase font-bold tracking-widest hover:bg-dark hover:text-white transition-colors">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
