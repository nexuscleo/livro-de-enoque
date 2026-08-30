import React, { useState } from 'react';
import { HEAVENS_DATA } from '../../data/heavensData';
import { Heaven } from '../../types/heaven';
import { Sparkles, X, ChevronRight, Compass } from 'lucide-react';

export const HeavensLadder: React.FC = () => {
  const [selectedHeaven, setSelectedHeaven] = useState<Heaven | null>(null);

  return (
    <div className="my-6 sm:my-8 p-3.5 sm:p-6 bg-celestial-surface/90 border border-gold/40 rounded-2xl shadow-xl backdrop-blur-sm">
      
      {/* Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5 pb-2.5 sm:pb-3 border-b border-gold/20">
        <div className="p-1.5 sm:p-2 rounded-xl bg-amber-500/10 border border-gold/30 text-amber-400">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h3 className="font-header font-bold text-sm sm:text-base md:text-lg text-gold-light">
            A Escada dos Dez Céus (Interativo)
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
            Toque em qualquer esfera para abrir a revelação completa de seus mistérios.
          </p>
        </div>
      </div>

      {/* Ladder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {HEAVENS_DATA.map((h) => (
          <button
            key={h.id}
            onClick={() => setSelectedHeaven(h)}
            className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-celestial-elevated/40 hover:bg-amber-500/15 border border-slate-800 hover:border-gold/50 transition-all text-left group active:scale-[0.98] touch-manipulation"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800/90 border border-gold/40 flex items-center justify-center font-header font-bold text-xs sm:text-sm text-yellow-300 group-hover:scale-110 transition-transform shrink-0">
                {h.id}º
              </div>
              <div className="min-w-0">
                <h4 className="font-header font-bold text-xs sm:text-sm text-slate-100 group-hover:text-yellow-200 truncate">
                  {h.name.split(':')[1]?.trim() || h.name}
                </h4>
                <span className="text-[10px] sm:text-[11px] text-mystic-blue font-sans truncate block">{h.concept}</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-yellow-300 group-hover:translate-x-0.5 transition-all shrink-0" />
          </button>
        ))}
      </div>

      {/* Heaven Detail Modal */}
      {selectedHeaven && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div 
            onClick={() => setSelectedHeaven(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm animate-fade-in"
          />

          <div className="relative w-full max-w-xl bg-celestial-surface border border-gold/50 rounded-2xl p-4 sm:p-6 shadow-2xl z-10 animate-scale-up max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-gold/20 sticky top-0 bg-celestial-surface z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 border border-yellow-400/60 flex items-center justify-center font-header font-bold text-sm sm:text-lg text-yellow-300 shrink-0">
                  {selectedHeaven.id}º
                </div>
                <div className="min-w-0">
                  <h3 className="font-header font-bold text-sm sm:text-lg text-gold-light truncate">
                    {selectedHeaven.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-mystic-blue font-sans uppercase tracking-wider font-semibold">
                    {selectedHeaven.concept}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedHeaven(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white active:scale-95 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-body leading-relaxed text-slate-200">
              <p>{selectedHeaven.desc}</p>

              {selectedHeaven.guardians && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-xs">
                  <span className="text-amber-400 font-semibold font-sans uppercase block mb-0.5">
                    Guardiões e Seres Celestiais:
                  </span>
                  <span className="text-slate-300">{selectedHeaven.guardians}</span>
                </div>
              )}

              {selectedHeaven.spiritualMeaning && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs">
                  <span className="text-yellow-300 font-semibold font-sans uppercase block mb-0.5 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Significado Iniciático / Consciencial:</span>
                  </span>
                  <span className="text-slate-300">{selectedHeaven.spiritualMeaning}</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-right">
              <button
                onClick={() => setSelectedHeaven(null)}
                className="w-full sm:w-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 rounded-lg text-xs font-semibold"
              >
                Fechar Revelação
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
