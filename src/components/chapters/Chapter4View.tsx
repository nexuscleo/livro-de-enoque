import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';

export const Chapter4View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-8 px-3.5 sm:px-6">
      
      <ReaderToolbar
        chapterId="cap4"
        chapterNumber="Capítulo IV"
        chapterTitle="O Clamor e a Conexão com o Dilúvio"
        readTimeMinutes={7}
      />

      <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo IV
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-2 sm:mb-3 leading-tight">
          O Clamor e a Conexão com o Dilúvio
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-mystic-blue font-sans leading-snug">
          A Purificação da Biosfera, a Sentença Cósmica e o Contraste entre Noé e Enoque
        </p>
      </header>

      <div className="space-y-5 sm:space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          O dilúvio global descrito na narrativa bíblica de Gênesis ganha uma justificativa muito mais complexa e cosmológica no Livro de Enoque. Em vez de ser apenas um castigo punitivo de ordem moral para a humanidade, o Dilúvio é revelado como uma <strong>operação de resgate e reset cirúrgico</strong> necessária para purificar a biosfera terrestre da infecção espiritual e hibridização provocada pelos Vigilantes caídos.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          O Ciclo de Iniquidade e Violência
        </h3>
        <p>
          A introdução de artes de guerra, magia profana, vaidade desmedida e a presença destrutiva dos gigantes Nephilim criaram um ciclo insustentável. Os Nephilim dizimaram os recursos agrícolas, caçaram homens e animais e derramaram rios de sangue. O clamor das almas dos mortos e dos oprimidos na terra subiu ao reino celestial. Ouvindo esse lamento desesperado, os arcanjos Miguel, Gabriel, Rafael e Uriel apresentaram uma queixa solene e formal diante do Trono Divino, implorando pela intervenção da justiça cósmica.
        </p>

        <div className="quote-box">
          <p>
            &quot;E as almas dos homens que morreram clamaram, dizendo: &apos;Levai o nosso julgamento ao Senhor Altíssimo!&apos;. E Rafael e Miguel disseram a Deus: &apos;Tu vês o que Azazel fez... como Shemikhazah ensinou a magia... A terra toda está cheia de sangue e de injustiça&apos;.&quot;
          </p>
          <div className="quote-author">1 Enoque 9:3, 9-10</div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          As Quatro Razões Teológicas do Dilúvio
        </h3>
        <p>
          Os escritos enoquianos detalham quatro razões imperativas pelas quais o cataclismo foi decretado:
        </p>

        <ul className="list-disc list-inside space-y-2.5 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">Limpeza e Purificação:</strong> A necessidade urgente de livrar a terra da contaminação biológica dos Nephilim e limpar o solo do sangue derramado.
          </li>
          <li>
            <strong className="text-yellow-300">Punição Indireta:</strong> Trazer dor aos pais caídos (Vigilantes) ao testemunharem a aniquilação física de todos os seus filhos gigantes.
          </li>
          <li>
            <strong className="text-yellow-300">Reset Epistemológico:</strong> Eliminar as tecnologias perigosas (como o forjamento de armas de destruição em massa) que a humanidade aprendeu e usava para sua autoaniquilação.
          </li>
          <li>
            <strong className="text-yellow-300">Garantia de Sobrevivência:</strong> Interromper o processo de destruição antes que os Nephilim consumissem toda a humanidade, extinguindo a linhagem dos justos.
          </li>
        </ul>

        {/* Chapter Illustration */}
        <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="/assets/diluvio_enoquiano.webp" 
            alt="O Dilúvio Enoquiano"
            className="w-full max-h-80 sm:max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            A catástrofe purificadora do dilúvio global e a Arca de Noé, limpando a contaminação da Terra.
          </div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Noé: Salvação Material vs. Ascensão Espiritual
        </h3>
        <p>
          Existe um paralelo e contraste fascinante na teologia enoquiana entre Noé (bisneto) e Enoque (bisavô):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
          <div className="p-4 rounded-xl bg-celestial-surface border border-gold/30">
            <h4 className="font-header font-bold text-sm text-amber-400 mb-1">
              Noé (Salvação Material)
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Permaneceu humano em sua essência física. Recebeu instruções práticas terrestres para construir a Arca e garantir a preservação da biologia terrestre pós-diluviana.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-yellow-500/40">
            <h4 className="font-header font-bold text-sm text-yellow-300 mb-1">
              Enoque (Ascensão Espiritual)
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
              Foi elevado dos planos terrestres antes do cataclismo, teve seu corpo imortalizado em chamas de luz e tornou-se Metatron para servir de testemunha eterna dos atos cósmicos.
            </p>
          </div>
        </div>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Nova Humanidade e a Redução da Longevidade
        </h3>
        <p>
          Com a salvação de Noé e sua família na Arca, a humanidade recomeçou a partir de uma genética livre de hibridização e desprovida de armas belicosas profanas. Seus três filhos originaram as correntes civilizacionais do mundo pós-diluviano: <strong>Sem</strong> (chaves espirituais e monoteísmo), <strong>Cam</strong> (povos do Sul e desafios morais) e <strong>Jafé</strong> (expansão geográfica). Para evitar que o mal acumulasse o mesmo poder de antes, a longevidade dos patriarcas foi reduzida de milênios para o limite de aproximadamente 100 anos, enfraquecendo a consolidação do pecado ao longo das eras.
        </p>

      </div>

      <ChapterFooterNav currentChapterId="cap4" />

    </article>
  );
};
