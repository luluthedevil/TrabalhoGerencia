let imagemFundo;
let personagem;

let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarros;

let somDeFundo;
let somDePonto;
let somDeColisao;

function preload(){
    imagemFundo = loadImage("img/estrada.png");
    personagem = loadImage("img/ator-1.png");

    somDeFundo = loadSound("music/trilha.mp3");
    somDeColisao = loadSound("music/colidiu.mp3");
    somDePonto = loadSound("music/pontos.wav");
    
    imgCarro1 = loadImage("img/carro-1.png");
    imgCarro2 = loadImage("img/carro-2.png");
    imgCarro3 = loadImage("img/carro-3.png");
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3];
}
