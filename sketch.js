
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,450,20);
	ground = new Ground(width/2,670,1600,20);

	log1 = new Log(1350,600,20,100);
	log2 = new Log(1450,650,200,20);
	log3 = new Log(1550,600,20,100);

	Engine.run(engine);
  console.log(ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
 
  Keypressed();
}

function Keypressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:2,y:-2});




}





}



