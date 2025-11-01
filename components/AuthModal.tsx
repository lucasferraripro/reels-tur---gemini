import React, { useState } from 'react';
import { XMarkIcon } from './icons/Icons';

interface AuthModalProps {
  onClose: () => void;
  onLogin: (email?: string, password?: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // For test mode, we can allow empty login for free user
    onLogin(email, password);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold font-display text-center text-gray-900 dark:text-white">Acesse sua Conta</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">Para continuar e liberar seus templates grátis.</p>
        
        <div className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
          <div>
            <label htmlFor="password"className="text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="********" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
            />
          </div>
        </div>

        <div className="mt-6">
          <button onClick={handleLoginClick} className="w-full py-3 px-4 text-white font-semibold bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300">
            Entrar
          </button>
        </div>
        
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Ou continue com</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            {/* Google Icon SVG */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 9.182C34.553 5.481 29.658 3 24 3C12.954 3 4 11.954 4 23s8.954 20 20 20s20-8.954 20-20c0-1.341-.138-2.65-.389-3.917z" />
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 11 24 11c3.059 0 5.842 1.154 7.961 3.039L38.802 9.182C34.553 5.481 29.658 3 24 3C16.318 3 9.656 6.915 6.306 12.691z" />
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.242 44 30.024 44 24c0-1.341-.138-2.65-.389-3.917z" />
            </svg>
            Entrar com Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;