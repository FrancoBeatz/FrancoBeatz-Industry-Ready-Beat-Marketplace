
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeatStore from './components/BeatStore';
import Licensing from './components/Licensing';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BeatStore />
        <HowItWorks />
        <Licensing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
