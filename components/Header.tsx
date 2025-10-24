
import React from 'react';
import { User, Plan } from '../types';
import { SunIcon, MoonIcon, StarIcon } from './icons/Icons';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onUpgradeClick: () => void;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onLogoutClick, onUpgradeClick, toggleTheme, theme, user }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-black text-primary-600 dark:text-primary-400">Reels Tur</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
            {isLoggedIn && user ? (
              <div className="flex items-center space-x-4">
                 {user.plan === Plan.Free && (
                    <button onClick={onUpgradeClick} className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-accent-500 rounded-full shadow-sm hover:bg-accent-600 transition duration-200 animate-pulse">
                        <StarIcon className="w-5 h-5 mr-2"/>
                        Fazer Upgrade
                    </button>
                 )}
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 hidden sm:block">{user.email}</span>
                <button onClick={onLogoutClick} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                  Sair
                </button>
              </div>
            ) : (
              <button onClick={onLoginClick} className="px-6 py-2 text-sm font-semibold text-white bg-primary-600 rounded-full shadow-sm hover:bg-primary-700 transition duration-200">
                Entrar
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
