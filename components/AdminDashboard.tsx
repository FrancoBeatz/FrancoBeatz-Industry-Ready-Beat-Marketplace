
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BEATS } from '../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'INVENTORY' | 'SALES' | 'UPLOAD'>('INVENTORY');
  const [aiLoading, setAiLoading] = useState(false);
  const [generatedDesc, setGeneratedDesc] = useState('');

  const generateDescription = async (title: string, genre: string) => {
    setAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Write a high-energy, SEO-optimized product description for a ${genre} beat titled "${title}". Focus on its vibes, potential as a hit, and technical quality. Keep it under 50 words.`,
      });
      // Correctly access .text property from GenerateContentResponse
      setGeneratedDesc(response.text || '');
    } catch (e) {
      console.error(e);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-5xl font-black font-poppins uppercase tracking-tighter italic mb-2">Producer Hub</h1>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">System Admin & Inventory Control</p>
        </div>
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5">
          <button 
            onClick={() => setActiveTab('INVENTORY')}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'INVENTORY' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
          >
            Inventory
          </button>
          <button 
            onClick={() => setActiveTab('SALES')}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'SALES' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
          >
            Sales
          </button>
          <button 
            onClick={() => setActiveTab('UPLOAD')}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'UPLOAD' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
          >
            Upload
          </button>
        </div>
      </div>

      {activeTab === 'INVENTORY' && (
        <div className="glass-card rounded-[32px] overflow-hidden border border-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/2">
                <th className="p-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Beat</th>
                <th className="p-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Status</th>
                <th className="p-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Price</th>
                <th className="p-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {BEATS.map((beat) => (
                <tr key={beat.id} className="hover:bg-white/2 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Fix: changed coverUrl to cover_url */}
                      <img src={beat.cover_url} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <div className="font-bold text-white">{beat.title}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{beat.genre} • {beat.bpm} BPM</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black rounded-full uppercase tracking-widest">Live</span>
                  </td>
                  <td className="p-6 font-black text-purple-400">${beat.price}</td>
                  <td className="p-6">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </button>
                      <button className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'UPLOAD' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-[32px] p-8 space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tight italic">New Release Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Beat Title</label>
                <input id="new-title" type="text" placeholder="e.g. Nightfall" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Genre</label>
                <select id="new-genre" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-600 outline-none">
                  <option>Trap</option>
                  <option>Hip-Hop</option>
                  <option>Drill</option>
                </select>
              </div>
            </div>
            <button 
              onClick={() => generateDescription(
                (document.getElementById('new-title') as HTMLInputElement).value,
                (document.getElementById('new-genre') as HTMLSelectElement).value
              )}
              className="w-full py-3 bg-purple-600/20 border border-purple-500/30 text-purple-400 font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-purple-600/30 transition-all flex items-center justify-center space-x-2"
            >
              {aiLoading ? (
                <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span>Generate Description with Gemini AI</span>
                </>
              )}
            </button>
            <textarea 
              value={generatedDesc}
              onChange={(e) => setGeneratedDesc(e.target.value)}
              rows={4} 
              placeholder="Beat description will appear here..."
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-purple-600 outline-none resize-none"
            />
          </div>
          
          <div className="glass-card rounded-[32px] p-8 flex flex-col items-center justify-center border-2 border-dashed border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Upload Master Audio</h4>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">WAV / MP3 (Max 50MB)</p>
          </div>
        </div>
      )}

      {activeTab === 'SALES' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Total Revenue', value: '$12,450.00', change: '+12% this month' },
            { label: 'Beats Sold', value: '154', change: '+5 this week' },
            { label: 'Active Licenses', value: '42', change: '80% conversion' }
          ].map((stat, i) => (stat &&
            <div key={i} className="glass-card rounded-[32px] p-8 border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-full -mr-8 -mt-8 blur-2xl"></div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">{stat.label}</div>
               <div className="text-4xl font-black text-white mb-2 font-poppins">{stat.value}</div>
               <div className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{stat.change}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
