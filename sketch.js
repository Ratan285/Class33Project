const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;

var arr = [];

function preload() {
  backgroundImage = loadImage("snow2.jpg");
  boyImage = loadImage("boy.png");
}
function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  if (frameCount % 50 === 0) {
    for (i = 0; i < 100; i++)
      arr.push(new Snow(random(0, 800), random(0, 200), 20));
  }

  backGround = createSprite(400, 200, 800, 400);
  backGround.addImage(backgroundImage);

  boy = createSprite(400, 333, 20, 20);
  boy.addImage(boyImage);
  boy.scale = 0.2;

  ground = createSprite(400, 410, 820, 50);
  ground.shapeColor = "white";

}
function draw() {
  background(255, 255, 255);

  Engine.update(engine)

  boy.collide(ground);
  boy.velocityY = boy.velocityY + 1;
  if ( boy.x < 0) {
    boy.x = 790;
  }
  if ( boy.x > 800) {
    boy.x = 10;
  }
  

  if (keyDown("UP_ARROW") && boy.y > 330) {
    boy.velocityY = -15;
  }
  if (keyDown("RIGHT_ARROW")) {
    boy.x = boy.x + 5;
  }
  if (keyDown("LEFT_ARROW")) {
    boy.x = boy.x - 5;
  }
  
  drawSprites();

  for (i = 0; i < 100; i++) {
    arr[i].display();
    arr[i].update();
  }

}
