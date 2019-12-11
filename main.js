function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemFundo);
  mostraCarro();
  moveCarro();
  voltaPosicaoInicialCarro();
  mostrarPersonagem();
  moverPersonagem();
  verificarColisao();
  mostrarPontos();
  contarPontos();
}