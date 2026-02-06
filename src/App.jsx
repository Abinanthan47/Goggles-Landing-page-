import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import NewArravials from './components/Collections';
import ElementalSeries from './components/ElementalSeries';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      <NewArravials />
      <ElementalSeries />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default App;