import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Crown, Star } from 'lucide-react';

type PlanType = 'reels' | 'long-form';

const Pricing: React.FC = () => {
  const [activeType, setActiveType] = useState<PlanType>('reels');

  const plans = {
    reels: [
      {
        name: 'BASIC',
        price: '299',
        description: 'Perfect for simple trends and cuts.',
        features: ['Up to 30 Seconds', 'Clean Cuts & Trims', 'Basic Transitions', 'Color Correction', '1 Revision'],
        icon: <Star className="w-6 h-6" />,
        popular: false
      },
      {
        name: 'PRO',
        price: '499',
        description: 'Engaging edits for growth.',
        features: ['Up to 60 Seconds', 'Dynamic Captions', 'Sound Design & Mixing', 'Motion Graphics', '3 Revisions'],
        icon: <Zap className="w-6 h-6" />,
        popular: true
      },
      {
        name: 'STUDIO',
        price: '999',
        description: 'High-end production value.',
        features: ['Up to 90 Seconds', 'Advanced VFX', 'Custom Animation', 'Thumbnail Included', 'Unlimited Revisions'],
        icon: <Crown className="w-6 h-6" />,
        popular: false
      }
    ],
    'long-form': [
      {
        name: 'BASIC',
        price: '499',
        description: 'Essential editing for vlogs & tutorials.',
        features: ['Up to 5 Minutes', 'Narrative Assembly', 'Basic Audio Cleaning', 'Stock Music', '2 Revisions'],
        icon: <Star className="w-6 h-6" />,
        popular: false
      },
      {
        name: 'PRO',
        price: '999',
        description: 'Polished storytelling for YouTube.',
        features: ['Up to 15 Minutes', 'Advanced Sound Design', 'B-Roll Selection', 'Motion Titles', '4 Revisions'],
        icon: <Zap className="w-6 h-6" />,
        popular: true
      },
      {
        name: 'STUDIO',
        price: '2999',
        description: 'Documentary & Cinema grade.',
        features: ['Up to 30 Minutes', 'Cinematic Grading', 'Custom Sound Scapes', 'Complex VFX', 'Source Files'],
        icon: <Crown className="w-6 h-6" />,
        popular: false
      }
    ]
  };

  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow - Shifted right for balance */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">BOOKING & PRICING</h2>
          <p className="text-gray-400 max-w-xl mb-8">
            Transparent pricing for creators. Choose your format and elevate your content today.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-dark-800 p-1 rounded-full border border-white/10 relative">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-500 rounded-full transition-all duration-300 ease-out ${activeType === 'reels' ? 'left-1' : 'left-[calc(50%+4px)]'}`}
            />
            <button 
              onClick={() => setActiveType('reels')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeType === 'reels' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Reels / Shorts
            </button>
            <button 
              onClick={() => setActiveType('long-form')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeType === 'long-form' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Long Form
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {plans[activeType].map((plan, index) => (
              <motion.div
                key={`${activeType}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-sm flex flex-col ${
                  plan.popular 
                    ? 'bg-white/5 border-brand-500 ring-1 ring-brand-500 shadow-[0_0_30px_rgba(0,204,255,0.15)]' 
                    : 'bg-dark-900/50 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${plan.popular ? 'bg-brand-500 text-black' : 'bg-white/10 text-white'}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-400">₹</span>
                    <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact"
                  className={`w-full py-4 rounded-lg font-bold text-center uppercase tracking-widest transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-brand-500 text-black hover:bg-brand-400 hover:scale-105' 
                      : 'bg-white/10 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Book {plan.name}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;