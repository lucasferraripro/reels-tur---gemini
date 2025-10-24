
import React, { useRef, useState, useEffect } from 'react';
import { PlayIcon, PauseIcon, ArrowDownTrayIcon } from './icons/Icons';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);
  
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-primary-50 dark:bg-primary-900/50 p-3 rounded-lg flex items-center space-x-3">
      <audio ref={audioRef} src={src} preload="metadata"></audio>
      <button onClick={togglePlayPause} className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition">
        {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
      </button>
      <div className="flex-grow flex items-center space-x-2">
        <span className="text-xs font-mono w-10 text-right">{formatTime(currentTime)}</span>
        <div className="w-full bg-primary-200 dark:bg-primary-800 rounded-full h-1.5">
          <div className="bg-primary-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="text-xs font-mono w-10">{formatTime(duration)}</span>
      </div>
      <a href={src} download="audio-reels-tur.mp3" className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
        <ArrowDownTrayIcon className="w-5 h-5"/>
      </a>
    </div>
  );
};

export default AudioPlayer;
