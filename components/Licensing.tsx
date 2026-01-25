
import React from 'react';
import { LICENSES } from '../constants';

interface LicensingProps {
  onSelectLicense: () => void;
}

const Licensing: React.FC<LicensingProps> = ({ onSelectLicense }) => {
  return (
    <section id="licensing" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-poppins">LICENSING OPTIONS</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transparent pricing designed to help artists at every level. Choose the license that fits your project needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LICENSES.map(license => (
            <div 
              key={license.id} 
              className={`glass-card rounded-3xl p-8 flex flex-col relative ${license.recommended ? 'border-purple-600/50 scale-105 z-10 neon-glow ring-1 ring-purple-600/20' : ''}`}
            >
              {license.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white font-poppins">{license.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-black text-white">${license.price}</span>
                  <span className="text-gray-500 text-sm">/ beat</span>
                </div>
              </div>
              
              <div className="flex-grow space-y-4 mb-10">
                {license.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={onSelectLicense}
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all ${license.recommended ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
              >
                Select License
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass-card rounded-2xl border-l-4 border-l-purple-600">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Custom Exclusives?</h4>
              <p className="text-gray-400 text-sm max-w-xl">
                Interested in owning the full exclusive rights to a beat? Exclusive purchases permanently remove the track from our store and grant you 100% ownership.
              </p>
            </div>
            <a href="#contact" className="inline-block px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-colors flex-shrink-0">
              Inquire Exclusives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
