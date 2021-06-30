var ship,ship_sailing,;
var seaImage;
var sea;




function preload(){
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,5);
ship.addAnimation(ship_sailing);

sea = createSprite(200,180,400,20);





}

function draw() {
  background("sea.png");
sea.velocityX=-2

if(sea.velocityX<0){
  sea.x=sea.width/2;
}
ship.collide(sea);

 drawSprites();
}