let xCarros = [550, 550, 550];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2.9, 2.5, 3.2]
let widthCarro = 50;
let heightCarro = 40;

function mostraCarro(){
  image(imgCarro1, xCarros[0], yCarros[0], widthCarro, heightCarro);
  image(imgCarro2, xCarros[1], yCarros[1], widthCarro, heightCarro);
  image(imgCarro3, xCarros[2], yCarros[2], widthCarro, heightCarro);
}

function moveCarro(){
  xCarros[0] = xCarros[0] - velocidadeCarros[0];
  xCarros[1] = xCarros[1] - velocidadeCarros[1];
  xCarros[2] = xCarros[2] - velocidadeCarros[2];
}

function voltaPosicaoInicialCarro(){
  if(xCarros[0] < -40){
    xCarros[0] = 550;
  }
  if(xCarros[1] < -40){
    xCarros[1] = 550;
  }
  if(xCarros[2] < -40){
    xCarros[2] = 550;
  }
}