import React from "react";
import { motion } from "framer-motion";
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
        {/* Animated Section Header - Only on scroll */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold tracking-tighter uppercase md:text-5xl text-dark"
            initial={{ opacity: 0, x: -50, rotateX: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Expertise
          </motion.h2>
          <motion.p
            className="max-w-2xl text-lg text-grayText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our team consists of experts in various fields, allowing us to offer
            a full spectrum of digital services.
          </motion.p>
        </motion.div>

        {/* Enhanced Animated Services Grid */}
        <div className="grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-4 bg-dark/10 border-dark/10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 80,
                scale: 0.8,
                rotateY: -15,
                filter: "blur(10px)"
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateY: 0,
                filter: "blur(0px)"
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative bg-white p-8 md:p-10 group h-full flex flex-col min-h-[320px] overflow-hidden cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "radial-gradient(circle at center, rgba(210,255,31,0.3) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Static Icon */}
                <div className="mb-8">
                  <service.icon
                    className="w-10 h-10 text-dark"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Animated Text Content */}
                <div className="mt-auto">
                  <motion.h3
                    className="mb-4 text-xl font-bold uppercase text-dark"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm leading-relaxed transition-colors text-grayText group-hover:text-dark/90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.4 }}
                  >
                    {service.desc}
                  </motion.p>
                </div>
              </div>

              {/* Enhanced shadow on hover */}
              <motion.div
                className="absolute inset-0 shadow-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
