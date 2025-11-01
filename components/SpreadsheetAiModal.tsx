import React, { useState, useRef } from 'react';
import { User } from '../types';
import { analyzeSpreadsheetData, fileToText } from '../services/geminiService';
import { XMarkIcon, DocumentArrowUpIcon, ArrowPathIcon, PaperAirplaneIcon, SparklesIcon } from './icons/Icons';

interface SpreadsheetAiModalProps {
    user: User;
    onClose: () => void;
}

interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

const SpreadsheetAiModal: React.FC<SpreadsheetAiModalProps> = ({ user, onClose }) => {
    const [file, setFile] = useState<File | null>(null);
    const [csvData, setCsvData] = useState<string | null>(null);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && (selectedFile.type === 'text/csv' || selectedFile.name.endsWith('.csv'))) {
            setFile(selectedFile);
            setError('');
            try {
                const text = await fileToText(selectedFile);
                setCsvData(text);
                 setChatHistory([{
                    role: 'model',
                    text: `Olá! Analisei sua planilha. O que você gostaria de saber sobre seus dados?`
                }]);
            } catch (err) {
                 setError('Não foi possível ler o arquivo.');
            }
        } else {
            setFile(null);
            setCsvData(null);
            setError('Por favor, selecione um arquivo no formato CSV.');
        }
    };

    const handleAsk = async () => {
        if (!question.trim() || !csvData) return;

        const newHistory: ChatMessage[] = [...chatHistory, { role: 'user', text: question }];
        setChatHistory(newHistory);
        setQuestion('');
        setIsLoading(true);
        setError('');

        try {
            const answer = await analyzeSpreadsheetData(csvData, question);
            setChatHistory([...newHistory, { role: 'model', text: answer }]);
        } catch (err: any) {
            setError(err.message);
            setChatHistory([...newHistory, { role: 'model', text: 'Desculpe, ocorreu um erro ao processar sua pergunta.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setCsvData(null);
        setChatHistory([]);
        setQuestion('');
        setError('');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700 flex-shrink-0">
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Planilha Inteligente</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                
                {!csvData ? (
                    <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".csv,text/csv" className="hidden" />
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full p-10 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            <DocumentArrowUpIcon className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500" />
                            <p className="mt-4 font-semibold text-gray-700 dark:text-gray-300">
                                {file ? file.name : "Clique para carregar sua planilha"}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                               Exporte sua planilha para .CSV e envie aqui para conversar com seus dados.
                            </p>
                        </div>
                         <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
                            Não tem uma planilha? Baixe nosso{" "}
                            <a href="https://docs.google.com/spreadsheets/d/1BR0NtRSKeS8-Z7CxD8qy3upO2hNqKNYI/edit?usp=sharing&ouid=116366176072856379040&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-500">
                                modelo de gestão
                            </a>.
                        </p>

                        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                    </div>
                ) : (
                    <div className="flex flex-col h-full">
                        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                            {chatHistory.map((msg, index) => (
                                <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0"><SparklesIcon className="w-5 h-5 text-primary-500"/></div> }
                                    <div className={`max-w-md p-3 rounded-2xl whitespace-pre-wrap ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 rounded-bl-none'}`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                             {isLoading && (
                                <div className="flex items-end gap-2 justify-start">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0"><SparklesIcon className="w-5 h-5 text-primary-500"/></div>
                                    <div className="max-w-md p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 rounded-bl-none">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4 border-t dark:border-gray-700 flex-shrink-0">
                             {error && <p className="text-red-500 text-xs mb-2 text-center">{error}</p>}
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="text" 
                                    value={question} 
                                    onChange={e => setQuestion(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && handleAsk()}
                                    placeholder="Pergunte sobre seus dados..." 
                                    className="input-field flex-grow"
                                />
                                <button onClick={handleAsk} disabled={isLoading || !question.trim()} className="btn-primary p-3">
                                    <PaperAirplaneIcon className="w-5 h-5"/>
                                </button>
                            </div>
                            <button onClick={handleReset} className="text-xs text-gray-500 dark:text-gray-400 hover:underline mt-2 w-full text-center">
                                Carregar outro arquivo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpreadsheetAiModal;
