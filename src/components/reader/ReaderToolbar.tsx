import React, { useState } from 'react';
import { useReader } from '../../context/ReaderContext';
import { Bookmark, BookmarkCheck, Share2, Check, Clock } from 'lucide-react';
import { copyToClipboard } from '../../utils/formatters';

interface ReaderToolbarProps {
  chapterId: string;
  chapterNumber: string;
  chapterTitle: string;
  readTimeMinutes: number;
}

export const ReaderToolbar: React.FC<ReaderToolbarProps> = ({
  chapterId,
  chapterNumber,
  chapterTitle,
  readTimeMinutes
}) => {
  const { addBookmark, removeBookmark, isBookmarked, bookmarks } = useReader();
  const [copied, setCopied] = useState(false);

  const bookmarked = isBookmarked(chapterId);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      const item = bookmarks.find(b => b.chapterId === chapterId);
      if (item) removeBookmark(item.id);
    } else {
      addBookmark(chapterId, `${chapterNumber}: ${chapterTitle}`, `Marcado em ${chapterNumber}`);
    }
  };

  const handleShare = async () => {
    const success = await copyToClipboard(
      `Estou lendo "${chapterNumber}: ${chapterTitle}" no Códice Celestial do Livro de Enoque!`,
      chapterNumber
    );
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 sm:gap-3 py-2.5 sm:py-3 px-3 sm:px-4 mb-5 sm:mb-6 bg-celestial-surface/90 border border-gold/30 rounded-xl backdrop-blur-md shadow-sm">
      
      {/* Chapter Time & Meta */}
      <div className="flex items-center gap-2 sm:gap-3 text-xs text-slate-300 font-sans">
        <span className="text-yellow-400 font-header font-bold text-xs sm:text-sm">{chapterNumber}</span>
        <span className="text-slate-600 hidden xs:inline">•</span>
        <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-amber-400/80" />
          <span>{readTimeMinutes} min</span>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        
        {/* Bookmark Button */}
        <button
          onClick={handleToggleBookmark}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 touch-manipulation ${
            bookmarked
              ? 'bg-amber-500/20 border-yellow-400 text-yellow-300'
              : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:border-gold/40'
          }`}
          title={bookmarked ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
        >
          {bookmarked ? (
            <BookmarkCheck className="w-3.5 h-3.5 text-yellow-400" />
          ) : (
            <Bookmark className="w-3.5 h-3.5 text-slate-400" />
          )}
          <span className="text-[11px] sm:text-xs">{bookmarked ? 'Salvo' : 'Salvar'}</span>
        </button>

        {/* Share / Copy */}
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-gold/40 transition-all active:scale-95 touch-manipulation"
          title="Compartilhar capítulo"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans text-[11px] sm:text-xs">Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] sm:text-xs">Compartilhar</span>
            </>
          )}
        </button>

      </div>

    </div>
  );
};
