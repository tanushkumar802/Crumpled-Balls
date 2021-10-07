
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="play";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
city=createSprite(width/2,-1500);
city.addAnimation("city",cityAnimation);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (city.isTouching(player.spt)){
	  gamestate="Win";
	  if(gameState ==="Win")
	  {
		  stroke("Green");
		  fill("Green");
		  textSize(40);
		  text("Congratulations!You Made It!",width/2-250,-1700);
		carGroup1.destroyEach();
		logGroup1.destroyEach();  
	  }
  }
  drawSprites();
 
}



