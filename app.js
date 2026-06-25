// ================================================================================
//                       ENOQUE — INTERACTIVE WEB ENGINE
// ================================================================================

// --------------------------------------------------------------------------------
// 1. DATA SOURCES & DATABASE
// --------------------------------------------------------------------------------

/// The 20 Named Watchers Leaders (Grigori)
const WATCHERS_DATA = [
    {
        id: "samyaza",
        name: "Samyaza",
        meaning: "Aquele que vê o Nome (ou Rebelde Infame)",
        role: "Líder Supremo da Rebelião",
        teaching: "Ensinou feitiçaria, encantamentos e a divisão de raízes e árvores (ervas mágicas).",
        fate: "Amarrado nos vales mais escuros da Terra pela eternidade sob o comando de Miguel, aguardando o julgamento final para ser lançado ao fogo eterno."
    },
    {
        id: "azazel",
        name: "Azazel",
        meaning: "Deus fortalece (ou Bode Expiatório / que Escapa)",
        role: "Co-líder e Principal Corruptor",
        teaching: "Ensinou metalurgia: fabricação de espadas, facas, escudos, armaduras; revelou os metais preciosos e como lapidá-los; introduziu a vaidade por meio de cosméticos (maquiagem, embelezamento das pálpebras, joias e corantes).",
        fate: "Amarrado de mãos e pés pelo arcanjo Rafael, jogado no abismo de Dudael no deserto do oriente, coberto por rochas ásperas e escuridão absoluta. Será lançado no fogo no grande Dia do Juízo."
    },
    {
        id: "urakabarameel",
        name: "Urakabarameel",
        meaning: "Luz de Deus no Abismo",
        role: "Líder de Dezena",
        teaching: "Ensinava segredos sobre a morte, a finitude da alma e as transições do espírito pós-vida.",
        fate: "Aprisionado nos vales profundos da Terra com as dezenas caídas, aguardando o Dia do Julgamento."
    },
    {
        id: "akibeel",
        name: "Akibeel",
        meaning: "Sinal de Deus",
        role: "Líder de Dezena",
        teaching: "Transmitiu o conhecimento sobre os signos e sinais da terra, incluindo terremotos, tremores e os mistérios geológicos.",
        fate: "Condenado a testemunhar o abalo da criação e das fundações da terra sob Dudael."
    },
    {
        id: "tamiel",
        name: "Tamiel",
        meaning: "Perfeição de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou a observação detalhada dos caminhos das estrelas (astrologia antiga, constelações e presságios cósmicos).",
        fate: "Confinado no Tártaro espiritual de escuridão impenetrável."
    },
    {
        id: "gadreel",
        name: "Gadreel",
        meaning: "Muro ou Muralha de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou golpes mortais, técnicas e táticas de guerra e armas letais de combate à humanidade, introduzindo a destruição biológica.",
        fate: "Aprisionado com as hostes rebeldes na segunda camada celestial de castigo, vigiado por anjos guardiões."
    },
    {
        id: "ramuel",
        name: "Ramuel",
        meaning: "Trovão de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou os mistérios dos trovões, dos relâmpagos e das forças tempestuosas do céu.",
        fate: "Aprisionado nas profundezas térmicas subterrâneas sob a guarda cósmica."
    },
    {
        id: "danel",
        name: "Danel",
        meaning: "Julgamento de Deus",
        role: "Líder de Dezena",
        teaching: "Revelou a leitura dos signos divinos e os mistérios profundos da justiça celeste.",
        fate: "Aprisionado sob os limites da terra habitada."
    },
    {
        id: "azkeel",
        name: "Azkeel",
        meaning: "Força Celestial",
        role: "Líder de Dezena",
        teaching: "Transmitiu a arte de guerrear, golpes de combate e táticas de assédio militar.",
        fate: "Preso nas correntes de trevas, esperando a sentença final."
    },
    {
        id: "saraknyal",
        name: "Saraknyal",
        meaning: "Graça de Deus na Noite",
        role: "Líder de Dezena",
        teaching: "Revelou os signos e caminhos das estrelas, a conjunção celeste e astronomia prática.",
        fate: "Aprisionado nas bordas do Tártaro celeste."
    },
    {
        id: "asael",
        name: "Asael",
        meaning: "Criado por Deus",
        role: "Líder de Dezena",
        teaching: "Introduziu as técnicas de extração e fundição de metais, trabalho básico em forjas.",
        fate: "Enterrado profundamente nos vales desolados da terra."
    },
    {
        id: "armaros",
        name: "Armaros",
        meaning: "O Maldito",
        role: "Líder de Dezena",
        teaching: "Ensinou como resolver e desfazer encantamentos, feitiçarias, magia negra e contra-magia.",
        fate: "Preso nas correntes do abismo úmido cósmico."
    },
    {
        id: "batraal",
        name: "Batraal",
        meaning: "Chuva de Deus",
        role: "Líder de Dezena",
        teaching: "Revelou astrologia avançada, os signos das luzes e a correspondência entre matéria e energia sideral.",
        fate: "Aprisionado no deserto de Dudael."
    },
    {
        id: "ananel",
        name: "Ananel",
        meaning: "Orvalho de Deus",
        role: "Líder de Dezena",
        teaching: "Revelou os segredos dos movimentos das nuvens, do vento, da chuva e previsões meteorológicas divinas.",
        fate: "Aprisionado no abismo aquoso celeste."
    },
    {
        id: "zavebe",
        name: "Zavebe",
        meaning: "Chama de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou o uso de pigmentos, a criação de cosméticos para embelezamento facial e vaidades mundanas.",
        fate: "Condenado às chamas frias do abismo."
    },
    {
        id: "samsaveel",
        name: "Samsaveel",
        meaning: "Sol de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou a manufatura de artefatos complexos, maquinários rústicos e utensílios agrícolas.",
        fate: "Preso sob a escuridão do Oriente."
    },
    {
        id: "ertael",
        name: "Ertael",
        meaning: "Terra de Deus",
        role: "Líder de Dezena",
        teaching: "Revelou a mecânica das estrelas, a rota dos planetas e o movimento rotacional do céu.",
        fate: "Acotovelado nas profundezas do Tártaro cósmico."
    },
    {
        id: "turiel",
        name: "Turiel",
        meaning: "Rocha de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou o mistério das pedras preciosas, a extração dos metais e a física de elementos sólidos.",
        fate: "Soterrado sob rochas pontiagudas sob Dudael."
    },
    {
        id: "yomyael",
        name: "Yomyael",
        meaning: "Dia de Deus",
        role: "Líder de Dezena",
        teaching: "Ensinou os cálculos dos tempos, ciclos lunares, contagem dos anos e a criação de calendários.",
        fate: "Aprisionado nos limites temporais do cosmos."
    },
    {
        id: "kokabiel",
        name: "Kokabiel",
        meaning: "Estrela de Deus",
        role: "Líder de Dezena",
        teaching: "Revelou a leitura das constelações, a astrologia e a energia física dos corpos celestes.",
        fate: "Confinado nas prisões cósmicas celestiais, aguardando o colapso dos astros no juízo final."
    }
];

// The 10 Heavens descriptions (from 2 Enoch)
const HEAVENS_DATA = [
    {
        id: 1,
        name: "Primeiro Céu: A Vigilância Cósmica",
        concept: "Transição Material-Espiritual",
        desc: "Localizado imediatamente acima da atmosfera terrestre. Aqui, Enoque contemplou um imenso mar celeste e os grandes depósitos de neve, gelo, orvalho e nuvens. É guardado por duzentos anjos encarregados de manter a ordem do clima terrestre e monitorar as atividades iniciais da criação física. Representa o começo da elevação consciencial, a transição do material para o espiritual e a percepção de estar sob a constante observação divina."
    },
    {
        id: 2,
        name: "Segundo Céu: A Prisão dos Rebeldes",
        concept: "Consequências e Juízo",
        desc: "Um lugar de profunda escuridão e tormento visível. Enoque viu os anjos rebeldes (Grigori) suspensos e acorrentados em chamas de fogo ardente, chorando em agonia contínua enquanto aguardam o juízo final por terem abandonado o céu pelas filhas dos homens. Eles imploraram que o escriba fizesse petições e intercedesse por suas almas perante o Trono."
    },
    {
        id: 3,
        name: "Terceiro Céu: Paraíso e Inferno",
        concept: "A Escolha Moral",
        desc: "Uma esfera dividida de forte simbolismo moral. À sua direita, fica o Paraíso (Jardim do Éden) sob a luz eterna, decorado com árvores floridas e a Árvore da Vida onde os justos repousam. À sua esquerda, estende-se o Inferno de trevas impenetráveis, com um rio de chamas e tormentos assombrosos, guardado por seres terríveis para punir os orgulhosos, iníquos e opressores."
    },
    {
        id: 4,
        name: "Quarto Céu: Os Motores Celestes",
        concept: "Ordem Astronômica",
        desc: "O grande centro matemático dos astros, onde corre o curso exato do Sol, da Lua e das estrelas, passando por portais cósmicos específicos que determinam as estações. Habitam nele criaturas gloriosas de fogo e luz como as Fênix e os Calcídrios, que entoam melodias transcendentais e cânticos de adoração a cada amanhecer."
    },
    {
        id: 5,
        name: "Quinto Céu: O Silêncio dos Grigori",
        concept: "Melancolia e Redenção",
        desc: "A morada dos Vigilantes Grigori que não desceram à terra, mas permanecem melancólicos, tristes e silenciosos no céu pelo pecado de seus irmãos caídos. Sob a exortação de Enoque, eles quebram o silêncio fúnebre do reino celestial e voltam a entoar a liturgia e os cantos sagrados ao Criador."
    },
    {
        id: 6,
        name: "Sexto Céu: Os Arcanjos da Ordem",
        concept: "Administração Universal",
        desc: "Uma morada de pura luz habitada pelos sete arcanjos supremos (Miguel, Gabriel, Rafael, Uriel, Raguel, Sarafiel e Remiel). Eles coordenam a mecânica universal, governam as leis climáticas e geológicas, regulam a conduta dos anjos menores e registram as vidas humanas para manter o perfeito equilíbrio cósmico."
    },
    {
        id: 7,
        name: "Sétimo Céu: A Luz Proeminente",
        concept: "Limiar do Trono",
        desc: "A borda da presença pura do Criador. Enoque contempla as miríades de Querubins, Serafins e Ofanins (as rodas de fogo cheias de olhos) flutuando no fogo sagrado que não consome. O esplendor é tão avassalador que Enoque é tomado por um medo terrível e quase perde as suas faculdades humanas físicas ante a luz do Trono."
    },
    {
        id: 8,
        name: "Oitavo Céu: O Não-Manifestado",
        concept: "Espaço além do Tempo",
        desc: "Conhecido como Muzaloth, a esfera além das estrelas fixas. Aqui mudam as estações e os ciclos cósmicos das épocas. Representa uma camada profunda de consciência e a borda exterior da criação formal, onde a matéria começa a se dissolver em pura energia espiritual e potencial infinito."
    },
    {
        id: 9,
        name: "Nono Céu: As Câmaras do Infinito",
        concept: "Luz Intelectual e Pura",
        desc: "As câmaras celestes onde residem as imagens e arquétipos eternos de toda a criação. É a esfera dos segredos cósmicos do universo antes de sua manifestação formal. A iluminação aqui provém diretamente do potencial da sabedoria divina, sem dependência de fontes luminosas físicas."
    },
    {
        id: 10,
        name: "Décimo Céu: O Trono de Glória (Aravoth)",
        concept: "A Deificação e Êxtase",
        desc: "O destino supremo da jornada. Onde reside o Trono Divino rodeado por chamas e cercado pela Glória Infinita. Foi neste nível de êxtase puro que Enoque foi despojado de suas vestes terrenas, ungido com óleo sagrado, revestido com roupas de glória celestial e transmutado em Metatron, o Príncipe da Presença e Escriba Supremo."
    }
];

// Metatron's Cube Nodes - 13 Gates/Virtues
const METATRON_GATES = [
    { name: "Portão da Sabedoria (Chokmah)", text: "Concede a compreensão dos segredos do universo e a estrutura matemática dos astros." },
    { name: "Portão da Compreensão (Binah)", text: "Dá a capacidade de decifrar as vontades divinas e interpretar as profecias do fim dos tempos." },
    { name: "Portão da Vida (Chaim)", text: "Consagra a imortalidade da alma e a transcendência sobre as doenças e morte mortal." },
    { name: "Portão da Graça (Chesed)", text: "Abundância e amor divino, unindo a alma com a harmonia criadora." },
    { name: "Portão do Temor Celestial (Yirah)", text: "Reconhecimento da vastidão e majestade da ordem divina, incitando à obediência moral." },
    { name: "Portão da Beleza (Tiphereth)", text: "Harmonia estética e equilíbrio entre a força e a misericórdia." },
    { name: "Portão da Misericórdia (Rachamim)", text: "Perdão e compaixão concedidos para curar as falhas da criação biológica." },
    { name: "Portão da Mansidão (Anavah)", text: "Humildade espiritual que permite ser despojado do orgulho humano e preenchido de luz." },
    { name: "Portão da Força (Gevurah)", text: "Poder para confrontar as hostes caídas de Azazel e banir as iniquidades." },
    { name: "Portão do Esplendor (Hod)", text: "A radiação do corpo de luz glorificado, brilhando como o sol celestial." },
    { name: "O Escriba Divino (Metatron)", text: "O anjo de fogo que escreve os atos dos homens nos livros do céu." },
    { name: "Príncipe da Presença (Sar HaPanim)", text: "Acesso imediato ao Trono da Glória sem intermediários angélicos." },
    { name: "O Menor YHWH (Yaoel)", text: "O nome místico que reflete a proximidade absoluta e a autoridade divina compartilhada." }
];

// Citations Database
const CITATIONS_DATA = [
    {
        text: "Então Samyaza, que era o líder, disse-lhes: 'Temo que vocês não queiram cumprir com esta ação e eu seja o único responsável por um grande pecado'. Mas eles responderam: 'Façamos todos um juramento e nos comprometamos todos sob uma maldição a não retroceder deste projeto até executá-lo realmente'.",
        ref: "1 Enoque 6:3",
        tag: "queda"
    },
    {
        text: "Este é o Filho do Homem, que possui a justiça e com quem vive a justiça e que revelará todos os tesouros ocultos, porque o Senhor dos espíritos o escolheu e tem como destino a maior dignidade ante o Senhor dos espíritos, justamente e para sempre.",
        ref: "1 Enoque 46:3",
        tag: "filho"
    },
    {
        text: "A Sabedoria não encontra um lugar onde possa habitar, então sua casa está nos céus. A Sabedoria foi habitar entre os filhos dos homens e não encontrou sítio. Então a Sabedoria retornou a seu lar e tomou sua cadeira entre os anjos.",
        ref: "1 Enoque 42:1-2",
        tag: "sabedoria"
    },
    {
        text: "E Azazel ensinou aos homens a fazer espadas, facas, escudos e couraças, e lhes revelou os metais da terra e a arte de trabalhá-los. E a iniquidade aumentou, e todos cometeram iniqüidade; e uma após outra, todas as artes do pecado foram praticadas.",
        ref: "1 Enoque 8:1-3",
        tag: "queda"
    },
    {
        text: "Nesse lugar com meus olhos vi o Eleito de Justiça e de Fé; a justiça prevalecerá em seus dias e os justos e os escolhidos serão inumeráveis ante ele pelos séculos dos séculos.",
        ref: "1 Enoque 39:6",
        tag: "filho"
    },
    {
        text: "E o Senhor disse a Rafael: 'Prenda Azazel pelos pés e mãos, lança-o na escuridão; abra o deserto que está em Dudael e lança-o nele. E cobre-o com pedras ásperas e cortantes, cubra-o de escuridão, deixa-o ali eternamente sem que possa ver a luz. E ao grande dia do juízo que seja jogado no fogo'.",
        ref: "1 Enoque 10:4-6",
        tag: "julgamento"
    },
    {
        text: "Este é Enoque, cuja carne se converteu em chamas, suas veias em fogo, seus cílios em relâmpagos, seus globos oculares em tochas flamejantes, e a quem Deus colocou em um trono próximo ao trono de glória, recebendo após esta transformação celestial o nome Metatron.",
        ref: "3 Enoque 48:9",
        tag: "ascensao"
    },
    {
        text: "E o Senhor disse a Michaíl: 'Tira as vestes terrestres de Enoque e unge-o com óleo sagrado. E põe-no nas vestes da glória divina'. E eu olhei para mim mesmo, e eu era como um dos gloriosos, e não havia diferença.",
        ref: "2 Enoque 22:8-10",
        tag: "ascensao"
    },
    {
        text: "Deus abriu para mim trezentos mil portões de compreensão, trezentos mil portões de sabedoria, trezentos mil de vida, graça e misericórdia... e duplicou em mim todo o poder e esplendor.",
        ref: "3 Enoque (Revelação ao Rabi Ismael)",
        tag: "sabedoria"
    },
    {
        text: "E as águas do dilúvio virão sobre toda a terra, e todos os que estão nela serão destruídos. E agora, ensina a Noé como ele pode escapar, e como sua semente pode permanecer em toda a terra.",
        ref: "1 Enoque 10:2-3",
        tag: "julgamento"
    },
    {
        text: "E Enoque caminhou com Deus e ele não era visto, porque Deus o levou.",
        ref: "Gênesis 5:24 / 1 Enoque",
        tag: "ascensao"
    },
    {
        text: "À toda a iniquidade na terra pode ser atribuída a Azazel.",
        ref: "1 Enoque 10:8",
        tag: "julgamento"
    },
    {
        text: "E as almas dos homens que morreram clamavam, dizendo: 'Levai o nosso julgamento ao Senhor Altíssimo!'.",
        ref: "1 Enoque 9:3",
        tag: "julgamento"
    },
    {
        text: "Deus acrescentou em mim: Sabedoria para a sabedoria, entendimento para o entendimento, sutileza para a sutileza, conhecimento para o conhecimento...",
        ref: "3 Enoque 48:9",
        tag: "sabedoria"
    },
    {
        text: "E de suas bocas procedia toda sorte de fogo aceso. Seus rostos brilhavam como o sol e seus olhos eram como fogo aceso.",
        ref: "2 Enoque 1:3",
        tag: "ascensao"
    },
    {
        text: "E ele me disse: 'Enoque, você será o escriba da minha presença.' E o Senhor sentou-me no seu próprio trono.",
        ref: "2 Enoque 22:12",
        tag: "ascensao"
    },
    {
        text: "E o Senhor viu que a maldade dos homens era grande na terra, e que todo intento dos pensamentos do seu coração era continuamente o mal.",
        ref: "Gênesis 6:5",
        tag: "julgamento"
    },
    {
        text: "Noé era homem justo e íntegro entre seus contemporâneos; Noé andava com Deus.",
        ref: "Gênesis 6:9",
        tag: "sabedoria"
    }
];

// --------------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// --------------------------------------------------------------------------------
let appState = {
    fontScale: 100,
    audioContext: null,
    audioInitialized: false,
    synth: {
        isPlaying: false,
        nodes: []
    },
    activeChapter: "cap1",
    activeWatcher: null,
    activeMetatronGate: null
};

// --------------------------------------------------------------------------------
// 3. AMBIENT AUDIO SYNTHESIZER (Web Audio API)
// --------------------------------------------------------------------------------
function initCelestialAudio() {
    if (appState.audioInitialized) return;

    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        appState.audioContext = new AudioContextClass();
        appState.audioInitialized = true;
    } catch (e) {
        console.error("Falha ao inicializar o AudioContext da Web Audio API:", e);
    }
}

function startAmbientDrone() {
    if (!appState.audioInitialized) {
        initCelestialAudio();
    }

    if (appState.audioContext.state === 'suspended') {
        appState.audioContext.resume();
    }

    if (appState.synth.isPlaying) return;

    const ctx = appState.audioContext;
    const now = ctx.currentTime;

    // Master Gain
    const masterGain = ctx.createGain();
    const targetVolume = parseFloat(document.getElementById('slider-volume').value) || 0.3;
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(targetVolume, now + 3); // Fade in suave

    // LowPass Filter for warmth
    const lpFilter = ctx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.setValueAtTime(320, now); // Cut off high harsh frequencies

    // Delay effect for spaciousness
    const delay = ctx.createDelay();
    delay.delayTime.setValueAtTime(0.6, now);
    const delayFeedback = ctx.createGain();
    delayFeedback.gain.setValueAtTime(0.4, now); // Feedback amount

    // Connect Delay feedback loop
    delay.connect(delayFeedback);
    delayFeedback.connect(delay);

    // LFO to modulate filter frequency (creates "breathing" movement)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, now); // 0.12 Hz (very slow)

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(80, now); // Modulation depth (+- 80Hz)

    lfo.connect(lfoGain);
    lfoGain.connect(lpFilter.frequency); // Modulating lowpass cutoff
    lfo.start(now);

    // 3 Harmonies (C2 - 65.41Hz, G2 - 98.00Hz, C3 - 130.81Hz, D#3/D#2 soft notes)
    // Celestial Chord: C minor / Open 5th
    const notes = [65.41, 98.00, 130.81, 196.00];
    const oscillators = [];
    const oscGains = [];

    notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Detune slightly for chorusing effect
        osc.detune.setValueAtTime((idx % 2 === 0 ? 5 : -5), now);

        // Soft gain levels for each note
        oscGain.gain.setValueAtTime(0, now);
        oscGain.gain.linearRampToValueAtTime(0.2, now + 2 + idx);

        osc.connect(oscGain);
        oscGain.connect(lpFilter);

        osc.start(now);

        oscillators.push(osc);
        oscGains.push(oscGain);
    });

    // Connections: Filter -> MasterGain & Delay
    lpFilter.connect(masterGain);
    lpFilter.connect(delay);
    delay.connect(masterGain);
    masterGain.connect(ctx.destination);

    // Store nodes to stop them later
    appState.synth.nodes = [masterGain, lpFilter, delay, delayFeedback, lfo, lfoGain, ...oscillators, ...oscGains];
    appState.synth.isPlaying = true;

    // Update button text
    const audioBtn = document.getElementById('btn-toggle-audio');
    audioBtn.textContent = "MUTAR";
    audioBtn.classList.add('playing');
}

function stopAmbientDrone() {
    if (!appState.synth.isPlaying) return;

    const ctx = appState.audioContext;
    const now = ctx.currentTime;

    // Find Master Gain node to fade out
    const masterGainNode = appState.synth.nodes[0];
    masterGainNode.gain.cancelScheduledValues(now);
    masterGainNode.gain.setValueAtTime(masterGainNode.gain.value, now);
    masterGainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.5); // Fade out suave

    // Stop all oscillators after fade out completes
    setTimeout(() => {
        appState.synth.nodes.forEach(node => {
            if (node.stop) {
                try { node.stop(); } catch (e) { }
            }
        });
        appState.synth.nodes = [];
        appState.synth.isPlaying = false;

        // Update button text
        const audioBtn = document.getElementById('btn-toggle-audio');
        audioBtn.textContent = "ATIVAR SOM";
        audioBtn.classList.remove('playing');
    }, 1500);
}

function setAmbientVolume(vol) {
    if (!appState.synth.isPlaying) return;

    const ctx = appState.audioContext;
    const now = ctx.currentTime;

    // Master gain is index 0
    const masterGainNode = appState.synth.nodes[0];
    masterGainNode.gain.cancelScheduledValues(now);
    masterGainNode.gain.linearRampToValueAtTime(vol, now + 0.2);
}

// --------------------------------------------------------------------------------
// 4. NAVIGATION ENGINE (SPA Router)
// --------------------------------------------------------------------------------
function navigateToChapter(targetId) {
    // Hide current view
    const currentView = document.getElementById(appState.activeChapter);
    if (currentView) {
        currentView.classList.remove('active');
    }

    // Update active nav links
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.target === targetId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Show target view
    const targetView = document.getElementById(targetId);
    if (targetView) {
        targetView.classList.add('active');
        appState.activeChapter = targetId;
    }

    // Scroll pane back to top
    document.getElementById('app-content-pane').scrollTop = 0;
}

// --------------------------------------------------------------------------------
// 5. INTERACTIVE COMPONENT: WATCHERS CODEX
// --------------------------------------------------------------------------------
function buildWatchersList() {
    const listEl = document.getElementById('watchers-list-el');
    if (!listEl) return;

    listEl.innerHTML = "";
    WATCHERS_DATA.forEach(watcher => {
        const li = document.createElement('li');
        li.className = "watcher-item";
        li.textContent = watcher.name;
        li.addEventListener('click', () => selectWatcher(watcher.id));
        listEl.appendChild(li);
    });
}

function selectWatcher(watcherId) {
    const detailsEl = document.getElementById('watcher-details-el');
    if (!detailsEl) return;

    // Highlight list item
    document.querySelectorAll('.watcher-item').forEach((item, idx) => {
        if (WATCHERS_DATA[idx].id === watcherId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const watcher = WATCHERS_DATA.find(w => w.id === watcherId);
    if (!watcher) return;

    detailsEl.innerHTML = `
        <div class="watcher-details-content">
            <div class="watcher-title-row">
                <h4 class="watcher-name">${watcher.name}</h4>
                <span class="watcher-meaning">"${watcher.meaning}"</span>
            </div>
            <div class="watcher-details-grid">
                <div class="watcher-info-card">
                    <strong>Hierarquia & Função</strong>
                    <p>${watcher.role}</p>
                </div>
                <div class="watcher-info-card">
                    <strong>Ensino Proibido</strong>
                    <p>${watcher.teaching}</p>
                </div>
                <div class="watcher-info-card watcher-fate-card">
                    <strong>Julgamento & Destino</strong>
                    <p>${watcher.fate}</p>
                </div>
            </div>
        </div>
    `;
    appState.activeWatcher = watcherId;
}

// --------------------------------------------------------------------------------
// 6. INTERACTIVE COMPONENT: 10 HEAVENS
// --------------------------------------------------------------------------------
function buildHeavensLadder() {
    const ladderEl = document.getElementById('heavens-ladder-el');
    if (!ladderEl) return;

    ladderEl.innerHTML = "";
    HEAVENS_DATA.forEach(heaven => {
        const tier = document.createElement('div');
        tier.className = "heaven-tier";
        tier.addEventListener('click', () => openHeavenModal(heaven.id));

        tier.innerHTML = `
            <div class="heaven-number">${heaven.id}º</div>
            <div class="heaven-summary">
                <h4 class="heaven-name">${heaven.name}</h4>
                <span class="heaven-concept">${heaven.concept}</span>
            </div>
        `;

        ladderEl.appendChild(tier);
    });
}

function openHeavenModal(heavenId) {
    const heaven = HEAVENS_DATA.find(h => h.id === heavenId);
    if (!heaven) return;

    document.getElementById('modal-title-el').textContent = heaven.name;
    document.getElementById('modal-concept-el').textContent = heaven.concept;
    document.getElementById('modal-desc-el').textContent = heaven.desc;

    document.getElementById('heaven-modal-el').classList.add('active');
}

function closeHeavenModal() {
    document.getElementById('heaven-modal-el').classList.remove('active');
}

// --------------------------------------------------------------------------------
// 7. INTERACTIVE COMPONENT: METATRON'S CUBE (SVG GEOMETRY)
// --------------------------------------------------------------------------------
function initMetatronCube() {
    const svgEl = document.getElementById('cube-svg');
    const linesGroup = document.getElementById('cube-lines');
    const nodesGroup = document.getElementById('cube-nodes');
    if (!svgEl || !linesGroup || !nodesGroup) return;

    // Clear dynamic children
    linesGroup.innerHTML = "";
    nodesGroup.innerHTML = "";

    const center = { x: 160, y: 160 };
    const rInner = 60;
    const rOuter = 120;

    // Define the 13 points
    const points = [
        { id: 0, x: center.x, y: center.y, name: METATRON_GATES[10].name, text: METATRON_GATES[10].text } // Center
    ];

    // Inner Ring Points
    for (let i = 0; i < 6; i++) {
        const angle = (i * 60 * Math.PI) / 180;
        points.push({
            id: i + 1,
            x: center.x + rInner * Math.cos(angle),
            y: center.y + rInner * Math.sin(angle),
            name: METATRON_GATES[i].name,
            text: METATRON_GATES[i].text
        });
    }

    // Outer Ring Points
    for (let i = 0; i < 6; i++) {
        const angle = (i * 60 * Math.PI) / 180;
        points.push({
            id: i + 7,
            x: center.x + rOuter * Math.cos(angle),
            y: center.y + rOuter * Math.sin(angle),
            name: METATRON_GATES[i + 6].name,
            text: METATRON_GATES[i + 6].text
        });
    }

    // Connect every point to every other point (78 lines)
    const linesList = [];
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", points[i].x);
            line.setAttribute("y1", points[i].y);
            line.setAttribute("x2", points[j].x);
            line.setAttribute("y2", points[j].y);
            line.setAttribute("class", "cube-connector-line");
            line.dataset.fromNode = points[i].id;
            line.dataset.toNode = points[j].id;
            linesGroup.appendChild(line);
            linesList.push(line);
        }
    }

    // Draw Nodes (circles)
    points.forEach(pt => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", pt.x);
        circle.setAttribute("cy", pt.y);
        circle.setAttribute("r", 9);
        circle.setAttribute("class", "cube-node-circle");
        circle.dataset.nodeId = pt.id;

        circle.addEventListener('click', () => {
            // Un-active all nodes and lines
            document.querySelectorAll('.cube-node-circle').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.cube-connector-line').forEach(l => l.classList.remove('active'));

            // Set active node
            circle.classList.add('active');

            // Set active lines originating from this node
            document.querySelectorAll(`.cube-connector-line[data-from-node="${pt.id}"]`).forEach(l => l.classList.add('active'));
            document.querySelectorAll(`.cube-connector-line[data-to-node="${pt.id}"]`).forEach(l => l.classList.add('active'));

            // Render text
            const cardEl = document.getElementById('gate-card-el');
            if (cardEl) {
                cardEl.innerHTML = `
                    <div class="watcher-details-content">
                        <h4 class="gate-title-row">🗝️ ${pt.name}</h4>
                        <p class="gate-meaning-text">${pt.text}</p>
                    </div>
                `;
            }
        });

        nodesGroup.appendChild(circle);
    });
}

// --------------------------------------------------------------------------------
// 8. CITATIONS LIBRARY ENGINE
// --------------------------------------------------------------------------------
function renderCitations(filterTag = "all", searchQuery = "") {
    const gridEl = document.getElementById('quotes-grid-el');
    if (!gridEl) return;

    gridEl.innerHTML = "";

    const query = searchQuery.toLowerCase().trim();

    const filtered = CITATIONS_DATA.filter(item => {
        // Tag match
        const matchesTag = (filterTag === "all" || item.tag === filterTag);

        // Search query match
        const matchesSearch = (query === "" ||
            item.text.toLowerCase().includes(query) ||
            item.ref.toLowerCase().includes(query)
        );

        return matchesTag && matchesSearch;
    });

    if (filtered.length === 0) {
        gridEl.innerHTML = `<div class="codex-empty-state" style="padding: 3rem;">Nenhuma citação encontrada para sua busca...</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = "citation-card";

        let tagText = item.tag.toUpperCase();
        if (item.tag === "filho") tagText = "FILHO DO HOMEM";

        card.innerHTML = `
            <p class="citation-text">"${item.text}"</p>
            <div class="citation-meta">
                <span>${item.ref}</span>
                <span style="color: var(--color-gold-bright); font-size: 0.75rem;">[ ${tagText} ]</span>
            </div>
        `;
        gridEl.appendChild(card);
    });
}

// --------------------------------------------------------------------------------
// 9. SYSTEM EVENT BINDINGS
// --------------------------------------------------------------------------------
function setupEventListeners() {

    // Open Book from Cover Trigger
    const btnOpenBook = document.getElementById('btn-open-book');
    if (btnOpenBook) {
        btnOpenBook.addEventListener('click', () => {
            document.getElementById('screen-cover').classList.remove('active');
            document.getElementById('screen-cover').classList.add('fade-out');
            document.getElementById('screen-app').classList.add('fade-in');

            // Start celestial audio context and music automatically
            startAmbientDrone();
        });
    }

    // Sidebar Page Navigator
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navigateToChapter(item.dataset.target);
        });
    });

    // Next/Prev Chapter Footer Links
    document.querySelectorAll('.btn-nav-page').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = btn.dataset.next;
            const prev = btn.dataset.prev;
            if (next) navigateToChapter(next);
            if (prev) navigateToChapter(prev);
        });
    });

    // Modal Close Triggers
    const btnCloseModal = document.getElementById('btn-close-modal');
    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', closeHeavenModal);
    }
    const modalOverlay = document.getElementById('heaven-modal-el');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeHeavenModal();
        });
    }

    // Audio Widget toggles
    const audioToggleBtn = document.getElementById('btn-toggle-audio');
    if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', () => {
            if (appState.synth.isPlaying) {
                stopAmbientDrone();
            } else {
                startAmbientDrone();
            }
        });
    }

    const volumeSlider = document.getElementById('slider-volume');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            setAmbientVolume(vol);
        });
    }

    // Settings Widget: Resizer
    const fontDecrease = document.getElementById('btn-text-decrease');
    const fontIncrease = document.getElementById('btn-text-increase');
    const fontReset = document.getElementById('btn-text-reset');

    if (fontDecrease && fontIncrease && fontReset) {
        fontDecrease.addEventListener('click', () => {
            appState.fontScale = Math.max(80, appState.fontScale - 10);
            document.documentElement.style.setProperty('--font-size-modifier', `${appState.fontScale}%`);
        });
        fontIncrease.addEventListener('click', () => {
            appState.fontScale = Math.min(130, appState.fontScale + 10);
            document.documentElement.style.setProperty('--font-size-modifier', `${appState.fontScale}%`);
        });
        fontReset.addEventListener('click', () => {
            appState.fontScale = 100;
            document.documentElement.style.setProperty('--font-size-modifier', '100%');
        });
    }

    // Library Filter Event Triggers
    const searchInput = document.getElementById('library-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeTagEl = document.querySelector('.tag-btn.active');
            const activeTag = activeTagEl ? activeTagEl.dataset.tag : "all";
            renderCitations(activeTag, e.target.value);
        });
    }

    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const searchVal = searchInput ? searchInput.value : "";
            renderCitations(btn.dataset.tag, searchVal);
        });
    });
}

// --------------------------------------------------------------------------------
// 10. SYSTEM ENTRYPOINT
// --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Populate Dynamic Sub-elements
    buildWatchersList();
    buildHeavensLadder();
    initMetatronCube();
    renderCitations();

    // Bind Interface Controls
    setupEventListeners();

    // Pre-select first items in list boxes
    selectWatcher("samyaza");
});
