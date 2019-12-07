let xCarros = 550;
let yCarros = 40;
let widthCarro = 50;
let heightCarro = 40;

function mostraCarro(){
  image(imgCarro1, xCarros, yCarros, widthCarro, heightCarro);
}

function moveCarro(){
  xCarros = xCarros - 5;
}

function voltaPosicaoInicialCarro(){
  if(xCarros < -40){
    xCarros = 550;
  }
}