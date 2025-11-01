import React, { useState } from 'react';
import { ScheduledPost } from '../types';
import { InstagramIcon, FacebookIcon, TikTokIcon, YouTubeIcon, VideoCameraIcon, PhotoIcon } from './icons/Icons';

interface ContentCalendarProps {
    posts: ScheduledPost[];
    onAddPostClick: (date: Date) => void;
}

const SocialIcon: React.FC<{platform: string}> = ({ platform }) => {
    switch(platform) {
        case 'instagram': return <InstagramIcon className="w-4 h-4" />;
        case 'facebook': return <FacebookIcon className="w-4 h-4" />;
        case 'tiktok': return <TikTokIcon className="w-4 h-4" />;
        case 'youtube': return <YouTubeIcon className="w-4 h-4" />;
        default: return null;
    }
}

const ContentCalendar: React.FC<ContentCalendarProps> = ({ posts, onAddPostClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();

    const days = Array.from({ length: startDay }, (_, i) => null).concat(
        Array.from({ length: daysInMonth }, (_, i) => new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1))
    );
    
    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const changeMonth = (offset: number) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
    };
    
    const today = new Date();
    today.setHours(0,0,0,0);

    return (
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)}>&larr;</button>
                <h3 className="text-lg font-bold font-display">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                <button onClick={() => changeMonth(1)}>&rarr;</button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-600 dark:text-gray-400">
                {weekDays.map(day => <div key={day} className="py-2">{day}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                    <div 
                        key={index} 
                        className={`relative p-2 h-24 sm:h-32 border border-gray-200 dark:border-gray-700 rounded-md flex flex-col overflow-hidden transition-colors ${day ? 'hover:bg-gray-50 dark:hover:bg-gray-700/50' : 'bg-gray-50 dark:bg-gray-700/50'}`}
                        onClick={() => day && onAddPostClick(day)}
                    >
                        {day && (
                            <>
                                <span className={`font-bold text-xs ${day.getTime() === today.getTime() ? 'bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center' : ''}`}>
                                    {day.getDate()}
                                </span>
                                <div className="mt-1 space-y-1 overflow-y-auto text-left">
                                    {posts
                                        .filter(post => new Date(post.date).toDateString() === day.toDateString())
                                        .map(post => (
                                            <div key={post.id} className="bg-primary-100 dark:bg-primary-900/80 p-1 rounded-md text-xs leading-tight">
                                                <div className="flex items-center space-x-1 mb-0.5">
                                                    {post.mediaType === 'video' ? <VideoCameraIcon className="w-3 h-3 text-primary-600 dark:text-primary-300 flex-shrink-0"/> : <PhotoIcon className="w-3 h-3 text-primary-600 dark:text-primary-300 flex-shrink-0"/>}
                                                    <p className="truncate font-semibold text-primary-800 dark:text-primary-200">{post.content}</p>
                                                </div>
                                                <div className="flex space-x-1.5 mt-1">
                                                    {post.platforms.map(p => <SocialIcon key={p} platform={p}/>)}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button onClick={() => day && onAddPostClick(day)} className="absolute bottom-1 right-1 w-5 h-5 bg-secondary text-white rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-lg">+</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
             <div className="text-center mt-6">
                <button onClick={() => onAddPostClick(new Date())} className="btn-primary py-2 px-5">Agendar Post</button>
            </div>
        </div>
    );
};

export default ContentCalendar;
