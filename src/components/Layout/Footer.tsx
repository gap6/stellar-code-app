import React from 'react';

/**
 * Footer Component
 * Displays copyright and social media links in the dark, professional style.
 */
const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black text-gray-400 py-12 px-4 mt-auto border-t border-gray-800">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold mb-4">
          <span className="text-[var(--secondary-accent)]">Stellar</span>Code
        </div>
        
        {/* Copyright */}
        <p className="mb-6">&copy; 2025 StellarCode. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" aria-label="Twitter" className="hover:text-[var(--secondary-accent)] transition">
            <i className="fa-brands fa-x-twitter w-6 h-6"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[var(--secondary-accent)] transition">
            <i className="fa-brands fa-linkedin-in w-6 h-6"></i>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-[var(--secondary-accent)] transition">
            <i className="fa-brands fa-github w-6 h-6"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[var(--secondary-accent)] transition">
            <i className="fa-brands fa-instagram w-6 h-6"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;