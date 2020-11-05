var bullet , speed ,weight
var wall , thickness


function setup(){
createCanvas(1600,400);
speed = Math.ceil(random(223,321));
weight = Math.ceil(random(30,52));
thickness = Math.ceil(random(22,83));
bullet = createSprite(50,200,50,20);
bullet.shapeColor = "white";
bullet.velocityX = speed;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "gray" ;

}

function draw(){
background(0);

if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5* weight *speed*speed/(thickness*thickness*thickness);

if(damage>10){
wall.shapeColor=color(255,0,0);
}
if(damage<10){
wall.shapeColor=color(0,255,0);
}
}
drawSprites();
}

function hasCollided(lbullet ,lwall){

bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}

   
   
   
   //(wall.x-car.x < (car.width+wall.width)/2)
   //var deformation=0.5*weight*speed* speed/22509;
   //if(deformation>180){
   // car.shapeColor=color(255,255,0);}
   //if(deformation<180 && deformation>100){
    //  car.shapeColor=color(230,230,0);
   //}
   //if(deformation<100){
   //   car.shapeColor=color(0,255,0);}
