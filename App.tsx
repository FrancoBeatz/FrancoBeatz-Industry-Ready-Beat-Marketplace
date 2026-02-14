
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeatStore from './components/BeatStore';
import AdminDashboard from './components/AdminDashboard';
import CartDrawer from './components/CartDrawer';
import Licensing from './components/Licensing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Beat, CartItem, UserRole } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'HOME' | 'ADMIN'>('HOME');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('CUSTOMER');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('fb_user_email');
    if (savedEmail) {
      setIsLoggedIn(true);
      setUserEmail(savedEmail);
      // Hardcoded admin check for demo purposes
      if (savedEmail.includes('admin')) setUserRole('ADMIN');
    }
  }, []);

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('fb_user_email', email);
    if (email.includes('admin')) setUserRole('ADMIN');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    setUserRole('CUSTOMER');
    localStorage.removeItem('fb_user_email');
    setView('HOME');
  };

  const addToCart = (beat: Beat) => {
    const newItem: CartItem = { ...beat, licenseType: 'Basic MP3' };
    setCart([...cart, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userEmail={userEmail} 
        userRole={userRole}
        onLogout={handleLogout} 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cart.length}
        setView={setView}
        currentView={view}
      />
      
      <main className="transition-all duration-500">
        {view === 'HOME' ? (
          <>
            <Hero />
            <BeatStore onAddToCart={addToCart} />
            <Licensing onSelectLicense={() => setView('HOME')} />
            <About />
            <Contact />
          </>
        ) : (
          <AdminDashboard />
        )}
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin} 
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
