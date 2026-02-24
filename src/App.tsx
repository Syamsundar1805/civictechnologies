// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ServiceDetail from './components/Services/ServiceDetail';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Career from './pages/Career';
import { motion } from 'framer-motion';
import ScrollToTop from './components/common/ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function IosParallaxFix() {
  const location = useLocation();

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    if (!isIOS) return;

    let ticking = false;
    const updateParallax = () => {
      const fixedElements = document.querySelectorAll('.bg-fixed') as NodeListOf<HTMLElement>;
      fixedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const totalDistance = window.innerHeight + rect.height;
          const scrolledPercent = (window.innerHeight - rect.top) / totalDistance;
          const yPos = Math.max(0, Math.min(100, scrolledPercent * 100)).toFixed(2);
          el.style.backgroundPositionY = `${yPos}%`;
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run immediately when route changes to setup images before scrolling
    // A small timeout ensures React Router DOM has flushed the new page elements.
    setTimeout(updateParallax, 50);

    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <IosParallaxFix />
      <div className="App">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;