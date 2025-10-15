import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] min-h-screen w-screen flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10">
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 text-[var(--secondary-accent)]">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {isLogin ? (
            <>
              <div>
                <label className="block text-gray-300 mb-2">Email / Mobile</label>
                <input type="text" className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white transition" placeholder="Enter email or mobile" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white transition pr-12" placeholder="Enter password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition">
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button type="button" className="text-sm text-gray-400 hover:text-[var(--secondary-accent)] transition">Forgot Password?</button>
              </div>
              <button type="submit" className="w-full bg-[var(--secondary-accent)] text-white font-bold py-3 rounded-lg hover:bg-violet-700 transition">
                Login
              </button>
              <p className="text-center text-gray-400 text-sm">
                Don't have an account? <button type="button" onClick={() => setIsLogin(false)} className="text-[var(--secondary-accent)] hover:underline text-base font-semibold">Sign Up</button>
              </p>
            </>
          ) : (
            <>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white transition" placeholder="Enter email" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Mobile</label>
                <input type="tel" className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white transition" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white transition pr-12" placeholder="Enter password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition">
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Re-enter Password</label>
                <div className="relative">
                  <input type={showRePassword ? "text" : "password"} className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-[var(--secondary-accent)] focus:ring-1 focus:ring-[var(--secondary-accent)] text-white transition pr-12" placeholder="Re-enter password" />
                  <button type="button" onClick={() => setShowRePassword(!showRePassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition">
                    <i className={`fa-solid ${showRePassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-[var(--secondary-accent)] text-white font-bold py-3 rounded-lg hover:bg-violet-700 transition">
                Sign Up
              </button>
              <p className="text-center text-gray-400 text-sm">
                Already have an account? <button type="button" onClick={() => setIsLogin(true)} className="text-[var(--secondary-accent)] hover:underline text-base font-semibold">Login</button>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
