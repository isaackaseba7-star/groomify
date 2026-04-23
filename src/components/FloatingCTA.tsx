import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gold-500 text-black px-6 py-4 rounded-full shadow-2xl shadow-gold-500/20 hover:bg-gold-400 hover:scale-105 transition-all outline outline-4 outline-black/50 overflow-hidden group"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1s_ease-in-out]" />
          <CalendarDays className="w-5 h-5" />
          <span className="font-semibold uppercase tracking-widest text-xs hidden sm:block">Book Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
