//Fisica Bolinha
let xBolinha = 350;
let yBolinha = 250;
let gravidade = 0.19;
let velocidade = 0;
let diametro = 50;
let raio = diametro / 2;

//Cores (não utilizadas)
let corBall1 = 255;
let corBall2 = 255;
let corBall3 = 255;

let somPulo;
let fundo;
let nome = "Platforms";

function preload(){
  fundo = loadImage("assets/metal.png")
  somPulo = loadSound("assets/pulo(1).wav")
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(fundo)
  fill(corBall1, corBall2, corBall3)
  circle(xBolinha, yBolinha, diametro);
  fill(height - yBolinha, 0, yBolinha);
  rect(10, 12, height - yBolinha, 10);
  fill(255);
  rect(0, 550, 200, 10);
  rect(0, 210, 100, 10);
  rect(600, 210, 100, 10);
  rect(500, 480, 200, 10);
  rect(500, 555, 200, 10);
  
mecanicaGravidade();   
barreirasBolinha(); 
  
camaElastica(-9);  
chao(); 
areiaMovedica(); 
esteira(455, 465, -0.4, 2);
esteira(530, 540, -0.4, -2);

  if (keyIsDown(LEFT_ARROW)){
    xBolinha -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xBolinha += 5;
  }
  
  textAlign(CENTER);
  textSize(40);
  textFont("Copperplate Gothic Bold")
  fill(255);
  text(nome,350, 350);
  
  textAlign(CENTER);
  textSize(12);
  textFont("Arial")
  fill(0);
  text(floor(height - yBolinha), 20, 10)
 
  }

// Funções

function keyPressed() {
  if (keyCode === UP_ARROW) {
    velocidade = -7;
    somPulo.play();
  } 
}

function barreirasBolinha(){
  if (yBolinha + raio > height){
    yBolinha = height - raio;
  } 
  if (yBolinha - raio < 0){
    yBolinha = raio;
  }
  if (xBolinha + raio > width){
    xBolinha = width - raio;
  }
  if (xBolinha - raio < 0){
    xBolinha = raio;
  }
}
 
function mecanicaGravidade(){
    velocidade += gravidade;
  yBolinha += velocidade;
  if (velocidade < -10){
    velocidade = -10;
  }
}

function esteira(yMin, yMax, veloc, xMovimento){
   if (xBolinha + raio > width - 200 &&
     yBolinha > yMin &&
     yBolinha < yMax){
     velocidade = veloc;   
     xBolinha += xMovimento;
  }
  
}

function areiaMovedica(){
      if (xBolinha + raio > width - 100 &&
     yBolinha > 185 &&
     yBolinha < 220){
    velocidade = -0.1; 
}
}

function chao(){
   if (xBolinha - raio < 100 &&
     yBolinha > 185 &&
     yBolinha < 195){
    velocidade = -0.4;
   }
}

function camaElastica(pulo){
    if (xBolinha - raio < 200 &&
     yBolinha > 530 &&
     yBolinha < 540){
    velocidade = pulo;
    somPulo.play();
  }
}