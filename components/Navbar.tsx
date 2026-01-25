
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-xl neon-glow">F</div>
          <span className="text-2xl font-black tracking-tighter text-white font-poppins">FRANCOBEATZ</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-gray-300">
          <a href="#beats" className="hover:text-purple-500 transition-colors">Beats</a>
          <a href="#licensing" className="hover:text-purple-500 transition-colors">Licenses</a>
          <a href="#how-it-works" className="hover:text-purple-500 transition-colors">Process</a>
          <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-all">
            Login
          </button>
          <button className="bg-purple-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-purple-700 transition-all neon-glow">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
