import React, { useState, useRef } from 'react';
import { User } from '../types';
import { generateContentFromPdf, fileToBase64 } from '../services/geminiService';
import { XMarkIcon, DocumentArrowUpIcon, SparklesIcon, ArrowPathIcon } from './icons/Icons';

interface PdfGeneratorModalProps {
    user: User;
    onClose: () => void;
    onComplete: (data: { destination: string; audience: string; title: string; script: string; caption: string; }) => void;
}

const PdfGeneratorModal: React.FC<PdfGeneratorModalProps> = ({ user, onClose, onComplete }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Por favor, selecione um arquivo PDF.');
        }
    };

    const handleGenerate = async () => {
        if (!file) {
            setError('Nenhum arquivo PDF selecionado.');
            return;
        }

        setIsLoading(true);
        setError('');
        try {
            const base64Data = await fileToBase64(file);
            const result = await generateContentFromPdf(base64Data, file.type);
            onComplete(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Gerar Conteúdo com PDF</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 flex flex-col items-center justify-center text-center">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="application/pdf" className="hidden" />
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full p-10 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                        <DocumentArrowUpIcon className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500" />
                        <p className="mt-4 font-semibold text-gray-700 dark:text-gray-300 break-all">
                            {file ? file.name : "Clique para carregar o PDF"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                           A IA irá analisar o descritivo do seu pacote e criar o conteúdo.
                        </p>
                    </div>

                    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                    
                    <button onClick={handleGenerate} disabled={isLoading || !file} className="btn-primary w-full mt-6 py-3">
                        {isLoading ? (
                            <><ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" /> Processando PDF...</>
                        ) : (
                            <><SparklesIcon className="w-5 h-5 mr-2" /> Gerar Conteúdo</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PdfGeneratorModal;
