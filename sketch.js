const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var block8,block9,block10,block11,block12,block14,block15,block16;
var Slingshot;
var polygon;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,267,300,20);

  
  //leave two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  polygon = new Polygon(this.ball,{x:100,y:200});
 //Slingshot= new SlingShot(this.polygon,{x:100,y:200});
  //level three
  block13= new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top block
  block16 = new Box(390,155,30,40);
  
  

}

function draw() {
  background(255,255,255);  
 
  polygon.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground.display();
  drawSprites();
}