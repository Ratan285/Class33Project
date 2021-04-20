class Snow {
  constructor(x, y, radius) {
    var options = {
      friction: 0.001,
      density: 0.005,
      restitution: 0.2
    }
    this.body = bodies.circle(x, y, radius, options);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("snow4.png");
    World.add(world, this.body);
  }

  update() {
    if (this.body.position.y > height) {
      Matter.Body.setPosition(this.body, { x: random(0, 800), y: random(0, 20) });
     
    }
  }

  display() {
    var pos = this.body.position;

    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    pop();

  }
}