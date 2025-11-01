import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { User, Plan, Template, ScheduledPost } from './types';
import { TEMPLATES } from './constants';
import PremiumDashboard from './components/PremiumDashboard';
import PasswordProtect from './components/PasswordProtect';
import TemplateModal from './components/TemplateModal';
import GeneratorModal from './components/GeneratorModal';
import ArtCreatorModal from './components/ImageEditorModal';
import CampaignCreatorModal from './components/CampaignCreatorModal';
import PdfGeneratorModal from './components/PdfGeneratorModal';
import SchedulePostModal from './components/SchedulePostModal';
import SpreadsheetAiModal from './components/SpreadsheetAiModal';
import Header from './components/Header';
import Footer from './components/Footer';

interface PrefilledData {
    destination: string;
    audience: string;
    title: string;
    script: string;
    caption: string;
}

// Mock premium user for full access
const premiumUser: User = {
  email: 'premium@member.com',
  plan: Plan.Premium,
  scriptGenerations: 999,
  audioGenerations: 999,
  imageEdits: 999,
  campaignGenerations: 999,
};

const PremiumApp: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [isTemplateModalOpen, setTemplateModalOpen] = useState(false);
  const [isGeneratorModalOpen, setGeneratorModalOpen] = useState(false);
  const [isArtCreatorModalOpen, setArtCreatorModalOpen] = useState(false);
  const [isCampaignCreatorModalOpen, setCampaignCreatorModalOpen] = useState(false);
  const [isPdfGeneratorModalOpen, setPdfGeneratorModalOpen] = useState(false);
  const [isSchedulePostModalOpen, setSchedulePostModalOpen] = useState(false);
  const [isSpreadsheetAiModalOpen, setSpreadsheetAiModalOpen] = useState(false);

  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [prefilledData, setPrefilledData] = useState<PrefilledData | null>(null);
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const openTemplate = (template: Template) => {
    if (template.canvaLink && template.canvaLink !== '#') {
        window.open(template.canvaLink, '_blank', 'noopener,noreferrer');
    } else {
        setSelectedTemplate(template);
        setTemplateModalOpen(true);
    }
  };

  const handleOpenScheduleModal = (date: Date) => {
    setSelectedDate(date);
    setSchedulePostModalOpen(true);
  };

  const handleSchedulePost = (post: Omit<ScheduledPost, 'id'>) => {
    setScheduledPosts(prev => [...prev, { ...post, id: new Date().toISOString() }]);
    setSchedulePostModalOpen(false);
    setSelectedDate(null);
  };

  if (!isAuthenticated) {
    return <PasswordProtect onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Header 
            isLoggedIn={true}
            onLoginClick={() => {}}
            onLogoutClick={() => setIsAuthenticated(false)}
            onUpgradeClick={() => {}}
            toggleTheme={toggleTheme}
            theme={theme}
            user={premiumUser}
        />
        <main className="flex-grow">
            <PremiumDashboard
                user={premiumUser}
                templates={TEMPLATES}
                onTemplateClick={openTemplate}
                onGenerateScriptClick={() => setGeneratorModalOpen(true)}
                onArtCreatorClick={() => setArtCreatorModalOpen(true)}
                onPdfGenerateClick={() => setPdfGeneratorModalOpen(true)}
                onCampaignCreatorClick={() => setCampaignCreatorModalOpen(true)}
                onSpreadsheetAiClick={() => setSpreadsheetAiModalOpen(true)}
                scheduledPosts={scheduledPosts}
                onSchedulePostClick={handleOpenScheduleModal}
            />
        </main>
        <Footer />
        
        {isTemplateModalOpen && selectedTemplate && (
            <TemplateModal 
                template={selectedTemplate} 
                onClose={() => setTemplateModalOpen(false)} 
                onGenerate={() => {
                    setTemplateModalOpen(false);
                    setGeneratorModalOpen(true);
                }}
            />
        )}

        {isGeneratorModalOpen && (
            <GeneratorModal 
                user={premiumUser}
                onClose={() => {
                    setGeneratorModalOpen(false);
                    setPrefilledData(null);
                }}
                onUpgrade={() => {}}
                useScriptGeneration={() => true}
                useAudioGeneration={() => true}
                initialData={prefilledData}
            />
        )}

        {isArtCreatorModalOpen && (
            <ArtCreatorModal
                user={premiumUser}
                onClose={() => setArtCreatorModalOpen(false)}
                onUpgrade={() => {}}
                useImageEdit={() => true}
            />
        )}

        {isCampaignCreatorModalOpen && (
            <CampaignCreatorModal
                user={premiumUser}
                onClose={() => setCampaignCreatorModalOpen(false)}
                onUpgrade={() => {}}
                useCampaignGeneration={() => true}
            />
        )}
      
        {isPdfGeneratorModalOpen && (
            <PdfGeneratorModal
                user={premiumUser}
                onClose={() => setPdfGeneratorModalOpen(false)}
                onComplete={(data) => {
                    setPrefilledData(data);
                    setPdfGeneratorModalOpen(false);
                    setGeneratorModalOpen(true);
                }}
            />
        )}
      
        {isSpreadsheetAiModalOpen && (
            <SpreadsheetAiModal 
                user={premiumUser} 
                onClose={() => setSpreadsheetAiModalOpen(false)} 
            />
        )}

        {isSchedulePostModalOpen && selectedDate && (
            <SchedulePostModal
                onClose={() => {
                    setSchedulePostModalOpen(false);
                    setSelectedDate(null);
                }}
                onSchedule={handleSchedulePost}
                selectedDate={selectedDate}
            />
        )}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PremiumApp />
  </React.StrictMode>
);