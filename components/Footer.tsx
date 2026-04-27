import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 QUANTUM CUT. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <a href="mailto:sumitkumards07@gmail.com" className="text-gray-400 hover:text-brand-500 transition-colors text-sm">
            sumitkumards07@gmail.com
          </a>
          <a href="tel:+918950013181" className="text-gray-400 hover:text-brand-500 transition-colors text-sm">
            +91 8950013181
          </a>
          <a href="#contact" className="text-brand-500 hover:text-white font-semibold transition-colors text-sm uppercase tracking-wider">
            Get a Quote
          </a>
          <div className="flex space-x-4 border-l border-white/10 pl-6 ml-2">
            <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors text-sm">IG</a>
            <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors text-sm">TW</a>
            <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors text-sm">IN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;