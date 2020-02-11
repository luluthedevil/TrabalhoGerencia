let xPersonagem = 200; //posição horizontal do personagem
let yPersonagem = 375; //posição vertical do personagem
let colidiu = false;
let pontos = 0;

function mostrarPersonagem() {
    image(personagem, xPersonagem, yPersonagem, 30, 30);
}

function podeMover(){
    if(yPersonagem < 375) {
        return true;
    }
    return false;
}

function podeMoverX() {
  return (xPersonagem > 10 && xPersonagem<430) ? true : false;
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
    if (keyIsDown(LEFT_ARROW)) {
      if (podeMoverX()) {
        xPersonagem = xPersonagem - 3;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (podeMoverX()) {
        xPersonagem = xPersonagem + 3;
      }
    }
}

function voltar(){
    yPersonagem = 375;
}

function verificarColisao() {
  for (let i = 0; i < imgCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], widthCarro, heightCarro, xPersonagem, yPersonagem, 15);
    if(colidiu){
      voltar();
      somDeColisao.play();

      diminuiVelCarros();
      
      if(pontos > 0){
        pontos--;
      }
    }
  }
}

function contarPontos(){
    if(yPersonagem < 15){
      pontos++;
      aumentaVelCarros();
      voltar();
      somDePonto.play();
    }
}

function mostrarPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(0,0,255));
    text(pontos, width/5, 27);
}