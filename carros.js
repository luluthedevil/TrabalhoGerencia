let xCarros = [550, 550, 550, 550, 550, 550, 550];
let yCarros = [40, 96, 150, 210, 264, 318];
let velocidadeCarros = [2.9, 2.5, 3.2, 4, 3.3, 2.8];
let widthCarro = 50;
let heightCarro = 40;

var i;

function mostraCarro(){
  for(i=0; i<imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], widthCarro, heightCarro);
  }
}

function moveCarro(){
  for(i=0; i<imgCarros.length; i++){
    xCarros[i] = xCarros[i] - velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for(i=0; i<imgCarros.length; i++){
    if(xCarros[i] < -40){
      xCarros[i] = xCarros[xCarros.length - 1];
    }
  }
}

function aumentaVelCarros(){
  if(pontos%5 == 0){
    for(i=0;i<imgCarros.length; i++){
      velocidadeCarros[i] = velocidadeCarros[i] + 0.3;
    }
  }
}

function diminuiVelCarros(){
  if(pontos%5 == 0){
    for(i=0;i<imgCarros.length; i++){
      velocidadeCarros[i] = velocidadeCarros[i] - 0.3;
    }
  }
}