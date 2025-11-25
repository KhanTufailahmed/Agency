import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-lightGray/90 backdrop-blur-sm border-dark/10"
    >
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        {/* <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold tracking-tighter uppercase text-dark"
        >
          Poomo.
        </motion.a> */}

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-2"
        >
          <img
            src="by4k.png"
            alt="Poomo Logo"
            className="w-auto h-24"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium tracking-wide uppercase text-grayText hover:text-dark"
              whileHover="hover"
              initial="initial"
            >
              {link.name}

              {/* Underline Animation */}
              <motion.span
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-primary"
              />
            </motion.a>
          ))}
        </div>

        {/* Desktop Button */}
        <motion.div
          className="items-center hidden space-x-6 md:flex"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href="#contact"
            className="px-6 py-2 text-sm font-bold tracking-wide text-white uppercase transition-colors bg-dark hover:bg-primary hover:text-dark"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 flex flex-col w-full px-6 py-8 space-y-6 border-b md:hidden top-20 bg-lightGray border-dark/10"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-wide uppercase text-dark"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              href="#contact"
              className="inline-block w-full px-6 py-3 text-sm font-bold tracking-wide text-center text-white uppercase transition-colors bg-dark hover:bg-primary hover:text-dark"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
