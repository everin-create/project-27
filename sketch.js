
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Render=Matter.Render;

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	
   roof= new Roof(400,20,400,20)
   bobDiameter=40;
  // bobDiameter=bobObject1.r*2
  //  bobDiameter2=bobObject2.r*2
  //  bobDiameter3=bobObject3.r*2
  //  bobDiameter4=bobObject4.r*2
  //  bobDiameter5=bobObject5.r*2
   
  

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	

  rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roof.body,0, 0)
	rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1, 0)
  rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2, 0)
  
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  background(255);
  Engine.update(engine)
  bobObject5.display()
  bobObject4.display()
  bobObject3.display()
  bobObject2.display()
  bobObject1.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}

//   rope2.display()
//   rope3.display()
//   rope4.display()
//  rope5.display()
 
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:130,y:-145});

  
  }
}


