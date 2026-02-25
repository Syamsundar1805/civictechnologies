import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import service4 from '../../assets/industry_images/BMSSERVICES.jpeg';
import service3 from '../../assets/industry_images/electricservice.jpeg';
import service2 from '../../assets/industry_images/HomeService2.webp';
import service1 from '../../assets/industry_images/EMS.jpeg';

const services = [
  {
    title: "Electrical Infrastructure",
    description:
      "HT & LT Panels, Transformers, Cable Laying, Distribution Boards, DG & UPS Installations.",
    image: service3,
  },
  {
    title: "HVAC Electrical",
    description:
      "Clean Rooms, Chillers, AHU Systems, Ventilation & Humidification Systems.",
    image: service2,
  },
  {
    title: "Automation & Smart Systems",
    description:
      "BMS Systems, Smart Controls, Energy Monitoring & Optimization.",
    image: service4,
  },
  {
    title: "Electronic Management System (EMS)",
    description:
      "Smart Electronic Monitoring, Energy Data Analysis, Load Optimization & Digital Control Solutions.",
    image: service1,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      className="bg-white relative w-full h-auto min-h-screen flex flex-col pt-24 pb-12 overflow-hidden z-30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0177B2]/10 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

      {/* Header */}
      <div className="container mx-auto px-6 relative z-10 flex-shrink-0 mb-8">
        <div className="relative flex flex-col items-center">

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block z-20">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-[#252525] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#0177B2] transition-colors duration-300"
            >
              View All
            </motion.button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular">
              Our
            </h2>

            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[24px] md:text-[36px] lg:text-[42px] leading-none mt-2">
              Services
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed hidden sm:block mt-2">
              Delivering integrated engineering solutions built on precision,
              accountability, and technical excellence.
            </p>

            <div className="mt-6 md:hidden">
              <motion.button
                onClick={() => navigate("/services")}
                className="px-8 py-3 bg-[#252525] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#0177B2] transition-colors duration-300"
              >
                View All
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[60vh] md:h-[65vh] flex-grow flex items-center justify-center">

        <div className="relative w-full h-full overflow-hidden shadow-2xl bg-black">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => navigate("/services")}
            >
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-start px-8 pt-16 md:px-16 md:pt-24 text-white">
                <div className="max-w-3xl">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 font-primary uppercase tracking-tight leading-tight drop-shadow-lg">
                    {services[activeIndex].title}
                  </h3>

                  <p className="text-sm md:text-xl text-gray-200 mb-6 max-w-2xl font-medium leading-relaxed hidden sm:block drop-shadow-md">
                    {services[activeIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Explore Button */}
          <div className="absolute bottom-20 md:bottom-12 left-1/2 md:left-24 -translate-x-1/2 md:translate-x-0 z-20 w-max">
            <button
              onClick={() => navigate("/services")}
              className="pointer-events-auto flex items-center gap-2 text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider group border border-white/50 bg-black/30 backdrop-blur-sm rounded-full px-5 py-2 hover:bg-[#0177B2] hover:border-[#0177B2] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Service
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="p-1 text-white/70 hover:text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <KeyboardArrowLeftIcon fontSize="medium" />
            </button>

            <div className="flex justify-center gap-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx
                    ? "w-8 bg-[#0177B2]"
                    : "w-2 bg-white/50 hover:bg-white"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="p-1 text-white/70 hover:text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <KeyboardArrowRightIcon fontSize="medium" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;