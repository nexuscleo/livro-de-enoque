import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';
import { CitationsLibrary } from '../interactive/CitationsLibrary';

export const Chapter6View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      
      <ReaderToolbar
        chapterId="cap6"
        chapterNumber="Capítulo VI"
        chapterTitle="Biblioteca de Citações e Sabedoria"
        readTimeMinutes={5}
      />

      <header className="mb-8 pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo VI
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-3">
          Biblioteca de Citações e Sabedoria
        </h1>
        <p className="text-sm sm:text-base text-mystic-blue font-sans">
          Repositório de Máximas Teológicas, Exortações e Profecias dos Manuscritos Antigos
        </p>
      </header>

      <div className="space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          Os Livros de Enoque são ricos em ensinamentos, exortações éticas e profecias. A preservação destas passagens serve como um repositório de sabedoria antiga para aqueles que buscam a compreensão dos mistérios cosmológicos e espirituais.
        </p>
        
        <p>
          Abaixo, você encontrará o banco de citações traduzido de manuscritos antigos. Utilize o buscador instantâneo e os filtros por temas para selecionar os conselhos, avisos e revelações do escriba celestial, com a possibilidade de copiar qualquer trecho formatado com sua devida referência.
        </p>

        {/* Interactive Citations Library */}
        <CitationsLibrary />

        {/* Chapter Illustration */}
        <div className="my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="./assets/biblioteca_sabedoria.webp" 
            alt="Biblioteca da Sabedoria Enoquiana"
            className="w-full max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            A biblioteca de revelações celestes e pergaminhos sagrados contendo os decretos eternos do universo.
          </div>
        </div>

      </div>

      <ChapterFooterNav currentChapterId="cap6" />

    </article>
  );
};

