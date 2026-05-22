import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const COLUMNS = [
  {
    groups: [
      {
        category: "UPGRADES",
        links: [
          { name: "CRED money", path: "https://cred.club/money" },
          { name: "CRED mint", path: "https://cred.club/mint" },
          { name: "CRED garage", path: "https://cred.club/garage" },
          { name: "CRED cash+", path: "https://cred.club/cash-plus" }
        ]
      },
      {
        category: "PAYMENTS",
        links: [
          { name: "Scan & Pay", path: "https://cred.club/cred-pay" },
          { name: "Tap to Pay", path: "https://cred.club/tap" },
          { name: "Pay anyone", path: "https://cred.club/pay-via-upi" },
          { name: "RuPay cards on UPI", path: "https://cred.club/upi-on-credit" }
        ]
      }
    ]
  },
  {
    groups: [
      {
        category: "COMPANY",
        links: [
          { name: "about CRED", path: "/about" },
          { name: "careers", path: "https://careers.cred.club/openings" }
        ]
      },
      {
        category: "INSIDER PERKS",
        links: [
          { name: "upgrade to UPI", path: "https://cred.club/ipl" }
        ]
      },
      {
        category: "DESIGN",
        links: [
          { name: "NeoPOP", path: "https://cred.club/neopop" },
          { name: "manifesto", path: "/design" }
        ]
      }
    ]
  },
  {
    groups: [
      {
        category: "RESOURCES",
        links: [
          { name: "partner with us", path: "https://cred.club/cred-pay/onboarding" },
          { name: "calculators", path: "https://cred.club/calculators" },
          { name: "articles", path: "https://cred.club/articles" },
          { name: "tech blog", path: "https://engineering.cred.club" },
          { name: "credit score guide", path: "https://cred.club/check-your-credit-score/articles" },
          { name: "credit card payment guide", path: "https://cred.club/credit-card-bill-payment-online/articles" },
          { name: "customer care", path: "https://cred.club/customer-care" },
          { name: "Dreampurse (HipBar) wallet refund form", path: "https://zfrmz.in/10ASsFdqjAnCiBMpakMX" }
        ]
      }
    ]
  },
  {
    groups: [
      {
        category: "POLICY",
        links: [
          { name: "transaction & user verification", path: "https://cred.club/transaction-and-user-verification-policy" },
          { name: "Google API disclosure", path: "/privacy" },
          { name: "UPI FAQ & grievances", path: "https://cred.club/upi-faqs" },
          { name: "returns and refunds", path: "https://cred.club/return-policy" },
          { name: "security", path: "https://cred.club/security" },
          { name: "equal opportunity policy", path: "https://cred.club/equal-opportunity" },
          { name: "investor relations", path: "https://cred.club/investor-relations" },
          { name: "other disclosures", path: "https://cred.club/legal/other-disclosures" }
        ]
      }
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 glassmorphic py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Official CRED logo badge */}
          <img 
            src="https://web-images.credcdn.in/v2/_next/assets/icons/logo.png" 
            alt="CRED logo" 
            className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Action Button + Menu toggle */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => handleLinkClick('/')}
            className="hidden md:flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-cred-green transition-colors"
          >
            CRED indusind bank rupay credit card <ArrowUpRight size={12} className="text-cred-green" />
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-cred-green transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-screen Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black pt-28 px-8 md:px-24 overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
              {COLUMNS.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-12">
                  {col.groups.map((group, grpIdx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (colIdx * 2 + grpIdx) * 0.05, duration: 0.4 }}
                      key={group.category}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-cred-muted uppercase text-xs font-semibold tracking-[0.25em] font-sans">
                        {group.category}
                      </h3>
                      <ul className="flex flex-col gap-4">
                        {group.links.map((link) => (
                          <li key={link.name}>
                            {link.path.startsWith('/') ? (
                              <button
                                onClick={() => handleLinkClick(link.path)}
                                className="text-left text-lg md:text-xl font-medium text-white hover:text-cred-green hover:pl-2 transition-all duration-300 font-sans cursor-pointer"
                              >
                                {link.name}
                              </button>
                            ) : (
                              <a
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-left text-lg md:text-xl font-medium text-white hover:text-cred-green hover:pl-2 transition-all duration-300 flex items-center gap-1 font-sans"
                              >
                                {link.name} <ArrowUpRight size={14} className="text-cred-muted" />
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Menu Info */}
            <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cred-muted tracking-wider">
              <div>© 2026 CRED. ALL RIGHTS RESERVED.</div>
              <div className="flex gap-6">
                <button onClick={() => handleLinkClick('/privacy')} className="hover:text-white transition-colors">PRIVACY POLICY</button>
                <button onClick={() => handleLinkClick('/privacy')} className="hover:text-white transition-colors">TERMS & CONDITIONS</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
