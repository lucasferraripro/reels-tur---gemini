
import React, { useState } from 'react';
import { Template, User } from '../types';
import TemplateCard from './TemplateCard';
import { SparklesIcon, PhotoIcon, VideoCameraIcon } from './icons/Icons';

interface DashboardProps {
  user: User;
  templates: Template[];
  onTemplateClick: (template: Template) => void;
  onGenerateScriptClick: () => void;
  onImageEditorClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, templates, onTemplateClick, onGenerateScriptClick, onImageEditorClick }) => {
  const [filter, setFilter] = useState('all');

  const freeTemplates = templates.filter(t => t.isFree);
  const premiumTemplates = templates.filter(t => !t.isFree);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Bem-vindo(a), {user.email}!</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Sua central de criação de conteúdo de viagens.</p>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })} className="p-6 bg-primary-500 text-white rounded-lg shadow-lg hover:bg-primary-600 transition duration-300 text-left flex items-center space-x-4">
          <VideoCameraIcon className="w-10 h-10" />
          <div>
            <h3 className="text-xl font-bold font-display">Templates de Vídeo</h3>
            <p className="text-primary-200">Navegue por nossa biblioteca de Reels.</p>
          </div>
        </button>
         <button onClick={onGenerateScriptClick} className="p-6 bg-secondary text-white rounded-lg shadow-lg hover:bg-orange-500 transition duration-300 text-left flex items-center space-x-4">
            <SparklesIcon className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold font-display">Gerador de Roteiro e Voz</h3>
              <p className="opacity-80">Crie textos e áudios com IA.</p>
            </div>
        </button>
        <button onClick={onImageEditorClick} className="p-6 bg-accent-500 text-gray-900 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 text-left flex items-center space-x-4">
            <PhotoIcon className="w-10 h-10" />
            <div>
              <h3 className="text-xl font-bold font-display">Editor de Imagem IA</h3>
              <p className="opacity-80">Edite fotos com comandos de texto.</p>
            </div>
        </button>
      </div>

      <div id="templates" className="mt-12">
        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">Templates Grátis</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Comece com estes templates liberados no seu plano.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {freeTemplates.map(template => (
            <TemplateCard key={template.id} template={template} onClick={onTemplateClick} userPlan={user.plan} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">Templates Premium</h2>
         <p className="text-gray-600 dark:text-gray-400 mb-6">Faça upgrade para ter acesso a toda a biblioteca.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {premiumTemplates.map(template => (
            <TemplateCard key={template.id} template={template} onClick={onTemplateClick} userPlan={user.plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
