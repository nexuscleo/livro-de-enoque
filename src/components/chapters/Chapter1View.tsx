import React from 'react';
import { ReaderToolbar } from '../reader/ReaderToolbar';
import { ChapterFooterNav } from '../reader/ChapterFooterNav';

export const Chapter1View: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-8 px-3.5 sm:px-6">
      
      {/* Chapter Toolbar */}
      <ReaderToolbar
        chapterId="cap1"
        chapterNumber="Capítulo I"
        chapterTitle="O Escriba Sagrado e os Livros Perdidos"
        readTimeMinutes={6}
      />

      {/* Chapter Title Header */}
      <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gold/30">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
          Capítulo I
        </span>
        <h1 className="font-header font-bold text-2xl sm:text-3xl md:text-4xl text-gold-light tracking-wide mb-2 sm:mb-3 leading-tight">
          O Escriba Sagrado e os Livros Perdidos
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-mystic-blue font-sans leading-snug">
          A Linhagem Antediluviana, Gênese Textual e as Três Grandes Versões da Literatura Enoquiana
        </p>
      </header>

      {/* Main Chapter Content */}
      <div className="space-y-5 sm:space-y-6 text-slate-200 leading-relaxed font-body text-base sm:text-lg">
        
        <p>
          <strong className="text-yellow-300 font-semibold">Enoque</strong>, o sétimo patriarca antediluviano na linhagem direta de Adão (Adão → Set → Enos → Cainan → Mahalalel → Jared → Enoque), ocupa um dos papéis mais singulares e misteriosos da literatura teológica antiga. Segundo a breve passagem de Gênesis 5:24, Enoque <em>&quot;caminhou com Deus; e já não era visto, porque Deus o levou para Si&quot;</em>. Em vez de experimentar a morte biológica comum, Enoque foi arrebatado diretamente para as moradas divinas, servindo como uma ponte biográfica viva entre a Terra e o Céu.
        </p>

        <p>
          Os textos atribuídos a ele, conhecidos coletivamente como <strong>Os Livros de Enoque</strong>, pertencem ao gênero apocalíptico e pseudepígrafo (ou apócrifo), não integrando o cânon bíblico da maioria das tradições judaicas e cristãs, com exceção notável da Igreja Ortodoxa Etíope Tewahedo. Durante séculos, estas obras foram dadas como perdidas no Ocidente, sobrevivendo apenas em lendas místicas e citações fragmentárias de pais da igreja primitiva, até que manuscritos completos foram redescobertos na Etiópia no final do século XVIII e fragmentos em aramaico e grego foram desenterrados nas cavernas de Qumran (Manuscritos do Mar Morto) em meados do século XX.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          A Linhagem e Genealogia Sagrada
        </h3>
        <p>
          Enoque está inserido no centro da genealogia patriarcal antediluviana. Ele é o sétimo descendente direto na linha iniciada por Adão:
          <span className="block my-3 p-3 rounded-xl bg-celestial-surface border border-gold/30 text-yellow-200 text-xs sm:text-sm md:text-base font-header text-center leading-relaxed">
            Adão → Set → Enos → Cainan → Mahalalel → Jared → Enoque
          </span>
          Filho de Jared, ele se tornou pai de Matusalém (o homem de maior longevidade registrado nos textos antigos) e bisavô de Noé, o construtor da arca.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Características Terrenas e Espirituais
        </h3>
        <p>
          A existência terrena de Enoque é marcada por símbolos numéricos e espirituais únicos:
        </p>

        <ul className="list-disc list-inside space-y-2 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li>
            <strong className="text-yellow-300">A Longevidade Solar:</strong> Ele viveu exatamente 365 anos terrestres antes de sua ascensão, número que corresponde precisamente aos dias do ciclo solar anual, refletindo seu profundo conhecimento cosmológico.
          </li>
          <li>
            <strong className="text-yellow-300">Caminhar com o Divino:</strong> Sua vida foi caracterizada por uma comunhão perfeita e inabalável com o Criador, servindo de elo ético em um mundo em rápida degeneração moral.
          </li>
          <li>
            <strong className="text-yellow-300">O Escriba da Presença:</strong> Antes de sua unção celestial, já atuava registrando pregações e advertências éticas destinadas às gerações futuras.
          </li>
        </ul>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          As Três Grandes Versões
        </h3>
        <p>
          A literatura enoquiana divide-se em três obras principais, compostas em épocas e contextos culturais diferentes, mas que se complementam na construção do misticismo cosmológico:
        </p>

        {/* Highlighted Quote Box */}
        <div className="quote-box">
          <p>
            &quot;A Sabedoria não encontrou um lugar onde pudesse habitar, então sua casa foi estabelecida nos céus. Ela veio habitar entre os filhos dos homens, mas não encontrou abrigo. Então a Sabedoria retornou ao seu lar e tomou seu assento entre os anjos.&quot;
          </p>
          <div className="quote-author">1 Enoque 42:1-2</div>
        </div>

        <ol className="list-decimal list-inside space-y-3 sm:space-y-4 pl-1 sm:pl-2 text-slate-200 text-sm sm:text-base">
          <li className="pl-1">
            <strong className="text-yellow-300">Primeiro Livro de Enoque (1 Enoque — Versão Etíope):</strong> Composto originalmente entre os séculos III a.C. e I a.C., é o texto mais antigo e abrangente. Está dividido em cinco seções principais: o <em>Livro dos Vigilantes</em> (queda dos anjos), o <em>Livro das Parábolas</em> (julgamento final e o Filho do Homem), o <em>Livro Astronômico</em> (movimento das luminárias celestes), o <em>Livro dos Sonhos</em> (visões alegóricas do dilúvio) e as <em>Cartas de Enoque</em>.
          </li>
          <li className="pl-1">
            <strong className="text-yellow-300">Segundo Livro de Enoque (2 Enoque — Versão Eslava):</strong> Também chamado de <em>&quot;Livro dos Segredos de Enoque&quot;</em>, datado aproximadamente do século I d.C. Narra a viagem de Enoque através de dez céus concêntricos, revelando a geografia espiritual do cosmos e a transformação de sua natureza física.
          </li>
          <li className="pl-1">
            <strong className="text-yellow-300">Terceiro Livro de Enoque (3 Enoque — Versão Hebraica):</strong> Pertence à tradição rabínica medieval (séculos V a X d.C.) associada ao misticismo da <em>Merkabah</em> (carruagem divina). Descreve a ascensão do Rabi Ismael ao céu, onde ele encontra Enoque já metamorfoseado em <strong>Metatron</strong>, o governante supremo de todas as hostes angélicas.
          </li>
        </ol>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Importância e Canonicidade
        </h3>
        <p>
          Embora rejeitado pelo Concílio de Laodiceia (século IV d.C.) por suas vívidas descrições cosmológicas e anomalias angélicas que desafiavam a nascente ortodoxia, o Livro de Enoque influenciou profundamente o pensamento judaico do período do Segundo Templo e o cristianismo primitivo. O próprio Novo Testamento cita Enoque diretamente na epístola de Judas 1:14-15, demonstrando que o texto circulava com autoridade espiritual entre os apóstolos. A preservação integral do manuscrito etíope (em língua Ge&apos;ez) é um testemunho da profunda reverência que o misticismo do escriba manteve nas igrejas orientais.
        </p>

        <h3 className="font-header font-bold text-lg sm:text-xl md:text-2xl text-gold pt-3 sm:pt-4">
          Gênese Textual e Filologia
        </h3>
        <p>
          Apesar de Enoque ser citado de forma concisa no texto bíblico tradicional, a tradição que se seguiu é fruto de séculos de literatura midrásica e expansões pseudo-epigráficas. Estudos filológicos de pesquisadores como R.H. Charles e James VanderKam revelam que a língua original de 1 Enoque era o aramaico (como evidenciado pelos fragmentos dos Manuscritos do Mar Morto em Qumran), posteriormente traduzido para o grego e preservado integralmente apenas no idioma Ge&apos;ez (etíope clássico).
        </p>

        {/* Chapter Illustration */}
        <div className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-celestial-surface">
          <img 
            src="/assets/enoque_capa_mystic.webp" 
            alt="Grimório Místico de Enoque"
            className="w-full max-h-80 sm:max-h-96 object-cover"
            loading="lazy"
          />
          <div className="p-3 bg-celestial-elevated/90 text-center text-xs text-slate-300 font-sans border-t border-gold/20">
            Representação simbólica do Códice de Enoque, contendo os cálculos das estrelas e os decretos divinos.
          </div>
        </div>

      </div>

      {/* Chapter Footer Navigation */}
      <ChapterFooterNav currentChapterId="cap1" />

    </article>
  );
};
