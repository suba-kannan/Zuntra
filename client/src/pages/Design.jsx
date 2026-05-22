import { motion } from 'framer-motion';
import { Compass, Maximize2, Zap, Layout } from 'lucide-react';

export default function Design() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6 md:px-12 font-sans selection:bg-cred-teal selection:text-black relative overflow-hidden">
      
      {/* Decorative backdrop glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,229,255,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-cred-green/5 blur-3xl -z-10 animate-neon-pulse" />

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/10 pb-8 mb-12"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cred-teal">design language</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mt-2 mb-4 leading-tight">
            the <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-cred-teal">NeoPOP</span> manifesto.
          </h1>
          <p className="text-base text-cred-muted leading-relaxed font-light">
            at CRED, design is not just cosmetic—it's how we signal trust and elite quality. NeoPOP is our custom framework that brings physical depth to virtual interfaces.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="neopop-card-teal p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden"
          >
            <Compass className="text-cred-teal" size={24} />
            <h3 className="text-lg font-serif text-white mt-2">tactile feedback</h3>
            <p className="text-xs text-cred-muted leading-relaxed">
              buttons should feel like they press into the screen. borders, solid black drop shadows, and clean grid intersections create a tangible feeling of premium quality.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="neopop-card p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden"
          >
            <Maximize2 className="text-cred-green" size={24} />
            <h3 className="text-lg font-serif text-white mt-2">stark geometry</h3>
            <p className="text-xs text-cred-muted leading-relaxed">
              we avoid smooth round gradients for cards. instead, we rely on bold solid outlines, heavy black bevels, and crisp geometric structures that feel clean and structural.
            </p>
          </motion.div>
        </div>

        {/* Manifesto statements */}
        <div className="flex flex-col gap-8 text-sm text-cred-muted leading-relaxed font-light mb-16 border-l border-cred-teal/20 pl-6">
          <p>
            "design in the digital era has become overly soft. in striving for accessibility, apps lost their personality. interfaces became indistinguishable gradients. we rejected this."
          </p>
          <p>
            "NeoPOP is a response. it's visual honesty. it merges the boldness of pop art with the starkness of brutalism, all while utilizing premium neomorphic shading to represent physical state changes."
          </p>
          <p>
            "every line, every card, every pixel in the CRED system is designed to reassure the member that they are interacting with a solid, structural instrument of trust."
          </p>
        </div>

        {/* Style Guide Cards */}
        <div className="border border-white/10 rounded-3xl p-6 md:p-8 bg-[#050505]">
          <h3 className="text-lg font-serif text-white mb-6 uppercase tracking-wider">the color palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-xl bg-black border border-white/15 flex items-end p-2 text-[10px] font-mono text-white/50">#000000</div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-white">cred black</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-xl bg-cred-green flex items-end p-2 text-[10px] font-mono text-black font-semibold">#00e676</div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-white">cred green</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-xl bg-cred-teal flex items-end p-2 text-[10px] font-mono text-black font-semibold">#00e5ff</div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-white">cred teal</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-xl bg-cred-light-bg flex items-end p-2 text-[10px] font-mono text-black border border-black/10 font-semibold">#f8f9fa</div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-white">light editorial</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
