import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]"> {/* Account for fixed navbar */}
        <Hero />
        <FeaturedProducts />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;