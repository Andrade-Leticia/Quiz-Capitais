// Seleção de elementos
const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const telaFim = document.getElementById('tela-fim');
const telaInformacoes = document.getElementById('tela-informacoes');

const btnIniciar = document.getElementById('btn-iniciar');
const btnSair = document.getElementById('btn-sair');
const btnInformacoes = document.getElementById('btn-informacoes');
const btnRetornar = document.getElementById('btn-retornar');
const btnContinuarInfo = document.getElementById('btn-continuar-info');

const perguntaElement = document.getElementById('pergunta');
const bandeiraElement = document.getElementById('bandeira');
const opcoesElements = document.querySelectorAll('.opcao');

const pontuacaoElement = document.getElementById('pontuacao');
const infoCidadeElement = document.getElementById('info-cidade');

const musicaFundo = document.getElementById('musica-fundo');
const somClique = document.getElementById('som-clique');

const btnPause = document.getElementById('btn-pause');
const btnPlay = document.getElementById('btn-play');
const btnRestart = document.getElementById('btn-restart');
const sliderVolume = document.getElementById('slider-volume');

// Dados do jogo
const informacoesCidades = [
    "Brasília: Capital do Brasil, localizada no centro-oeste, população de 2,8 milhões.\nInaugurada em 1960.",
    "Berna: Capital da Suíça, fundada no século XII, 133 mil habitantes.\nInscrita na UNESCO.",
    "Ancara: Capital da Turquia, população de 4 milhões no centro urbano.\nFundada em 1923.",
    "Hanói: Capital do Vietnã, segunda maior cidade do país, 6 milhões de habitantes.",
    "Bangkok: Capital da Tailândia, originou-se no século XV, 8,2 milhões de habitantes.",
    "Berlim: Capital da Alemanha, população de 3,5 milhões.\nDividida após a Segunda Guerra Mundial.",
    "Cairo: Capital do Egito, fundada em 969, 9,54 milhões de habitantes.",
    "Londres: Capital do Reino Unido, mais de 8 milhões de habitantes.\nReconstruída após 1666.",
    "Lima: Capital do Peru, fundada em 1535 por Pizarro.\nMais de 9 milhões de habitantes.",
    "Teerã: Capital do Irã, mais de 8 milhões de habitantes.\nCrescimento urbano significativo pós-Segunda Guerra Mundial.",
    "Washington D.C.: Capital dos EUA, 690 mil habitantes.\nPossui uma região metropolitana de 6,4 milhões.",
    "Tóquio: Capital do Japão, população de 13,96 milhões.\nDesignada como metrópole.",
    "Camberra: Capital da Austrália, população de 450 mil.\nProjetada por Walter Burley Griffin.",
    "Moscou: Capital da Rússia, população de 12,4 milhões.\nLocalizada às margens do rio Moscou.",
    "Nova Déli: Capital da Índia, área de 42,7 km².\nProjetada por Edwin Lutyens.",
    "Paris: Capital da França, aproximadamente 2 milhões de habitantes.\nCortada pelo Rio Sena.",
    "Pequim: Capital da China, mais de 21 milhões de habitantes.\nUma das cidades mais antigas.",
    "Seul: Capital da Coreia do Sul, 9,7 milhões de habitantes.\nFundada em 18 a.C.",
    "Ulã Bator: Capital da Mongólia, 1,3 milhão de habitantes.\nFundada em 1639.",
    "Bogotá: Capital da Colômbia, 7,1 milhões de habitantes.\nFundada em 1538.",
    "Bruxelas: Capital da Bélgica, população de aproximadamente 1 milhão.\nPatrimônio Mundial da UNESCO."
];

const perguntas = [
    "Qual é a capital do Brasil?",
    "Qual é a capital da Suíça?",
    "Qual é a capital da Turquia?",
    "Qual é a capital do Vietnã?",
    "Qual é a capital da Tailândia?",
    "Qual é a capital da Alemanha?",
    "Qual é a capital do Egito?",
    "Qual é a capital do Reino Unido?",
    "Qual é a capital do Peru?",
    "Qual é a capital do Irã?",
    "Qual é a capital dos EUA?",
    "Qual é a capital do Japão?",
    "Qual é a capital da Austrália?",
    "Qual é a capital da Rússia?",
    "Qual é a capital da Índia?",
    "Qual é a capital da França?",
    "Qual é a capital da China?",
    "Qual é a capital da Coreia do Sul?",
    "Qual é a capital da Mongólia?",
    "Qual é a capital da Colômbia?",
    "Qual é a capital da Bélgica?"
];

const bandeiras = [
    "/asserts/Brasília.png",
    "/asserts/Berna.png",
    "/asserts/Ancara.png",
    "/asserts/Anói.png",
    "/asserts/Bangkok.jpeg",
    "/asserts/Berlim.png",
    "/asserts/Cairo.jpeg",
    "/asserts/inglaterra.jpeg",
    "/asserts/Lima.png",
    "/asserts/Teerã.png",
    "/asserts/Washington D.C.png",
    "/asserts/Tóquio.png",
    "/asserts/Camberra.png",
    "/asserts/Moscou.png",
    "/asserts/Nova Déli.png",
    "/asserts/Paris.png",
    "/asserts/Pequim.jpeg",
    "/asserts/Seul.png",
    "/asserts/Ulã Bator.png",
    "/asserts/Bogotá.png",
    "/asserts/Bruxelas.jpeg"
];

const opcoesRespostas = [
    ["Rio de Janeiro", "Salvador", "Brasília"],
    ["Zurique", "Lucerna", "Berna"],
    ["Istambul", "Antália", "Ancara"],
    ["Huê", "Da Lat", "Hanói"],
    ["Chiang Mai", "Chiang Rai", "Bangkok"],
    ["Munique", "Hamburgo", "Berlim"],
    ["Alexandria", "Guizé", "Cairo"],
    ["Liverpool", "Cambridge", "Londres"],
    ["Cusco", "Puno", "Lima"],
    ["Zahedan", "Isfahan", "Teerã"],
    ["New York", "Boston", "Washington D.C."],
    ["Osaka", "Quioto", "Tóquio"],
    ["Sydney", "Melbourne", "Camberra"],
    ["São Petersburgo", "Cazã", "Moscou"],
    ["Calcutá", "Agra", "Nova Déli"],
    ["Bordéus", "Cannes", "Paris"],
    ["Xangai", "Hong Kong", "Pequim"],
    ["Busan", "Suwon", "Seul"],
    ["Caracórum", "Darhan", "Ulã Bator"],
    ["Cali", "Santa Marta", "Bogotá"],
    ["Namur", "Bruges", "Bruxelas"]
];

// Estado do jogo
let indiceAtual = 0;
let pontuacao = 0;

// Inicialização
window.onload = () => {
    musicaFundo.volume = 1; // Volume inicial
    musicaFundo.play();
    mostrarTela(telaInicial);
};

// Funções para exibir telas
function mostrarTela(tela) {
    // Esconder todas as telas
    document.querySelectorAll('.tela').forEach(t => t.classList.add('escondido'));
    // Mostrar a tela desejada
    tela.classList.remove('escondido');
}

function iniciarJogo() {
    somClique.play();
    pontuacao = 0;
    indiceAtual = 0;
    mostrarTela(telaJogo);
    carregarPergunta();
}

function sairJogo() {
    somClique.play();
    alert("Obrigado por jogar!");
}

function exibirInformacoes() {
    somClique.play();
    mostrarTela(telaInformacoes);
    carregarInfoCidade();
}

function retornarTelaInicial() {
    somClique.play();
    mostrarTela(telaInicial);
}

function carregarPergunta() {
    if (indiceAtual < perguntas.length) {
        perguntaElement.textContent = perguntas[indiceAtual];
        bandeiraElement.src = bandeiras[indiceAtual];
        opcoesElements.forEach((opcao, index) => {
            opcao.textContent = opcoesRespostas[indiceAtual][index];
        });
    } else {
        finalizarJogo();
    }
}

function selecionarOpcao(event) {
    const opcaoSelecionada = event.target.getAttribute('data-opcao');
    somClique.play();
    if (opcaoSelecionada == 2) { 
        pontuacao++;
    }
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    pontuacaoElement.textContent = `Pontuação: ${pontuacao} de ${perguntas.length}`;
    mostrarTela(telaFim);
}

let infoIndice = 0;

function carregarInfoCidade() {
    if (infoIndice < informacoesCidades.length) {
        infoCidadeElement.textContent = informacoesCidades[infoIndice];
    } else {
        retornarTelaInicial();
    }
}

function continuarInfo() {
    somClique.play();
    infoIndice++;
    if (infoIndice < informacoesCidades.length) {
        carregarInfoCidade();
    } else {
        retornarTelaInicial();
    }
}

// Controle de música
btnPause.addEventListener('click', () => {
    musicaFundo.pause();
});

btnPlay.addEventListener('click', () => {
    musicaFundo.play();
});

btnRestart.addEventListener('click', () => {
    musicaFundo.currentTime = 0;
    musicaFundo.play();
});

// Slider de Volume
sliderVolume.addEventListener('input', (event) => {
    musicaFundo.volume = event.target.value;
});


// Adicionar listeners
btnIniciar.addEventListener('click', iniciarJogo);
btnSair.addEventListener('click', sairJogo);
btnInformacoes.addEventListener('click', exibirInformacoes);
btnRetornar.addEventListener('click', retornarTelaInicial);
btnContinuarInfo.addEventListener('click', continuarInfo);
opcoesElements.forEach(opcao => opcao.addEventListener('click', selecionarOpcao));
