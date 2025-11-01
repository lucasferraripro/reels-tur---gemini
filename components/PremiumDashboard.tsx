import React, { useState } from 'react';
import { Template, User, ScheduledPost, Plan } from '../types';
import TemplateCard from './TemplateCard';
import ContentCalendar from './ContentCalendar';
import CashFlowSpreadsheet from './CashFlowSpreadsheet';
import Newsletter from './Newsletter';
import { 
    PhotoIcon, 
    VideoCameraIcon, 
    ArrowsPointingOutIcon,
    MicrophoneIcon,
    PlayCircleIcon,
    GoogleDriveIcon,
    CalendarDaysIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    CpuChipIcon,
    AcademicCapIcon,
    TableCellsIcon,
    MagnifyingGlassIcon,
} from './icons/Icons'; // Assuming MagnifyingGlassIcon exists

interface PremiumDashboardProps {
  user: User;
  templates: Template[];
  onTemplateClick: (template: Template) => void;
  onGenerateScriptClick: () => void;
  onArtCreatorClick: () => void;
  onCampaignCreatorClick: () => void;
  onPdfGenerateClick: () => void;
  onSpreadsheetAiClick: () => void;
  scheduledPosts: ScheduledPost[];
  onSchedulePostClick: (date: Date) => void;
}


const PremiumDashboard: React.FC<PremiumDashboardProps> = ({ user, templates, onTemplateClick, onGenerateScriptClick, onArtCreatorClick, onCampaignCreatorClick, onPdfGenerateClick, onSpreadsheetAiClick, scheduledPosts, onSchedulePostClick }) => {
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(true);
  const [isSpreadsheetExpanded, setIsSpreadsheetExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Nacional', 'Internacional', 'Feriado', 'Extras', 'Influencers'];

  const filteredTemplates = templates.filter(template => {
    const matchesFilter = activeFilter === 'Todos' || template.tags.includes(activeFilter.toLowerCase());
    const matchesSearch = searchTerm === '' || 
                          template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const quickActions = [
    { title: 'Gerar Roteiros/Voz', icon: MicrophoneIcon, onClick: onGenerateScriptClick },
    { title: 'Editar Imagem (IA)', icon: PhotoIcon, onClick: onArtCreatorClick },
    { title: 'Criar Campanhas', icon: ArrowsPointingOutIcon, onClick: onCampaignCreatorClick },
    { title: 'Gerar de PDF', icon: VideoCameraIcon, onClick: onPdfGenerateClick },
    { title: 'Planilha Inteligente', icon: TableCellsIcon, onClick: onSpreadsheetAiClick },
    { title: 'Ver Vídeo Aula', icon: PlayCircleIcon, onClick: () => alert('O link para a vídeo aula será adicionado aqui em breve!') },
  ];
  
   const downloadCategories = [
      { name: 'Nacionais', link: '#' },
      { name: 'Internacionais', link: '#' },
      { name: 'Destinos Extras', link: '#' },
      { name: 'Promoções Feriados', link: '#' },
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div>
              <h1 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Painel Premium ✨</h1>
              <p className="mt-1 text-base text-gray-600 dark:text-gray-300">Todos os recursos estão liberados para você.</p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Ferramentas de Criação</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action) => (
              <div key={action.title} onClick={action.onClick} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center">
                  <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full">
                      <action.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="mt-3 font-bold font-display text-gray-800 dark:text-gray-100 text-sm">{action.title}</h3>
              </div>
              ))}
          </div>
        </div>
        

        {/* Templates Section */}
        <div id="templates" className="mt-12">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Biblioteca Completa de Vídeos</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Busque e encontre o template perfeito para sua próxima postagem.</p>

          {/* Search and Filter */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 sticky top-20 z-30">
              <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                      <input 
                          type="text"
                          placeholder="Buscar por destino, tema, etc..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                      />
                       <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                      {filters.map(filter => (
                          <button 
                              key={filter}
                              onClick={() => setActiveFilter(filter)}
                              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-200 flex-shrink-0 ${activeFilter === filter ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                          >
                              {filter}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} onClick={onTemplateClick} userPlan={user.plan} />
            ))}
          </div>
          {filteredTemplates.length === 0 && (
              <div className="col-span-full text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">Nenhum template encontrado.</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Tente ajustar sua busca ou filtro.</p>
              </div>
          )}
        </div>

         <div id="downloads" className="mt-12">
          <div className="relative p-6 sm:p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-inner">
               <h2 className="text-center text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Baixar Vídeos no Google Drive</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 mt-1 text-center">Acesso total às pastas com vídeos prontos para download.</p>
              
              <div className="my-8">
                  <GoogleDriveIcon className="w-24 h-24 mx-auto" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {downloadCategories.map((category) => (
                      <a
                          key={category.name}
                          href={category.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 font-semibold text-gray-800 dark:text-gray-200 text-center"
                      >
                          {category.name}
                      </a>
                  ))}
              </div>
          </div>
        </div>
        
        <div id="calendar" className="mt-12">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
              <button 
                  onClick={() => setIsCalendarExpanded(!isCalendarExpanded)} 
                  className="w-full flex justify-between items-center text-left"
              >
                  <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Calendário de Conteúdo</h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Organize e agende seus posts diretamente por aqui.</p>
                  </div>
                  {isCalendarExpanded ? <ChevronUpIcon className="w-6 h-6 text-gray-500"/> : <ChevronDownIcon className="w-6 h-6 text-gray-500"/>}
              </button>
              {isCalendarExpanded && (
                  <div className="mt-6">
                      <ContentCalendar posts={scheduledPosts} onAddPostClick={onSchedulePostClick} />
                  </div>
              )}
          </div>
        </div>
      
        <div id="spreadsheet" className="mt-12">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
              <button 
                  onClick={() => setIsSpreadsheetExpanded(!isSpreadsheetExpanded)} 
                  className="w-full flex justify-between items-center text-left"
              >
                  <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Controle de Caixa</h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Gerencie suas finanças com esta planilha de controle de caixa.</p>
                  </div>
                  {isSpreadsheetExpanded ? <ChevronUpIcon className="w-6 h-6 text-gray-500"/> : <ChevronDownIcon className="w-6 h-6 text-gray-500"/>}
              </button>
              {isSpreadsheetExpanded && (
                  <div className="mt-6 overflow-x-auto">
                      <CashFlowSpreadsheet />
                  </div>
              )}
          </div>
        </div>

      </div>
      <Newsletter />
    </>
  );
};

export default PremiumDashboard;