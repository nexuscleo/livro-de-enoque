import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { CHAPTERS_META } from '../../data/chaptersData';
import { Menu, Home } from 'lucide-react';

export const MobileHeader: React.FC = () => {
  const { toggleMobileMenu, goToCover, activeChapter } = useNavigation();
  const currentChapter = CHAPTERS_META.find(c => c.id === activeChapter) || CHAPTERS_META[0];

  return (
    <header className="lg:hidden flex items-center justify-between px-3.5 py-2.5 bg-celestial-sidebar/95 border-b border-gold/30 backdrop-blur-md sticky top-0 z-30 shadow-md">
      
      {/* Brand & Home */}
      <div 
        onClick={goToCover}
        className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
      >
        <img 
          src="./assets/favicon.webp" 
          alt="Enoque" 
          className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
        />
        <span className="font-header font-bold text-sm sm:text-base text-gold tracking-wider">
          ENOQUE
        </span>
      </div>

      {/* Active Chapter Pill (Clicking opens menu) */}
      <button
        onClick={toggleMobileMenu}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-celestial-surface border border-gold/40 text-yellow-200 text-xs font-sans font-semibold active:scale-95 transition-all shadow-sm max-w-[170px] truncate"
      >
        <span>{currentChapter.icon}</span>
        <span className="truncate">{currentChapter.number}</span>
      </button>

      {/* Menu / Home Icon Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={goToCover}
          className="p-2 rounded-lg bg-celestial-surface border border-gold/20 text-slate-300 active:scale-95 transition-transform"
          title="Voltar à Capa"
          aria-label="Capa"
        >
          <Home className="w-4 h-4 text-amber-400" />
        </button>

        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-amber-500/15 border border-gold/40 text-yellow-300 active:scale-95 transition-transform"
          title="Menu de Capítulos"
          aria-label="Capítulos"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

    </header>
  );
};
