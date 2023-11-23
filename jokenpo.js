// Cria variáveis para armazenar os elementos de HTML pelo ID
let imagemJogador = document.getElementById("imgJogador")
let imagemSistema = document.getElementById("imgSistema")

let resultadoJogo = document.getElementById("lbResultado")

let inputJogador = document.getElementById("inptJogador")
let labelJogador =document.getElementById("lbJogador")

let rodadasJogo = document.getElementById("lbRodadas")
let jogadorPts = document.getElementById("lbJogadorPts")
let sistemaPts = document.getElementById("lbSistemaPts")

let botaoJogar = document.getElementById("btnJogar")
let botaoReiniciar = document.getElementById("btnReiniciar")

let efeitoConfirma = document.getElementById("somConfirma")
let efeitoSeleciona = document.getElementById("somSeleciona")

let musicaJogo = document.getElementById("musicaFundo")

// Cria variáveis para pontuações e total de rodadas
let jogadorPontos = 0
let sistemaPontos = 0
let rodadasTotal = 0

// Cria variáveis para os índices das imagens
let indiceImgJogador = 0
let indiceImgSistema = 0

// Cria função para confirmar o nome do jogador
function ConfirmaNome(){

    // Atualiza o nome do jogador na label
    labelJogador.innerHTML = inputJogador.value

}


// Cria função para trocar imagem do jogador com um clique
function TrocaImagem(){

    // Verifica se o botão Jogar está habilitado (Condição para trocar de imagem)
    if(botaoJogar.disabled == false){

        // Toca o som de seleciona
        efeitoSeleciona.play()
    
        // Verifica o índice da imagem do jogador
        switch(indiceImgJogador){

            // Caso seja zero, após o clique
            case 0:

                // Troca imagem para "pedra" e o índice para 1
                imagemJogador.src = "img/rock-img-new.png"
                indiceImgJogador = 1
                break

            // IDEM ao anterior

            case 1:

                imagemJogador.src = "img/paper-img-new.png"
                indiceImgJogador = 2
                break
            
            case 2:

                imagemJogador.src = "img/scissor-img-new.png"
                indiceImgJogador = 3
                break
            
            case 3:

                imagemJogador.src = "img/rock-img-new.png"
                indiceImgJogador = 1
                break

        }
    
    }

}

// Cria função para trocar imagem do jogador com um clique
function Joga(){

    // Verifica se o índice da imagem do jogador não é zero (Condição para jogar)
    if(indiceImgJogador != 0){
                
        // Toca o som de confirma
        efeitoConfirma.play()
        
        // Desabilita botão Jogar
        botaoJogar.disabled = true
    
        //  Gera um número inteiro randômico de 1 a 3 para imagem do sistema
        indiceImgSistema = Math.floor(Math.random() * (3) + 1)
    
        // Verifica o índice da imagem do sistema
        switch(indiceImgSistema){
    
            // Caso seja um, após o clique
            case 1:
    
                // Troca imagem para "pedra"
                imagemSistema.src = "img/rock-img-new.png"
                break
            
            // IDEM ao anterior

            case 2:
    
                imagemSistema.src = "img/paper-img-new.png"
                break
                
            case 3:
    
                imagemSistema.src = "img/scissor-img-new.png"
                break
    
        }
    
        // Chama a função que mostra o resultado e altera rodadas e pontos
        Resultado()

    }

}

// Cria função para mostrar o resultado e a pontuação
function Resultado(){

    // Soma rodada e mostra na respectiva label 
    rodadasTotal++
    rodadasJogo.innerHTML = `Rodada ${rodadasTotal}`

    // Verifica se o número de rodadas chegou no limite 
    if(rodadasTotal == 5){
        
        // Desabilita o botão Reiniciar
        botaoReiniciar.disabled = true

    }

    // Verifica se os índices das imagens são iguais
    if(indiceImgJogador == indiceImgSistema){

        // Mostra resultado na respectiva label
        resultadoJogo.innerHTML = `EMPATE! :S`

    }

    // Verifica os índices que dão vitória para o sistema
    if((indiceImgJogador == 1 && indiceImgSistema == 2) || (indiceImgJogador == 3 && indiceImgSistema == 1) || (indiceImgJogador == 2 && indiceImgSistema == 3)){

        // Soma pontos para o sistema, mostra pontos e resultado
        sistemaPontos++
        sistemaPts.innerHTML = `${sistemaPontos}`
        resultadoJogo.innerHTML = `Sistema VENCEU! :(`        

    }

    // Verifica os índices que dão vitória para o jogador
    if((indiceImgJogador == 2 && indiceImgSistema == 1) || (indiceImgJogador == 1 && indiceImgSistema == 3) || (indiceImgJogador == 3 && indiceImgSistema == 2)){

        // Soma pontos para o jogador, mostra pontos e resultado
        jogadorPontos++
        jogadorPts.innerHTML = `${jogadorPontos}`
        resultadoJogo.innerHTML = `${inputJogador.value} VENCEU! :D`        

    }

}

// Cria função para reiniciar o jogo
function Reinicia(){
    
    if(indiceImgJogador != 0){

        // Toca o som de confirma
        efeitoConfirma.play()

        // Habilita o botão Jogar
        botaoJogar.disabled = false

        // Reseta a mensagem de resultado
        resultadoJogo.innerHTML = `[ Resultado ]`
        
        // Reseta as imagens e índices do jogador e do sistema
        imagemJogador.src = "img/frame-player.png"
        indiceImgJogador = 0
        imagemSistema.src = "img/frame-sistema.png"
        indiceImgSistema = 0

    }

}

// Cria função para tocar a música do jogo
function Musica(){

    // Toca a música do jogo
    musicaJogo.play()

}
