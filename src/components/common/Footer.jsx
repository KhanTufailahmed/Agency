import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-32 pb-10 px-6 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        {/* Call to Action */}
        <div className="mb-24 border-b border-white/10 pb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-12 text-center md:text-left text-white">
            Let's work <br /> <span className="text-gray-500">together</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <a
              href="mailto:hello@poomo.com"
              className="text-2xl md:text-4xl border-b border-white hover:text-primary hover:border-primary transition-colors pb-2 text-white"
            >
              hello@poomo.com
            </a>
            <button className="w-full md:w-auto px-8 py-4 bg-primary text-dark font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center space-x-2">
              <span>Start a Project</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-tighter uppercase mb-6 block text-white"
            >
              Poomo.
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-4">
              We offer a wide range of digital services to help your business
              grow.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">
              Sitemap
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">
              Socials
            </h4>
            <ul className="space-y-3">
              {["Instagram", "Twitter", "LinkedIn", "Behance"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">
              Office
            </h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>MM Road</p>
              <p>Thane, Mumbra 400612</p>
              <p>India</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; 2025 Poomo Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
