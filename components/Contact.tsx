import React from 'react';
import { Mail, MapPin, Phone, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">START<br />PROJECT.</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Ready to book your session? Select your package and tell us about your vision. We'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-brand-500" />
                <span>quantumcut2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="text-brand-500" />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-brand-500" />
                <span>+91 (555) 912-3841</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Calendar className="text-brand-500" />
                <span>Mon - Fri, 9am - 6pm IST</span>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Name</label>
                <input type="text" className="w-full bg-dark-800 border-b border-white/10 p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Email</label>
                <input type="email" className="w-full bg-dark-800 border-b border-white/10 p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="you@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Select Package</label>
              <select className="w-full bg-dark-800 border-b border-white/10 p-3 text-white focus:border-brand-500 focus:outline-none transition-colors">
                <option value="" disabled selected>Choose a plan...</option>
                <optgroup label="Reels / Shorts">
                  <option>Reels - Basic (₹299)</option>
                  <option>Reels - Pro (₹499)</option>
                  <option>Reels - Studio (₹999)</option>
                </optgroup>
                <optgroup label="Long Form Video">
                  <option>Long Form - Basic (₹499)</option>
                  <option>Long Form - Pro (₹999)</option>
                  <option>Long Form - Studio (₹2999)</option>
                </optgroup>
                <option>Custom Project</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Project Details</label>
              <textarea rows={4} className="w-full bg-dark-800 border-b border-white/10 p-3 text-white focus:border-brand-500 focus:outline-none transition-colors" placeholder="Tell us about your footage and vision..."></textarea>
            </div>

            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all duration-300 w-full md:w-auto">
              Confirm Booking
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;