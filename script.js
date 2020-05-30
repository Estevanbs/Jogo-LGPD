var caixapontuacao = document.getElementById('pontuacao')
var caixapergunta = document.getElementById('pergunta')
var ul = document.getElementById('ul')
var op1 = document.getElementById('op1')
var op2 = document.getElementById('op2')
var op3 = document.getElementById('op3')
var op4 = document.getElementById('op4')
var botaoproximo = document.getElementById('botao')


var quiz = {
    perguntas: [
        {
            pergunta: 'O que significa a sigla LGPD?',
            opcoes: [
                'Lei Geral de Proteção de Dados',
                'Lei Geral de Privacidade de Dados',
                'Lei Generalizadora da Probabilidade de Dados',
                'Lei Geral do Povo e de seus Dados'
            ],
            resposta: 1
        },
        {
            pergunta: 'blabla',
            opcoes: [
                'op1',
                'op2',
                'essa é a resposta',
                'op4'
            ],
            resposta: 3
        }
    ],
}

var perguntaatual = 0
var pontuacao = 0

function load() {
    caixapergunta.innerText = quiz.perguntas[perguntaatual].pergunta
    op1.innerText = quiz.perguntas[perguntaatual].opcoes[0]
    op2.innerText = quiz.perguntas[perguntaatual].opcoes[1]
    op3.innerText = quiz.perguntas[perguntaatual].opcoes[2]
    op4.innerText = quiz.perguntas[perguntaatual].opcoes[3]
    botaoproximo.disabled = true
}
window.onload = load()

function opcao(ele) {
    if (ele == quiz.perguntas[perguntaatual].resposta) {
        pontuacao += 10
        caixapontuacao.innerText = pontuacao


    }


    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.pointerEvents = "none";
    }

    botaoproximo.disabled = false

}


function proxima() {
    perguntaatual++
    load()
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.pointerEvents = "auto";
    }
}



