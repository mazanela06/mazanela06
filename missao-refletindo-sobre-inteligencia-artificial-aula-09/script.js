const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sente ansiedade em situações sociais?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Sentir ansiedade em novas situações é comum e pode ser um sinal de que você está se preocupando com o resultado. Essa preocupação pode te motivar a se preparar melhor."
            },
            {
                texto: "não",
                afirmacao: "Se você não sente ansiedade, pode ser que tenha uma boa capacidade de adaptação, o que é uma habilidade valiosa para enfrentar desafios."
            }
        ]
    },
    {
        enunciado: "Você tem dificuldades para relaxar devido à ansiedade?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Muitas pessoas acham difícil relaxar quando estão ansiosas, o que pode levar a um ciclo de estresse. Encontrar técnicas de relaxamento pode ser muito útil."
            },
            {
                texto: "não",
                afirmacao: "Se você consegue relaxar facilmente, pode ter desenvolvido estratégias eficazes para gerenciar a ansiedade, o que é uma grande vantagem."
            }
        ]
    },
    {
        enunciado: "Você já experimentou sintomas físicos de ansiedade, como coração acelerado ou sudorese?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Sintomas físicos são comuns em momentos de ansiedade e podem ser alarmantes. Reconhecê-los é importante para buscar formas de controle e alívio."
            },
            {
                texto: "não",
                afirmacao: "Se você não experimenta esses sintomas, pode ser que sua ansiedade se manifeste de outras formas, como pensamentos acelerados ou preocupações constantes."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
