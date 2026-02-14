
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
import OrderHistory from './components/OrderHistory';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import { supabase } from './supabase';
import { Beat, CartItem, UserRole } from './types';

export type AppView = 'HOME' | 'ADMIN' | 'ORDERS' | 'REGISTER' | 'FORGOT_PASSWORD';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('HOME');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('CUSTOMER');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await handleSession(session);
      }
      setIsInitializing(false);
    };
    
    initializeApp();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        await handleSession(session);
      } else if (event === 'SIGNED_OUT') {
        clearSession();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSession = async (session: any) => {
    setIsLoggedIn(true);
    setUserEmail(session.user.email);
    
    // Fetch user profile from public.profiles table to get the ROLE
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
      
      if (profile && !error) {
        setUserRole(profile.role as UserRole);
      }
    } catch (err) {
      // Profile might not exist yet if trigger is still firing
      setUserRole('CUSTOMER');
    }
  };

  const clearSession = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    setUserRole('CUSTOMER');
    setView('HOME');
    setCart([]);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const addToCart = (beat: Beat) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === beat.id);
      if (existing) {
        return prev.map(item => item.id === beat.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...beat, licenseType: 'Basic MP3', quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const renderContent = () => {
    switch(view) {
      case 'ADMIN': return userRole === 'ADMIN' ? <AdminDashboard /> : <Hero onOpenAuth={() => setIsAuthModalOpen(true)} onOpenRegister={() => setView('REGISTER')} />;
      case 'ORDERS': return <OrderHistory />;
      case 'REGISTER': return <RegisterPage onBack={() => setView('HOME')} />;
      case 'FORGOT_PASSWORD': return <ForgotPasswordPage onBack={() => setView('HOME')} />;
      default: return (
        <>
          <Hero onOpenAuth={() => setIsAuthModalOpen(true)} onOpenRegister={() => setView('REGISTER')} />
          <BeatStore onAddToCart={addToCart} />
          <Licensing onSelectLicense={() => setView('HOME')} />
          <About />
          <Contact />
        </>
      );
    }
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
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        setView={setView}
        currentView={view}
      />
      
      <main className="transition-all duration-500">
        {renderContent()}
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onForgotPassword={() => { setIsAuthModalOpen(false); setView('FORGOT_PASSWORD'); }}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onClearCart={() => setCart([])}
      />
    </div>
  );
};

export default App;
