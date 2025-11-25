import React from "react";

const CompanyIntro = () => {
  return (
    <section className="px-6 py-20 bg-white border-b md:py-32 border-dark/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tighter uppercase md:text-4xl text-dark">
              Our Story
            </h2>
            <div className="w-12 h-1 mt-6 bg-primary"></div>
          </div>
          <div className="lg:col-span-8">
            <p className="mb-8 text-xl font-medium leading-relaxed md:text-2xl text-dark">
              Founded in 2020, Poomo started with a simple idea: to bridge the
              gap between functional technology and emotional design.
            </p>
            <div className="grid grid-cols-1 gap-8 leading-relaxed md:grid-cols-2 text-grayText">
              <p>
                We believe that every brand has a unique story to tell. Our job
                is to translate that story into a digital language that
                resonates with your audience. We don't just build websites; we
                build relationships between brands and people.
              </p>
              <p>
                Over the years, we have grown from a small duo into a
                full-service agency, partnering with startups and Fortune 500
                companies alike. Our passion for innovation remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
