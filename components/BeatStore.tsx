
import React, { useState, useRef, useEffect } from 'react';
import { BEATS } from '../constants';
import { Beat } from '../types';

const BeatCard: React.FC<{ 
  beat: Beat; 
  activeBeatId: string | null; 
  onTogglePlay: (id: string) => void;
  onAddToCart: (beat: Beat) => void;
  progress: number;
  isPaused: boolean;
}> = ({ beat, activeBeatId, onTogglePlay, onAddToCart, progress, isPaused }) => {
  const isActive = activeBeatId === beat.id;

  return (
    <div className="glass-card rounded-[32px] overflow-hidden group hover:border-purple-500/30 transition-all duration-500 border border-white/5">
      <div className="relative aspect-square overflow-hidden">
        {/* Fix: changed coverUrl to cover_url */}
        <img 
          src={beat.cover_url} 
          alt={beat.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px]">
          <button 
            onClick={() => onTogglePlay(beat.id)}
            className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform neon-glow"
          >
            {isActive && !isPaused ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        
        {isActive && (
          <div className="absolute bottom-0 left-0 h-2 bg-purple-500 transition-all duration-100 shadow-[0_-5px_15px_rgba(168,85,247,0.5)]" style={{ width: `${progress}%` }} />
        )}
        
        <div className="absolute top-6 left-6 flex space-x-2">
           <div className="bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border border-white/10">
            {beat.bpm} BPM
          </div>
          <div className="bg-purple-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl neon-glow">
            {beat.genre}
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black font-poppins text-white tracking-tight uppercase italic">{beat.title}</h3>
          <span className="text-xl font-black tracking-tight text-white">${beat.price}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {beat.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 border border-white/10 px-3 py-1 rounded-full">#{tag}</span>
          ))}
        </div>
        
        <button 
          onClick={() => onAddToCart(beat)}
          className="w-full bg-white/5 hover:bg-white text-gray-400 hover:text-black font-black uppercase tracking-[0.2em] text-[10px] py-4 rounded-2xl transition-all flex items-center justify-center space-x-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

interface BeatStoreProps {
  onAddToCart: (beat: Beat) => void;
}

const BeatStore: React.FC<BeatStoreProps> = ({ onAddToCart }) => {
  const [activeBeatId, setActiveBeatId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState('All');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const PREVIEW_LIMIT = 30;

  const handleTogglePlay = async (id: string) => {
    const selectedBeat = BEATS.find(b => b.id === id);
    if (!selectedBeat) return;

    if (activeBeatId === id) {
      if (audioRef.current?.paused) {
        try {
          playPromiseRef.current = audioRef.current.play();
          await playPromiseRef.current;
          setIsPaused(false);
        } catch (e) { console.debug(e); }
      } else {
        audioRef.current?.pause();
        setIsPaused(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      setActiveBeatId(id);
      setIsPaused(false);
      setProgress(0);
      
      // Fix: changed audioUrl to audio_url
      const audio = new Audio(selectedBeat.audio_url);
      audioRef.current = audio;
      
      audio.ontimeupdate = () => {
        if (!audioRef.current) return;
        const current = audioRef.current.currentTime;
        if (current >= PREVIEW_LIMIT) {
          audioRef.current.pause();
          setActiveBeatId(null);
        } else {
          setProgress((current / PREVIEW_LIMIT) * 100);
        }
      };

      try {
        playPromiseRef.current = audio.play();
        await playPromiseRef.current;
      } catch (e) { console.debug(e); }
    }
  };

  const filteredBeats = filter === 'All' ? BEATS : BEATS.filter(b => b.genre === filter);

  return (
    <section id="beats" className="py-40 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-xl">
            <h2 className="text-6xl font-black mb-6 font-poppins text-white uppercase tracking-tighter italic leading-none">The Vault</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Premium licenses for chart-topping artists. Each beat is mixed and mastered using industry-standard hardware. Secure your next hit instantly.
            </p>
          </div>
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5">
            {['All', 'Trap', 'Drill', 'Hip-Hop'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${filter === f ? 'bg-purple-600 text-white shadow-xl' : 'text-gray-500 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBeats.map(beat => (
            <BeatCard 
              key={beat.id} 
              beat={beat} 
              activeBeatId={activeBeatId} 
              isPaused={isPaused}
              onTogglePlay={handleTogglePlay}
              onAddToCart={onAddToCart}
              progress={activeBeatId === beat.id ? progress : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeatStore;
