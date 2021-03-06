
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var Anchor1X,Anchor1Y,Anchor2X,Anchor2Y;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bobObject1= new Bob(400,400);
	bobObject2= new Bob(460,400);
	bobObject3= new Bob(520,400);
	bobObject4= new Bob(340,400);
	bobObject5= new Bob(280,400);

	roof= new Roof(400,100,350,20);

	rope1= new Rope(bobObject1.body,roof.body,-bobObject1.Diameter*2,0);
	rope2= new Rope(bobObject2.body,roof.body,-bobObject2.Diameter*2,0);
    rope3= new Rope(bobObject3.body,roof.body,-bobObject3.Diameter*2,0);
	rope4= new Rope(bobObject4.body,roof.body,-bobObject4.Diameter*2,0);
	rope5= new Rope(bobObject5.body,roof.body,-bobObject5.Diameter*2,0);




	Engine.run(engine);
  
}


function draw() {

	background("orange");

	Engine.update(engine);
  ellipseMode(CENTER);
 

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



