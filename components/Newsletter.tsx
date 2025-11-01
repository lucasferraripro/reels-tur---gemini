import React from 'react';
import { PaperAirplaneIcon } from './icons/Icons';

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    alert(`Obrigado por se inscrever na nossa newsletter, ${email}!`);
    e.currentTarget.reset();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-20 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
            Newsletter de Negócios em Turismo
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Informações que colaboram e ajudam empresários e donos de agência de viagens a se manterem informados com novidades sobre passagens, passeios e o mercado de turismo.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            name="email"
            required
            placeholder="Seu melhor e-mail de negócios"
            className="w-full sm:flex-grow px-5 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            aria-label="Email para newsletter"
          />
          <button
            type="submit"
            className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-full shadow-sm hover:bg-primary-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span>Inscrever-se</span>
            <PaperAirplaneIcon className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
