import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* Marquee Section */}
        <div className="py-8 bg-brand-500 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex items-center space-x-8">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-3xl font-bold text-black font-display uppercase tracking-wider">
                 •  Edit With Precision • Design With Passion • Create With Quantum Cut
              </span>
            ))}
          </div>
        </div>

        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;