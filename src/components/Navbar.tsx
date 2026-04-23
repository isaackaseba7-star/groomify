import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white">
          GROOMIFY<span className="text-gold-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-zinc-300 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-colors text-sm uppercase tracking-widest"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest text-zinc-300 hover:text-gold-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-gold-500 text-black text-sm font-semibold uppercase tracking-widest mt-4"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </header>
  );
}
