
import React, { useState, useRef } from 'react';
import { User, Plan } from '../types';
import { editImage, fileToBase64 } from '../services/geminiService';
import { XMarkIcon, SparklesIcon, PhotoIcon, ArrowPathIcon } from './icons/Icons';

interface ImageEditorModalProps {
    user: User;
    onClose: () => void;
    onUpgrade: () => void;
    useImageEdit: () => boolean;
}

const ImageEditorModal: React.FC<ImageEditorModalProps> = ({ user, onClose, onUpgrade, useImageEdit }) => {
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
        if (!useImageEdit()) {
            onUpgrade();
            return;
        }

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
    
    const ImagePlaceholder = ({ children }: {children: React.ReactNode}) => (
        <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500">
           {children}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Editor de Imagem com IA</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-grow p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image previews */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2 text-center">Original</h3>
                            {originalImage ? (
                                <img src={originalImage} alt="Original" className="w-full aspect-square object-contain rounded-lg bg-gray-100 dark:bg-gray-700" />
                            ) : (
                                <ImagePlaceholder>
                                    <div className="text-center">
                                        <PhotoIcon className="w-12 h-12 mx-auto" />
                                        <p className="mt-2 text-sm">Sua imagem original</p>
                                    </div>
                                </ImagePlaceholder>
                            )}
                        </div>
                         <div>
                            <h3 className="font-semibold mb-2 text-center">Editada</h3>
                            {isLoading ? (
                                <ImagePlaceholder>
                                    <div className="text-center animate-pulse">
                                        <SparklesIcon className="w-12 h-12 mx-auto" />
                                        <p className="mt-2 text-sm">Editando...</p>
                                    </div>
                                </ImagePlaceholder>
                            ) : editedImage ? (
                                <img src={editedImage} alt="Edited" className="w-full aspect-square object-contain rounded-lg bg-gray-100 dark:bg-gray-700" />
                            ) : (
                                <ImagePlaceholder>
                                     <div className="text-center">
                                        <SparklesIcon className="w-12 h-12 mx-auto" />
                                        <p className="mt-2 text-sm">Sua imagem editada</p>
                                    </div>
                                </ImagePlaceholder>
                            )}
                        </div>
                    </div>
                    {/* Controls */}
                    <div className="flex flex-col space-y-4 justify-center">
                        <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
                        <button onClick={() => fileInputRef.current?.click()} className="w-full py-2.5 text-sm font-semibold border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            {originalImage ? "Trocar Imagem" : "Carregar Imagem"}
                        </button>
                        
                        <div>
                            <label className="text-sm font-medium">Comando de Edição</label>
                            <input 
                                type="text"
                                value={prompt}
                                onChange={e => setPrompt(e.target.value)}
                                placeholder="Ex: Adicione um filtro retrô, remova a pessoa..."
                                className="mt-1 w-full input-field"
                                disabled={!originalImage}
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button onClick={handleEditImage} disabled={isLoading || !originalImage || !prompt} className="btn-primary w-full flex items-center justify-center">
                            {isLoading ? <><ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" /> Processando...</> : <><SparklesIcon className="w-5 h-5 mr-2" /> Editar com IA</>}
                        </button>

                         {user.plan === Plan.Free && <p className="text-xs text-center text-gray-500">Edições restantes: {user.imageEdits}</p>}

                        {editedImage && (
                            <a href={editedImage} download="imagem-editada-reels-tur.png" className="w-full text-center py-2.5 text-sm font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                Baixar Imagem Editada
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageEditorModal;
