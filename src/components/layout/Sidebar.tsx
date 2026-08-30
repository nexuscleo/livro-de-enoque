import React from 'react';
import { CHAPTERS_META } from '../../data/chaptersData';
import { useNavigation } from '../../context/NavigationContext';
import { useAudio } from '../../context/AudioContext';
import { useReader } from '../../context/ReaderContext';
import { Volume2, VolumeX, Search, Bookmark, Sliders, Home } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { activeChapter, setActiveChapter, goToCover } = useNavigation();
  const { isPlaying, volume, toggle: toggleAudio, changeVolume } = useAudio();
  const { 
    settings, 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize,
    setIsSearchOpen,
    setIsPreferencesOpen,
    setIsBookmarksOpen,
    bookmarks 
  } = useReader();

  return (
    <aside className="hidden lg:flex flex-col w-80 h-screen sticky top-0 bg-celestial-sidebar/95 border-r border-gold/30 p-5 overflow-y-auto backdrop-blur-md select-none shrink-0">
      
      {/* Brand Header */}
      <div 
        onClick={goToCover}
        className="flex items-center gap-3 pb-5 mb-4 border-b border-gold/20 cursor-pointer group"
      >
        <img 
          src="/assets/favicon.webp" 
          alt="Selo Enoque" 
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        />
        <div>
          <h2 className="font-header text-xl font-bold tracking-wider text-gold group-hover:text-gold-light transition-colors">
            ENOQUE
          </h2>
          <span className="text-[11px] font-sans text-slate-400 tracking-wider uppercase">Códice Celestial</span>
        </div>
      </div>

      {/* Global Quick Action Tools */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-celestial-surface border border-gold/20 hover:border-gold/60 text-slate-300 hover:text-gold transition-all text-xs gap-1 group"
          title="Buscar (Ctrl+K)"
        >
          <Search className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-sans">Buscar</span>
        </button>

        <button
          onClick={() => setIsBookmarksOpen(true)}
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-celestial-surface border border-gold/20 hover:border-gold/60 text-slate-300 hover:text-gold transition-all text-xs gap-1 relative group"
          title="Marcadores salvos"
        >
          <Bookmark className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-sans">Salvos</span>
          {bookmarks.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[9px] font-bold px-1.5 py-0.2 rounded-full">
              {bookmarks.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsPreferencesOpen(true)}
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-celestial-surface border border-gold/20 hover:border-gold/60 text-slate-300 hover:text-gold transition-all text-xs gap-1 group"
          title="Ajustes de visualização e tema"
        >
          <Sliders className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-sans">Ajustes</span>
        </button>
      </div>

      {/* Chapters Navigation List */}
      <div className="flex-1 space-y-1.5 mb-6">
        <div className="text-[11px] font-sans font-semibold tracking-wider text-slate-400 uppercase px-2 mb-2">
          Capítulos do Códice
        </div>
        {CHAPTERS_META.map(cap => {
          const isActive = activeChapter === cap.id;
          return (
            <button
              key={cap.id}
              onClick={() => setActiveChapter(cap.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 group relative ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-yellow-200 border border-gold/50 shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white border border-transparent'
              }`}
            >
              <span className="text-base group-hover:scale-110 transition-transform">{cap.icon}</span>
              <span className="truncate font-sans text-xs tracking-wide">{cap.shortTitle}</span>
              {isActive && (
                <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Sidebar Controls Footer */}
      <div className="pt-4 border-t border-gold/20 space-y-4 text-xs">
        
        {/* Ambient Audio Synth Widget */}
        <div className="bg-celestial-surface p-3 rounded-xl border border-gold/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 font-sans text-xs font-medium">Som Celestial</span>
            <button
              onClick={toggleAudio}
              className={`p-1.5 rounded-lg border transition-all ${
                isPlaying
                  ? 'bg-amber-500/20 border-yellow-500/50 text-yellow-300 shadow-[0_0_8px_rgba(250,204,21,0.4)]'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title={isPlaying ? 'Mutar Drone Cósmico' : 'Ativar Drone Cósmico'}
            >
              {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">🔈</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
            />
            <span className="text-[10px] text-slate-400">🔊</span>
          </div>
        </div>

        {/* Font Resizer Quick Control */}
        <div className="bg-celestial-surface p-3 rounded-xl border border-gold/20 flex items-center justify-between">
          <span className="text-slate-300 font-sans text-xs">Tamanho Fonte</span>
          <div className="flex items-center gap-1">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-bold border border-slate-700"
              title="Diminuir texto"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 bg-slate-800/50 hover:bg-slate-700 text-amber-300 rounded text-[10px] font-mono border border-slate-700/50"
              title="Resetar para 100%"
            >
              {settings.fontSizeScale}%
            </button>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-bold border border-slate-700"
              title="Aumentar texto"
            >
              A+
            </button>
          </div>
        </div>

        {/* Home / Cover return */}
        <button
          onClick={goToCover}
          className="w-full py-2 px-3 flex items-center justify-center gap-2 bg-slate-800/40 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg text-xs transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Voltar para a Capa</span>
        </button>

      </div>
    </aside>
  );
};

