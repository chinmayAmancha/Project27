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

	bobObject1 = new Bob(160,roofObject.body-200,160,80);
	bobObject2 = new Bob(320,roofObject.body-200,160,80);
	bobObject3 = new Bob(480,roofObject.body-200,160,80);
	bobObject4 = new Bob(640,roofObject.body-200,160,80);
	bobObject5 = new Bob(800,roofObject.body-200,160,80);

	rope1 = new rope(bobObject1.body,roofObject.body,bobDiameter2,0);
	rope2 = new rope(bobObject2.body,roofObject.body,bobDiameter2,0);
	rope3 = new rope(bobObject3.body,roofObject.body,bobDiameter2,0);
	rope4 = new rope(bobObject4.body,roofObject.body,bobDiameter2,0);
	rope5 = new rope(bobObject5.body,roofObject.body,bobDiameter2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

	if(KeyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject5.body,bobObject.body.position,{x:810,y:roofObject.body-150});
	}

  drawSprites();
 
}



