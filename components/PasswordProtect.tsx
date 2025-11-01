import React, { useState } from 'react';
import { LockClosedIcon } from './icons/Icons';

interface PasswordProtectProps {
  onAuthSuccess: () => void;
}

// A senha pode ser alterada aqui.
const CORRECT_PASSWORD = 'REELSTURPREMIUM2024';

const PasswordProtect: React.FC<PasswordProtectProps> = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setError('');
      onAuthSuccess();
    } else {
      setError('Senha incorreta. Verifique a senha na sua área de membros.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md m-4">
        <div className="text-center">
            <LockClosedIcon className="w-12 h-12 mx-auto text-primary-500" />
            <h1 className="text-2xl font-bold font-display text-gray-900 dark:text-white mt-4">Área de Membros</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
                Insira a senha de acesso fornecida na sua área de membros da Hotmart para continuar.
            </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Sua senha de acesso"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Entrar
            </button>
          </div>
        </form>
         <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            Não tem uma senha? <a href="https://pay.hotmart.com/S102575817L?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 hover:text-primary-500">Clique aqui para assinar</a>.
        </p>
      </div>
    </div>
  );
};

export default PasswordProtect;