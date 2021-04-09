class Snow {
  constructor(x, y) {
    var options = {
      friction: 0.1,
      density: 1,
      restitution:0.2,
      isStatic: false
    }
    this.body = bodies.circle(x, y, 20, options);
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.image = loadImage("snow4.png");
    World.add(world, this.body)
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    translate(pos.x, pos.y);
    image(this.image, 0, 0, this.radius);
    pop();
  }
}