
import React, { useState, useRef, useEffect } from 'react';
import { BEATS } from '../constants';
import { Beat } from '../types';

const BeatCard: React.FC<{ 
  beat: Beat; 
  activeBeatId: string | null; 
  onTogglePlay: (id: string) => void;
  progress: number;
}> = ({ beat, activeBeatId, onTogglePlay, progress }) => {
  const isActive = activeBeatId === beat.id;

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={beat.coverUrl} 
          alt={beat.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={() => onTogglePlay(beat.id)}
            className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform neon-glow"
          >
            {isActive ? (
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
        
        {/* Progress Overlay */}
        {isActive && (
          <div className="absolute bottom-0 left-0 h-1.5 bg-purple-500 transition-all duration-100" style={{ width: `${progress}%` }} />
        )}
        
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-white/10">
          {beat.bpm} BPM
        </div>
        <div className="absolute top-4 right-4 bg-purple-600 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded neon-glow">
          {beat.genre}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-poppins text-white">{beat.title}</h3>
          <span className="text-purple-400 font-black tracking-tight">${beat.price}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {beat.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold text-gray-500 border border-white/5 px-2 py-0.5 rounded">#{tag}</span>
          ))}
        </div>
        
        <button className="w-full bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-600 text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl transition-all flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
};

const BeatStore: React.FC = () => {
  const [activeBeatId, setActiveBeatId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const PREVIEW_LIMIT = 30; // 30 seconds limit

  const handleTogglePlay = (id: string) => {
    const selectedBeat = BEATS.find(b => b.id === id);
    if (!selectedBeat) return;

    if (activeBeatId === id) {
      // Toggle pause/play
      if (audioRef.current?.paused) {
        audioRef.current.play();
      } else {
        audioRef.current?.pause();
      }
    } else {
      // New beat
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setActiveBeatId(id);
      setProgress(0);
      
      const audio = new Audio(selectedBeat.audioUrl);
      audioRef.current = audio;
      audio.play();
      
      audio.ontimeupdate = () => {
        const current = audio.currentTime;
        if (current >= PREVIEW_LIMIT) {
          audio.pause();
          setActiveBeatId(null);
          setProgress(0);
          alert("Artist Preview Ended. Purchase the full license to unlock the complete high-quality track.");
        } else {
          setProgress((current / PREVIEW_LIMIT) * 100);
        }
      };

      audio.onended = () => {
        setActiveBeatId(null);
        setProgress(0);
      };
    }
  };

  return (
    <section id="beats" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-poppins">LATEST TRACKS</h2>
            <p className="text-gray-500 max-w-lg">
              Explore the freshest catalog of trap, drill, and hip-hop beats. Use the filters to find the perfect vibe for your next hit.
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-purple-600 px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">All Genres</button>
            <button className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">Trap</button>
            <button className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all">Drill</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEATS.map(beat => (
            <BeatCard 
              key={beat.id} 
              beat={beat} 
              activeBeatId={activeBeatId} 
              onTogglePlay={handleTogglePlay}
              progress={activeBeatId === beat.id ? progress : 0}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="inline-flex items-center space-x-2 text-purple-400 font-bold uppercase tracking-[0.2em] text-sm hover:text-purple-300 transition-colors group">
            <span>View All Beats</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeatStore;
