let xCarros = 350;
let yCarros = 40;
let widthCarro = 50;
let heightCarro = 40;

function mostraCarro(){
  image(imgCar1, xCarros, yCarros, widthCarro, heightCarro);
}

function moveCarro(){
  xCarros = xCarros - 2;
}