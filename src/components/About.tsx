import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Barber grooming a client" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-8 -right-8 w-2/3 aspect-square border-8 border-black overflow-hidden hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Barber tools" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Story
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-semibold mb-8 text-white leading-tight"
          >
            The ultimate <br/><span className="italic font-light text-zinc-400">lifestyle grooming brand.</span>
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-zinc-400 leading-relaxed"
          >
            <p>
              Located right next to Melissa at the Tukunka Shopping Mall in Lusaka, Groomify is not just a barbershop. It's an experience crafted for the modern man. We focus on confidence, style, and absolute convenience.
            </p>
            <p>
              Helmed by Master Barber Kelvin and our team of skilled professionals, we pride ourselves on an uncompromising attention to detail. From sharp fades to impeccable beard sculpting, every service is tailored to ensure you walk out feeling exceptional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 pt-10 border-t border-white/5 flex gap-12"
          >
             <div>
                <span className="block text-4xl font-serif text-white mb-2">
                  <AnimatedCounter target={5} suffix="+" />
                </span>
                <span className="text-xs uppercase tracking-widest text-gold-500">Years Experience</span>
             </div>
             <div>
                <span className="block text-4xl font-serif text-white mb-2">
                  <AnimatedCounter target={10} suffix="k+" />
                </span>
                <span className="text-xs uppercase tracking-widest text-gold-500">Cuts Done</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
