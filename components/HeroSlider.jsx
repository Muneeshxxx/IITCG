'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1580983553600-c49a1d083f54?w=1920&q=80',
    title: 'AI-Driven Digital Transformation',
    subtitle: 'Empowering enterprises with intelligent automation and cutting-edge AI solutions',
  },
  {
    image: 'https://images.unsplash.com/photo-1589828994379-7a8869c4f519?w=1920&q=80',
    title: 'Innovation Through Technology',
    subtitle: 'Leveraging AI, ML, and data analytics to drive business growth',
  },
  {
    image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?w=1920&q=80',
    title: 'Modern IT Solutions',
    subtitle: 'Building scalable platforms for Travel, BFSI & Digital Commerce',
  },
  {
    image: 'https://images.unsplash.com/photo-1517181875630-f72350452109?w=1920&q=80',
    title: 'Cloud-First Architecture',
    subtitle: 'Seamless digital infrastructure powering next-generation applications',
  },
  {
    image: 'https://images.unsplash.com/photo-1545065695-64b67d551e68?w=1920&q=80',
    title: 'Digital Commerce Excellence',
    subtitle: 'Creating engaging customer experiences with advanced e-commerce solutions',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-[600px] sm:h-[650px] lg:h-[750px] overflow-hidden w-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Gradient Overlay - Mobile First */}
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-blue-900/70 sm:to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                    {slides[current].title}
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
                    {slides[current].subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold text-base px-6 sm:px-8 h-12 sm:h-14 shadow-2xl">
                        Get Started
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                    <a href="tel:+919811298451" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-base px-6 sm:px-8 h-12 sm:h-14 shadow-2xl transition-all">
                        <Phone className="mr-2" size={18} />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Hidden on mobile */}
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all items-center justify-center group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>
      <button
        onClick={next}
        className="hidden sm:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all items-center justify-center group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              idx === current ? 'w-8 sm:w-12 bg-white' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
