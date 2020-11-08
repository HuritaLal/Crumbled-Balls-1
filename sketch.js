const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var boxside1,boxside2,boxside3;
var ground2;


function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,630,25,25);
	
	ground = new Ground(400,680,800,10);

	boxside1 = new Dustbin(750,625,20,100);

	boxside2 = new Dustbin(640,665,200,20);
	
	boxside3 = new Dustbin(550,625,20,100);


	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background(0);

   paper.display();
   ground.display();
   boxside1.display();
   boxside2.display();
   boxside3.display();

   drawSprites();

	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 30,y : -30})
		//Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



