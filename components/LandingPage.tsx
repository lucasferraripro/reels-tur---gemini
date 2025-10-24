
import React from 'react';
import { CheckCircleIcon } from './icons/Icons';

interface LandingPageProps {
  onStartFreeTrial: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartFreeTrial }) => {
  return (
    <div className="w-full">
      <section className="relative text-white py-20 sm:py-32 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/travel-background/1920/1080')"}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight">
            Crie Reels de Viagem que <span className="text-secondary">Vendem</span> em Minutos
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-primary-200">
            Transforme sua agência com vídeos prontos, roteiros persuasivos e narrações com IA. Chega de perder tempo, comece a postar e vender hoje mesmo.
          </p>
          <button 
            onClick={onStartFreeTrial} 
            className="mt-10 px-10 py-4 text-lg font-bold text-gray-900 bg-secondary rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Teste Grátis por 7 Dias
          </button>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Por que agências de viagem amam o Reels Tur?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Tudo que você precisa para decolar nas redes sociais.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <CheckCircleIcon className="w-10 h-10 text-primary-500" />
              <h3 className="mt-4 text-xl font-bold font-display text-gray-900 dark:text-white">Templates Prontos</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Vídeos editáveis no Canva com um clique. Basta adicionar seu logo e postar!</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <CheckCircleIcon className="w-10 h-10 text-primary-500" />
              <h3 className="mt-4 text-xl font-bold font-display text-gray-900 dark:text-white">Roteiros com IA</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Gere scripts de venda baseados no método AIDA para qualquer destino.</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <CheckCircleIcon className="w-10 h-10 text-primary-500" />
              <h3 className="mt-4 text-xl font-bold font-display text-gray-900 dark:text-white">Vozes com IA (TTS)</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Crie narrações profissionais para seus vídeos sem precisar de um microfone.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
