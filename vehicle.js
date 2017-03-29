function Vehicle(x, y, dx, dy) {
  this.pos = createVector(x, y);
  this.target = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();
  this.r = 8;
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
}

Vehicle.prototype.show = function() {

  rect(this.x, this.y, this.dx, this.dy);
  
}
