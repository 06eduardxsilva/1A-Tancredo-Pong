let xBolinha = 300;
let yBolinha = 230;
let diametro =25;

let velocidadeXBolinha = 2
let velocidadeYBolinha = 2
let

function setup() {
  createCanvas(600, 460);
}

function draw() {
  background(25);
  criarBolinha();
  movimentaBolinha();
 encostaNaBorda();

}
  
    
  function criarBolinha () {
    circle(xBolinha,yBolinha,diametro)
    
  }
  
  function movimentaBolinha () {
     xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
    
  }
  function encostaNaBorda(){
    if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1
    
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1 }
  }
}
