import React, { useState, useEffect, useRef } from 'react';
import { useReader } from '../../context/ReaderContext';
import { useNavigation } from '../../context/NavigationContext';
import { globalSearch, SearchResult } from '../../utils/searchEngine';
import { Search, X, BookOpen, Quote, Eye, Sparkles } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useReader();
  const { setActiveChapter } = useNavigation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      
      // Close on ESC key press
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsSearchOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchRes = globalSearch(query);
      setResults(searchRes);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isSearchOpen) return null;

  const handleSelectResult = (result: SearchResult) => {
    setActiveChapter(result.targetChapterId);
    setIsSearchOpen(false);
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'chapter': return <BookOpen className="w-4 h-4 text-yellow-400" />;
      case 'citation': return <Quote className="w-4 h-4 text-emerald-400" />;
      case 'watcher': return <Eye className="w-4 h-4 text-rose-400" />;
      case 'heaven': return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'gate': return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-4 sm:pt-20">
      
      {/* Backdrop */}
      <div 
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-celestial-surface border border-gold/50 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[88vh] animate-scale-up">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-gold/20 bg-celestial-sidebar gap-2.5 sm:gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar nos textos, Vigilantes, 10 Céus, Metatron..."
            className="w-full bg-transparent border-none text-slate-100 placeholder-slate-400 text-xs sm:text-base focus:outline-none font-body"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white sm:hidden active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
          <kbd 
            onClick={() => setIsSearchOpen(false)}
            className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-400 hover:text-white rounded cursor-pointer transition-colors"
            title="Pressione ESC para fechar"
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2.5 sm:p-3 space-y-2">
          {query.trim().length < 2 ? (
            <div className="py-8 sm:py-12 text-center text-slate-400 text-xs sm:text-sm">
              <Search className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 mx-auto mb-2 opacity-50" />
              <p>Digite pelo menos 2 caracteres para pesquisar em todo o Códice.</p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 text-xs">
                {['Azazel', 'Metatron', 'Dilúvio', 'Sétimo Céu', 'Sabedoria', 'Merkabah'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-amber-500/20 text-slate-300 hover:text-yellow-300 border border-slate-700 active:scale-95 transition-all text-xs"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 sm:py-12 text-center text-slate-400 text-xs sm:text-sm">
              <p>Nenhum resultado encontrado para &quot;<span className="text-yellow-300 font-semibold">{query}</span>&quot;.</p>
            </div>
          ) : (
            results.map(res => (
              <button
                key={res.id}
                onClick={() => handleSelectResult(res)}
                className="w-full text-left p-2.5 sm:p-3 rounded-xl bg-celestial-elevated/40 hover:bg-amber-500/15 border border-slate-800 hover:border-gold/50 transition-all flex items-start gap-2.5 sm:gap-3 group active:scale-[0.99]"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  {getTypeIcon(res.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5 mb-0.5">
                    <h4 className="font-header font-bold text-xs sm:text-sm text-gold-light group-hover:text-yellow-300 truncate">
                      {res.title}
                    </h4>
                    {res.tag && (
                      <span className="text-[9px] sm:text-[10px] uppercase font-sans font-bold px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700 shrink-0">
                        {res.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] sm:text-xs text-mystic-blue font-medium mb-0.5 truncate">
                    {res.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 font-body line-clamp-2 leading-relaxed">
                    {res.snippet}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-3.5 sm:px-4 py-2 bg-celestial-sidebar border-t border-gold/10 text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-between">
          <span>{results.length} resultado(s)</span>
          <span className="hidden sm:inline">Pressione ESC para fechar</span>
          <button onClick={() => setIsSearchOpen(false)} className="sm:hidden text-amber-400">Fechar</button>
        </div>

      </div>

    </div>
  );
};
