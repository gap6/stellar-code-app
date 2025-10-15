import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, [isMenuOpen]);
  
  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Our Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="relative z-50 bg-black/90 backdrop-blur-sm shadow-lg sticky top-0 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-white">
          <span className="text-[var(--secondary-accent)]">Stellar</span>Code
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-lg font-medium hover:text-[var(--secondary-accent)] transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden p-2 text-white hover:text-[var(--secondary-accent)] transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i data-lucide={isMenuOpen ? 'x' : 'menu'} className="w-7 h-7" />
        </button>
      </div>

      <nav className={`md:hidden bg-black/95 backdrop-blur-sm absolute w-full z-40 border-t border-gray-800 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="p-4 space-y-3 flex flex-col">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-lg font-medium hover:bg-gray-900 p-2 rounded-md transition duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
