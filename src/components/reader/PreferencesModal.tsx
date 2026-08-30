import React, { useEffect } from 'react';
import { useReader } from '../../context/ReaderContext';
import { FontFamily, ThemeMode } from '../../types/reader';
import { X, Type, Palette, AlignLeft, AlignJustify, RotateCcw } from 'lucide-react';

export const PreferencesModal: React.FC = () => {
  const { 
    isPreferencesOpen, 
    setIsPreferencesOpen, 
    settings, 
    updateSettings,
    resetFontSize 
  } = useReader();

  useEffect(() => {
    if (isPreferencesOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsPreferencesOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isPreferencesOpen, setIsPreferencesOpen]);

  if (!isPreferencesOpen) return null;

  const themes: { id: ThemeMode; name: string; bg: string; border: string }[] = [
    { id: 'celestial', name: 'Celestial Dark', bg: 'bg-[#070a12]', border: 'border-yellow-500/50' },
    { id: 'parchment', name: 'Papiro Antigo', bg: 'bg-[#1c1813]', border: 'border-amber-600/50' },
    { id: 'amoled', name: 'AMOLED Black', bg: 'bg-black', border: 'border-zinc-700' },
    { id: 'solar', name: 'Solar Claro', bg: 'bg-slate-100 text-slate-900', border: 'border-slate-300' },
  ];

  const fonts: { id: FontFamily; name: string; desc: string }[] = [
    { id: 'spectral', name: 'Spectral', desc: 'Serifada Clássica & Editorial' },
    { id: 'cinzel', name: 'Cinzel', desc: 'Monumental & Mística' },
    { id: 'inter', name: 'Inter', desc: 'Moderna & Sans-Serif' },
    { id: 'mono', name: 'Mono Code', desc: 'Espaçamento Fixo & Técnico' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setIsPreferencesOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-celestial-surface border border-gold/40 rounded-2xl p-4 sm:p-6 shadow-2xl z-10 animate-scale-up max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gold/20 sticky top-0 bg-celestial-surface z-10">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-amber-400" />
            <h3 className="font-header font-bold text-base sm:text-lg text-gold">Ajustes de Leitura</h3>
          </div>
          <button
            onClick={() => setIsPreferencesOpen(false)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white active:scale-95"
            title="Fechar (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-sm">
          
          {/* Theme Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Tema Visual
            </label>
            <div className="grid grid-cols-2 gap-2">
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => updateSettings({ theme: t.id })}
                  className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border text-left transition-all active:scale-95 ${
                    settings.theme === t.id
                      ? 'border-yellow-400 ring-2 ring-yellow-400/20 shadow-md font-semibold'
                      : 'border-slate-700/60 opacity-80 hover:opacity-100 hover:border-slate-500'
                  } ${t.bg}`}
                >
                  <div className={`w-3.5 h-3.5 rounded-full border shrink-0 ${t.border}`} />
                  <span className="text-xs truncate">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Family Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-amber-400" />
              <span>Família Tipográfica</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {fonts.map(f => (
                <button
                  key={f.id}
                  onClick={() => updateSettings({ fontFamily: f.id })}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all active:scale-95 ${
                    settings.fontFamily === f.id
                      ? 'bg-amber-500/20 border-yellow-400 text-yellow-200'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="font-semibold text-xs mb-0.5">{f.name}</div>
                  <div className="text-[10px] text-slate-400 leading-tight">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Scaling */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Escala do Texto: <span className="text-yellow-400 font-mono">{settings.fontSizeScale}%</span>
              </label>
              <button
                onClick={resetFontSize}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-300 active:scale-95"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restaurar Padrão</span>
              </button>
            </div>
            <input
              type="range"
              min="80"
              max="140"
              step="5"
              value={settings.fontSizeScale}
              onChange={(e) => updateSettings({ fontSizeScale: parseInt(e.target.value) })}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>80% (Pequeno)</span>
              <span>100% (Padrão)</span>
              <span>140% (Grande)</span>
            </div>
          </div>

          {/* Line Height & Alignment */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Espaçamento</label>
              <div className="flex gap-1">
                {(['normal', 'relaxed', 'loose'] as const).map(lh => (
                  <button
                    key={lh}
                    onClick={() => updateSettings({ lineHeight: lh })}
                    className={`flex-1 py-1.5 rounded-lg border text-xs capitalize active:scale-95 ${
                      settings.lineHeight === lh
                        ? 'bg-amber-500/20 border-yellow-400 text-yellow-300 font-semibold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {lh === 'normal' ? 'Normal' : lh === 'relaxed' ? 'Médio' : 'Amplo'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Alinhamento</label>
              <div className="flex gap-1">
                <button
                  onClick={() => updateSettings({ textAlignment: 'left' })}
                  className={`flex-1 py-1.5 flex items-center justify-center gap-1 rounded-lg border text-xs active:scale-95 ${
                    settings.textAlignment === 'left'
                      ? 'bg-amber-500/20 border-yellow-400 text-yellow-300 font-semibold'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                  <span>Esquerda</span>
                </button>
                <button
                  onClick={() => updateSettings({ textAlignment: 'justify' })}
                  className={`flex-1 py-1.5 flex items-center justify-center gap-1 rounded-lg border text-xs active:scale-95 ${
                    settings.textAlignment === 'justify'
                      ? 'bg-amber-500/20 border-yellow-400 text-yellow-300 font-semibold'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  <AlignJustify className="w-3.5 h-3.5" />
                  <span>Justificado</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
