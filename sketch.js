var sea,ship
var seaImage,shipImage

function preload(){
seaIMG= loadImage("sae.png")
shipImage=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
ceateCnvas(500,500)
backround("blue")

sea=createSprite(400,200)
sea.addImage(seaImg)
sea.velocityX=-5
sea.scale=0.7


ship=createSprite(130,200,30,30)
ship.addAnimation("movingShip",shipImg1)
 ship.scale=0.30 
}
function draw(){
  backround=(0)
  sea.velocityX=-3

  if(sea.x < 0){
    sea.x=sea.width/8  
  }
  drawSprite
}

