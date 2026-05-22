import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDownload from './components/FloatingDownload';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Design from './pages/Design';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white flex flex-col selection:bg-cred-green selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </main>
        <Footer />
        <FloatingDownload />
      </div>
    </Router>
  );
}

export default App;
