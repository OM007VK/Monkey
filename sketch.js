var PLAY = 0;
var END = 1; 
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score=0;
var gameOverImage;

function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameOverImage = loadImage("gameover.png");
}

function setup() {
createCanvas(600,400);
  monkey = createSprite(100,300,50,50);
  monkey.addAnimation("monkeyRun",monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(300,363,1250,10);
  obstacleGroup = createGroup();
  
  //gameOverImage = createSprite (295,250,15,15);
  //gameOverImage.addImage(gameOverImage);
  //gameOver.scale=1.0;
}


function draw() {
background(200);
textsize=("10");
drawSprites();
  
  //text ("YOU LOST",250,200);
  //text.size = 0.9;
  
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);
  
  ground.velocityX = -2.5;
  if (ground.x < 0)
  {
   ground.x = ground.width/2;
  }
  
  
  if (gameState === PLAY)
  {
    //gameOver.visible = false;
    
    text ("Survival Time: " +score,200,50);
    score = score + Math.round(getFrameRate()/60);  
  
   if (keyDown("space"))
  {
   monkey.velocityY=-10;   
  }
    
  if (frameCount%100===0)
  {
   var banana = createSprite(650,150,10,40);
   banana.addImage("banana",bananaImage);
   banana.velocityX = -7;
   banana.scale=0.11;
   banana.lifetime = 150; 
  }
  
  if (frameCount%100===0)
  {
   var obstacle = createSprite(650,327,50,50);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX = -5;
   obstacle.scale=0.18;
   obstacle.lifetime = 150; 
    
   obstacleGroup.add(obstacle); 
  }
  
  if(obstacleGroup.isTouching(monkey))
  {
    gameState = END;
  }
 }
  

  else if (gameState === END) 
  {
    monkey.destroy();   
    obstacleGroup.destroyEach();
    //gameOver.visible = true;
    text("GAME OVER",200,200);
  }
}
