var movingRect, fixedRect

function setup() {
  createCanvas(800, 600);

  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "yellow";
  movingRect.velocityY = 6;

  fixedRect = createSprite(400,400, 80 ,30);
  fixedRect.shapeColor = "yellow";
  fixedRect.velocityY = -6;

}

function draw() {
  background("black");  
  
  //movingRect.x = mouseX;
 //movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width /2 + fixedRect.width /2
    && fixedRect.x - movingRect.x < fixedRect.width /2 + movingRect.width /2) {
      movingRect.velocityX = movingRect.velocityX * -1;
      fixedRect.velocityX = fixedRect.velocityX * -1;
    }

  else if(movingRect.y - fixedRect.y < movingRect.height /2 + fixedRect.height /2
    && fixedRect.y - movingRect.y < fixedRect.height /2 + movingRect.height /2) {
      movingRect.velocityY = movingRect.velocityY * -1;
      fixedRect.velocityY = fixedRect.velocityY * -1;
    }
  

  drawSprites();
}