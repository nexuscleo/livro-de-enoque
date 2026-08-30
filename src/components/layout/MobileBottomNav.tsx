import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useReader } from '../../context/ReaderContext';
import { useAudio } from '../../context/AudioContext';
import { BookOpen, Search, Bookmark, Sliders, Volume2, VolumeX } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { toggleMobileMenu } = useNavigation();
  const { setIsSearchOpen, setIsPreferencesOpen, setIsBookmarksOpen, bookmarks } = useReader();
  const { isPlaying, toggle: toggleAudio } = useAudio();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-celestial-sidebar/95 border-t border-gold/30 backdrop-blur-lg px-2 py-1.5 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.6)] select-none safe-bottom">
      
      {/* Chapters Drawer Trigger */}
      <button
        onClick={toggleMobileMenu}
        className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 active:text-yellow-300 active:scale-95 transition-all touch-manipulation min-w-[56px]"
      >
        <BookOpen className="w-5 h-5 text-amber-400 mb-0.5" />
        <span className="text-[10px] font-sans font-medium">Capítulos</span>
      </button>

      {/* Global Search */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 active:text-yellow-300 active:scale-95 transition-all touch-manipulation min-w-[56px]"
      >
        <Search className="w-5 h-5 text-sky-400 mb-0.5" />
        <span className="text-[10px] font-sans font-medium">Buscar</span>
      </button>

      {/* Bookmarks */}
      <button
        onClick={() => setIsBookmarksOpen(true)}
        className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 active:text-yellow-300 active:scale-95 transition-all touch-manipulation min-w-[56px] relative"
      >
        <Bookmark className="w-5 h-5 text-yellow-400 mb-0.5" />
        <span className="text-[10px] font-sans font-medium">Salvos</span>
        {bookmarks.length > 0 && (
          <span className="absolute top-1.5 right-2.5 bg-amber-500 text-black text-[9px] font-bold px-1 rounded-full">
            {bookmarks.length}
          </span>
        )}
      </button>

      {/* Reading Preferences (Font / Theme) */}
      <button
        onClick={() => setIsPreferencesOpen(true)}
        className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-300 active:text-yellow-300 active:scale-95 transition-all touch-manipulation min-w-[56px]"
      >
        <Sliders className="w-5 h-5 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-sans font-medium">Ajustes</span>
      </button>

      {/* Celestial Audio Synth Toggle */}
      <button
        onClick={toggleAudio}
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all active:scale-95 touch-manipulation min-w-[56px] ${
          isPlaying
            ? 'text-yellow-300'
            : 'text-slate-400'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-amber-400 mb-0.5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-slate-500 mb-0.5" />
        )}
        <span className="text-[10px] font-sans font-medium">{isPlaying ? 'Tocando' : 'Som'}</span>
      </button>

    </nav>
  );
};

