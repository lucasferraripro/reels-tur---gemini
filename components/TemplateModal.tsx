
import React from 'react';
import { Template } from '../types';
import { XMarkIcon, PencilSquareIcon, SparklesIcon } from './icons/Icons';

interface TemplateModalProps {
  template: Template;
  onClose: () => void;
  onGenerate: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, onClose, onGenerate }) => {
  const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(template.imagePlaceholderQuery)}/450/800`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 flex-shrink-0 relative">
          <img src={imageUrl} alt={template.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
           <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50">
             <XMarkIcon className="w-6 h-6" />
           </button>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white">{template.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {template.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full">{tag}</span>
              ))}
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300">{template.description}</p>
          </div>
          <div className="mt-8 space-y-4">
            <a 
              href={template.canvaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-3 px-4 text-white font-semibold bg-secondary rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300"
            >
              <PencilSquareIcon className="w-5 h-5 mr-2" />
              Editar no Canva
            </a>
            <button 
              onClick={onGenerate}
              className="w-full flex items-center justify-center py-3 px-4 text-white font-semibold bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300"
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              Gerar Roteiro e Voz com IA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateModal;
