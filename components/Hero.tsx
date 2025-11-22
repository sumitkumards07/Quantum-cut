import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-4xl">
             <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             >
                <h2 className="text-brand-500 font-medium tracking-wider mb-4">EST. 2025 — INDIA</h2>
             </motion.div>
            
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              QUANTUM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">VISUAL</span> <br />
              PRECISION
            </motion.h1>
          </div>

          <motion.div
            className="hidden md:block mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed text-right">
              We splice art and technology to create video edits that defy the ordinary. Welcome to the future of editing.
            </p>
            <div className="flex justify-end mt-4">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white animate-bounce">
                  <ArrowDownRight size={20} />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Video Reel Placeholder */}
        <motion.div
          className="w-full h-[30vh] md:h-[40vh] bg-dark-800 rounded-sm overflow-hidden relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
           <img 
             src="https://picsum.photos/seed/reel/1920/1080" 
             alt="Showreel" 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 cursor-pointer border border-white/20">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
           </div>
           
           <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-widest text-white/70">Showreel 2025</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;