import React from 'react';
import Navbar from './components/Navbar'
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main>
        <WhyChoose />
        <Testimonials />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;