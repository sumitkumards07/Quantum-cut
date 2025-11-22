import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Film, MonitorPlay, Music } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Commercial Editing",
    description: "High-impact cuts for TV and social media ads that drive conversion.",
    icon: "film"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "2D/3D animation integration to visualize complex ideas effortlessly.",
    icon: "zap"
  },
  {
    id: 3,
    title: "Color Grading",
    description: "Cinematic color correction to set the perfect mood and tone.",
    icon: "monitor"
  },
  {
    id: 4,
    title: "Sound Design",
    description: "Immersive audio mixing that adds depth to every frame.",
    icon: "music"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'film': return <Film size={32} />;
    case 'zap': return <Zap size={32} />;
    case 'monitor': return <MonitorPlay size={32} />;
    case 'music': return <Music size={32} />;
    default: return <Film size={32} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20">
           <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">OUR EXPERTISE</h2>
           <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-500 hover:border-brand-500 transition-all duration-500 cursor-default"
            >
              <div className="mb-8 text-brand-500 group-hover:text-black transition-colors duration-500">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-black transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-black/80 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;