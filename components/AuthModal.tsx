
import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLogin(email);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass-card w-full max-w-md rounded-3xl p-8 border border-purple-500/30 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-black mb-2 font-poppins text-center">
          {isRegister ? 'JOIN THE CIRCLE' : 'WELCOME BACK'}
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          {isRegister ? 'Create an account to purchase and download beats.' : 'Login to access your purchased tracks.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2 block mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="artist@example.com" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2 block mb-1">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-colors"
            />
          </div>

          <button type="submit" className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all neon-glow mt-4">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsRegister(!isRegister)}
            className="text-gray-400 hover:text-purple-400 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
