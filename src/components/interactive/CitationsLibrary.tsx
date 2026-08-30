import React, { useState } from 'react';
import { CITATIONS_DATA } from '../../data/citationsData';
import { CitationTag } from '../../types/citation';
import { Search, Quote, Copy, Check, Filter } from 'lucide-react';
import { copyToClipboard } from '../../utils/formatters';

export const CitationsLibrary: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<CitationTag>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tags: { id: CitationTag; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'queda', label: 'Queda dos Anjos' },
    { id: 'ascensao', label: 'Ascensão' },
    { id: 'julgamento', label: 'Julgamento' },
    { id: 'sabedoria', label: 'Sabedoria' },
    { id: 'filho', label: 'Filho do Homem' },
  ];

  const filteredCitations = CITATIONS_DATA.filter(cit => {
    const matchesTag = selectedTag === 'all' || cit.tag === selectedTag;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      cit.text.toLowerCase().includes(query) || 
      cit.ref.toLowerCase().includes(query);
    return matchesTag && matchesSearch;
  });

  const handleCopy = async (id: string, text: string, ref: string) => {
    const success = await copyToClipboard(text, ref);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="my-6 sm:my-8 space-y-4 sm:space-y-6">
      
      {/* Search and Tags Filtering Bar */}
      <div className="p-3.5 sm:p-5 bg-celestial-surface/90 border border-gold/40 rounded-2xl shadow-xl space-y-3 sm:space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar citações (ex: Vigilantes, Luz, Fogo, Sabedoria)..."
            className="w-full pl-9 sm:pl-10 pr-3.5 sm:pr-4 py-2 sm:py-2.5 bg-celestial-input border border-gold/30 rounded-xl text-slate-100 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-yellow-400 font-body transition-colors"
          />
        </div>

        {/* Tags Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none select-none">
          <div className="flex items-center gap-1 text-xs text-slate-400 mr-1 font-sans shrink-0">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xs:inline">Temas:</span>
          </div>
          {tags.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 active:scale-95 touch-manipulation ${
                selectedTag === t.id
                  ? 'bg-amber-500/25 border border-yellow-400 text-yellow-200 shadow-sm'
                  : 'bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

      </div>

      {/* Citations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        {filteredCitations.length === 0 ? (
          <div className="md:col-span-2 py-10 sm:py-12 text-center text-slate-400 text-xs sm:text-sm bg-celestial-surface/50 border border-slate-800 rounded-2xl">
            <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 mx-auto mb-2 opacity-50" />
            <p>Nenhuma citação encontrada para o filtro selecionado.</p>
          </div>
        ) : (
          filteredCitations.map((cit, idx) => {
            const citKey = cit.id || `cit-${idx}`;
            const isCopied = copiedId === citKey;
            let tagBadge = cit.tag.toUpperCase();
            if (cit.tag === 'filho') tagBadge = 'FILHO DO HOMEM';

            return (
              <div
                key={citKey}
                className="p-3.5 sm:p-5 rounded-2xl bg-celestial-surface border border-gold/30 hover:border-gold/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-gold/30">
                      [ {tagBadge} ]
                    </span>
                    <button
                      onClick={() => handleCopy(citKey, cit.text, cit.ref)}
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-slate-400 hover:text-white transition-all flex items-center gap-1"
                      title="Copiar citação formatada"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400 font-sans">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] text-slate-400 font-sans hidden xs:inline">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm font-body italic text-slate-200 leading-relaxed mb-3 sm:mb-4">
                    &quot;{cit.text}&quot;
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-yellow-400/90 font-header font-bold">
                  <span>{cit.ref}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
