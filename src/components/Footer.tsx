import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
           <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white inline-block mb-6">
            GROOMIFY<span className="text-gold-500">.</span>
          </a>
          <p className="text-zinc-500 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm mb-6">
            A premium grooming brand in Lusaka. Look sharp, feel confident, and experience the ultimate standard of service.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:border-gold-500 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif mb-6 uppercase tracking-widest text-sm">Links</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="text-zinc-500 hover:text-gold-500 text-sm transition-colors text-sm uppercase tracking-widest">About</a></li>
            <li><a href="#services" className="text-zinc-500 hover:text-gold-500 text-sm transition-colors text-sm uppercase tracking-widest">Services</a></li>
            <li><a href="#gallery" className="text-zinc-500 hover:text-gold-500 text-sm transition-colors text-sm uppercase tracking-widest">Gallery</a></li>
            <li><a href="#booking" className="text-zinc-500 hover:text-gold-500 text-sm transition-colors text-sm uppercase tracking-widest">Book</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-serif mb-6 uppercase tracking-widest text-sm">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors text-sm">Terms of Service</a></li>
            <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors text-sm">Website: groomify.barber.co.zm</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Groomify Barbershop. All Rights Reserved.
        </p>
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          Designed for style.
        </p>
      </div>
    </footer>
  );
}
