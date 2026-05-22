import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Check, ChevronDown, Shield, Star, X } from 'lucide-react';
import ScrollHighlightText from '../components/ScrollHighlightText';
import ScoreChecker from '../components/ScoreChecker';

// Import images
import credAppMockup from '../assets/cred_app_mockup.png';
import credSecurityLock from '../assets/cred_security_lock.png';
import credGoldenDoor from '../assets/cred_golden_door.png';

const FAQ_ITEMS = [
  {
    q: "what is CRED?",
    a: "CRED is a members-only club that rewards individuals with high credit scores. it allows members to manage and pay all their credit card bills in one place, while unlocking premium rewards, cashback, and customized insights."
  },
  {
    q: "how do I check my credit score on CRED?",
    a: "you can check your credit score by using our Member Verification tool. simply click on any 'check credit score' button to open the secure portal, input your details, and retrieve your rating in real-time."
  },
  {
    q: "are my transactions secure on CRED?",
    a: "yes. security is our highest priority. all credit card details, personal data, and payment routes are fully encrypted using high-grade bank-level encryption algorithms, ensuring no unauthorized access."
  },
  {
    q: "who is eligible to become a CRED member?",
    a: "CRED membership is reserved for individuals with a credit rating of 750 or above (CRIF/Experian/CIBIL). if your score meets this criteria, you will receive immediate approval to join the club."
  }
];

const UPGRADE_CARDS = [
  {
    title: "scan & pay any UPI QR",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/snp-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/scan-n-pay.png",
    hoverBorder: "hover:border-[#38ff70]/40",
  },
  {
    title: "UPI payments. on credit.",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rupay-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/cc-on-upi.png",
    hoverBorder: "hover:border-[#00e5ff]/40",
  },
  {
    title: "tap your phone. pay on credit.",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tnp-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tap-n-pay.png",
    hoverBorder: "hover:border-[#ff38d2]/40",
  },
  {
    title: "send money to any UPI app",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p.png",
    hoverBorder: "hover:border-[#ffffff]/30",
  },
  {
    title: "manage your cars' vitals",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage.png",
    hoverBorder: "hover:border-[#ffa726]/40",
  }
];

export default function Home() {
  const containerRef = useRef(null);
  
  // Parallax tracking for 5 smartphone mockups
  const phoneSectionRef = useRef(null);
  const { scrollYProgress: phoneScrollY } = useScroll({
    target: phoneSectionRef,
    offset: ["start end", "end start"]
  });
  
  // Outer, inner, and center phones scroll at different rates to create 3D depth
  const phone1Y = useTransform(phoneScrollY, [0, 1], [150, -150]);
  const phone2Y = useTransform(phoneScrollY, [0, 1], [70, -70]);
  const phone3Y = useTransform(phoneScrollY, [0, 1], [0, 0]);
  const phone4Y = useTransform(phoneScrollY, [0, 1], [70, -70]);
  const phone5Y = useTransform(phoneScrollY, [0, 1], [150, -150]);

  // Card fan-out tracking
  const cardsSectionRef = useRef(null);
  const { scrollYProgress: cardsScroll } = useScroll({
    target: cardsSectionRef,
    offset: ["start end", "end start"]
  });

  // Calculate rotation and translation for fanning out 4 credit cards
  const card1Rotate = useTransform(cardsScroll, [0.2, 0.6], [0, -35]);
  const card1X = useTransform(cardsScroll, [0.2, 0.6], [0, -140]);
  const card1Y = useTransform(cardsScroll, [0.2, 0.6], [0, -20]);

  const card2Rotate = useTransform(cardsScroll, [0.2, 0.6], [0, -12]);
  const card2X = useTransform(cardsScroll, [0.2, 0.6], [0, -50]);
  const card2Y = useTransform(cardsScroll, [0.2, 0.6], [0, -40]);

  const card3Rotate = useTransform(cardsScroll, [0.2, 0.6], [0, 12]);
  const card3X = useTransform(cardsScroll, [0.2, 0.6], [0, 50]);
  const card3Y = useTransform(cardsScroll, [0.2, 0.6], [0, -40]);

  const card4Rotate = useTransform(cardsScroll, [0.2, 0.6], [0, 35]);
  const card4X = useTransform(cardsScroll, [0.2, 0.6], [0, 140]);
  const card4Y = useTransform(cardsScroll, [0.2, 0.6], [0, -20]);

  // Score Checker Modal State
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);

  // Accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const openScoreModal = () => setIsScoreModalOpen(true);
  const closeScoreModal = () => setIsScoreModalOpen(false);

  return (
    <div ref={containerRef} className="bg-black text-white w-full overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative text-center pt-20 overflow-hidden">
        {/* Background Videos */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/hero-desktop-poster.jpg?tr=q-95"
          className="absolute inset-0 w-full h-full object-cover hidden md:block opacity-60 z-0 pointer-events-none"
        >
          <source src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/mobile/hero-mobile-poster.jpg?tr=q-95"
          className="absolute inset-0 w-full h-full object-cover block md:hidden opacity-60 z-0 pointer-events-none"
        >
          <source src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/mobile/hero-mobile.mp4" type="video/mp4" />
        </video>

        {/* Glow vignettes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,230,118,0.06),transparent_50%)] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,229,255,0.04),transparent_40%)] pointer-events-none z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center gap-6 relative z-20"
        >
          <h1 className="text-4xl md:text-7xl font-serif font-light leading-tight tracking-wide text-white">
            crafted for the <br />
            <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-cred-green">creditworthy</span>.
          </h1>
          
          <p className="text-sm md:text-lg text-cred-muted max-w-2xl font-light tracking-wide leading-relaxed">
            CRED is a members-only club that enables the trustworthy to make financial progress. reward your credit score, manage bills, and experience upgrades.
          </p>

          <button
            onClick={openScoreModal}
            className="mt-6 bg-white hover:bg-cred-green text-black font-semibold text-xs md:text-sm uppercase tracking-[0.2em] py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,230,118,0.3)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            check credit score <ArrowDown size={14} className="animate-bounce" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cred-muted flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] uppercase z-20">
          <span>scroll down</span>
          <div className="w-1 h-8 rounded-full bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-2 bg-cred-green rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST INTRO WORD-BY-WORD HIGHLIGHT */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto flex flex-col justify-center min-h-[70vh]">
        <div className="text-cred-green text-xs font-bold tracking-[0.3em] uppercase mb-6">
          not everyone makes it in.
        </div>
        <ScrollHighlightText 
          text="the story of CRED begins with trust. we believe that people who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. we are building a circle of creditworthy individuals who elevate one another. make it to the club, and experience the ascension yourself."
        />
      </section>

      {/* SECTION 3: APP MOCKUP PARALLAX */}
      <section ref={phoneSectionRef} className="py-32 bg-black border-t border-b border-white/5 relative overflow-hidden">
        {/* Background Videos */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/phone-ticker-desktop-poster-final.jpg?tr=q-95"
          className="absolute inset-0 w-full h-full object-cover hidden md:block opacity-35 z-0 pointer-events-none"
        >
          <source src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/phone-ticker-desktop-final.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/mobile/phone-ticker-mobile-poster-final.jpg?tr=q-95"
          className="absolute inset-0 w-full h-full object-cover block md:hidden opacity-35 z-0 pointer-events-none"
        >
          <source src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/mobile/phone-ticker-mobile-final.mp4" type="video/mp4" />
        </video>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          {/* Top: 5 Smartphone Mockups in Perspective Fan */}
          <div className="flex justify-center items-center relative min-h-[380px] md:min-h-[550px] w-full overflow-hidden py-12">
            {/* Glow backdrop */}
            <div className="absolute w-80 h-80 bg-cred-teal/5 rounded-full blur-3xl -z-10 animate-neon-pulse" />
            
            {/* Phone 1 (leftmost) */}
            <motion.div 
              style={{ y: phone1Y }} 
              className="absolute w-24 md:w-44 pointer-events-none -translate-x-28 md:-translate-x-60 rotate-[-12deg] z-1 opacity-60"
            >
              <img src={credAppMockup} alt="Mockup 1" className="w-full h-auto object-contain rounded-[20px] md:rounded-[32px] shadow-2xl border border-white/10" />
            </motion.div>
            
            {/* Phone 2 */}
            <motion.div 
              style={{ y: phone2Y }} 
              className="absolute w-28 md:w-48 pointer-events-none -translate-x-14 md:-translate-x-30 rotate-[-6deg] z-2 opacity-85"
            >
              <img src={credAppMockup} alt="Mockup 2" className="w-full h-auto object-contain rounded-[24px] md:rounded-[32px] shadow-2xl border border-white/10" />
            </motion.div>
            
            {/* Phone 3 (Center) */}
            <motion.div 
              style={{ y: phone3Y }} 
              className="absolute w-32 md:w-52 pointer-events-none z-10 scale-105"
            >
              <img src={credAppMockup} alt="Mockup 3" className="w-full h-auto object-contain rounded-[28px] md:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20" />
            </motion.div>
            
            {/* Phone 4 */}
            <motion.div 
              style={{ y: phone4Y }} 
              className="absolute w-28 md:w-48 pointer-events-none translate-x-14 md:translate-x-30 rotate-[6deg] z-2 opacity-85"
            >
              <img src={credAppMockup} alt="Mockup 4" className="w-full h-auto object-contain rounded-[24px] md:rounded-[32px] shadow-2xl border border-white/10" />
            </motion.div>
            
            {/* Phone 5 (rightmost) */}
            <motion.div 
              style={{ y: phone5Y }} 
              className="absolute w-24 md:w-44 pointer-events-none translate-x-28 md:translate-x-60 rotate-[12deg] z-1 opacity-60"
            >
              <img src={credAppMockup} alt="Mockup 5" className="w-full h-auto object-contain rounded-[20px] md:rounded-[32px] shadow-2xl border border-white/10" />
            </motion.div>
          </div>

          {/* Bottom: Centered Text */}
          <div className="max-w-4xl mx-auto px-6 text-center mt-12 md:mt-20 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-6xl font-serif text-white leading-tight">
              all that you deserve. <br /><span className="italic font-light">and some more.</span>
            </h2>
            <p className="text-sm md:text-lg text-cred-muted max-w-2xl font-light tracking-wide leading-relaxed">
              if you're a CRED member, you're already a step ahead. every experience you unlock takes you higher up the pedestal.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DYNAMIC CARD FAN-OUT */}
      <section ref={cardsSectionRef} className="py-32 px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Dynamic Card fan-out area */}
        <div className="relative flex justify-center items-center min-h-[350px] order-2 md:order-1">
          <div className="absolute w-80 h-80 bg-cred-green/5 rounded-full blur-3xl -z-10" />
          
          {/* Card stack container */}
          <div className="relative w-56 h-36">
            
            {/* Card 1: Platinum Gold Card */}
            <motion.div 
              style={{ x: card1X, y: card1Y, rotate: card1Rotate }}
              className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] border border-amber-500/30 rounded-xl p-4 flex flex-col justify-between shadow-2xl origin-bottom"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase tracking-widest text-amber-500/70">CRED custom</span>
                <div className="w-5 h-4 bg-amber-500/20 rounded-sm" />
              </div>
              <div className="text-[10px] text-white/40 tracking-[0.2em] font-mono">•••• •••• •••• 1084</div>
            </motion.div>

            {/* Card 2: Cyber Emerald Card */}
            <motion.div 
              style={{ x: card2X, y: card2Y, rotate: card2Rotate }}
              className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] to-[#121212] border border-cred-green/45 rounded-xl p-4 flex flex-col justify-between shadow-2xl origin-bottom"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase tracking-widest text-cred-green/80">CRED reserve</span>
                <div className="w-5 h-4 bg-cred-green/20 rounded-sm" />
              </div>
              <div className="text-[10px] text-white/40 tracking-[0.2em] font-mono">•••• •••• •••• 8291</div>
            </motion.div>

            {/* Card 3: Titanium Teal Card */}
            <motion.div 
              style={{ x: card3X, y: card3Y, rotate: card3Rotate }}
              className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] to-[#070707] border border-cred-teal/45 rounded-xl p-4 flex flex-col justify-between shadow-2xl origin-bottom"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase tracking-widest text-cred-teal/80">CRED black</span>
                <div className="w-5 h-4 bg-cred-teal/20 rounded-sm" />
              </div>
              <div className="text-[10px] text-white/40 tracking-[0.2em] font-mono">•••• •••• •••• 4892</div>
            </motion.div>

            {/* Card 4: Neon Cyberpunk Card */}
            <motion.div 
              style={{ x: card4X, y: card4Y, rotate: card4Rotate }}
              className="absolute inset-0 bg-gradient-to-br from-[#1a0a1a] to-[#050005] border border-fuchsia-500/30 rounded-xl p-4 flex flex-col justify-between shadow-2xl origin-bottom"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase tracking-widest text-fuchsia-500/70">CRED luxury</span>
                <div className="w-5 h-4 bg-fuchsia-500/20 rounded-sm" />
              </div>
              <div className="text-[10px] text-white/40 tracking-[0.2em] font-mono">•••• •••• •••• 6500</div>
            </motion.div>

          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-md order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            do more with your <br /><span className="italic font-light">credit cards.</span>
          </h2>
          <p className="text-sm text-cred-muted leading-relaxed font-light font-sans">
            manage your credit cards better and improve your credit score: receive payment reminders, uncover hidden fees, get spending insights, and discover ways to maximize card benefits.
          </p>
          <button 
            onClick={openScoreModal}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-cred-green hover:text-white flex items-center gap-1 transition-colors text-left"
          >
            verify your score now →
          </button>
        </div>
      </section>

      {/* SECTION 5: FEATURES NEOPOP GRID */}
      <section className="py-24 bg-[#030303] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="mb-16 max-w-md">
            <div className="text-cred-green text-xs font-bold tracking-[0.3em] uppercase mb-4">upgrades</div>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              upgrade your life. <br /><span className="italic font-light">bit by bit.</span>
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 scrollbar-none snap-x snap-mandatory [-webkit-overflow-scrolling:touch] w-full">
            {UPGRADE_CARDS.map((card, idx) => (
              <div 
                key={idx}
                style={{ backgroundImage: `url(${card.bg})` }}
                className={`relative p-8 rounded-[2rem] flex flex-col justify-between min-h-[420px] bg-cover bg-bottom bg-no-repeat snap-center shrink-0 min-w-[280px] w-[80vw] md:w-auto md:min-w-0 transition-all duration-500 hover:scale-[1.03] border border-white/5 ${card.hoverBorder} overflow-hidden group`}
              >
                {/* Dark gradient overlay for readability of title and logo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className="w-10 h-10 object-contain self-start"
                  />
                  <h3 className="text-xl md:text-[22px] font-sans text-white leading-tight font-extrabold tracking-wide lowercase">
                    {card.title.split('. ').map((part, i) => (
                      <span key={i} className="block">
                        {part}
                      </span>
                    ))}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto">
                  {/* Custom NeoPOP style button */}
                  <div className="bg-black/60 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2 group/btn hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer">
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] font-sans text-white group-hover/btn:text-black transition-colors duration-300">
                      Know more
                    </span>
                    <svg 
                      width="12" 
                      height="6" 
                      viewBox="0 0 32 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-white group-hover/btn:text-black transition-colors duration-300"
                    >
                      <path d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: REWARDS SECTION */}
      <section className="py-32 bg-black px-6 md:px-24 relative overflow-hidden">
        {/* Background Videos */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rewards-desktop-poster.jpg?tr=q-95"
          className="absolute inset-0 w-full h-full object-cover hidden md:block opacity-65 z-0 pointer-events-none"
        >
          <source src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/rewards-desktop.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/mobile/rewards-mobile-poster.jpg?tr=q-95"
          className="absolute inset-0 w-full h-full object-cover block md:hidden opacity-65 z-0 pointer-events-none"
        >
          <source src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/mobile/rewards-mobile.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,118,0.04),transparent_60%)] pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-20">
          
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="text-cred-green text-xs font-bold tracking-[0.3em] uppercase">rewards platform</div>
            <h2 className="text-3xl md:text-6xl font-serif text-white leading-tight">
              feel the odds <br />
              fall in your <br />
              <span className="italic font-light">favor.</span>
            </h2>
            <p className="text-sm text-cred-muted leading-relaxed font-light">
              claim direct cashback, earn premium travel miles, unlock exclusive brand partnerships, and secure premium event passes. your credit rating is a valuable asset—use it to optimize your lifestyle.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-8 bg-[#050505] border border-white/5 rounded-3xl p-8 max-w-sm w-full">
            <h3 className="text-xl font-serif text-white uppercase tracking-wider">club benefits</h3>
            <div className="flex flex-col gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-cred-green" /> <span>Exclusive cashbacks & daily rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-cred-green" /> <span>Handpicked products & access to events</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-cred-green" /> <span>Member exclusive dining & curation perks</span>
              </div>
            </div>
            
            <button
              onClick={openScoreModal}
              className="w-full mt-4 bg-white hover:bg-cred-green text-black font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-102"
            >
              explore rewards
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 7: DATA SECURITY */}
      <section className="py-32 bg-[#050505] border-t border-b border-white/5 relative overflow-hidden px-6 md:px-24">
        {/* Ambient Security Lock Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] z-0 pointer-events-none">
          <img src={credSecurityLock} alt="Security Lock" className="w-[500px] h-auto object-contain" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center min-h-[60vh] relative z-10">
          <div className="flex items-center gap-2 text-cred-green mb-6">
            <Shield className="text-cred-green" size={18} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">security first</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-serif text-white leading-tight uppercase tracking-wider font-bold mb-10">
            YOUR DATA ISN'T OUR BUSINESS. <br />KEEPING IT SAFE IS.
          </h2>
          <ScrollHighlightText 
            text="all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any. we do not trade or sell your information. security operates at the core of everything we build."
          />
        </div>
      </section>

      {/* SECTION 8: MEMBERS TRUST */}
      <section className="py-24 bg-black text-center relative px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-cred-green text-cred-green" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            trusted by 15M+ members. <br />
            <span className="italic font-light text-cred-muted">the proof writes itself.</span>
          </h2>
          
          <div className="flex gap-12 justify-center my-6">
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white">4.8/5</span>
              <p className="text-[10px] text-cred-muted uppercase tracking-wider mt-1">App Store Rating</p>
            </div>
            <div className="border-l border-white/10 pl-12 text-center">
              <span className="text-2xl md:text-3xl font-bold text-white">4.8/5</span>
              <p className="text-[10px] text-cred-muted uppercase tracking-wider mt-1">Play Store Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MEMBERSHIP SECTION */}
      <section className="py-32 bg-black px-6 md:px-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Golden Door Artwork */}
          <div className="flex justify-center relative order-2 lg:order-1">
            <div className="absolute w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="max-w-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(234,179,8,0.15)]"
            >
              <img 
                src={credGoldenDoor} 
                alt="CRED Membership Door opening with Golden Light" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Right Column: Text and FAQs link */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">membership</div>
            <h2 className="text-3xl md:text-6xl font-serif text-white leading-tight">
              not everyone <br />gets it.
            </h2>
            <p className="text-sm md:text-base text-cred-muted leading-relaxed font-light font-sans">
              like all good things in life, earning a CRED membership is not easy; but the possibility of unlocking a greater future makes the effort worthwhile.
            </p>
            <div className="mt-4">
              <a 
                href="#faqs"
                className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest text-white uppercase hover:text-yellow-500 transition-colors group cursor-pointer"
              >
                <span>explore FAQs</span>
                <ChevronDown size={16} className="text-cred-muted group-hover:text-yellow-500 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQs ACCORDION */}
      <section id="faqs" className="py-24 bg-[#030303] border-t border-white/5 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif text-white text-center mb-12 uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          
          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-black border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left text-sm md:text-base font-bold text-white tracking-wide uppercase hover:text-cred-green transition-colors cursor-pointer select-none"
                >
                  <span>{item.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-cred-muted transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-cred-green' : ''}`} 
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-xs md:text-sm text-cred-muted leading-relaxed font-light border-t border-white/5 pt-4">
                    {item.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Verification Modal */}
      <AnimatePresence>
        {isScoreModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeScoreModal}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            
            {/* Modal card content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-lg z-10"
            >
              <button
                onClick={closeScoreModal}
                className="absolute top-4 right-4 text-cred-muted hover:text-white p-2 z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <ScoreChecker />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
