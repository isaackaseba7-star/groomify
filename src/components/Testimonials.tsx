import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Kelvin was extremely detailed and attentive... Best haircut I've had in Lusaka, hands down. Highly recommended for professionals.",
    author: "Mabvuto C.",
    rating: 5
  },
  {
    text: "You can never go wrong with Groomify. The atmosphere is top tier, the fades are clean, and the service is exceptionally premium.",
    author: "David M.",
    rating: 5
  },
  {
    text: "Excellent service and house calls! They came straight to my office when I couldn't make it to the shop. Very reliable.",
    author: "Elias B.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            What They Say
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/5 bg-black"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-gold-500 text-gold-500' : 'text-zinc-700'}`} 
                  />
                ))}
              </div>
              <p className="text-zinc-400 italic text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="text-white font-serif text-lg tracking-wide border-t border-white/10 pt-4">
                — {review.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
