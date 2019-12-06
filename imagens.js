let imagemFundo;
let personagem;

let carro1;
let carro2;
let carro3;

function preload(){
    imagemFundo = loadImage("img/estrada.png");
    personagem = loadImage("img/ator-1.png");
    
    carro1 = loadImage("img/carro-1.png");
    carro2 = loadImage("img/carro-2.png");
    carro3 = loadImage("img/carro-3.png");
    
    let carros = [carro1, carro2, carro3];
}
