import React from "react";
import { Check } from "lucide-react";

const detailedServices = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Building the foundation of your digital presence.",
    description:
      "We build websites that are not only visually stunning but also technically robust. Our development process focuses on performance, accessibility, and scalability. Whether you need a simple landing page or a complex web application, we have the expertise to deliver.",
    features: [
      "Custom Frontend Architecture",
      "CMS Integration",
      "API Development",
      "Performance Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
  },
  {
    id: "app-dev",
    title: "App Development",
    subtitle: "Powerful applications for iOS and Android.",
    description:
      "In a mobile-first world, having a robust app is crucial. We develop native and cross-platform mobile applications that offer seamless performance and intuitive user interfaces. We handle the entire lifecycle from concept to App Store deployment.",
    features: [
      "React Native & Flutter",
      "iOS & Android Native",
      "App Store Optimization",
      "Cloud Backend Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    subtitle: "Rank higher and get discovered organically.",
    description:
      "Our SEO strategies are built to improve search visibility, drive organic traffic, and increase conversions. We optimize both on-page and off-page factors using proven techniques and performance insights.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Backlink Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2600&auto=format&fit=crop",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    subtitle: "Create powerful online stores that convert.",
    description:
      "We build robust e-commerce platforms tailored to your business needs. From UI/UX design to checkout optimization, we ensure a seamless shopping experience that increases sales and customer satisfaction.",
    features: [
      "Custom Storefront Design",
      "Payment Gateway Integration",
      "Product Management Setup",
      "Conversion Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2600&auto=format&fit=crop",
  },
];

const ServiceDetails = () => {
  return (
    <section className="bg-white">
      {detailedServices.map((service, index) => (
        <div
          key={service.id}
          className={`py-20 md:py-32 px-6 border-b border-dark/10 ${
            index % 2 !== 0 ? "bg-lightGray" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border pointer-events-none border-dark/10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6 space-x-4">
                  <span className="text-lg font-bold text-primary">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-px bg-dark/20"></div>
                  <span className="text-sm font-bold tracking-widest uppercase text-grayText">
                    {service.id}
                  </span>
                </div>

                <h2 className="mb-4 text-3xl font-bold tracking-tighter uppercase md:text-5xl text-dark">
                  {service.title}
                </h2>

                <h3 className="mb-6 text-xl italic font-medium text-dark/80">
                  {service.subtitle}
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-grayText">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-primary">
                        <Check
                          size={12}
                          className="text-dark"
                          strokeWidth={3}
                        />
                      </div>

                      <span className="text-sm font-medium tracking-wide uppercase text-dark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceDetails;
