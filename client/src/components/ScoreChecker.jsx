import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertCircle, TrendingUp, RefreshCw } from 'lucide-react';

export default function ScoreChecker() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    dob: '',
    pincode: '',
    income: '',
    employment: 'salaried'
  });
  
  const [loading, setLoading] = useState(false);
  const [scoreData, setScoreData] = useState(null);
  const [error, setError] = useState('');
  const [animatedScore, setAnimatedScore] = useState(300);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setScoreData(null);

    // Simple validations
    if (!formData.name || !formData.email || !formData.phone || !formData.pan || !formData.dob || !formData.pincode || !formData.income || !formData.employment) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    if (formData.pan.length !== 10) {
      setError('PAN Card number must be exactly 10 characters.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/waitlist/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setScoreData(result.data);
        // Reset form
        setFormData({ name: '', email: '', phone: '', pan: '', dob: '', pincode: '', income: '', employment: 'salaried' });
      } else {
        setError(result.message || 'Verification failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Unable to connect to the verification server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Count-up animation for the score
  useEffect(() => {
    if (!scoreData) return;
    
    setAnimatedScore(300);
    const target = scoreData.creditScore;
    const duration = 1500; // 1.5s
    const stepTime = 15;
    const steps = duration / stepTime;
    const increment = (target - 300) / steps;
    
    let current = 300;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedScore(target);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [scoreData]);

  // Color mapping based on score
  const getScoreColor = (score) => {
    if (score >= 750) return '#00e676'; // green
    if (score >= 620) return '#ffb300'; // orange
    return '#ff1744'; // red
  };

  const getStatusText = (status, score) => {
    if (status === 'approved') {
      return {
        title: 'access approved.',
        desc: 'your financial discipline has unlocked the doors. welcome to the club.',
        color: 'text-cred-green',
        bg: 'border-cred-green/20 bg-cred-green/5'
      };
    }
    if (status === 'rejected') {
      return {
        title: 'access deferred.',
        desc: `an experience this premium requires a score of 750+. improve your rating to re-apply.`,
        color: 'text-red-500',
        bg: 'border-red-500/20 bg-red-500/5'
      };
    }
    return {
      title: 'application under review.',
      desc: 'your score has been compiled. you are added to the official member waitlist.',
      color: 'text-amber-500',
      bg: 'border-amber-500/20 bg-amber-500/5'
    };
  };

  const activeColor = scoreData ? getScoreColor(scoreData.creditScore) : '#00e676';

  return (
    <div className="w-full max-w-lg mx-auto bg-black border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden font-sans">
      
      {/* Decorative backdrop glow */}
      <div 
        className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 transition-colors duration-500"
        style={{ backgroundColor: activeColor }}
      />
      
      <AnimatePresence mode="wait">
        {!scoreData ? (
          <motion.div
            key="form-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-cred-green" size={20} />
              <span className="text-xs font-bold tracking-[0.25em] text-cred-muted uppercase">member verification</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight">
              check your credit score.
            </h3>
            <p className="text-xs text-cred-muted mb-6 leading-relaxed">
              we compile and analyze your score to verify creditworthiness. members receive access to exclusive rewards and smart card tools.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="FULL NAME (as on PAN card)"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider uppercase font-medium p-4 rounded-xl transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider p-4 rounded-xl transition-all duration-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="MOBILE NUMBER"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider p-4 rounded-xl transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  placeholder="PAN CARD NUMBER"
                  maxLength={10}
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider uppercase p-4 rounded-xl transition-all duration-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  placeholder="DATE OF BIRTH (DD/MM/YYYY)"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider p-4 rounded-xl transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="PIN CODE"
                  maxLength={6}
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider p-4 rounded-xl transition-all duration-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  placeholder="MONTHLY INCOME (₹)"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white text-xs md:text-sm tracking-wider p-4 rounded-xl transition-all duration-300"
                  required
                />
                <select
                  name="employment"
                  value={formData.employment}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-cred-green focus:outline-none text-white/50 focus:text-white text-xs md:text-sm tracking-wider uppercase p-4 rounded-xl transition-all duration-300"
                  required
                >
                  <option value="salaried" className="bg-[#0a0a0a] text-white">Salaried</option>
                  <option value="self-employed" className="bg-[#0a0a0a] text-white">Self-Employed</option>
                </select>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-xs text-red-500 border border-red-500/20 bg-red-500/5 p-3 rounded-xl">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-white hover:bg-cred-green text-black hover:text-black font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="animate-spin" size={14} />
                    compiling score...
                  </>
                ) : (
                  'apply to the club'
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="score-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center py-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-cred-green" size={20} />
              <span className="text-xs font-bold tracking-[0.25em] text-cred-muted uppercase">verification complete</span>
            </div>

            {/* Circular Gauge */}
            <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
              {/* Outer Glow Ring */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#111"
                  strokeWidth="6"
                  fill="transparent"
                />
                {/* Foreground Animated Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={activeColor}
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * (animatedScore - 300)) / 600}
                  strokeLinecap="round"
                  className="transition-all duration-75"
                />
              </svg>
              
              {/* Score text inside */}
              <div className="absolute flex flex-col items-center">
                <span className="text-xs text-cred-muted uppercase tracking-[0.15em] font-medium">score</span>
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: activeColor }}>
                  {animatedScore}
                </span>
                <span className="text-[10px] text-cred-muted uppercase tracking-wider mt-1">CRIF Highmark</span>
              </div>
            </div>

            {/* Application Result Details */}
            <div className={`border rounded-2xl p-5 w-full text-left mb-6 transition-all duration-500 ${getStatusText(scoreData.status, scoreData.creditScore).bg}`}>
              <h4 className={`text-base font-bold uppercase tracking-wider mb-2 ${getStatusText(scoreData.status, scoreData.creditScore).color}`}>
                {getStatusText(scoreData.status, scoreData.creditScore).title}
              </h4>
              <p className="text-xs text-cred-muted leading-relaxed">
                {getStatusText(scoreData.status, scoreData.creditScore).desc}
              </p>
            </div>

            <button
              onClick={() => setScoreData(null)}
              className="border border-white/20 hover:border-white text-white hover:text-black hover:bg-white text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer"
            >
              check another account
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
