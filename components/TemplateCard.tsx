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
  const imageUrl = template.coverImage || `https://picsum.photos/seed/${encodeURIComponent(template.imagePlaceholderQuery)}/400/400`;

  return (
    <div 
      onClick={() => onClick(template)} 
      className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-700 aspect-square"
    >
      <img src={imageUrl} alt={template.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 p-3 text-white w-full">
        <h3 className="font-bold font-display text-sm truncate">{template.title}</h3>
        {template.tags[0] && (
          <span className="text-xs text-white/80 capitalize">{template.tags[0]}</span>
        )}
      </div>

      {!template.isFree && (
        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-bold text-gray-900 bg-accent-400 rounded-full flex items-center space-x-1">
          <SparklesIcon className="w-3 h-3"/>
          <span>Premium</span>
        </div>
      )}

      {isLocked && (
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
          <LockClosedIcon className="w-10 h-10 text-accent-400" />
          <p className="mt-2 text-xs font-semibold text-white">Exclusivo Premium</p>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;