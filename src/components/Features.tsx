import { motion } from 'motion/react';
import { Star, MapPin, SearchCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: '4.7★ Rated',
    text: 'Consistently highly reviewed by our clients across Google.',
  },
  {
    icon: SearchCheck,
    title: 'Detail-Oriented',
    text: 'Highly skilled barbers with an insane attention to detail.',
  },
  {
    icon: Clock,
    title: 'House Calls',
    text: 'We bring the premium experience to your doorstep.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    text: 'Located at Tukunka Mall, Chindo Rd, with ample parking.',
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full border border-gold-500/30 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-serif text-xl mb-3">{feature.title}</h4>
              <p className="text-zinc-500 text-sm max-w-[200px] mx-auto">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
