let xPersonagem = 200; //posição horizontal do personagem
let yPersonagem = 370; //posição vertical do personagem
let colidiu = false;
let pontos = 0;

function mostrarPersonagem() {
    image(personagem, xPersonagem, yPersonagem, 30, 30);
}

function podeMover(){
    if(yPersonagem < 370) {
        return true;
    }
    return false;
}

function moverPersonagem() {
    if (keyIsDown(UP_ARROW)){
      yPersonagem = yPersonagem - 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeMover()){
        yPersonagem = yPersonagem + 3;
      }
    }
}

function voltar(){
    yPersonagem = 370;
}

function verificarColisao() {
  for (let i = 0; i < imgCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], widthCarro, heightCarro, xPersonagem, yPersonagem, 15);
    if(colidiu){
      voltar();
      if(pontos > 0){
        pontos--;
      }
    }
  }
}

function contarPontos(){
    if(yPersonagem < 15){
      pontos++;
      voltar();
    }
}

function mostrarPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(0,0,255));
    text(pontos, width/5, 27);
}