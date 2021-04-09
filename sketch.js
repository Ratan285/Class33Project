const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;

function preload() {
  backgroundImage = loadImage("snow2.jpg");
  boyImage = loadImage("boy.png");
}
function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  fill("red");
  invisibleGound = bodies.rectangle(400, 400, 800, 50, { isStatic: true });
  World.add(world, invisibleGound);

  backGround = createSprite(400, 200, 50, 50);
  backGround.addImage(backgroundImage);

  boy = createSprite(400, 333, 20, 20);
  boy.addImage(boyImage);
  boy.scale = 0.2;

  ground = createSprite(400, 410, 800, 50);
  ground.shapeColor = "white";

  snow = new Snow(random(0, 900), random(0, 200));

}

function draw() {
  background(255, 255, 255);


  boy.collide(ground);
  boy.velocityY = boy.velocityY + 1;

  if (keyDown("UP_ARROW") && boy.y > 330) {
    boy.velocityY = -15;
  }
  if (keyDown("RIGHT_ARROW")) {
    boy.x = boy.x + 5;
  }
  if (keyDown("LEFT_ARROW")) {
    boy.x = boy.x - 5;
  }

  console.log(snow)


  drawSprites();
  snow.display();

  // if (frameCount % 50 === 0) {

  // }
}
