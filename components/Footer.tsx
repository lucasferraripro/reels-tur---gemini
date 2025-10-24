
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Reels Tur. Todos os direitos reservados.</p>
        <p className="mt-1">Uma ferramenta para impulsionar agências de viagem.</p>
      </div>
    </footer>
  );
};

export default Footer;
