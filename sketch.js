let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(900, 900);
   background(color(500,0,0));
  cor = color(random(0,200), random(0,255), random(0,300));
  posicaoHorizontal = 400;
  posicaoVertical = 400;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,50);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}
