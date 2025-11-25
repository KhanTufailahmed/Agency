import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  Megaphone,
  Share2,
  Search,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const servicesData = [
  {
    icon: Code,
    title: "Web Development",
    desc: "High-performance websites built with modern technologies like React, Next.js, and Tailwind.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications that provide seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centric design that combines aesthetics with functionality to drive engagement.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven strategies to increase brand visibility and convert leads into customers.",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Strategic content creation and management to grow your community across platforms.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improving your search engine rankings to drive organic traffic to your digital assets.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Scalable online stores built on Shopify or custom solutions to boost your sales.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Ongoing support and updates to ensure your digital products remain secure and efficient.",
  },
];

const Services = () => {
  return (
    <section className="px-6 py-20 border-b md:py-32 border-dark/10 bg-lightGray">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-6 text-4xl font-bold tracking-tighter uppercase md:text-5xl text-dark">
            Expertise
          </h2>
          <p className="max-w-2xl text-lg text-grayText">
            Our team consists of experts in various fields, allowing us to offer
            a full spectrum of digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-4 bg-dark/10 border-dark/10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 hover:bg-primary transition-colors group h-full flex flex-col min-h-[320px]"
            >
              <div className="mb-8">
                <service.icon
                  className="w-10 h-10 transition-transform duration-300 text-dark group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <div className="mt-auto">
                <h3 className="mb-4 text-xl font-bold uppercase text-dark">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed transition-colors text-grayText group-hover:text-dark/80">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
