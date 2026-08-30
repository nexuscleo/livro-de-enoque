import React, { useState } from 'react';
import { WATCHERS_DATA } from '../../data/watchersData';
import { Eye, ShieldAlert, BookOpen, Flame } from 'lucide-react';

export const WatchersCodex: React.FC = () => {
  const [selectedWatcherId, setSelectedWatcherId] = useState<string>('samyaza');

  const currentWatcher = WATCHERS_DATA.find(w => w.id === selectedWatcherId) || WATCHERS_DATA[0];

  return (
    <div className="my-6 sm:my-8 p-3.5 sm:p-6 bg-celestial-surface/90 border border-gold/40 rounded-2xl shadow-xl backdrop-blur-sm">
      
      {/* Header */}
      <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4 pb-2.5 sm:pb-3 border-b border-gold/20">
        <div className="p-1.5 sm:p-2 rounded-xl bg-amber-500/10 border border-gold/30 text-amber-400">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h3 className="font-header font-bold text-sm sm:text-base md:text-lg text-gold-light">
            O Códice dos 20 Vigilantes (Interativo)
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
            Toque em um líder rebelde para desvendar seus ensinamentos e sentença.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5">
        
        {/* Watchers Selector */}
        <div className="lg:col-span-4 flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-y-auto max-h-48 sm:max-h-60 lg:max-h-80 pb-2 lg:pb-0 pr-1 select-none scrollbar-thin">
          {WATCHERS_DATA.map((w, idx) => {
            const isSelected = w.id === selectedWatcherId;
            return (
              <button
                key={w.id}
                onClick={() => setSelectedWatcherId(w.id)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-sans transition-all shrink-0 lg:shrink active:scale-95 touch-manipulation min-h-[38px] ${
                  isSelected
                    ? 'bg-amber-500/25 border border-yellow-400 text-yellow-200 font-semibold shadow-sm'
                    : 'bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[10px] text-amber-400/80 font-mono">#{idx + 1}</span>
                  <span className="truncate">{w.name}</span>
                </div>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Watcher Details Box */}
        <div className="lg:col-span-8 bg-celestial-elevated/60 border border-gold/30 rounded-xl p-3.5 sm:p-5 flex flex-col justify-between">
          
          <div>
            {/* Title & Meaning */}
            <div className="flex flex-wrap items-baseline justify-between gap-1.5 pb-2.5 sm:pb-3 mb-3 sm:mb-4 border-b border-slate-700/60">
              <h4 className="font-header font-bold text-lg sm:text-xl text-gold-light">
                {currentWatcher.name}
              </h4>
              <span className="text-xs sm:text-sm text-mystic-blue italic font-spectral">
                &quot;{currentWatcher.meaning}&quot;
              </span>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-3 sm:mb-4">
              
              {/* Role */}
              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-800/60 border border-slate-700/80">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Hierarquia & Função</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                  {currentWatcher.role}
                </p>
              </div>

              {/* Teaching */}
              <div className="p-2.5 sm:p-3 rounded-lg bg-slate-800/60 border border-slate-700/80">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ensino Proibido</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                  {currentWatcher.teaching}
                </p>
              </div>

            </div>

            {/* Divine Fate / Judgment */}
            <div className="p-2.5 sm:p-3.5 rounded-lg bg-rose-950/20 border border-rose-800/40">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Julgamento & Destino Decretado</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {currentWatcher.fate}
              </p>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex justify-between items-center text-[10px] sm:text-[11px] text-slate-400">
            <span>Fonte: 1 Enoque 6-8 (Versão Etíope)</span>
            <span className="text-amber-400 font-mono">ID: {currentWatcher.id}</span>
          </div>

        </div>

      </div>

    </div>
  );
};
