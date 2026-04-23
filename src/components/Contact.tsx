import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl font-semibold text-white mb-10"
            >
              Visit Our Shop
            </motion.h3>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Location</h4>
                  <p className="text-zinc-400">Right next to Melissa,<br/>Tukunka Shopping Mall,<br/>45 Chindo Rd, Lusaka, Zambia</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Phone</h4>
                  <p className="text-zinc-400">
                    <a href="tel:+260973316555" className="hover:text-gold-500 transition-colors">+260 97 3316555</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Hours</h4>
                  <p className="text-zinc-400">Mon - Sat: 8:00 AM - 7:00 PM<br/>Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
               <a 
                 href="https://maps.google.com/?q=Tukunka+Shopping+Mall+Lusaka" 
                 target="_blank" rel="noreferrer"
                 className="inline-block px-8 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black uppercase tracking-widest text-sm font-semibold transition-colors"
               >
                 Get Directions
               </a>
            </motion.div>
          </div>

          {/* Map Image/Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[400px] md:h-full min-h-[400px] bg-charcoal-900 border border-white/5 relative grayscale hover:grayscale-0 transition-all duration-500"
          >
             <iframe
              title="Groomify Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.674996412196!2d28.322!3d-15.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI1JzE5LjIiUyAyOMKwMTknMTkuMiJF!5e0!3m2!1sen!2szm!4v1620000000000!5m2!1sen!2szm"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
