import React, { useState, useEffect } from 'react';

/**
 * Header Component
 * Provides sticky navigation with mobile responsive menu logic.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hook to manually call Lucide icon rendering after state update (for menu icon change)
  useEffect(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, [isMenuOpen]);
  
  const navItems = ['Services', 'Our Products', 'About Us', 'Contact'];

  return (
    <header className="relative z-50 bg-black/90 backdrop-blur-sm shadow-lg sticky top-0 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-tight text-white">
          <span className="text-[var(--secondary-accent)]">Stellar</span>Code
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-lg font-medium hover:text-[var(--secondary-accent)] transition duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-button" 
          className="md:hidden p-2 text-white hover:text-[var(--secondary-accent)] transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i data-lucide={isMenuOpen ? 'x' : 'menu'} className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav 
        id="mobile-menu" 
        className={`md:hidden bg-black/95 backdrop-blur-sm absolute w-full z-40 border-t border-gray-800 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="p-4 space-y-3 flex flex-col">
          {navItems.map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-lg font-medium hover:bg-gray-900 p-2 rounded-md transition duration-150"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;