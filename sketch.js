
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	roof1 = new Roof (400,100,500,30);
	bobObject1 = new Bob(200,450,100);
	bobObject2 = new Bob(300,450,100);
	bobObject3 = new Bob(400,450,100);
	bobObject4 = new Bob(500,450,100);
	bobObject5 = new Bob(600,450,100);
	chain1 = new Chain(bobObject1.body,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  chain1.display();
  drawSprites();

 
}



