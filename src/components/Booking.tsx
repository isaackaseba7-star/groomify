import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircut',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Groomify! I would like to book an appointment.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}`;
    window.open(`https://wa.me/260973316555?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-black border border-white/10 p-8 md:p-16">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-4"
            >
              Reservation
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl font-semibold text-white"
            >
              Book Your Cut Now
            </motion.h3>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="+260 9X XXX XXXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Select Service</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-charcoal-900 border border-white/20 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
              >
                <option value="Haircut">Signature Haircut</option>
                <option value="Fade">Fade Cut</option>
                <option value="Beard">Beard Grooming</option>
                <option value="Executive">Executive Styling</option>
                <option value="Kids">Kids Haircut</option>
                <option value="House Call">Request House Call</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Date</label>
                <input 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Time</label>
                <input 
                  type="time" 
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-black py-4 font-semibold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2"
              >
                Book via WhatsApp
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
