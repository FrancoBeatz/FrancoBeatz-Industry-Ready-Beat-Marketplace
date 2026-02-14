
import React, { useState } from 'react';
import { Beat } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  beat: Beat | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, beat }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !beat) return null;

  const handleConfirm = () => {
    setIsSuccess(true);
    // Simulate email confirmation
    console.log(`Confirmation sent to producer: mojapelot2@gmail.com for beat: ${beat.title}`);
  };

  const handleFinalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="glass-card w-full max-w-md rounded-3xl p-10 border border-purple-500/30 text-center">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4 font-poppins text-white uppercase italic">TRANSFER NOTIFIED</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Thank you! We've simulated sending your proof of payment request to <span className="text-purple-400 font-bold">mojapelot2@gmail.com</span>. 
            <br /><br />
            Once FrancoBeatz verifies the transfer of <span className="text-white font-bold">${beat.price}</span>, your untagged files for <span className="text-white font-bold">"{beat.title}"</span> will be delivered to your inbox.
          </p>
          <button 
            onClick={handleFinalClose}
            className="w-full py-4 bg-purple-600 text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-purple-700 transition-all neon-glow"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass-card w-full max-w-lg rounded-3xl p-8 border border-purple-500/30 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center space-x-4 mb-8">
          {/* Fix: changed coverUrl to cover_url */}
          <img src={beat.cover_url} className="w-20 h-20 rounded-xl object-cover" alt={beat.title} />
          <div>
            <h3 className="text-2xl font-black font-poppins text-white uppercase">{beat.title}</h3>
            <p className="text-purple-400 font-bold">${beat.price} - Industry Standard License</p>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">{beat.genre} | {beat.bpm} BPM</div>
          </div>
        </div>

        <h2 className="text-xl font-black mb-4 font-poppins text-white uppercase italic">SECURE BANK TRANSFER</h2>
        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="text-xs uppercase font-bold text-gray-500 tracking-widest">Account Holder</span>
            <span className="text-sm font-medium text-white">Thabang Frans Mojapelo</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="text-xs uppercase font-bold text-gray-500 tracking-widest">Bank Name</span>
            <span className="text-sm font-medium text-white">Capitec</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="text-xs uppercase font-bold text-gray-500 tracking-widest">Account Number</span>
            <span className="text-sm font-black text-purple-400 tracking-widest">1691654432</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase font-bold text-gray-500 tracking-widest">Account Type</span>
            <span className="text-sm font-medium text-white">Savings</span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-purple-600/10 border border-purple-500/20 rounded-xl">
          <p className="text-xs text-purple-200 leading-relaxed text-center">
            <span className="font-bold uppercase tracking-widest block mb-1 text-purple-400">Payment Reference</span>
            Use <strong>"{beat.title}"</strong> as reference. After transfer, send proof to <strong>mojapelot2@gmail.com</strong>.
          </p>
        </div>

        <button 
          onClick={handleConfirm}
          className="w-full mt-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-gray-200 transition-all font-poppins"
        >
          I've Made The Transfer
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
