const caixaPrincipal = document.querySelector(".caixa-principal);
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1) O que é a Inteligência Artificial?",
        alternativas: [
            "A) Tecnologia que simula processos cognitivos humanos, como aprendizado e resolução de problemas",
"B) Programação de computadores para realizar tarefas simples, como cálculos matemáticos",
        ]
    },
    {
        enunciado: "2) Qual das seguintes áreas NÃO é considerada parte da IA?",
        alternativas: [
          "A) Aprendizado de Máquina",
"B) Processamento de Linguagem Natural",  
        ]
    },
    {
        enunciado: "3) A IA pode substituir o trabalho humano?",
        alternativas: [
            "A) Sim, em todas as áreas de trabalho",
            "B) Não, ela pode substituir apenas tarefas repetitivas ou baseadas em padrões",
        ]
    }
    {
        enunciado: "4) O que é Aprendizado de Máquina?",
        alternativas: [
            "A) Quando um computador segue regras programadas por um humano para executar tarefas.",
            "B) Quando um computador aprende a realizar tarefas a partir de dados e experiência, sem necessidade de programação explícita.",
        ]
    }
    {
        enunciado: "5) A IA pode tomar decisões morais?", 
        alternativas: [
           "A) Sim, ela pode ser programada para entender e aplicar conceitos éticos.",
           "B) Não, porque a IA não tem valores morais ou consciência.
        ]
    }

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

    function mostraAlternativa() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa;
        }
    }

    mostraPergunta();