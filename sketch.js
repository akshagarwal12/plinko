
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300
function preload()
{
	
}

function setup() {
	createCanvas(500, 800);
	engine = Engine.create();
	world = engine.world;


	for(var k=0; k<=width; k=k+80){
		divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
	}
	for(var x=40; x<=width; x=x+70){
		plinkos.push(new Plinko(x,75))
	}
  
	for(var x1=15; x1<=width; x1=x1+70){
		plinkos.push(new Plinko(x1,175))
	} 
  
	for(var x2=30; x2<=width; x2=x2+70){
		plinkos.push(new Plinko(x2,275))
	}
	for(var x3=50; x3<=width; x3=x3+70){
		plinkos.push(new Plinko(x3,375))
	}
	ground= new Ground(240,775,480,50)
	Engine.run(engine);
	particle=new Particle(200,100,10)
  
}


function draw() {
	rectMode(CENTER);

 




  if(frameCount%60==0){
	  particles.push(new Particle(random(50,450),10,10))
  }




  background(0);
  ground.display()
  for(var z1 = 0; z1 < divisions.length; z1++){
	divisions[z1].display()
}  
  for(var z2 = 0; z2 < plinkos.length; z2++){
	plinkos[z2].display()
  }

  for(var z=0;z < particles.length; z++){
	particles[z].display()
}

for(var z1 = 0; z1 < divisions.length; z1++){
	divisions[z1].display()
}  
for(var z2 = 0; z2 < plinkos.length; z2++){
	plinkos[z2].display()
}
  particle.display()
  drawSprites();
}


