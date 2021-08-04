var background, backgroundImg;
var girl, girlImg;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  girlImg = loadImage("girl.png");
}

function setup() {
  createCanvas(800,400);
  background = createSprite(300,300);
  background.addImage(backgroundImg);

  girl = createSprite(300,300);
  girl.addImage(girlImg)

}

function draw() {
  background(255,255,255); 
  if(keyCode === 32){
    girl.y = girl.y + 2;
    girl.y = girl.y-2;
  
  }
  drawSprites();
}