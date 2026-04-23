import { motion } from 'motion/react';
import { Scissors, Sparkles, User, Baby, Home, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Signature Haircut',
    price: 'From K150',
    description: 'Precision cuts tailored to your head shape and personal style, finished with styling.'
  },
  {
    icon: Sparkles,
    title: 'Beard Grooming',
    price: 'From K80',
    description: 'Detailed beard trimming, shaping, and hot towel treatment to keep your facial hair flawless.'
  },
  {
    icon: User,
    title: 'Fade Cuts',
    price: 'From K180',
    description: 'Seamless fades from skin to high top, executed with immaculate detail.'
  },
  {
    icon: Baby,
    title: 'Kids Haircuts',
    price: 'From K100',
    description: 'Patient and careful styling for the younger gentlemen ensuring a comfortable experience.'
  },
  {
    icon: Home,
    title: 'House Calls',
    price: 'Custom',
    description: 'Premium grooming brought directly to your home, office, or hotel in Lusaka.'
  },
  {
    icon: Briefcase,
    title: 'Executive Styling',
    price: 'From K250',
    description: 'Full package: haircut, beard trim, wash, hot towel, and styling product application.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Menu
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            Our Services
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-black hover:border-gold-500/50 transition-colors duration-300"
            >
              <service.icon className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
              
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="text-xl font-serif text-white">{service.title}</h4>
                <span className="text-gold-500 text-sm font-mono tracking-widest">{service.price}</span>
              </div>
              
              <p className="text-zinc-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
