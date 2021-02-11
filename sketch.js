
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new ground(400, 200, 300, 20);
	bob1 = new Ball(200,200,30);
	sling = new Sling(bob1.body,{x:300,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  bob1.display();
  sling.display();
  drawSprites();
 
}



