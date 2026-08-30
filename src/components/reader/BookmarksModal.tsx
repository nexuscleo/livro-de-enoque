import React, { useEffect } from 'react';
import { useReader } from '../../context/ReaderContext';
import { useNavigation } from '../../context/NavigationContext';
import { Bookmark as BookmarkIcon, X, Trash2, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/formatters';

export const BookmarksModal: React.FC = () => {
  const { isBookmarksOpen, setIsBookmarksOpen, bookmarks, removeBookmark } = useReader();
  const { setActiveChapter } = useNavigation();

  useEffect(() => {
    if (isBookmarksOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsBookmarksOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isBookmarksOpen, setIsBookmarksOpen]);

  if (!isBookmarksOpen) return null;

  const handleGoToBookmark = (chapterId: string) => {
    setActiveChapter(chapterId);
    setIsBookmarksOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setIsBookmarksOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-celestial-surface border border-gold/40 rounded-2xl p-4 sm:p-6 shadow-2xl z-10 animate-scale-up max-h-[88vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="w-5 h-5 text-amber-400" />
            <h3 className="font-header font-bold text-base sm:text-lg text-gold">Capítulos Salvos</h3>
          </div>
          <button
            onClick={() => setIsBookmarksOpen(false)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white active:scale-95"
            title="Fechar (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          {bookmarks.length === 0 ? (
            <div className="py-10 sm:py-12 text-center text-slate-400 text-xs sm:text-sm">
              <BookmarkIcon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 mx-auto mb-2 opacity-50" />
              <p>Nenhum marcador salvo ainda.</p>
              <p className="text-xs text-slate-400 mt-1">
                Toque no botão &quot;Salvar&quot; no topo de qualquer capítulo para guardar seus favoritos.
              </p>
            </div>
          ) : (
            bookmarks.map(bm => (
              <div
                key={bm.id}
                className="p-3 sm:p-3.5 rounded-xl bg-celestial-elevated/40 border border-slate-800 hover:border-gold/40 transition-all flex flex-col gap-1.5 group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-header font-bold text-xs sm:text-sm text-gold-light truncate pr-2">
                    {bm.chapterTitle}
                  </h4>
                  <button
                    onClick={() => removeBookmark(bm.id)}
                    className="p-1 text-slate-400 hover:text-rose-400 transition-colors active:scale-95 shrink-0"
                    title="Remover marcador"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 font-body italic line-clamp-2">
                  &quot;{bm.excerpt}&quot;
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px] sm:text-[11px] text-slate-400">
                  <span>{formatDate(bm.createdAt)}</span>
                  <button
                    onClick={() => handleGoToBookmark(bm.chapterId)}
                    className="flex items-center gap-1 text-amber-400 hover:text-yellow-300 font-medium font-sans active:scale-95"
                  >
                    <span>Ir para o capítulo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
