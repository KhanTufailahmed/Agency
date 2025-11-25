import React from "react";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative px-6 pt-32 pb-20 overflow-hidden border-b md:pt-48 md:pb-32 border-dark/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Heading */}
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.h1
              className="mb-6 text-5xl font-bold leading-none tracking-tighter uppercase md:text-7xl lg:text-9xl text-dark"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Creative <br />
              {/* <motion.span
                className="inline-block text-grayText"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              >
                Digital
              </motion.span>{" "} */}
              <motion.span
                className="relative inline-block text-grayText"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              >
                Digital
                {/* Always-active underline animation */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute left-0 -bottom-1 h-[3px] bg-primary"
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                Agency
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            className="flex flex-col justify-end pb-2 lg:col-span-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p className="max-w-md mb-8 text-lg leading-relaxed text-grayText md:text-xl">
              We are Poomo, a creative agency that helps brands to grow and
              succeed in the digital era. We craft digital experiences.
            </p>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 border rounded-full border-dark/20"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowDownRight className="text-dark" size={20} />
              </motion.div>

              <motion.span
                className="text-sm font-bold tracking-widest uppercase text-dark"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Scroll Down
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
