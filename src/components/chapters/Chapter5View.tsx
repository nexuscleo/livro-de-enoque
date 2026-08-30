import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';
import { MetatronCube } from '../interactive/MetatronCube';

export const Chapter5View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-8 px-3.5 sm:px-6">
      
      <ReaderToolbar
        chapterId="cap5"
        chapterNumber="Capítulo V"
        chapterTitle="A Transformação no Trono de Metatron"
        readTimeMinutes={9}
      />

      <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo V
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-2 sm:mb-3 leading-tight">
          A Transformação no Trono de Metatron
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-mystic-blue font-sans leading-snug">
          As Quatro Fases da Apoteose Ígnea, o Cubo Sagrado e os Setenta Nomes de Poder
        </p>
      </header>

      <div className="space-y-5 sm:space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          O ápice absoluto do misticismo apócrifo ocorre no <em>Terceiro Livro de Enoque</em>, que relata a apoteose e a transfiguração final do escriba antediluviano. Ao adentrar a décima esfera (Aravoth, a morada do Trono), Deus decreta que o humano justo seja transmutado na maior autoridade angélica da corte celestial: <strong>Metatron, o Príncipe da Presença</strong>.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          As Quatro Fases da Transmutação Celestial
        </h3>
        <p>
          O processo de metamorfose física e espiritual de Enoque é detalhado em quatro fases sucessivas:
        </p>

        <ul className="list-disc list-inside space-y-2.5 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">Fase 1: O Arrebatamento:</strong> Dois anjos luminosos, cujos rostos brilhavam como o Sol e cujas bocas emitiam chamas de fogo, elevam Enoque do plano material nas nuvens.
          </li>
          <li>
            <strong className="text-yellow-300">Fase 2: A Purificação:</strong> Ao alcançar o Trono, o arcanjo Miguel recebe a ordem divina de despojar Enoque de suas vestes terrenas e ungi-lo com óleo celestial de glória.
          </li>
          <li>
            <strong className="text-yellow-300">Fase 3: A Reconstituição Ígnea:</strong> A própria matéria biológica de Enoque se funde. Sua carne é convertida em chamas vivas, suas veias em fogo líquido, seus cílios em relâmpagos e seus globos oculares em tochas de fogo ardente.
          </li>
          <li>
            <strong className="text-yellow-300">Fase 4: A Coroação:</strong> Deus coloca uma coroa régia em Metatron, concede-lhe setenta asas cobertas de olhos, setenta nomes de glória e estabelece seu trono próximo ao Trono Celestial.
          </li>
        </ul>

        <div className="quote-box">
          <p>
            &quot;Este é Enoque, cuja carne se converteu em chamas, suas veias em fogo, seus cílios em relâmpagos, seus globos oculares em tochas flamejantes, e a quem Deus colocou em um trono próximo ao trono de glória... recebendo após esta transformação o nome Metatron.&quot;
          </p>
          <div className="quote-author">3 Enoque 48:9</div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Etimologia e Nome Sagrado
        </h3>
        <p>
          A etimologia do nome <strong>Metatron</strong> reflete sua singularidade. Estudiosos debatem três origens principais:
        </p>

        <ul className="list-disc list-inside space-y-2 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">Meta-thronos (Grego):</strong> Aquele que serve ao lado ou atrás do trono divino, indicando sua posição imediatamente subordinada a Deus.
          </li>
          <li>
            <strong className="text-yellow-300">Metator (Latim):</strong> O guia, metrificador ou demarcador de limites cósmicos, representando sua função de mensageiro e organizador das esferas.
          </li>
          <li>
            <strong className="text-yellow-300">Synthronos:</strong> Aquele que co-ocupa ou compartilha da autoridade da corte celestial (às vezes apelidado nos textos místicos como &quot;O Pequeno YHWH&quot;).
          </li>
        </ul>

        {/* Chapter Illustration */}
        <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="/assets/metatron_trono_fogo.webp" 
            alt="A Transformação em Metatron"
            className="w-full max-h-80 sm:max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            Metatron, o anjo de fogo supremo e Escriba da Presença Celestial.
          </div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          As Trezentas Mil Portas de Luz
        </h3>
        <p>
          Após a transmutação, Deus abre a Metatron trezentas mil portas contendo atributos divinos em escala exponencial: portas de sabedoria, vida, compreensão, misericórdia, força, lei, luz, graça e beleza. O texto de 3 Enoque relata que Deus duplicou em Metatron todo atributo virtuoso, coroando-o com a plenitude do saber atemporal do cosmos.
        </p>

        {/* Interactive Metatron Cube */}
        <MetatronCube />

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Merkabah: O Trono Móvel de Luz
        </h3>
        <p>
          Como Príncipe da Presença, Metatron tem a incumbência suprema de reger e guardar a <strong>Merkabah</strong> (a carruagem celestial divina móvel). Feita de chamas de fogo adamantino e propulsionada por Querubins, Serafins e Ofanins, ela representa a carruagem do próprio Trono do Altíssimo que cruza as dimensões cósmicas. Metatron serve como o escriba definitivo que se assenta na Merkabah para documentar todas as ações da humanidade e dos anjos menores, preservando o equilíbrio nos limites entre o infinito espiritual e a matéria finita.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Os Quatro Grandes Poderes e os Setenta Nomes
        </h3>
        <p>
          Como Príncipe da Presença, Metatron detém quatro grandes esferas de autoridade: o <strong>Poder Cosmológico</strong> (governo do movimento das esferas), o <strong>Poder Angelical</strong> (comando sobre todas as hostes), o <strong>Poder Espiritual</strong> (registro perene das almas) e o <strong>Poder de Transfiguração</strong> (capacidade de atuar como intermediário direto do Altíssimo). Para tais missões, foram-lhe conferidos setenta nomes divinos (como Yofiel, Anafiel e Yaoel).
        </p>

      </div>

      <ChapterFooterNav currentChapterId="cap5" />

    </article>
  );
};
