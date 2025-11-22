import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generateVideoConcepts } from '../services/geminiService';

const AiCreativeAssistant: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [tone, setTone] = useState('Cinematic');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    setResults([]);
    
    try {
        const concepts = await generateVideoConcepts(niche, tone);
        setResults(concepts);
    } catch (e) {
        console.error(e);
    } finally {
        setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="ai-tools" className="py-32 bg-dark-900 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto lg:mx-0"> {/* Aligned left on large screens */}
          <div className="mb-16">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-brand-500/10 text-brand-500 px-4 py-2 rounded-full mb-6"
            >
                <Sparkles size={16} />
                <span className="text-sm font-bold uppercase tracking-wider">Powered by Gemini 2.5</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">AI CREATIVE DIRECTOR</h2>
            <p className="text-gray-400 max-w-xl">
              Stuck on your next video concept? Let our specialized AI model generate viral-worthy hooks and editing styles tailored to your niche.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Your Niche</label>
                <input
                  type="text"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Real Estate, Gaming, Tech Reviews"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Desired Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none"
                >
                  <option value="Cinematic">Cinematic</option>
                  <option value="Fast-Paced">Fast-Paced</option>
                  <option value="Minimalist">Minimalist</option>
                  <option value="Humorous">Humorous</option>
                  <option value="Dark & Gritty">Dark & Gritty</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !niche}
              className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all ${
                loading || !niche ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-brand-500 text-black hover:bg-brand-400'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Generating Concepts...</span>
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span>Generate Ideas</span>
                </>
              )}
            </button>

            {results.length > 0 && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="h-px bg-white/10 flex-grow"></div>
                    <span className="text-xs text-gray-500 uppercase">Generated Concepts</span>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-black/20 border border-white/5 rounded-lg p-5 flex justify-between items-start hover:border-brand-500/30 transition-colors"
                  >
                    <p className="text-gray-200 text-sm leading-relaxed font-light">{result}</p>
                    <button 
                        onClick={() => copyToClipboard(result, index)}
                        className="ml-4 text-gray-500 hover:text-brand-500 transition-colors"
                        title="Copy to clipboard"
                    >
                        {copiedIndex === index ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCreativeAssistant;