
import React, { useState, useEffect, useCallback } from 'react';
import { User, Plan, Template } from './types';
import { TEMPLATES, FREE_SCRIPT_GENERATIONS, FREE_AUDIO_GENERATIONS, FREE_IMAGE_EDITS } from './constants';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import TemplateModal from './components/TemplateModal';
import GeneratorModal from './components/GeneratorModal';
import ImageEditorModal from './components/ImageEditorModal';
import UpgradeModal from './components/UpgradeModal';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isTemplateModalOpen, setTemplateModalOpen] = useState(false);
  const [isGeneratorModalOpen, setGeneratorModalOpen] = useState(false);
  const [isImageEditorModalOpen, setImageEditorModalOpen] = useState(false);
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

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

  const handleLogin = () => {
    const freeUser: User = {
      email: 'usuario@teste.com',
      plan: Plan.Free,
      scriptGenerations: FREE_SCRIPT_GENERATIONS,
      audioGenerations: FREE_AUDIO_GENERATIONS,
      imageEdits: FREE_IMAGE_EDITS,
    };
    setUser(freeUser);
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };
  
  const handleLogout = () => {
      setIsLoggedIn(false);
      setUser(null);
  };

  const handleUpgrade = () => {
      if (user) {
          setUser({ ...user, plan: Plan.Premium });
          setUpgradeModalOpen(false);
      }
  };
  
  const openTemplate = (template: Template) => {
    if (user?.plan === Plan.Free && !template.isFree) {
        setUpgradeModalOpen(true);
    } else {
        setSelectedTemplate(template);
        setTemplateModalOpen(true);
    }
  };

  const useScriptGeneration = () => {
      if (user) {
          if (user.plan === Plan.Premium || user.scriptGenerations > 0) {
              setUser(prev => prev ? {...prev, scriptGenerations: Math.max(0, prev.scriptGenerations - 1)} : null);
              return true;
          }
      }
      return false;
  };
  
  const useAudioGeneration = () => {
      if (user) {
          if (user.plan === Plan.Premium || user.audioGenerations > 0) {
              setUser(prev => prev ? {...prev, audioGenerations: Math.max(0, prev.audioGenerations - 1)} : null);
              return true;
          }
      }
      return false;
  };
  
  const useImageEdit = () => {
      if (user) {
          if (user.plan === Plan.Premium || user.imageEdits > 0) {
              setUser(prev => prev ? {...prev, imageEdits: Math.max(0, prev.imageEdits - 1)} : null);
              return true;
          }
      }
      return false;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header 
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setAuthModalOpen(true)}
        onLogoutClick={handleLogout}
        onUpgradeClick={() => setUpgradeModalOpen(true)}
        toggleTheme={toggleTheme}
        theme={theme}
        user={user}
      />
      <main className="flex-grow">
        {isLoggedIn && user ? (
          <Dashboard
            user={user}
            templates={TEMPLATES}
            onTemplateClick={openTemplate}
            onGenerateScriptClick={() => setGeneratorModalOpen(true)}
            onImageEditorClick={() => setImageEditorModalOpen(true)}
          />
        ) : (
          <LandingPage onStartFreeTrial={() => setAuthModalOpen(true)} />
        )}
      </main>
      <Footer />

      {isAuthModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} onLogin={handleLogin} />}
      
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

      {isGeneratorModalOpen && user && (
        <GeneratorModal 
            user={user}
            onClose={() => setGeneratorModalOpen(false)}
            onUpgrade={() => {
              setGeneratorModalOpen(false);
              setUpgradeModalOpen(true);
            }}
            useScriptGeneration={useScriptGeneration}
            useAudioGeneration={useAudioGeneration}
        />
      )}

      {isImageEditorModalOpen && user && (
        <ImageEditorModal
            user={user}
            onClose={() => setImageEditorModalOpen(false)}
            onUpgrade={() => {
                setImageEditorModalOpen(false);
                setUpgradeModalOpen(true);
            }}
            useImageEdit={useImageEdit}
        />
      )}
      
      {isUpgradeModalOpen && <UpgradeModal onClose={() => setUpgradeModalOpen(false)} onUpgrade={handleUpgrade} />}
    </div>
  );
};

export default App;
