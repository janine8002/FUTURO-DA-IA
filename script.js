const caixaPrincipal = document.querySelector(".caixa-principal);
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é a Inteligência Artificial?",
        alternativas: [
            "A) Tecnologia que simula processos cognitivos humanos, como aprendizado e resolução de problemas",
"B) Programação de computadores para realizar tarefas simples, como cálculos matemáticos",
        ]
    },
    {
        enunciado: "Qual das seguintes áreas NÃO é considerada parte da IA?",
        alternativas: [
          "A) Aprendizado de Máquina",
"B) Processamento de Linguagem Natural",  
        ]

    },
    {
        enunciado: "A IA pode substituir o trabalho humano?",
        alternativas: [
            "A) Sim, em todas as áreas de trabalho",
            "B) Não, ela pode substituir apenas tarefas repetitivas ou baseadas em padrões",
    