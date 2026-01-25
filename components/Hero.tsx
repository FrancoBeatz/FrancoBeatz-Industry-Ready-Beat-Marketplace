
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full">
          <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">Premium Sound Design</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 font-poppins leading-tight tracking-tight">
          INDUSTRY-READY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">TRAP & HIP-HOP</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
          Unlock your true potential with beats engineered for the charts. Used by top independent artists worldwide. High-quality stems, instant delivery, and fair licensing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#beats" className="w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all neon-glow flex items-center justify-center group uppercase tracking-widest text-sm">
            Listen to Beats
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#licensing" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-xl transition-all uppercase tracking-widest text-sm">
            View Pricing
          </a>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
          <div>
            <div className="text-3xl font-black text-white mb-1">500+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Beats Sold</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-1">2M+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Streams</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-1">150+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Happy Artists</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-1">24/7</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Delivery</div>
          </div>
        </div>
      </div>
      
      {/* Decorative waveform image placeholder */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#8b5cf6" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
