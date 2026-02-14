
import React, { useState, useEffect } from 'react';
import { UserRole } from '../types';

interface NavbarProps {
  isLoggedIn: boolean;
  userEmail: string | null;
  userRole: UserRole;
  onLogout: () => void;
  onOpenAuth: () => void;
  onOpenCart: () => void;
  cartCount: number;
  setView: (view: 'HOME' | 'ADMIN') => void;
  currentView: 'HOME' | 'ADMIN';
}

const Navbar: React.FC<NavbarProps> = ({ 
  isLoggedIn, userEmail, userRole, onLogout, onOpenAuth, onOpenCart, cartCount, setView, currentView 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <button onClick={() => setView('HOME')} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center font-bold text-xl neon-glow">F</div>
            <span className="text-2xl font-black tracking-tighter text-white font-poppins">FRANCOBEATZ</span>
          </button>
          
          <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#beats" className="hover:text-purple-500 transition-colors">Catalog</a>
            <a href="#licensing" className="hover:text-purple-500 transition-colors">Pricing</a>
            {userRole === 'ADMIN' && (
              <button 
                onClick={() => setView(currentView === 'ADMIN' ? 'HOME' : 'ADMIN')}
                className={`transition-colors flex items-center space-x-2 ${currentView === 'ADMIN' ? 'text-purple-500' : 'text-orange-400 hover:text-orange-300'}`}
              >
                <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                <span>{currentView === 'ADMIN' ? 'Exit Admin' : 'Admin Hub'}</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-[10px] font-bold text-gray-500 uppercase tracking-widest">{userEmail?.split('@')[0]}</span>
              <button 
                onClick={onLogout}
                className="text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all"
            >
              Log In
            </button>
          )}
          
          <button 
            onClick={onOpenCart}
            className="relative bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-xl hover:bg-purple-700 transition-all neon-glow flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-[10px] font-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
