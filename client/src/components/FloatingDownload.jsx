import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, QrCode } from 'lucide-react';

export default function FloatingDownload() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      
      {/* QR Code Card popup */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-black border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col items-center gap-3 text-center w-48 neon-glow-green"
          >
            <div className="bg-white p-2 rounded-xl w-32 h-32 flex items-center justify-center relative overflow-hidden">
              {/* Decorative QR Code SVG */}
              <svg className="w-28 h-28 text-black" viewBox="0 0 100 100">
                <rect x="0" y="0" width="20" height="20" fill="currentColor" />
                <rect x="5" y="5" width="10" height="10" fill="white" />
                <rect x="80" y="0" width="20" height="20" fill="currentColor" />
                <rect x="85" y="5" width="10" height="10" fill="white" />
                <rect x="0" y="80" width="20" height="20" fill="currentColor" />
                <rect x="5" y="85" width="10" height="10" fill="white" />
                {/* Random QR clusters */}
                <rect x="30" y="10" width="10" height="15" fill="currentColor" />
                <rect x="45" y="5" width="15" height="10" fill="currentColor" />
                <rect x="10" y="30" width="15" height="10" fill="currentColor" />
                <rect x="35" y="35" width="20" height="20" fill="currentColor" />
                <rect x="65" y="30" width="10" height="15" fill="currentColor" />
                <rect x="80" y="45" width="10" height="10" fill="currentColor" />
                <rect x="15" y="60" width="10" height="15" fill="currentColor" />
                <rect x="40" y="65" width="15" height="15" fill="currentColor" />
                <rect x="65" y="65" width="20" height="10" fill="currentColor" />
                <rect x="70" y="80" width="15" height="15" fill="currentColor" />
              </svg>
            </div>
            <div className="text-[10px] text-cred-muted uppercase tracking-[0.15em] font-semibold">
              Scan to Download
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA Pill */}
      <button
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
        onClick={() => setShowQR(!showQR)}
        className="bg-white text-black font-semibold text-xs md:text-sm uppercase tracking-[0.15em] py-3 px-6 rounded-full flex items-center gap-2 hover:bg-cred-green hover:scale-105 active:scale-95 shadow-xl transition-all duration-300 group"
      >
        <span className="font-bold">download CRED</span>
        <QrCode size={16} className="text-black/70 group-hover:text-black transition-colors" />
      </button>

    </div>
  );
}
