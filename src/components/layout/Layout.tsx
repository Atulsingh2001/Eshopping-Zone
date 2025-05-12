import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Cart Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="/cart" 
          className="flex items-center justify-center h-14 w-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

export default Layout;