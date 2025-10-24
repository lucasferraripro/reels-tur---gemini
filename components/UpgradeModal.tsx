
import React from 'react';
import { XMarkIcon, CheckCircleIcon, StarIcon } from './icons/Icons';
import { PREMIUM_PRICE } from '../constants';

interface UpgradeModalProps {
  onClose: () => void;
  onUpgrade: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ onClose, onUpgrade }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 scale-95 animate-scale-in">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-br from-secondary to-accent-400 p-4 rounded-full shadow-lg">
            <StarIcon className="w-12 h-12 text-white"/>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white">Desbloqueie todo o Potencial!</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-3">Você atingiu o limite do plano gratuito. Faça o upgrade para acesso ilimitado e impulsione suas vendas.</p>
        </div>

        <ul className="mt-8 space-y-3 text-left">
          <li className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
            <span><span className="font-semibold">Acesso ilimitado</span> a todos os templates de vídeo.</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
            <span><span className="font-semibold">Gerações ilimitadas</span> de roteiros e vozes com IA.</span>
          </li>
           <li className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
            <span><span className="font-semibold">Edições ilimitadas</span> de imagens com IA.</span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
            <span>Novos templates <span className="font-semibold">toda semana.</span></span>
          </li>
        </ul>

        <div className="mt-8">
            <a 
                href="https://pay.hotmart.com" // Placeholder link for Hotmart checkout
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(onUpgrade, 500)} // Simulate upgrade after click
                className="w-full block text-center py-4 px-4 text-lg text-white font-bold bg-secondary rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 shadow-lg transform hover:scale-105"
            >
                Assinar por apenas R${PREMIUM_PRICE}/mês
            </a>
            <button onClick={onClose} className="w-full mt-3 text-sm text-gray-500 dark:text-gray-400 hover:underline">
                Continuar no plano grátis
            </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
