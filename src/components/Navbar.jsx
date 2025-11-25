import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Blog', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-lightGray/90 backdrop-blur-sm border-dark/10">
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter uppercase text-dark">
          Poomo.
        </a>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase transition-colors text-grayText hover:text-dark"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="items-center hidden space-x-6 md:flex">
          <button className="text-grayText hover:text-dark">
            <ShoppingBag size={20} />
          </button>
          <a
            href="#contact"
            className="px-6 py-2 text-sm font-bold tracking-wide text-white uppercase transition-colors bg-dark hover:bg-primary hover:text-dark"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 flex flex-col w-full px-6 py-8 space-y-6 border-b md:hidden top-20 bg-lightGray border-dark/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium tracking-wide uppercase text-dark"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block w-full px-6 py-3 text-sm font-bold tracking-wide text-center text-white uppercase transition-colors bg-dark hover:bg-primary hover:text-dark"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
