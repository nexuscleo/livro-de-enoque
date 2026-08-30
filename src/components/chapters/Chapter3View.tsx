import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';
import { HeavensLadder } from '../interactive/HeavensLadder';

export const Chapter3View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-8 px-3.5 sm:px-6">
      
      <ReaderToolbar
        chapterId="cap3"
        chapterNumber="Capítulo III"
        chapterTitle="A Jornada Mística pelos Dez Céus"
        readTimeMinutes={10}
      />

      <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo III
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-2 sm:mb-3 leading-tight">
          A Jornada Mística pelos Dez Céus
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-mystic-blue font-sans leading-snug">
          A Ascensão Consciencial, Geografia Espiritual e os Paralelos nos Sistemas Místicos
        </p>
      </header>

      <div className="space-y-5 sm:space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          O <em>Segundo Livro de Enoque</em> (versão eslava) oferece um dos roteiros cosmológicos mais detalhados do misticismo primitivo ao narrar a ascensão de Enoque através das dez esferas ou camadas celestes. Guiado por dois anjos de aparência indescritível e reluzente, o escriba humano atravessou as barreiras físicas da Terra para testemunhar o funcionamento das forças invisíveis do universo.
        </p>

        <p>
          Esta viagem não representa apenas uma travessia espacial, mas uma jornada de purificação da própria consciência. Em cada céu, Enoque confronta mistérios astrológicos, o tormento de seres que violaram a harmonia cósmica e a adoração radiante das hostes que sustentam o trono divino.
        </p>

        {/* Interactive Heavens Ladder Component */}
        <HeavensLadder />

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Paralelos nos Sistemas Iniciáticos
        </h3>
        <p>
          A estrutura das 10 esferas celestes descrita nos textos enoquianos possui correspondências profundas com outros caminhos de misticismo comparado da humanidade:
        </p>

        <ul className="list-disc list-inside space-y-2.5 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">A Árvore da Vida Cabalística:</strong> As 10 camadas celestes refletem perfeitamente as 10 <em>Sefiroth</em> (emanações divinas), constituindo uma escada geométrica espiritual que o iniciado percorre desde o plano material de <em>Malkuth</em> até a coroa divina de <em>Kether</em>.
          </li>
          <li>
            <strong className="text-yellow-300">Os Centros de Energia (Yoga):</strong> A subida enoquiana espelha o despertar da energia <em>Kundalini</em>, que ascende pelos centros vitais (chakras) do corpo sutil até a coroação espiritual no <em>Sahasrara</em> (o lótus de mil pétalas no topo da cabeça).
          </li>
          <li>
            <strong className="text-yellow-300">O Sufismo Islâmico:</strong> A jornada através das esferas celestes assemelha-se ao percurso místico das estações da alma (<em>maqamat</em>), que culmina no aniquilamento do ego (<em>Fana</em>) na presença gloriosa do Amado.
          </li>
          <li>
            <strong className="text-yellow-300">O Taoismo de Alquimia Interna:</strong> O retorno progressivo à energia primordial não-criada (<em>Wuji</em>), desfazendo as amarras da matéria passo a passo.
          </li>
        </ul>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Os Céus como Níveis de Consciência
        </h3>
        <p>
          Sob uma ótica psicológica e esotérica, a jornada de Enoque pelas camadas celestes é uma representação da elevação progressiva da consciência humana:
        </p>

        <ul className="list-disc list-inside space-y-2 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">Céus Inferiores (1º ao 3º):</strong> A conscientização ética. A alma percebe que está sob observação divina (1º), confronta o tormento da desobediência e as consequências kármicas (2º), e se depara com a dualidade extrema entre a luz do Paraíso e a dor do Inferno (3º).
          </li>
          <li>
            <strong className="text-yellow-300">Céus Intermediários (4º ao 6º):</strong> O entendimento da harmonia cósmica. O iniciado aprende a ordem matemática dos astros (4º), integra a melancolia existencial dos Vigilantes através da liturgia (5º), e compreende a hierarquia divina administrada pelos arcanjos (6º).
          </li>
          <li>
            <strong className="text-yellow-300">Céus Superiores (7º ao 10º):</strong> A dissolução mística. A alma entra no limiar do fogo sagrado (7º), contempla as estrelas fixas em Muzaloth (8º), acessa os arquétipos atemporais da criação primordial (9º) e atinge a completa deificação no Trono de Glória (10º).
          </li>
        </ul>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Estrutura Geométrica do Cosmos
        </h3>
        <p>
          A cosmologia de Enoque não é apenas descritiva, mas rigorosamente geométrica. O universo é retratado como uma série de círculos concêntricos em torno do Trono Divino, com uma simetria micro-macrocósmica. Há 12 portais celestes dispostos nas quatro direções cardeais, determinando as saídas e entradas do Sol, da Lua e dos ventos. A recorrência de números sagrados como 3, 7 e 12 estabelece um padrão de harmonia e proporção que conecta a criação à mente matemática de Deus.
        </p>

        {/* Chapter Illustration */}
        <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="/assets/dez_ceus_esferas.webp" 
            alt="A Jornada pelos Dez Céus"
            className="w-full max-h-80 sm:max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            Representação cósmica das dez esferas e planos de ascensão até a morada divina do Trono.
          </div>
        </div>

      </div>

      <ChapterFooterNav currentChapterId="cap3" />

    </article>
  );
};
