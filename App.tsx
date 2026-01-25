
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeatStore from './components/BeatStore';
import Licensing from './components/Licensing';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import PaymentModal from './components/PaymentModal';
import { Beat } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('fb_user_email');
    if (savedEmail) {
      setIsLoggedIn(true);
      setUserEmail(savedEmail);
    }
  }, []);

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('fb_user_email', email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    localStorage.removeItem('fb_user_email');
  };

  const handleOpenPayment = (beat: Beat) => {
    setSelectedBeat(beat);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userEmail={userEmail} 
        onLogout={handleLogout} 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
      />
      <main>
        <Hero />
        <BeatStore 
          isLoggedIn={isLoggedIn} 
          onOpenAuth={() => setIsAuthModalOpen(true)} 
          onOpenPayment={handleOpenPayment}
        />
        <HowItWorks />
        <Licensing />
        <About />
        <Contact />
      </main>
      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin} 
      />
      
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
        beat={selectedBeat}
      />
    </div>
  );
};

export default App;
