import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';
import { WatchersCodex } from '../interactive/WatchersCodex';

export const Chapter2View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-8 px-3.5 sm:px-6">
      
      <ReaderToolbar
        chapterId="cap2"
        chapterNumber="Capítulo II"
        chapterTitle="A Queda dos Vigilantes e de Azazel"
        readTimeMinutes={8}
      />

      <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo II
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-2 sm:mb-3 leading-tight">
          A Queda dos Vigilantes e de Azazel
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-mystic-blue font-sans leading-snug">
          A Conspiração no Monte Hermon, os Gigantes Nephilim e a Profanação dos Saberes Celestiais
        </p>
      </header>

      <div className="space-y-5 sm:space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          O <em>Livro dos Vigilantes</em> (capítulos 6 a 36 de 1 Enoque) narra o evento mais dramático e catastrófico do mundo antediluviano: a rebelião dos <strong>Grigori</strong> (Vigilantes ou Sentinelas). Estes eram anjos de alta hierarquia encarregados por Deus de observar a criação física. Contudo, ao contemplarem a beleza das filhas dos homens, foram tomados pela cobiça.
        </p>

        <p>
          Liderados por <strong>Samyaza</strong> e por seu influente co-líder <strong>Azazel</strong>, duzentos desses Vigilantes conspiraram para abandonar suas habitações celestes. Reuniram-se no cume do <strong>Monte Hermon</strong> (cujo nome em hebraico deriva de <em>Cherem</em>, significando &quot;maldição&quot; ou &quot;compromisso sob juramento&quot;), onde realizaram um pacto solene de cumplicidade mútua, cientes da gravidade do pecado que cometeriam ao misturar o espiritual com o carnal.
        </p>

        <div className="quote-box">
          <p>
            &quot;Então Samyaza disse-lhes: &apos;Temo que não queirais cumprir esta ação, e eu sozinho pagarei pelo castigo de um grande pecado&apos;. Mas todos responderam: &apos;Façamos todos um juramento e nos comprometamos sob maldições a não recuar deste projeto até executá-lo&apos;.&quot;
          </p>
          <div className="quote-author">1 Enoque 6:3-5</div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Geração dos Nephilim
        </h3>
        <p>
          A transgressão dos Vigilantes rebeldes gerou uma contaminação biológica e moral profunda no mundo antediluviano. A união carnal entre os anjos rebeldes e as filhas dos homens resultou no nascimento dos <strong>Nephilim</strong>, gigantes de estatura colossal e força sobre-humana (medindo entre 7 e 10 metros, com relatos hiperbólicos citando estaturas ainda maiores). Desprovidos de alma humana e tomados por apetites insaciáveis, os gigantes consumiram toda a subsistência humana da terra. Quando os recursos agrícolas se extinguiram, passaram a caçar e a devorar os próprios homens, espalhando violência e destruição indiscriminada.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Profanação do Conhecimento
        </h3>
        <p>
          Além da contaminação biológica, os Vigilantes transmitiram à humanidade saberes sagrados celestiais que foram desvirtuados para a maldade e orgulho material:
        </p>

        <ul className="list-disc list-inside space-y-2.5 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">Metalurgia e Tecnologia:</strong> Azazel e Asael revelaram como extrair metais das profundezas e forjá-los, iniciando a manipulação tecnológica de elementos que deveriam jazer ocultos.
          </li>
          <li>
            <strong className="text-yellow-300">Armamento e Arte Militar:</strong> Gadreel e Azkeel ensinaram a forjar espadas, facas, escudos e armaduras de metal, introduzindo a guerra sistematizada entre a humanidade.
          </li>
          <li>
            <strong className="text-yellow-300">Vaidade, Luxo e Comércio:</strong> Zavebe e Azazel introduziram cosméticos (uso de antimônio nas pálpebras), a lapidação de pedras preciosas, ornamentos luxuosos e a cobiça pelo comércio de riquezas.
          </li>
          <li>
            <strong className="text-yellow-300">Magia, Bruxaria e Ervanária:</strong> Samyaza e Armaros ensinaram sortilégios, encantamentos, o preparo de ervas medicinais/mágicas e fórmulas para interferir na ordem natural.
          </li>
          <li>
            <strong className="text-yellow-300">Presságios e Ciências Naturais:</strong> Kokabiel, Tamiel, Akibeel e Ananel ensinaram a ler o curso dos corpos celestes, astrologia, terremotos e meteorologia com propósitos divinatórios egoístas.
          </li>
        </ul>

        {/* Chapter Illustration */}
        <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="./assets/anjos_caidos_hermon.webp" 
            alt="A Queda dos Vigilantes no Monte Hermon"
            className="w-full max-h-80 sm:max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            A descida dos 200 anjos rebeldes sobre o Monte Hermon, alterando para sempre a história terrestre.
          </div>
        </div>

        {/* Interactive Codex Component */}
        <WatchersCodex />

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Diferenças Teológicas: Lúcifer vs. Azazel
        </h3>
        <p>
          Na tradição teológica cristã posterior, Lúcifer é descrito como o querubim orgulhoso que se revoltou no céu antes da criação física e foi precipitado para reinar sobre o inferno. O Livro de Enoque, porém, introduz <strong>Azazel</strong> e os Vigilantes em uma dinâmica diferente: eles desceram voluntariamente à terra <em>após</em> a criação humana, impulsionados pela cobiça física e vaidade. Azazel corrompe a humanidade não por possessão espiritual silenciosa, mas pela profanação tecnológica e epistemológica (armas de guerra, luxo, maquiagem). Ao fim, ele não é o governante de um inferno ativo, mas jaz acorrentado e soterrado nas trevas de Dudael, esperando sua destruição final pelo fogo.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          O Ritual de Azazel e o Yom Kippur
        </h3>
        <p>
          Na teologia enoquiana, Azazel assume o papel de arqui-corruptor absoluto, sendo decretado que <em>&quot;toda injustiça e pecado sobre a terra sejam atribuídos a Azazel&quot;</em>. Para conter essa infecção moral, Deus ordenou ao arcanjo Rafael que amarrasse Azazel de mãos e pés e o lançasse no deserto de <strong>Dudael</strong>, cobrindo-o de pedras ásperas e escuridão eterna.
        </p>
        <p>
          Esse aprisionamento serve de base teológica para o ritual do <strong>Yom Kippur</strong> (Dia do Perdão) em Levítico 16. Os dois bodes do templo — um oferecido ao Senhor e o outro enviado ao deserto como &quot;bode expiatório&quot; dedicado <em>a Azazel</em> — representam a devolução simbólica do pecado do povo à sua verdadeira fonte ancestral aprisionada no abismo.
        </p>

      </div>

      <ChapterFooterNav currentChapterId="cap2" />

    </article>
  );
};
