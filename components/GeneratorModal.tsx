import React, { useState, useEffect } from 'react';
import { User, Plan } from '../types';
import { generateScript, generateSpeech } from '../services/geminiService';
import { XMarkIcon, SparklesIcon, InformationCircleIcon, ArrowPathIcon } from './icons/Icons';
import AudioPlayer from './AudioPlayer';

interface GeneratedData {
    destination: string;
    audience: string;
    title: string;
    script: string;
    caption: string;
}

interface GeneratorModalProps {
  user: User;
  onClose: () => void;
  onUpgrade: () => void;
  useScriptGeneration: () => boolean;
  useAudioGeneration: () => boolean;
  initialData?: GeneratedData | null;
}

const audienceSuggestions = ["Casais em lua de mel", "Famílias com crianças", "Aventureiros", "Viajantes de luxo", "Mochileiros"];
const toneSuggestions = ["Persuasivo", "Divertido", "Formal", "Informativo", "Empolgante"];

const GeneratorModal: React.FC<GeneratorModalProps> = ({ user, onClose, onUpgrade, useScriptGeneration, useAudioGeneration, initialData = null }) => {
    const [destination, setDestination] = useState('');
    const [audience, setAudience] = useState('');
    const [tone, setTone] = useState('Persuasivo');
    const [companyName, setCompanyName] = useState('');
    
    const [isLoadingScript, setIsLoadingScript] = useState(false);
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const [error, setError] = useState('');
    
    const [generatedTitle, setGeneratedTitle] = useState('');
    const [generatedScript, setGeneratedScript] = useState('');
    const [generatedCaption, setGeneratedCaption] = useState('');
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    useEffect(() => {
        if (initialData) {
            setDestination(initialData.destination);
            setAudience(initialData.audience);
            setGeneratedTitle(initialData.title);
            setGeneratedScript(initialData.script);
            setGeneratedCaption(initialData.caption);
        }
    }, [initialData]);

    const handleGenerateScript = async () => {
        if (user.plan === Plan.Free && user.scriptGenerations <= 0) {
            onUpgrade();
            return;
        }
        useScriptGeneration();
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
        if (user.plan === Plan.Free && user.audioGenerations <= 0) {
            onUpgrade();
            return;
        }
        useAudioGeneration();
        setIsLoadingAudio(true);
        setError('');
        try {
            const base64Audio = await generateSpeech(generatedScript);
            setAudioUrl(`data:audio/mpeg;base64,${base64Audio}`);
        } catch (err: any)
        {
            setError(err.message);
        } finally {
            setIsLoadingAudio(false);
        }
    };
    
    const inputClasses = "mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500";
    const labelClasses = "text-sm font-semibold text-gray-800 dark:text-gray-200";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700/50 flex-shrink-0">
                    <h2 className="text-xl font-bold font-display text-gray-800 dark:text-gray-100">Gerador de Roteiro e Voz</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-grow p-4 md:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Inputs Column */}
                    <div className="flex flex-col space-y-4 pr-4">
                        <div>
                            <label className={labelClasses}>Destino / Serviço</label>
                            <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Ex: Maragogi, AL" className={inputClasses} />
                        </div>
                        <div>
                            <label className={labelClasses}>Público</label>
                            <input type="text" value={audience} onChange={e => setAudience(e.target.value)} placeholder="Ex: Casais em lua de mel" className={inputClasses} />
                             <div className="flex flex-wrap gap-1.5 mt-2">
                                {audienceSuggestions.map(s => (
                                    <button key={s} onClick={() => setAudience(s)} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className={labelClasses}>Tom de Voz</label>
                            <select value={tone} onChange={e => setTone(e.target.value)} className={inputClasses}>
                                {toneSuggestions.map(t => <option key={t} value={t.toLowerCase()}>{t}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClasses}>Nome da Sua Agência</label>
                            <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Ex: Viagens dos Sonhos" className={inputClasses} />
                        </div>
                        <div className="pt-2 flex-grow flex flex-col justify-end">
                             {user.plan === Plan.Free && (
                                <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                                    <span>Roteiros: {user.scriptGenerations} | </span>
                                    <span>Vozes: {user.audioGenerations}</span>
                                </div>
                            )}
                            <button onClick={handleGenerateScript} disabled={isLoadingScript || !destination || !audience} className="w-full flex items-center justify-center py-3 px-4 bg-primary-600 text-white font-bold rounded-lg shadow-md hover:bg-primary-700 transition duration-300 disabled:bg-primary-400 disabled:cursor-not-allowed">
                                {isLoadingScript ? <><ArrowPathIcon className="w-5 h-5 mr-2 animate-spin"/>Gerando...</> : <><SparklesIcon className="w-5 h-5 mr-2" />1. Gerar Roteiro</>}
                            </button>
                        </div>
                    </div>

                    {/* Results Column */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg flex flex-col">
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        
                        {!generatedScript && !isLoadingScript &&
                            <div className="text-center text-gray-500 dark:text-gray-400 flex-grow flex flex-col items-center justify-center">
                                <SparklesIcon className="w-10 h-10 mx-auto text-gray-400"/>
                                <p className="mt-2 font-semibold">Seu roteiro e legenda aparecerão aqui.</p>
                                <p className="mt-1 text-sm">Preencha os campos e deixe a IA trabalhar.</p>
                            </div>
                        }

                        {isLoadingScript && <div className="text-center text-gray-500 flex-grow flex items-center justify-center">Analisando informações...</div>}

                        {generatedScript && (
                            <div className="space-y-4 overflow-y-auto flex-grow">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100">{generatedTitle}</h4>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm mb-1 text-gray-700 dark:text-gray-300">Roteiro (Script):</h5>
                                    <textarea readOnly value={generatedScript} className="w-full text-sm p-3 rounded-md bg-white dark:bg-gray-700/50 border dark:border-gray-600" rows={10}></textarea>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm mb-1 text-gray-700 dark:text-gray-300">Legenda (Rede Social):</h5>
                                    <textarea readOnly value={generatedCaption} className="w-full text-sm p-3 rounded-md bg-white dark:bg-gray-700/50 border dark:border-gray-600" rows={4}></textarea>
                                </div>
                                 <div className="border-t dark:border-gray-700 pt-4">
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">2. Gerar Narração (TTS)</h4>
                                    <button onClick={handleGenerateAudio} disabled={isLoadingAudio} className="w-full flex items-center justify-center py-2 px-4 text-white font-semibold bg-secondary rounded-lg hover:bg-orange-500 transition duration-300">
                                        {isLoadingAudio ? <><ArrowPathIcon className="w-5 h-5 mr-2 animate-spin"/>Gerando Áudio...</> : "Gerar Áudio com IA"}
                                    </button>
                                     {audioUrl && <div className="mt-3"><AudioPlayer src={audioUrl} /></div>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratorModal;