
import React, { useState, useCallback } from 'react';
import { User, Plan } from '../types';
import { generateScript, generateSpeech } from '../services/geminiService';
import { XMarkIcon, SparklesIcon, InformationCircleIcon } from './icons/Icons';
import AudioPlayer from './AudioPlayer';

interface GeneratorModalProps {
  user: User;
  onClose: () => void;
  onUpgrade: () => void;
  useScriptGeneration: () => boolean;
  useAudioGeneration: () => boolean;
}

const GeneratorModal: React.FC<GeneratorModalProps> = ({ user, onClose, onUpgrade, useScriptGeneration, useAudioGeneration }) => {
    const [destination, setDestination] = useState('');
    const [audience, setAudience] = useState('');
    const [tone, setTone] = useState('persuasivo');
    const [companyName, setCompanyName] = useState('');
    
    const [isLoadingScript, setIsLoadingScript] = useState(false);
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const [error, setError] = useState('');
    
    const [generatedTitle, setGeneratedTitle] = useState('');
    const [generatedScript, setGeneratedScript] = useState('');
    const [generatedCaption, setGeneratedCaption] = useState('');
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const handleGenerateScript = async () => {
        if (!useScriptGeneration()) {
            onUpgrade();
            return;
        }
        setIsLoadingScript(true);
        setError('');
        setGeneratedTitle('');
        setGeneratedScript('');
        setGeneratedCaption('');
        setAudioUrl(null);
        try {
            const result = await generateScript(destination, audience, tone, companyName);
            setGeneratedTitle(result.title);
            setGeneratedScript(result.script);
            setGeneratedCaption(result.caption);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoadingScript(false);
        }
    };

    const handleGenerateAudio = async () => {
        if (!generatedScript) {
            setError('Gere um roteiro primeiro.');
            return;
        }
        if (!useAudioGeneration()) {
            onUpgrade();
            return;
        }
        setIsLoadingAudio(true);
        setError('');
        try {
            const base64Audio = await generateSpeech(generatedScript);
            setAudioUrl(`data:audio/mpeg;base64,${base64Audio}`);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoadingAudio(false);
        }
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Gerador de Roteiro e Voz</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-grow p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inputs Column */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label className="text-sm font-medium">Destino / Serviço</label>
                            <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Ex: Maragogi, AL" className="mt-1 w-full input-field" />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Público</label>
                            <input type="text" value={audience} onChange={e => setAudience(e.target.value)} placeholder="Ex: Casais em lua de mel" className="mt-1 w-full input-field" />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Tom de Voz</label>
                            <select value={tone} onChange={e => setTone(e.target.value)} className="mt-1 w-full input-field">
                                <option value="persuasivo">Persuasivo</option>
                                <option value="divertido">Divertido</option>
                                <option value="formal">Formal</option>
                                <option value="inspirador">Inspirador</option>
                            </select>
                        </div>
                         <div>
                            <label className="text-sm font-medium">Nome da Empresa</label>
                            <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Ex: Viagens Incríveis" className="mt-1 w-full input-field" />
                        </div>
                        <button onClick={handleGenerateScript} disabled={isLoadingScript || !destination || !audience} className="btn-primary w-full flex items-center justify-center" >
                            {isLoadingScript ? 'Gerando...' : <><SparklesIcon className="w-5 h-5 mr-2" />Gerar Roteiro</>}
                        </button>
                        {user.plan === Plan.Free && <p className="text-xs text-center text-gray-500">Gerações restantes: {user.scriptGenerations}</p>}
                    </div>

                    {/* Results Column */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg flex flex-col space-y-4">
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {!generatedScript && !isLoadingScript && 
                            <div className="text-center text-gray-500 dark:text-gray-400 flex-grow flex flex-col items-center justify-center">
                                <SparklesIcon className="w-10 h-10 mx-auto text-gray-400"/>
                                <p className="mt-2">Seu roteiro aparecerá aqui.</p>
                            </div>
                        }
                        {isLoadingScript && <div className="text-center text-gray-500">Gerando roteiro...</div>}
                        
                        {generatedScript && (
                            <>
                                <div>
                                    <h4 className="font-bold">Título:</h4>
                                    <p className="text-sm p-2 bg-white dark:bg-gray-700 rounded">{generatedTitle}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Roteiro (para narração):</h4>
                                    <textarea readOnly value={generatedScript} rows={5} className="w-full text-sm p-2 bg-white dark:bg-gray-700 rounded border-none"></textarea>
                                </div>
                                <div>
                                    <h4 className="font-bold">Legenda (para post):</h4>
                                    <textarea readOnly value={generatedCaption} rows={5} className="w-full text-sm p-2 bg-white dark:bg-gray-700 rounded border-none"></textarea>
                                </div>
                                
                                <div className="mt-auto pt-4 space-y-4">
                                     {audioUrl && <AudioPlayer src={audioUrl} />}
                                    <button onClick={handleGenerateAudio} disabled={isLoadingAudio} className="btn-secondary w-full">
                                        {isLoadingAudio ? 'Gerando Áudio...' : 'Gerar Áudio com IA'}
                                    </button>
                                    {user.plan === Plan.Free && <p className="text-xs text-center text-gray-500">Gerações de áudio restantes: {user.audioGenerations}</p>}
                                    
                                     <div className="flex items-start text-xs text-gray-500 dark:text-gray-400 p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                                        <InformationCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/>
                                        <span>
                                            Baixe o áudio gerado e siga <a href="https://www.canva.com/pt_br/recursos/adicionar-musica-video/" target="_blank" rel="noopener noreferrer" className="underline text-primary-600 dark:text-primary-400">este tutorial</a> para adicioná-lo no Canva.
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratorModal;
