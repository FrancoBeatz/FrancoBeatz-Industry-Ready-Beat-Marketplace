
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-purple-600 rounded-[40px] rotate-6 scale-95 opacity-20 blur-2xl"></div>
            <img 
              src="https://picsum.photos/seed/producer/800/1000" 
              alt="FrancoBeatz in Studio" 
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-[40px] border border-white/5"
            />
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-purple-600 p-8 rounded-3xl z-20 neon-glow hidden sm:block">
              <div className="text-4xl font-black text-white mb-1 tracking-tighter">10+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Years Exp</div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-poppins uppercase tracking-tighter">
              BEYOND JUST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">THE DRUMS</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              I am FrancoBeatz, a multi-platinum inspired music producer based in the heart of the underground scene. My mission is simple: to provide independent artists with the sonic foundation they need to stand out in a crowded industry.
            </p>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              With a focus on dark textures, heavy-hitting 808s, and ethereal melodies, my sounds have been featured in major Spotify playlists and independent chart-toppers. I don't just sell beats; I help build careers.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest text-purple-400">Philosophy</h4>
                <p className="text-gray-500 text-sm">Quality over quantity, every single snare counts.</p>
              </div>
              <div className="p-6 glass-card rounded-2xl">
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest text-purple-400">Support</h4>
                <p className="text-gray-500 text-sm">Direct access for artists who buy unlimited/stems.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
               <img src="https://picsum.photos/seed/sig/150/60" alt="Signature" className="invert brightness-200 h-10 opacity-60" />
               <div className="h-px w-20 bg-white/10"></div>
               <span className="text-sm font-bold uppercase tracking-widest text-gray-500">FrancoBeatz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
