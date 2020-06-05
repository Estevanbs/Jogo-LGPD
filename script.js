var caixapontuacao = document.getElementById('pontuacao')
var caixapergunta = document.getElementById('pergunta')
var ul = document.getElementById('ul')
var op1 = document.getElementById('op1')
var op2 = document.getElementById('op2')
var op3 = document.getElementById('op3')
var op4 = document.getElementById('op4')
var botaoproximo = document.getElementById('botao')
var explicacao = document.getElementById('explicacao')


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
            resposta: 1,
            explicacao: 'LGPD é a sigla adotada para designar a Lei Geral de Proteção de Dados (Lei nr 13.709) sancionada em 14 de agosto de 2018.'
        },
        {
            pergunta: 'O que são dados pessoais?',
            opcoes: [
                'São os dados relacionados a pessoa jurídica identificada ou identificável',
                'São os dados relacionados a pessoa natural/física identificada ou identificável',
                'São os dados relativos a titular que não possa ser identificado',
                'São os dados utilizados com intuito de pesquisa'
            ],
            resposta: 2,
            explicacao: 'No artigo 5 da lei 13709/18 é considerado como dado pessoal toda a informação relacionada a pessoa natural/física identificada ou identificável.'
        },
        {
            pergunta: 'O que são dados pessoais sensíveis?',
            opcoes: [
                'São dados não relacionados a aspectos íntimos do cidadão',
                'São quaisquer informações que permitam saber quem você é',
                'São os dados relacionados a aspectos íntimos do cidadão',
                'São os dados legais de um cidadão'
            ],
            resposta: 3,
            explicacao: 'O artigo 5 da lei 13709/18 considera que são dados pessoais aqueles que expõe aspectos íntimos do cidadão, como opinião política, sexualidade, dados biométricos, entre outros.'
        },
        {
            pergunta: 'Em quais casos pode ser mantido os dados após o término de seu tratamento?',
            opcoes: [
                'Em caso de incoerência de informações',
                'Quando a informação tem por fito o estudo de algum órgão de pesquisa ou não é utilizada exclusivamente pelo controlador',
                'Em cumprimento de ação legal, transferência a terceiro, estudo por um órgão de pesquisa e uso exclusivo do controlador',
                'Apenas quando o usuário não permite que a informação seja mantida'
            ],
            resposta: 3,
            explicacao: 'No artigo 16 da lei 13709/18 é autorizada a conservação dos dados pessoais nas finalidades de cumprimento de ação legal, transferência a terceiro, estudo por um órgão de pesquisa e uso exclusivo do controlado.'
        },
        {
            pergunta: 'Como deve ser feito o tratamento de dados pessoais de crianças e adolescentes?',
            opcoes: [
                'O consentimento só será aceito se a criança/adolescente tiver pais',
                'Não será necessário o consentimento da criança/adolescente ou responsável legal',
                'Deverá ser realizado com o consentimento de, pelo menos, um responsável legal',
                'O consentimento deverá ser exclusivamente dado pela própria criança/adolescente'
            ],
            resposta: 3,
            explicacao: 'No artigo 14, da lei 13709/18 é exposto que o tratamento de dados pessoais de crianças deverá ser realizado com o consentimento específico e em destaque dado por, pelo menos, um dos pais ou pelo responsável legal.'
        },
        {
            pergunta: 'O que é um titular de dados?',
            opcoes: [
                'Qualquer pessoa, seja física ou jurídica',
                'Aquele que cuida do tratamento de dados',
                'A empresa que recebe os dados',
                'A pessoa natural/física a quem se referre os dados pessoais, os quais são o objeto de tratamento'
            ],
            resposta: 4,
            explicacao: 'Segundo a lei 13709/18 o titular de dados precisa ser uma pessoa natural/física.'
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
    explicacao.innerText = quiz.perguntas[perguntaatual].explicacao

    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.pointerEvents = "none";
    }

    botaoproximo.disabled = false

}


function proxima() {

    if (perguntaatual < quiz.perguntas.length - 1) {
        perguntaatual++
        load()
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
        }
        explicacao.innerText = ""
    }
    else {
        window.location='final.html'
        final()
    }

}

function final() {
    window.alert(`Você acertou ${pontuacao / 10} de um total de ${quiz.perguntas.length} questões.`)

}

