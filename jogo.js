//Tamanho da tela do jogo
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criarMosquitoTempo = 1500

//Mudando o nivel
let nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal') {
    criarMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criarMosquitoTempo = 1000
} else if (nivel === 'ultra') {
    criarMosquitoTempo = 750
}

function ajustarTamanhoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

}
ajustarTamanhoJogo()

//Conometro
let cronometro = setInterval(function(){

    tempo -=1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('conometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica() {

    //Removendo o mosquito
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Vidas
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {    
            document.getElementById('v' + vidas).src = "/imagens/coracao_vazio.png"
            vidas++
        }
    }

    //O mosquito aparece de acordo com o tamanho da tela
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    //Controle para o número random que ele aparece não ser menos que 0
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = '/imagens/mosquito.png'
    mosquito.alt = 'imangem de um mosquito número 1'
    mosquito.className = tamanhoAleatorio()+' '+ladoAleatorio() //Tem que ter um espaço senão não funciona
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' 
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

//Cria um tamanho random
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'    
    
        case 2:
            return 'mosquito3'
    }   
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'    
    }
}
