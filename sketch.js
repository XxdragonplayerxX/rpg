var pa1, pa2, pa3, pa4;
var pontuaçao = 0;
var player;
var ground1;

function preload(){

}

function setup(){
//tem 1550 de altura, cada andar tem 150 de tamanho.
canvas = createCanvas(400, 1500);
pa1 = createSprite(0, 750, 10, 1500);
pa2 = createSprite(400, 750, 10, 1500);
pa3 = createSprite(200, 0, 400, 10);
pa4 = createSprite(200, 1500, 400, 10);
player = createSprite(30, 120, 20, 50);
player.shapeColor = "blue"

ground1 = createSprite(130, 150, 370, 20);  
}

function draw(){
  background("black")
  createEdgeSprites();
  textSize(20)
  fill("white")
  text("Tempo de duração: " + pontuaçao, 50, 25, 300, 300)
  
player.collide(ground1);
player.collide(pa1);  
player.collide(pa2);  
player.collide(pa3);   
player.collide(pa4);  

pa1.visible = false;
pa2.visible = false;
pa3.visible = false;
pa4.visible = false;


  drawSprites();
}
function keyPressed() {
   if (keyCode === LEFT_ARROW) { 
    player.velocityX = -7; 
    player.velocityY = 0;
    
     } else if (keyCode === RIGHT_ARROW) {
      player.velocityX = +7; 
      player.velocityY = 0; 
     
    
     } else if (keyCode === DOWN_ARROW) {
      player.velocityY = +7;
      player.velocityX = 0; 

    } else if (keyCode === UP_ARROW) {
      player.velocityY = -7;
      player.velocityX = 0; 
    }
    if (keyCode === 32){
      player.velocityY = 0;
      player.velocityX = 0;
    }
  }


