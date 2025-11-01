import React, { useState, useRef } from 'react';
import { ScheduledPost, SocialPlatform } from '../types';
import { XMarkIcon, CalendarDaysIcon, PhotoIcon, InstagramIcon, FacebookIcon, TikTokIcon, YouTubeIcon } from './icons/Icons';

interface SchedulePostModalProps {
    onClose: () => void;
    onSchedule: (post: Omit<ScheduledPost, 'id'>) => void;
    selectedDate: Date;
}

const socialPlatforms: SocialPlatform[] = ['instagram', 'facebook', 'tiktok', 'youtube'];

const SocialIcon: React.FC<{platform: SocialPlatform, isSelected: boolean, onClick: () => void}> = ({ platform, isSelected, onClick }) => {
    const baseClasses = "p-2 rounded-full border-2 transition-all duration-200";
    const selectedClasses = "bg-primary-100 dark:bg-primary-900 border-primary-500";
    const unselectedClasses = "bg-gray-100 dark:bg-gray-700 border-transparent hover:border-gray-400";
    
    let icon;
    switch(platform) {
        case 'instagram': icon = <InstagramIcon className="w-6 h-6" />; break;
        case 'facebook': icon = <FacebookIcon className="w-6 h-6" />; break;
        case 'tiktok': icon = <TikTokIcon className="w-6 h-6" />; break;
        case 'youtube': icon = <YouTubeIcon className="w-6 h-6" />; break;
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}>
            {icon}
        </button>
    );
}


const SchedulePostModal: React.FC<SchedulePostModalProps> = ({ onClose, onSchedule, selectedDate }) => {
    const [content, setContent] = useState('');
    const [platforms, setPlatforms] = useState<SocialPlatform[]>([]);
    const [media, setMedia] = useState<{url: string; type: 'image' | 'video'} | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [date, setDate] = useState(selectedDate.toISOString().substring(0, 16));


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setMedia({
                url: URL.createObjectURL(file),
                type: file.type.startsWith('video') ? 'video' : 'image'
            });
        }
    };

    const togglePlatform = (platform: SocialPlatform) => {
        setPlatforms(prev => 
            prev.includes(platform) 
            ? prev.filter(p => p !== platform) 
            : [...prev, platform]
        );
    };

    const handleSubmit = () => {
        if (!content || platforms.length === 0) {
            alert('Por favor, preencha a legenda e selecione pelo menos uma plataforma.');
            return;
        }
        onSchedule({
            date: new Date(date),
            content,
            platforms,
            mediaUrl: media?.url,
            mediaType: media?.type
        });
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
                 <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">Agendar Post</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 flex-grow overflow-y-auto space-y-4">
                    <div>
                        <label className="font-semibold text-sm">Plataformas</label>
                        <div className="flex space-x-4 mt-2">
                           {socialPlatforms.map(p => (
                               <SocialIcon key={p} platform={p} isSelected={platforms.includes(p)} onClick={() => togglePlatform(p)}/>
                           ))}
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold text-sm">Conteúdo</label>
                        <div className="mt-2 flex space-x-4">
                            <div className="w-24 h-24 flex-shrink-0">
                                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*,video/*" className="hidden" />
                                <div onClick={() => fileInputRef.current?.click()} className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600">
                                    {media?.url ? (
                                        media.type === 'image' 
                                            ? <img src={media.url} className="w-full h-full object-cover rounded-lg"/>
                                            : <video src={media.url} className="w-full h-full object-cover rounded-lg"/>
                                    ) : (
                                        <PhotoIcon className="w-8 h-8 text-gray-400" />
                                    )}
                                </div>
                            </div>
                            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Escreva a legenda do seu post aqui..." className="input-field w-full" rows={4}></textarea>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold text-sm">Data e Hora</label>
                        <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} className="input-field w-full mt-2"/>
                    </div>
                </div>

                <div className="p-4 border-t dark:border-gray-700 flex justify-end space-x-3">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancelar</button>
                    <button onClick={handleSubmit} className="btn-primary py-2 px-5 flex items-center space-x-2">
                        <CalendarDaysIcon className="w-5 h-5"/>
                        <span>Agendar</span>
                    </button>
                </div>
                 <div className="p-2 text-center bg-gray-100 dark:bg-gray-900/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Nota: A postagem automática não é realizada. Esta é uma ferramenta para organizar seu calendário.</p>
                </div>
            </div>
        </div>
    );
};

export default SchedulePostModal;
