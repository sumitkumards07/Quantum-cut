import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "Neon Nights", category: "Music Video", image: "https://picsum.photos/seed/neon/800/600" },
  { id: 2, title: "Apex Gear", category: "Commercial", image: "https://picsum.photos/seed/apex/800/600" },
  { id: 3, title: "Urban Flow", category: "Documentary", image: "https://picsum.photos/seed/urban/800/600" },
  { id: 4, title: "Cyber Punk", category: "VFX Short", image: "https://picsum.photos/seed/cyber/800/600" },
  { id: 5, title: "Nature's Fury", category: "Nature", image: "https://picsum.photos/seed/nature/800/600" },
  { id: 6, title: "Speed Demon", category: "Automotive", image: "https://picsum.photos/seed/car/800/600" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold">SELECTED WORK</h2>
          <p className="text-gray-400 mt-4 md:mt-0">Curated from over 500+ projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-dark-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-brand-500 text-xs font-mono mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <a href="#" className="inline-block border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                View All Projects
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;