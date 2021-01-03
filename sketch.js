
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var mouse
var mouse_down,mouse_img2,mouse_left,mouse_right,mouse_still,mouse_up
var cheese=[];
var cheeses

function preload()
{
	mouse_up   = loadAnimation("1.png","2.png","3.png","4.png","5.png")
	mouse_down   = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png")
	mouse_right   = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png")
	mouse_left     = loadAnimation("l1.png","l2.png","l3.png","l4.png","l5.png")
	mouse_img2= loadAnimation("1.png","1.png")
	
}

function setup() {
	createCanvas(displayWidth,displayHeight-310);


	engine = Engine.create();
	world = engine.world;

	mouse = createSprite(displayWidth/2,displayHeight/2.5,20,20)
	mouse.scale=0.35 
	mouse.addAnimation("mouse_still",mouse_img2)
	mouse.addAnimation("mouseu",mouse_up)
	mouse.addAnimation("moused",mouse_down)
	mouse.addAnimation("mouser",mouse_right)
	mouse.addAnimation("mousel",mouse_left)

	

	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,25))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,75))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,125))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,175))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,225))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,275))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,325))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,375))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,425))
	}
	for(var i=35;i<=displayWidth-25;i=i+10){
		cheese.push(new Cheese(i,475))
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  for(var i=0;i<cheese.length;i+=10){
	cheese[i].display();
	
}
  if(keyIsDown(UP_ARROW)){
	  mouse.y-=10;
	  mouse.changeAnimation("mouseu",mouse_up)
  }

  else if(keyIsDown(RIGHT_ARROW)){
	mouse.x+=10;
	mouse.changeAnimation("mouser",mouse_right)
}

else if(keyIsDown(LEFT_ARROW)){
	mouse.x-=10;
	mouse.changeAnimation("mousel",mouse_left)
}

else if(keyIsDown(DOWN_ARROW)){
	mouse.y+=10;
	mouse.changeAnimation("moused",mouse_down)
}
else{
	mouse.changeAnimation("mouse_still",mouse_img2)
}
  


  drawSprites();
 
}



