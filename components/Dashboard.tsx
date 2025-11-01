import React, { useState } from 'react';
import { Template, User, ScheduledPost, Plan } from '../types';
import TemplateCard from './TemplateCard';
import ContentCalendar from './ContentCalendar';
import CashFlowSpreadsheet from './CashFlowSpreadsheet';
import Newsletter from './Newsletter';
import { 
    PhotoIcon, 
    VideoCameraIcon, 
    LockClosedIcon, 
    ArrowsPointingOutIcon,
    MicrophoneIcon,
    PlayCircleIcon,
    GoogleDriveIcon,
    CalendarDaysIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    PaintBrushIcon,
    UsersIcon,
    CpuChipIcon,
    AcademicCapIcon,
    TableCellsIcon,
} from './icons/Icons';

interface DashboardProps {
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

const FeatureCard: React.FC<{
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ icon: Icon, title, description, onClick }) => (
    <div onClick={onClick} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center">
        <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full">
            <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="mt-3 font-bold font-display text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>
    </div>
);


const PremiumFeatureCard: React.FC<{
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ icon: Icon, title, description, onClick }) => (
    <div onClick={onClick} className="relative group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center">
        <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full">
            <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="mt-3 font-bold font-display text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <LockClosedIcon className="w-10 h-10 text-accent-400" />
          <p className="mt-2 text-sm font-semibold text-white">Exclusivo Premium</p>
        </div>
    </div>
);


const Dashboard: React.FC<DashboardProps> = ({ user, templates, onTemplateClick, onGenerateScriptClick, onArtCreatorClick, onCampaignCreatorClick, onPdfGenerateClick, onSpreadsheetAiClick, scheduledPosts, onSchedulePostClick }) => {
  const freeTemplates = templates.filter(t => t.isFree);
  const premiumTemplates = templates.filter(t => !t.isFree && !t.tags.includes('media-pack'));
  const mediaPacks = templates.filter(t => t.tags.includes('media-pack'));
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [isSpreadsheetExpanded, setIsSpreadsheetExpanded] = useState(false);


  const quickActions = [
    { title: 'Templates de Vídeos', icon: VideoCameraIcon, onClick: () => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' }), color: 'from-blue-500 to-blue-600' },
    { title: 'Roteiros/Voz', icon: MicrophoneIcon, onClick: onGenerateScriptClick, color: 'from-orange-500 to-orange-600' },
    { title: 'Calendário', icon: CalendarDaysIcon, onClick: () => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' }), color: 'from-teal-500 to-teal-600' },
    { title: 'Editar Imagem (IA)', icon: PhotoIcon, onClick: onArtCreatorClick, color: 'from-purple-500 to-purple-600' },
    { title: 'Criar Campanhas', icon: ArrowsPointingOutIcon, onClick: onCampaignCreatorClick, color: 'from-red-500 to-red-600' },
    { title: 'Ver Vídeo Aula', icon: PlayCircleIcon, onClick: () => alert('O link para a vídeo aula será adicionado aqui em breve!'), color: 'from-yellow-500 to-yellow-600' },
  ];

  const downloadCategories = [
      { name: 'Nacionais', link: '#' },
      { name: 'Internacionais', link: '#' },
      { name: 'Destinos Extras', link: '#' },
      { name: 'Promoções Feriados', link: '#' },
  ];
  
  const triggerUpgrade = () => onTemplateClick({ isFree: false } as Template);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Bem-vindo(a), {user.email.split('@')[0]}!</h1>
        <p className="mt-1 text-base text-gray-600 dark:text-gray-300">Sua central de criação de conteúdo de viagens.</p>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action) => (
            <button 
              key={action.title} 
              onClick={action.onClick} 
              className={`p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white text-center flex flex-col items-center justify-center bg-gradient-to-br ${action.color}`}
            >
              <action.icon className="w-10 h-10" />
              <h3 className="mt-2 text-sm font-bold font-display leading-tight">{action.title}</h3>
            </button>
          ))}
        </div>

        <div id="templates" className="mt-12">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Templates Grátis</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Comece com estes templates liberados no seu plano.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {freeTemplates.map(template => (
              <TemplateCard key={template.id} template={template} onClick={onTemplateClick} userPlan={user.plan} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Templates Premium</h2>
              <span className="px-3 py-1 text-sm font-bold text-gray-900 bg-accent-400 rounded-full">+150 vídeos</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Faça upgrade para ter acesso a toda a biblioteca.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {premiumTemplates.slice(0, 5).map(template => (
              <TemplateCard key={template.id} template={template} onClick={onTemplateClick} userPlan={user.plan} />
            ))}
             <div
              onClick={triggerUpgrade}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-700 aspect-square"
            >
              <img src="https://cdn.americachip.com/wp-content/uploads/2022/12/Italia.png" alt="Ver todos os vídeos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
                  <h3 className="font-black font-display text-4xl sm:text-5xl">+150</h3>
                  <p className="mt-1 font-semibold text-sm">Vídeos Exclusivos</p>
                  <button className="mt-4 text-sm bg-secondary text-white rounded-full px-4 py-2 font-bold hover:bg-orange-500 transition-colors duration-300">
                      Ver Todos
                  </button>
              </div>
            </div>
          </div>
        </div>
        
        <div id="downloads" className="mt-12">
          <div className="relative p-6 sm:p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-inner">
               <h2 className="text-center text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Baixar Vídeos no Google Drive</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 mt-1 text-center">Acesso exclusivo para assinantes Premium a pastas com vídeos prontos.</p>
              
              <div className="my-8">
                  <GoogleDriveIcon className="w-24 h-24 mx-auto" />
              </div>

              <p className="font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">Escolha uma categoria para explorar:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {downloadCategories.map((category) => (
                      <a
                          key={category.name}
                          href={category.link}
                          onClick={(e) => {
                              if (user.plan === Plan.Free) {
                                  e.preventDefault();
                                  triggerUpgrade();
                              } else {
                                  alert(`Acessando a pasta: ${category.name}`);
                              }
                          }}
                          className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 font-semibold text-gray-800 dark:text-gray-200 flex items-center justify-center space-x-2"
                      >
                          <LockClosedIcon className={`w-4 h-4 flex-shrink-0 ${user.plan === 'Premium' ? 'hidden' : 'inline-block text-gray-400'}`}/>
                          <span>{category.name}</span>
                      </a>
                  ))}
              </div>
              
              {user.plan === 'Free' && (
                  <div className="text-center">
                      <button onClick={triggerUpgrade} className="mt-8 px-6 py-3 text-sm font-bold bg-secondary text-white rounded-full shadow-lg hover:bg-orange-500 transition">
                          Fazer Upgrade para Baixar
                      </button>
                  </div>
              )}
          </div>
        </div>

      <div id="media-packs" className="mt-12">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Pacotes de Mídia Premium</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Acelere sua criação com artes e vídeos prontos para usar.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mediaPacks.map(pack => {
                  if (pack.id === 97) { // Special layout for "Artes Prontas"
                      return (
                          <div key={pack.id}>
                              <TemplateCard 
                                  template={pack} 
                                  onClick={triggerUpgrade} 
                                  userPlan={user.plan} 
                              />
                              <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 px-1">
                                  <p className="font-semibold">- Feed, carrossel, conteúdos interativos e stories.</p>
                                  <p className="mt-1">- Diários criativos para engajamento.</p>
                              </div>
                          </div>
                      );
                  }
                  return (
                      <TemplateCard 
                          key={pack.id}
                          template={pack} 
                          onClick={triggerUpgrade} 
                          userPlan={user.plan} 
                      />
                  );
              })}
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

      <div id="ai-tools" className="mt-12">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Ferramentas com IA</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Deixe a inteligência artificial trabalhar por você.</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureCard icon={TableCellsIcon} title="Planilha Inteligente" description="Converse com seus dados." onClick={onSpreadsheetAiClick} />
              <PremiumFeatureCard icon={CpuChipIcon} title="Comandos ChatGPT" description="Copie prompts validados." onClick={triggerUpgrade} />
              <PremiumFeatureCard icon={CpuChipIcon} title="Robô Agente de IA" description="Cria roteiros de viagem." onClick={triggerUpgrade} />
          </div>
      </div>
      
      <div id="learning" className="mt-12">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 dark:text-primary-400">Cursos e Gerenciamento Premium</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Aprenda e organize sua agência para o sucesso.</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <PremiumFeatureCard icon={AcademicCapIcon} title="Agente Lucrativo" description="Tráfego pago para viagens." onClick={triggerUpgrade} />
              <PremiumFeatureCard icon={AcademicCapIcon} title="Atendimento com IA" description="Automatize seu suporte." onClick={triggerUpgrade} />
              <PremiumFeatureCard icon={AcademicCapIcon} title="Edição de Vídeos" description="Anúncios que convertem." onClick={triggerUpgrade} />
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

export default Dashboard;