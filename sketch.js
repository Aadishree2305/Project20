var car,wall;
var speed ,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="red";

  speed=random(55,90);
  weight=random(400,1500)


  wall=createSprite(600,200,60,height/2)
  wall.shapeColor="white";

  rectMode(CENTER);

  car.velocityX= speed;
}

function draw() {
  background(0);
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="#AA1100"; 
    }
    if(deformation<180 && deformation>100)
    {
       car.shapeColor="#000055";
    }

    if(deformation<100)
    {
      car.shapeColor="#00FF00"; 
    }

  }  
  drawSprites();
}