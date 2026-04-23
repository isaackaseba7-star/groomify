import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4ba78a81c409?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-semibold text-white"
          >
            The Cuts
          </motion.h3>
        </div>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm max-w-sm"
        >
            A look at our meticulous craft and the contemporary styles we create.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`relative group overflow-hidden ${idx === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <div className={`w-full ${idx === 1 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}>
              <img 
                src={src} 
                alt={`Barbershop portfolio ${idx + 1}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
