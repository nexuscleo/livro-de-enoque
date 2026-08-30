import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';
import { MeditationGuide } from '../interactive/MeditationGuide';

export const Chapter7View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-8 px-3.5 sm:px-6">
      
      <ReaderToolbar
        chapterId="cap7"
        chapterNumber="Capítulo VII"
        chapterTitle="Simbologia Enoquiana e Aplicações Místicas"
        readTimeMinutes={8}
      />

      <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo VII
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-2 sm:mb-3 leading-tight">
          Simbologia Enoquiana e Aplicações Místicas
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-mystic-blue font-sans leading-snug">
          A Merkabah, os Quatro Querubins Cardeais, a Magia Renascentista e Práticas Contemplativas
        </p>
      </header>

      <div className="space-y-5 sm:space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          Os textos enoquianos criaram a fundação para os mais complexos sistemas simbólicos e esotéricos da civilização ocidental e oriental. Ao decifrar o códice enoquiano, confrontamos símbolos arquetípicos universais de ordem cósmica, transição de consciência e reintegração espiritual.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Merkabah: O Trono Móvel como Dínamo Cósmico
        </h3>
        <p>
          A carruagem divina ou <strong>Merkabah</strong> descrita por Enoque (e posteriormente detalhada na visão do profeta Ezequiel) não é apenas um veículo de glória, mas sim o próprio dínamo cósmico que sustenta a realidade criada. Ela representa a manifestação ativa da vontade inefável de Deus no plano da manifestação física. A carruagem é descrita como sendo feita de fogo adamantino e metal incandescente, movida por rodas de olhos vivos e querubins, simbolizando que a criação divina é dinâmica, consciente e ordenada geometricamente.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Os Quatro Querubins e as Direções Cardeais
        </h3>
        <p>
          A manifestação da divindade única expressa-se de forma quadrangular através dos quatro Querubins que sustentam a Merkabah, estabelecendo uma simetria cosmológica universal:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          <div className="p-3 sm:p-3.5 rounded-xl bg-celestial-surface border border-gold/30">
            <strong className="text-sky-300 font-header block mb-1 text-sm sm:text-base">Leste — A Face de Homem (Ar)</strong>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Representa a razão humana, a sabedoria, o intelecto e a revelação do logos divino.</p>
          </div>
          <div className="p-3 sm:p-3.5 rounded-xl bg-celestial-surface border border-gold/30">
            <strong className="text-rose-400 font-header block mb-1 text-sm sm:text-base">Oeste — A Face de Leão (Fogo)</strong>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Simboliza a força ativa, a coragem, o poder da vontade inflexível e a severidade divina.</p>
          </div>
          <div className="p-3 sm:p-3.5 rounded-xl bg-celestial-surface border border-gold/30">
            <strong className="text-amber-300 font-header block mb-1 text-sm sm:text-base">Norte — A Face de Boi (Terra)</strong>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Representa a estabilidade, a matéria sólida, a constância e a sustentação física.</p>
          </div>
          <div className="p-3 sm:p-3.5 rounded-xl bg-celestial-surface border border-gold/30">
            <strong className="text-emerald-300 font-header block mb-1 text-sm sm:text-base">Sul — A Face de Águia (Água)</strong>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Simboliza as correntes celestes superiores, a adaptabilidade emocional e a transmutação.</p>
          </div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Árvore da Vida e os Portões Celestiais
        </h3>
        <p>
          A árvore sagrada descrita por Enoque no meio do Éden (cujo tronco chega aos céus e cujas raízes alcançam as profundezas) é a representação do <strong>Axis Mundi</strong> (o Eixo do Mundo), que conecta os planos materiais aos transcendentais. Esta imagem inspirou a posterior Árvore da Vida Cabalística, cujas dez Sefiroth servem como degraus para a reintegração espiritual.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          O Simbolismo de Luz e Fogo
        </h3>
        <p>
          Diferente de sistemas alquímicos onde o fogo é destrutivo e a luz é puramente intelectual, nos textos apócrifos eles são duas faces da mesma substância divina: o <strong>fogo celestial</strong> purifica as escórias da matéria sem consumir a essência (o fogo sagrado do Trono), enquanto a <strong>luz incognoscível</strong> ilumina os olhos da alma permitindo a compreensão (<em>Gnosis</em>) dos decretos cósmicos eternos.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          John Dee e o Mal-entendido da &quot;Magia Enoquiana&quot;
        </h3>
        <p>
          No século XVI, o sábio renascentista John Dee e o vidente Edward Kelley desenvolveram um sistema de evocação que batizaram de <em>&quot;Magia Enoquiana&quot;</em>, contendo uma língua própria (o idioma angélico), tabuleiros quadrangulares e chamadas mágicas para evocar anjos através de trinta esferas chamadas <em>Aethyrs</em>.
        </p>
        <p>
          É crucial esclarecer que o Livro de Enoque original <strong>não é um grimório de feitiçaria ou magia operativa</strong>: ele não ensina invocações para obter poder pessoal, manipular a realidade terrestre ou conjurar espíritos. O texto original é puramente cosmológico, ético e contemplativo. O seu objetivo é a elevação ética da alma e a compreensão da harmonia do Criador.
        </p>

        {/* Interactive Guided Meditation Guide */}
        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Aplicações Contemplativas (Práticas Guiadas)
        </h3>
        <MeditationGuide />

        {/* Chapter Illustration */}
        <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="/assets/simbologia_enoquiana.webp" 
            alt="Simbologia Enoquiana"
            className="w-full max-h-80 sm:max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            O Trono Móvel da Merkabah e as chaves geométricas da criação cosmológica.
          </div>
        </div>

      </div>

      <ChapterFooterNav currentChapterId="cap7" />

    </article>
  );
};
