
import React from 'react';
import { Beat } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  beat: Beat | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, beat }) => {
  if (!isOpen || !beat) return null;

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
          <img src={beat.coverUrl} className="w-20 h-20 rounded-xl object-cover" alt={beat.title} />
          <div>
            <h3 className="text-2xl font-black font-poppins text-white uppercase">{beat.title}</h3>
            <p className="text-purple-400 font-bold">${beat.price} - Basic License</p>
          </div>
        </div>

        <h2 className="text-xl font-black mb-4 font-poppins text-white">BANK TRANSFER DETAILS</h2>
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
            <span className="font-bold uppercase tracking-widest block mb-1 text-purple-400">Next Steps</span>
            Make the payment using the details above. Use the beat name <strong>"{beat.title}"</strong> as reference. Send proof of payment to <strong>mojapelot2@gmail.com</strong> to receive your untagged files instantly.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-gray-200 transition-all"
        >
          I've Made The Transfer
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
