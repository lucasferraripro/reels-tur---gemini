import React, { useState, useEffect } from 'react';
import { User, Plan, Template, ScheduledPost } from './types';
import { 
    TEMPLATES, 
    FREE_SCRIPT_GENERATIONS, 
    FREE_AUDIO_GENERATIONS, 
    FREE_IMAGE_EDITS, 
    FREE_CAMPAIGN_GENERATIONS 
} from './constants';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UpgradeModal from './components/UpgradeModal';
import TemplateModal from './components/TemplateModal';
import GeneratorModal from './components/GeneratorModal';
import ArtCreatorModal from './components/ImageEditorModal';
import CampaignCreatorModal from './components/CampaignCreatorModal';
import PdfGeneratorModal from './components/PdfGeneratorModal';
import SchedulePostModal from './components/SchedulePostModal';
import SpreadsheetAiModal from './components/SpreadsheetAiModal';

interface PrefilledData {
    destination: string;
    audience: string;
    title: string;
    script: string;
    caption: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
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

  const handleLogin = (email = 'agente@teste.com') => {
    setUser({
      email,
      plan: Plan.Free,
      scriptGenerations: FREE_SCRIPT_GENERATIONS,
      audioGenerations: FREE_AUDIO_GENERATIONS,
      imageEdits: FREE_IMAGE_EDITS,
      campaignGenerations: FREE_CAMPAIGN_GENERATIONS
    });
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleUpgrade = () => {
    setUpgradeModalOpen(true);
  };

  const handleTemplateClick = (template: Template) => {
    if (user?.plan === Plan.Free && !template.isFree) {
        handleUpgrade();
        return;
    }
    
    if (template.canvaLink && template.canvaLink !== '#') {
        window.open(template.canvaLink, '_blank', 'noopener,noreferrer');
    } else {
        setSelectedTemplate(template);
        setTemplateModalOpen(true);
    }
  };

  const handlePdfContentGenerated = (data: PrefilledData) => {
    setPdfGeneratorModalOpen(false);
    setPrefilledData(data);
    setGeneratorModalOpen(true);
  }

  const handleOpenScheduleModal = (date: Date) => {
    setSelectedDate(date);
    setSchedulePostModalOpen(true);
  };
  
  const handleSchedulePost = (post: Omit<ScheduledPost, 'id'>) => {
    setScheduledPosts(prev => [...prev, {...post, id: new Date().toISOString() }]);
    setSchedulePostModalOpen(false);
    setSelectedDate(null);
  };

  const useResource = (resource: keyof Omit<User, 'email' | 'plan'>) => {
        if (!user) return false;
        if (user.plan === Plan.Premium) return true;
        if (user[resource] > 0) {
            setUser(prevUser => prevUser ? { ...prevUser, [resource]: prevUser[resource] - 1 } : null);
            return true;
        }
        return false;
    };
    
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header 
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setAuthModalOpen(true)}
        onLogoutClick={handleLogout}
        onUpgradeClick={handleUpgrade}
        toggleTheme={toggleTheme}
        theme={theme}
        user={user}
      />
      <main className="flex-grow">
        {isLoggedIn && user ? (
          <Dashboard
            user={user}
            templates={TEMPLATES}
            onTemplateClick={handleTemplateClick}
            onGenerateScriptClick={() => setGeneratorModalOpen(true)}
            onArtCreatorClick={() => setArtCreatorModalOpen(true)}
            onPdfGenerateClick={() => setPdfGeneratorModalOpen(true)}
            onCampaignCreatorClick={handleUpgrade} // Premium feature
            onSpreadsheetAiClick={() => setSpreadsheetAiModalOpen(true)}
            scheduledPosts={scheduledPosts}
            onSchedulePostClick={handleOpenScheduleModal}
          />
        ) : (
          <LandingPage onStartFreeTrial={() => setAuthModalOpen(true)} />
        )}
      </main>
      <Footer />

      {isAuthModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} onLogin={handleLogin} />}
      
      {isUpgradeModalOpen && <UpgradeModal onClose={() => setUpgradeModalOpen(false)} onUpgrade={() => {
        // In this flow, upgrade redirects to Hotmart, so no state change is needed here.
        setUpgradeModalOpen(false);
      }} />}

      {isLoggedIn && user && (
        <>
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
                    user={user}
                    onClose={() => {
                      setGeneratorModalOpen(false);
                      setPrefilledData(null);
                    }}
                    onUpgrade={handleUpgrade}
                    useScriptGeneration={() => useResource('scriptGenerations')}
                    useAudioGeneration={() => useResource('audioGenerations')}
                    initialData={prefilledData}
                />
            )}
            
            {isArtCreatorModalOpen && (
                <ArtCreatorModal
                    user={user}
                    onClose={() => setArtCreatorModalOpen(false)}
                    onUpgrade={handleUpgrade}
                    useImageEdit={() => useResource('imageEdits')}
                />
            )}

            {isCampaignCreatorModalOpen && (
                <CampaignCreatorModal
                    user={user}
                    onClose={() => setCampaignCreatorModalOpen(false)}
                    onUpgrade={handleUpgrade}
                    useCampaignGeneration={() => useResource('campaignGenerations')}
                />
            )}
          
            {isPdfGeneratorModalOpen && (
              <PdfGeneratorModal 
                user={user} 
                onClose={() => setPdfGeneratorModalOpen(false)} 
                onComplete={handlePdfContentGenerated}
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
            
             {isSpreadsheetAiModalOpen && (
              <SpreadsheetAiModal 
                user={user}
                onClose={() => setSpreadsheetAiModalOpen(false)}
              />
            )}
        </>
      )}
    </div>
  );
};

export default App;
