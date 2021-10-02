const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,lift,right;
var ball;

function setup() {
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;

var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
//Create the Bodies Here.
ground = new Ground(width/2,670,width,20)
lift = new Ground(800,600,20,120)
right = new Ground(1050,600,20,120)
Engine.run(engine);
}





function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  lift.display()
  right.display()
  fill('white')
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
}
}