import React from 'react';
import { CHAPTERS_META } from '../../data/chaptersData';
import { useNavigation } from '../../context/NavigationContext';
import { useReader } from '../../context/ReaderContext';
import { useAudio } from '../../context/AudioContext';
import { X, Bookmark, Home, Search, Sliders, Volume2, VolumeX, ChevronRight } from 'lucide-react';
import { Footer } from './Footer';

export const MobileNavigation: React.FC = () => {
  const { 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    activeChapter, 
    setActiveChapter, 
    goToCover 
  } = useNavigation();

  const { setIsSearchOpen, setIsPreferencesOpen, setIsBookmarksOpen, bookmarks } = useReader();
  const { isPlaying, toggle: toggleAudio } = useAudio();

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      
      {/* Backdrop overlay */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
      />

      {/* Drawer content */}
      <div className="relative w-[85%] max-w-sm h-full bg-celestial-sidebar border-r border-gold/40 shadow-2xl flex flex-col p-4 sm:p-5 z-10 animate-slide-in safe-top safe-bottom">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-gold/20">
          <div className="flex items-center gap-2.5">
            <img src="/assets/favicon.webp" alt="Enoque" className="w-8 h-8 object-contain" />
            <div>
              <span className="font-header font-bold text-base text-gold block leading-none">ENOQUE</span>
              <span className="text-[10px] font-sans text-slate-400 uppercase tracking-widest">Códice Celestial</span>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 active:scale-95"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tools Grid in Drawer */}
        <div className="grid grid-cols-4 gap-1.5 mb-3.5 pb-3 border-b border-gold/15">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
            className="flex flex-col items-center p-2 rounded-xl bg-celestial-surface border border-gold/20 active:scale-95 text-slate-200"
          >
            <Search className="w-4 h-4 text-sky-400 mb-1" />
            <span className="text-[10px] font-sans">Buscar</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsBookmarksOpen(true);
            }}
            className="flex flex-col items-center p-2 rounded-xl bg-celestial-surface border border-gold/20 active:scale-95 text-slate-200 relative"
          >
            <Bookmark className="w-4 h-4 text-yellow-400 mb-1" />
            <span className="text-[10px] font-sans">Salvos</span>
            {bookmarks.length > 0 && (
              <span className="absolute top-1 right-2 bg-amber-500 text-black text-[9px] font-bold px-1 rounded-full">
                {bookmarks.length}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsPreferencesOpen(true);
            }}
            className="flex flex-col items-center p-2 rounded-xl bg-celestial-surface border border-gold/20 active:scale-95 text-slate-200"
          >
            <Sliders className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-[10px] font-sans">Ajustes</span>
          </button>

          <button
            onClick={toggleAudio}
            className={`flex flex-col items-center p-2 rounded-xl border active:scale-95 transition-colors ${
              isPlaying 
                ? 'bg-amber-500/20 border-yellow-500/50 text-yellow-300' 
                : 'bg-celestial-surface border-gold/20 text-slate-400'
            }`}
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-amber-400 mb-1 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500 mb-1" />
            )}
            <span className="text-[10px] font-sans">{isPlaying ? 'Tocando' : 'Som'}</span>
          </button>
        </div>

        {/* Chapters Section Label */}
        <div className="text-[10px] font-sans font-bold tracking-wider text-slate-400 uppercase px-1 mb-2">
          Capítulos do Livro ({CHAPTERS_META.length})
        </div>

        {/* Chapters Scrollable List */}
        <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 -mr-1">
          {CHAPTERS_META.map(cap => {
            const isActive = activeChapter === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveChapter(cap.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium transition-all active:scale-[0.98] ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/25 to-yellow-500/10 text-yellow-200 border border-gold/60 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/60 bg-celestial-surface/40 border border-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <span className="text-xl shrink-0">{cap.icon}</span>
                  <div className="min-w-0">
                    <div className="font-header font-bold text-xs text-gold-light">{cap.number}</div>
                    <div className="font-sans text-xs text-slate-200 truncate">{cap.title}</div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-yellow-400' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="pt-3 mt-2 border-t border-gold/20 space-y-2">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              goToCover();
            }}
            className="w-full py-2.5 flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 active:scale-95 border border-slate-700 text-slate-200 rounded-xl text-xs font-semibold"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Voltar para a Capa</span>
          </button>

          <Footer />
        </div>

      </div>

    </div>
  );
};
