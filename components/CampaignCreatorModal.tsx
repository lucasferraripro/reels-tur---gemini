import React, { useState } from 'react';
import { User, Plan } from '../types';
import { generateCampaign } from '../services/geminiService';
import { XMarkIcon, SparklesIcon, ArrowPathIcon } from './icons/Icons';

interface CampaignCreatorModalProps {
  user: User;
  onClose: () => void;
  onUpgrade: () => void;
  useCampaignGeneration: () => boolean;
}

const CampaignCreatorModal: React.FC<CampaignCreatorModalProps> = ({ user, onClose, onUpgrade, useCampaignGeneration }) => {
    const [goal, setGoal] = useState('Topo de Funil');
    const [destination, setDestination] = useState('');
    const [audience, setAudience] = useState('');
    const [companyName, setCompanyName] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [generatedCampaign, setGeneratedCampaign] = useState('');

    const handleGenerate = async () => {
        if (user.plan === Plan.Free) {
            onUpgrade();
            return;
        }
        
        setIsLoading(true);
        setError('');
        setGeneratedCampaign('');
        try {
            const result = await generateCampaign(goal, destination, audience, companyName);
            setGeneratedCampaign(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Criador de Campanhas Estratégicas</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-grow p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inputs Column */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label className="text-sm font-medium">Objetivo da Campanha</label>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <button onClick={() => setGoal('Topo de Funil')} className={`p-3 rounded-lg text-sm transition ${goal === 'Topo de Funil' ? 'bg-primary-600 text-white shadow' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'}`}>Atração (Topo de Funil)</button>
                                <button onClick={() => setGoal('Fundo de Funil')} className={`p-3 rounded-lg text-sm transition ${goal === 'Fundo de Funil' ? 'bg-primary-600 text-white shadow' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'}`}>Conversão (Fundo de Funil)</button>
                            </div>
                        </div>
                         <div>
                            <label className="text-sm font-medium">Destino / Serviço</label>
                            <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Ex: Pacotes para a Disney" className="mt-1 w-full input-field" />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Público-Alvo</label>
                            <input type="text" value={audience} onChange={e => setAudience(e.target.value)} placeholder="Ex: Famílias com filhos de 5-12 anos" className="mt-1 w-full input-field" />
                        </div>
                         <div>
                            <label className="text-sm font-medium">Nome da Sua Agência</label>
                            <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Ex: Sonhos de Viagem" className="mt-1 w-full input-field" />
                        </div>
                        <button onClick={handleGenerate} disabled={isLoading || !destination || !audience || !companyName} className="btn-primary w-full flex items-center justify-center mt-auto" >
                            {isLoading ? <><ArrowPathIcon className="w-5 h-5 mr-2 animate-spin"/>Gerando Estratégia...</> : <><SparklesIcon className="w-5 h-5 mr-2" />Gerar Campanha com IA</>}
                        </button>
                         {user.plan === Plan.Free && <p className="text-xs text-center text-red-500">Recurso exclusivo para assinantes Premium.</p>}
                    </div>

                    {/* Results Column */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg flex flex-col">
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {!generatedCampaign && !isLoading && 
                            <div className="text-center text-gray-500 dark:text-gray-400 flex-grow flex flex-col items-center justify-center">
                                <SparklesIcon className="w-10 h-10 mx-auto text-gray-400"/>
                                <p className="mt-2 font-semibold">Sua campanha estratégica aparecerá aqui.</p>
                                <p className="mt-1 text-sm">Preencha os campos e deixe a IA trabalhar para você.</p>
                            </div>
                        }
                        {isLoading && <div className="text-center text-gray-500 flex-grow flex items-center justify-center">Gerando campanha...</div>}
                        
                        {generatedCampaign && (
                            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                                {generatedCampaign}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCreatorModal;