import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Poomo transformed our digital presence completely. Their attention to detail and creative approach is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow"
  },
  {
    id: 2,
    quote: "Working with the team was a breeze. They understood our vision immediately and delivered beyond expectations.",
    author: "Michael Chen",
    role: "Director, ArtSpace"
  },
  {
    id: 3,
    quote: "The best agency we've worked with. Professional, timely, and incredibly talented designers.",
    author: "Emma Williams",
    role: "Founder, Glow"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-b border-dark/10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-dark">Client <br/> Stories</h2>
            <p className="text-grayText mb-8">Don't just take our word for it. Here is what our partners have to say about our work.</p>
            <div className="w-16 h-1 bg-dark mb-8"></div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-lightGray border border-dark/5 p-8 relative">
                <Quote className="text-primary absolute top-8 right-8" size={48} />
                <p className="text-lg text-grayText mb-8 relative z-10 leading-relaxed">"{item.quote}"</p>
                <div>
                  <h4 className="font-bold uppercase text-dark">{item.author}</h4>
                  <span className="text-sm text-grayText uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
