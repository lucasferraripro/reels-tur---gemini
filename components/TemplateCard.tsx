
import React from 'react';
import { Template, Plan } from '../types';
import { LockClosedIcon, SparklesIcon } from './icons/Icons';

interface TemplateCardProps {
  template: Template;
  onClick: (template: Template) => void;
  userPlan: Plan;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onClick, userPlan }) => {
  const isLocked = !template.isFree && userPlan === Plan.Free;
  const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(template.imagePlaceholderQuery)}/400/711`;

  return (
    <div 
      onClick={() => onClick(template)} 
      className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-gray-700 aspect-[9/16]"
    >
      <img src={imageUrl} alt={template.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 p-4 text-white w-full">
        <h3 className="font-bold font-display text-lg">{template.title}</h3>
        <div className="flex flex-wrap gap-1 mt-2">
          {template.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-white/20 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {!template.isFree && (
        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-bold text-gray-900 bg-accent-400 rounded-full flex items-center space-x-1">
          <SparklesIcon className="w-3 h-3"/>
          <span>Premium</span>
        </div>
      )}

      {isLocked && (
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
          <LockClosedIcon className="w-12 h-12 text-accent-400" />
          <p className="mt-2 font-semibold text-white">Exclusivo para assinantes</p>
          <button className="mt-4 px-4 py-2 text-sm font-bold bg-secondary text-white rounded-full">
            Fazer Upgrade
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;
