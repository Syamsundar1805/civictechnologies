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

function App() {
  // iOS Parallax Fix
  useEffect(() => {
    // Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document);

    if (!isIOS) return;

    let ticking = false;

    const updateParallax = () => {
      const fixedElements = document.querySelectorAll('.bg-fixed') as NodeListOf<HTMLElement>;

      fixedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Check if element is in viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Calculate how far the element has scrolled through the viewport (0 to 1)
          const viewportHeight = window.innerHeight;
          const totalDistance = viewportHeight + rect.height;
          // Percentage scrolled: from 0 (just entering bottom) to 1 (just leaving top)
          const scrolledPercent = (viewportHeight - rect.top) / totalDistance;

          // Move the background Y position based on scroll percentage.
          // Native background-attachment: fixed keeps it perfectly still.
          // To emulate, we move it exactly opposite to the scroll direction slightly.
          // Typical parallax speeds are around 50% movement relative to scroll.
          // A Y-position from 0% to 100% works best for cover images.
          const yPos = (scrolledPercent * 100).toFixed(2);
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
    // Initial call
    updateParallax();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
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