import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-6"
        >
          Premium Grooming in Lusaka
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]"
        >
          Look Sharp.<br />
          <span className="italic font-light text-zinc-300">Feel Confident.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Elevate your style with Tukunka's finest. More than a haircut seamlessly blending classic techniques with modern sophistication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black tracking-widest uppercase text-sm font-semibold transition-colors"
          >
            Book Appointment
          </a>
          <a
            href="tel:+260973316555"
            className="w-full sm:w-auto px-8 py-4 border border-zinc-500 hover:border-gold-500 text-white hover:text-gold-500 tracking-widest uppercase text-sm font-semibold transition-colors"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
