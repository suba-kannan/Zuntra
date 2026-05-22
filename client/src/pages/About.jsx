import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-cred-light-bg text-black min-h-screen pt-28 pb-20 px-6 md:px-12 font-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-black/10 pb-8 mb-12"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500">company overview</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-black mt-2 mb-4 leading-tight">
            about <span className="font-normal">CRED</span>.
          </h1>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-light">
            CRED is a members-only community designed to reward the creditworthy. We believe financial responsibility should be celebrated and incentivized.
          </p>
        </motion.div>

        {/* Brand Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col gap-3 p-6 bg-white border border-black/5 rounded-2xl"
          >
            <Shield className="text-black" size={24} />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-2">trust first</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              we guard our members' data with banking-grade security mechanisms. privacy is not an option; it is our foundation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-3 p-6 bg-white border border-black/5 rounded-2xl"
          >
            <Award className="text-black" size={24} />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-2">premium perks</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              by maintaining a score above 750, members unlock handpicked rewards, high-end travel perks, and exclusive cashbacks.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-3 p-6 bg-white border border-black/5 rounded-2xl"
          >
            <Users className="text-black" size={24} />
            <h3 className="text-sm font-bold tracking-wide uppercase mt-2">closed circle</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              our community unites like-minded, financially disciplined individuals to build a robust network of trust.
            </p>
          </motion.div>
        </div>

        {/* Narrative / Copy */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-6 text-sm md:text-base text-neutral-700 leading-relaxed font-light mb-16"
        >
          <p>
            the story of CRED begins with a simple question: why are the most responsible citizens not rewarded? in india, individuals who pay their credit card bills on time form the backbone of the retail financial system. yet, they receive little to no special treatment.
          </p>
          <p>
            we wanted to build a ecosystem that celebrates this creditworthiness. CRED enables members to connect all their credit cards, view custom spending insights, detect hidden bank charges, and settle invoices with one click.
          </p>
          <p>
            since our launch in 2018, over 15 million members have joined the club. as we grow, we continue to expand our products—launching CRED garage for premium vehicle management and CRED cash+ for credit availability.
          </p>
        </motion.div>

        {/* Join CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-black text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <h4 className="text-lg font-serif text-white mb-2">ready to experience the ascension?</h4>
            <p className="text-xs text-neutral-400">check your credit rating and apply for club membership today.</p>
          </div>
          <a
            href="/"
            className="bg-white hover:bg-cred-green text-black font-semibold text-xs uppercase tracking-widest py-3 px-6 rounded-full flex items-center gap-1 transition-all duration-300 hover:scale-105"
          >
            apply now <ArrowUpRight size={14} />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
