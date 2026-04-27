import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 QUANTUM CUT. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <span className="text-gray-600 text-sm">+91 8950013181</span>
          <span className="text-gray-600 text-sm">sumitkumards07@gmail.com</span>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors text-sm">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors text-sm">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;