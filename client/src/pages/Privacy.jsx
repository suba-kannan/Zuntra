import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, Lock, HelpCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-cred-light-bg text-black min-h-screen pt-28 pb-20 px-6 md:px-12 font-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-black/10 pb-8 mb-12"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500">legal & security</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-black mt-2 mb-4 leading-tight">
            privacy <span className="font-normal">policy</span>.
          </h1>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light">
            last updated: may 2026. CRED is committed to protecting your personal, transactional, and credit information. this document outlines how we collect, store, and shield your records.
          </p>
        </motion.div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="border-2 border-black p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden bg-white"
          >
            <div className="absolute top-4 right-4 bg-cred-green text-black text-[9px] font-bold tracking-widest uppercase py-1 px-3 rounded-full">
              active
            </div>
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
              <ShieldCheck className="text-black" size={20} />
            </div>
            <h3 className="text-base font-bold uppercase tracking-wider">zero trade policy</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              we never rent, barter, or sell member information to third-party advertisers. your spending data stays strictly within the club's smart services.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border border-black/10 p-6 rounded-2xl flex flex-col gap-4 bg-white"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
              <EyeOff className="text-black" size={20} />
            </div>
            <h3 className="text-base font-bold uppercase tracking-wider">email access</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              by granting access to card statements via secure API/OAuth channels, our parser compiles hidden costs. you can revoke access at any time.
            </p>
          </motion.div>
        </div>

        {/* Policy Sections */}
        <div className="flex flex-col gap-10 text-sm text-neutral-700 leading-relaxed font-light">
          
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-black font-semibold uppercase tracking-wider text-xs">
              <Lock size={14} className="text-neutral-500" />
              <span>1. Information Collection and Usage</span>
            </div>
            <p className="text-xs text-neutral-500">
              we collect identification parameters (name, contact, PAN card number) to run credit scores via CRIF High Mark or Experian. this allows us to confirm your rating satisfies our 750 minimum requirement for new member applications.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-black font-semibold uppercase tracking-wider text-xs">
              <ShieldCheck size={14} className="text-neutral-500" />
              <span>2. Storage Protocols</span>
            </div>
            <p className="text-xs text-neutral-500">
              all data records are saved in fully-monitored, virtual private clouds utilizing advanced cryptographic hash layers. payment channels process transactions over direct PCI-DSS compliant links.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-black font-semibold uppercase tracking-wider text-xs">
              <HelpCircle size={14} className="text-neutral-500" />
              <span>3. Member Rights & Erasure</span>
            </div>
            <p className="text-xs text-neutral-500">
              you retain full ownership of your credentials. if you choose to terminate your CRED membership, you can submit a deletion request under Account settings. all synchronized credit records will be purged immediately.
            </p>
          </motion.section>

        </div>

      </div>
    </div>
  );
}
