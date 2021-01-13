
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var floor,bintrash1,bintrash2,bintrash3;


function preload()
{
	
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(250,width/2,12);
	bintrash1  = new Bin (230,width/2,700,85);
	bintrash2  = new Bin (230,width/2,700,85);
	bintrash2  = new Bin (230,width/2,700,85);
	flor = new Floor (500,370,20,1100)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);

  paperBall.display();

  bintrash1.display();
  bintrash2.display();
  bintrash3.display();
  
  flor.display();
  
  drawSprites();
 
}
