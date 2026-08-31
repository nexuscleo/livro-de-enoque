import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { CHAPTERS_META } from '../../data/chaptersData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ChapterFooterNavProps {
  currentChapterId: string;
}

export const ChapterFooterNav: React.FC<ChapterFooterNavProps> = ({ currentChapterId }) => {
  const { setActiveChapter } = useNavigation();

  const currentIndex = CHAPTERS_META.findIndex(c => c.id === currentChapterId);
  const prevChapter = currentIndex > 0 ? CHAPTERS_META[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS_META.length - 1 ? CHAPTERS_META[currentIndex + 1] : null;

  return (
    <div className="pt-8 pb-12 mt-12 border-t border-gold/20 flex items-center justify-between gap-4">
      {/* Previous Button */}
      {prevChapter ? (
        <button
          onClick={() => setActiveChapter(prevChapter.id)}
          className="flex items-center gap-2.5 px-4 py-3 bg-celestial-surface hover:bg-slate-800 border border-gold/30 hover:border-gold/60 rounded-xl text-slate-200 hover:text-yellow-300 transition-all group max-w-[48%] active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform shrink-0" />
          <div className="text-left truncate">
            <span className="block text-[10px] text-slate-400 font-sans uppercase">Capítulo Anterior</span>
            <span className="font-header font-bold text-xs sm:text-sm truncate block">{prevChapter.number}</span>
          </div>
        </button>
      ) : (
        <div />
      )}

      {/* Next Button */}
      {nextChapter ? (
        <button
          onClick={() => setActiveChapter(nextChapter.id)}
          className="flex items-center gap-2.5 px-4 py-3 bg-celestial-surface hover:bg-slate-800 border border-gold/30 hover:border-gold/60 rounded-xl text-slate-200 hover:text-yellow-300 transition-all group ml-auto max-w-[48%] active:scale-95"
        >
          <div className="text-right truncate">
            <span className="block text-[10px] text-slate-400 font-sans uppercase">Próximo Capítulo</span>
            <span className="font-header font-bold text-xs sm:text-sm truncate block">{nextChapter.number}</span>
          </div>
          <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
