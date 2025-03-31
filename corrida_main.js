let pontos =  0 
let level = 1
let vida = 5

let texto1 = new Text()
let texto2 = new Text()
let texto3 = new Text()

let audio = new Audio('space-ship-sound-33258.mp3')


let imgGameOver = new Image()
imgGameOver.src = './img/gameOver.png'

let imgVitoria = new Image()
imgVitoria.src = './img/youwin.png'

let des = document.getElementById('des').getContext('2d')

let fundo = new Fundo (0,0,800,600, './img/fundoGame1.png')
let fundo2 = new Fundo (0,-600,800,600, './img/fundoGame2.png')
let fundo3 = new Fundo (0,-1200,800,600, './img/fundoGame1.png')

let jogador = new Jogador (380,510,40,80,'./img/nave_jogador2.png')

let alienigena = new NaveInimigo(10,-150,50,100,'./img/alienigena2.png')
let asteroide = new  NaveInimigo(500,-280,50,100,'./img/asteroide2.png')
let ovini = new NaveInimigo(300,60,-70,100,'./img/ovini2.png')
let planeta1 = new NaveInimigo(15,-50,75,100, './img/planeta1.png')
let planeta2 = new NaveInimigo(600,-300,40,100,'./img/planeta2.png')
let planeta3 = new NaveInimigo(600,-300,40,100,'./img/planeta3.png')

document.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(e.key === 'a'){
        jogador.dir = -5
    }else if(e.key === 'd'){
        jogador.dir = 5
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        jogador.dir = 0
    }else if(e.key === 'd'){
        jogador.dir = 0
    }
})

function fases(){
   if((pontos >= 10) &&(level <= 3)){
    level += 1
    pontos = 0
    alienigena.velocidadeNave += 5
    ovini.velocidadeNave += 5
    asteroide.velocidadeNave += 5
   }else if (level >= 4) {
    jogoRodando = false
    venceu = true
   desenhaVitoria()
  }
}

function desenhaVitoria() {
    des.clearRect(0, 0, 800, 600); 
    des.drawImage(imgVitoria, 200, 150, 400, 300);
}

function colisao(){
  if(jogador.colid(alienigena)){
    vida -= 1
    alienigena.recomeca()
  }if(jogador.colid(asteroide)){
    vida -= 1
    asteroide.recomeca()
  }if(jogador.colid(ovini)){
     vida -= 1
     ovini.recomeca()
  }if(jogador.colid(planeta1)){
    vida -= 1
    planeta1.recomeca()
 }if(jogador.colid(planeta2)){
    vida -= 1
    planeta2.recomeca()
 }if(jogador.colid(planeta3)){
    vida -= 1
    planeta3.recomeca()
 }
}


function gameOver() {
    if (vida <= 0) {
        jogoRodando = false; 
        desenhaGameOver(); 
    }
}

function desenhaGameOver() {
    des.clearRect(0, 0, 800, 600)
    des.drawImage(imgGameOver, 200, 150, 400, 300)
}


function atualiza(){
    fundo.mov()
    fundo2.mov()
    fundo3.mov()
    alienigena.mov()
    asteroide.mov()
    ovini.mov()
    planeta1.mov()
    planeta2.mov()
    planeta3.mov()
    jogador.mov()
    colisao()
    gameOver()
    fases()
    audio.play()
}

function desenha(){
    fundo.des_img()
    fundo2.des_img()
    fundo3.des_img()
    jogador.des_img()
    alienigena.des_img()
    asteroide.des_img()
    ovini.des_img()
    planeta1.des_img()
    planeta2.des_img()
    planeta3.des_img()
    texto1.des_text("Pontos: " + pontos,10,25, 'white','24px Times')
    texto2.des_text("Vida: " + vida,10,50, 'white','24px Times')
    texto3.des_text("Level: " + level,10,75, 'white','24px Times')
}

function main(){
    des.clearRect(0,0,800,600)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()