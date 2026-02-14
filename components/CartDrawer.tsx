
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`fixed inset-0 z-[110] transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/5 shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black font-poppins uppercase tracking-tighter italic">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-6 pr-2 custom-scrollbar">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex space-x-4 p-4 glass-card rounded-2xl group">
                  <img src={item.cover_url} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-purple-400 font-bold mb-2">{item.licenseType}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-black">${item.price}</span>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-xs text-gray-500 hover:text-red-500 font-bold uppercase tracking-widest transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                <span className="text-2xl font-black">${total.toFixed(2)}</span>
              </div>
              <button className="w-full py-5 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-widest text-sm rounded-2xl transition-all neon-glow">
                Checkout with Stripe
              </button>
              <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest">
                Secure SSL encrypted checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
