import React, { useState, useRef } from 'react';
import { User, Plan } from '../types';
import { editImage, fileToBase64 } from '../services/geminiService';
import { XMarkIcon, SparklesIcon, PhotoIcon, ArrowPathIcon } from './icons/Icons';

interface ArtCreatorModalProps {
    user: User;
    onClose: () => void;
    onUpgrade: () => void;
    useImageEdit: () => boolean;
}

// FIX: Moved ImagePlaceholder outside of ArtCreatorModal to prevent re-rendering and fix TypeScript errors.
const ImagePlaceholder: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500">
       {children}
    </div>
);

const ArtCreatorModal: React.FC<ArtCreatorModalProps> = ({ user, onClose, onUpgrade, useImageEdit }) => {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [editedImage, setEditedImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setOriginalImage(reader.result as string);
                setEditedImage(null); // Reset edited image on new upload
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleEditImage = async () => {
        if (!file || !prompt) {
            setError("Por favor, carregue uma imagem e insira um comando.");
            return;
        }
        if (user.plan === Plan.Free && user.imageEdits <= 0) {
            onUpgrade();
            return;
        }
        useImageEdit();

        setIsLoading(true);
        setError('');
        try {
            const base64Data = await fileToBase64(file);
            const resultBase64 = await editImage(base64Data, file.type, prompt);
            setEditedImage(`data:${file.type};base64,${resultBase64}`);
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
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Editor de Imagem com IA</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-grow p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Original Image */}
                        <div>
                            <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">1. Imagem Original</h3>
                            <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
                                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                                {originalImage ? (
                                    <img src={originalImage} alt="Original" className="w-full aspect-square object-contain rounded-lg bg-gray-100 dark:bg-gray-700" />
                                ) : (
                                    <ImagePlaceholder>
                                        <div className="text-center">
                                            <PhotoIcon className="w-12 h-12 mx-auto" />
                                            <p className="mt-2 text-sm font-semibold">Clique para carregar</p>
                                            <p className="text-xs">PNG, JPG, WEBP</p>
                                        </div>
                                    </ImagePlaceholder>
                                )}
                            </div>
                        </div>
                        {/* Edited Image */}
                        <div>
                            <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">3. Imagem Editada</h3>
                            <ImagePlaceholder>
                                {editedImage ? (
                                     <img src={editedImage} alt="Editada" className="w-full aspect-square object-contain rounded-lg" />
                                ) : (
                                    <div className="text-center">
                                        {isLoading ? (
                                            <>
                                                <ArrowPathIcon className="w-12 h-12 mx-auto animate-spin"/>
                                                <p className="mt-2 text-sm font-semibold">Editando imagem...</p>
                                            </>
                                        ) : (
                                            <>
                                                <SparklesIcon className="w-12 h-12 mx-auto" />
                                                <p className="mt-2 text-sm font-semibold">Sua arte aparecerá aqui</p>
                                            </>
                                        )}
                                    </div>
                                )}
                            </ImagePlaceholder>
                        </div>
                    </div>

                    {/* Prompt & Action */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">2. Descreva a Edição</h3>
                        <div className="flex items-start space-x-2 sm:space-x-4">
                            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ex: adicione óculos de sol no rosto da pessoa, mude o fundo para uma praia, transforme a foto em uma pintura a óleo..." className="input-field flex-grow" rows={3}></textarea>
                            <button onClick={handleEditImage} disabled={isLoading || !originalImage || !prompt} className="btn-primary h-full px-4 py-3 sm:px-6">
                                <SparklesIcon className="w-6 h-6"/>
                            </button>
                        </div>
                         {user.plan === Plan.Free && (
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                                Edições restantes: {user.imageEdits}
                            </p>
                        )}
                        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCreatorModal;