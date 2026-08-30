import React, { useState } from 'react';
import { Sparkles, Flame, Eye, Compass } from 'lucide-react';

export const MeditationGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const heavensSteps = [
    { title: "1º Céu (Estrelas & Elementos)", desc: "Sinta seu corpo físico como parte integrante da matéria cósmica, das águas e dos ciclos astronômicos da criação." },
    { title: "2º Céu (Confronto & Discernimento)", desc: "Observe seus pensamentos, sombras e apegos sem julgamento destrutivo, reconhecendo a necessidade de alinhá-los à ordem maior." },
    { title: "3º Céu (Luz e Sombra / Livre Escolha)", desc: "Visualize o paraíso interior da serenidade e as dores da dualidade, escolhendo deliberadamente assentar-se na harmonia divina." },
    { title: "4º a 7º Céus (Louvor e Presença)", desc: "Deixe que sua mente seja preenchida pelo silêncio profundo e pela luz dourada inextinguível que irradia do Trono interior." }
  ];

  return (
    <div className="my-8 space-y-6">
      
      {/* Practice 1: Celestial Ascension */}
      <div className="p-5 sm:p-6 rounded-2xl bg-celestial-surface border border-gold/40 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5 text-gold-light pb-3 border-b border-gold/20">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h4 className="font-header font-bold text-base sm:text-lg">
            Prática 1: Visualização Progressiva da Escada dos Céus
          </h4>
        </div>
        
        <p className="text-sm font-body text-slate-300 leading-relaxed">
          Sentado em uma postura confortável de meditação, respire suavemente e acompanhe cada etapa da ascensão de consciência:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2">
          {heavensSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeStep === idx
                  ? 'bg-amber-500/20 border-yellow-400 text-yellow-200'
                  : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[10px] font-sans font-bold uppercase text-amber-400/80 mb-1">
                Etapa {idx + 1}
              </div>
              <div className="font-header text-xs font-semibold">{step.title}</div>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-celestial-elevated/70 border border-gold/30 text-sm font-body text-slate-200 leading-relaxed animate-fade-in">
          <div className="flex items-center gap-2 text-xs font-sans font-bold text-yellow-400 uppercase mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>Foco Meditativo — {heavensSteps[activeStep].title}</span>
          </div>
          <p>{heavensSteps[activeStep].desc}</p>
        </div>
      </div>

      {/* Practice 2: Metatron Fire Transmutation */}
      <div className="p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-800/40 shadow-xl space-y-3">
        <div className="flex items-center gap-2.5 text-yellow-300 pb-2 border-b border-amber-800/30">
          <Flame className="w-5 h-5 text-amber-400" />
          <h4 className="font-header font-bold text-base sm:text-lg">
            Prática 2: Meditação na Transformação de Fogo
          </h4>
        </div>
        
        <p className="text-sm font-body text-slate-200 leading-relaxed">
          Contemple o mistério supremo de Metatron: de homem mortal a anjo de fogo luminoso. Questione-se internamente no silêncio do coração:
        </p>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-gold/20 italic text-sm text-yellow-200 font-spectral">
          &quot;Quais ilusões da minha personalidade terrena precisam ser consumidas pelo fogo da verdade para que minha verdadeira essência luminosa seja revelada?&quot;
        </div>

        <p className="text-xs text-slate-400 font-sans">
          Permaneça em silêncio receptivo por alguns minutos, observando o surgimento de clareza e paz íntima.
        </p>
      </div>

    </div>
  );
};

