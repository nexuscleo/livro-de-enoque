import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useAudio } from '../../context/AudioContext';
import { BookOpen, Sparkles } from 'lucide-react';
import { Footer } from './Footer';

export const CoverScreen: React.FC = () => {
  const { openBook } = useNavigation();
  const { start } = useAudio();

  const handleOpenBook = () => {
    openBook();
    start();
  };

  return (
    <section className="h-[100dvh] min-h-[100dvh] w-full flex flex-col items-center justify-between p-3 sm:p-6 py-2.5 sm:py-8 relative z-10 animate-fade-in overflow-hidden safe-top safe-bottom">
      
      {/* Spacer for top vertical balance */}
      <div className="hidden sm:block" />

      {/* Main Cover Card */}
      <div className="w-full max-w-4xl bg-celestial-surface/95 border border-gold/40 shadow-2xl rounded-2xl p-3.5 sm:p-7 md:p-10 backdrop-blur-md relative my-auto">
        
        {/* Decorative background ambient glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 md:gap-10 items-center">
          
          {/* Left Column (Image & Seal) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="w-24 h-34 xs:w-28 xs:h-38 sm:w-44 sm:h-60 md:w-56 md:h-76 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold/50 shadow-gold relative group">
              <img 
                src="./assets/enoque_capa_mystic.webp" 
                alt="Capa do Livro de Enoque"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Seal SVG (Visible on screens >= sm) */}
            <div className="w-8 h-8 sm:w-12 sm:h-12 mt-2 sm:mt-3 opacity-80 hidden sm:block">
              <svg className="w-full h-full stroke-yellow-400 fill-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="50,5 90,75 10,75" strokeWidth="1.2" />
                <polygon points="50,95 90,25 10,25" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="15" strokeWidth="1" />
                <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.8" />
                <line x1="10" y1="25" x2="90" y2="75" strokeWidth="0.8" />
                <line x1="10" y1="75" x2="90" y2="25" strokeWidth="0.8" />
              </svg>
            </div>
          </div>

          {/* Right Column (Titles, Synopsis, CTA Button) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Title & Subtitle */}
            <h1 className="font-deco text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-light tracking-wider mb-1 sm:mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] animate-celestial-pulse leading-none">
              ENOQUE
            </h1>
            
            <div className="text-[10px] sm:text-xs md:text-sm font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-mystic-blue uppercase mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
              <span>O Códice Celestial</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 md:hidden" />
            </div>

            {/* Description */}
            <p className="text-slate-300 text-[11px] sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-6 md:mb-8 font-body max-w-md line-clamp-2 sm:line-clamp-none">
              Explore a compilação completa dos textos apócrifos: os anjos Vigilantes, os mistérios cosmológicos e a revelação do escriba sagrado.
            </p>

            {/* Action Button */}
            <button
              onClick={handleOpenBook}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3.5 md:py-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-400 hover:to-amber-500 text-slate-950 font-header font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 touch-manipulation w-full sm:w-auto"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-6 shrink-0" />
              <span>ABRIR O CÓDICE</span>
            </button>

            {/* Sub-label */}
            <span className="text-[9px] sm:text-[11px] text-slate-400 font-sans mt-1.5 sm:mt-3 hidden xs:block">
              Contém os 7 capítulos completos com ilustrações
            </span>

          </div>

        </div>

      </div>

      {/* Guaranteed Visible Subtle Footer */}
      <Footer className="mt-auto pt-1 pb-1 shrink-0" />

    </section>
  );
};
