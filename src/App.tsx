/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
