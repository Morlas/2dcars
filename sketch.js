// var x = d = 20;
// var y = 20;
// var carX = 20;
// var carY = 15;
// var carspeed = 5;
// var xspeed = 3;
// var yspeed = 4;
// var p1posX = p2posX = p1posY = p2posY = 0;

//
// function setup() {
//   createCanvas(windowWidth-20, windowHeight-20);
//   background (25);
//   p1posX = 10;
//   p2posX = width-25;
//   p1posY = p2posY = height/2;
//   x = width/2;
//   y = height/2;
//
// }
//
// function bounce() {
//   //bouncing horizontally
//     x = x + xspeed;
//
//    if (x > windowWidth-20 || x < 0)  {
//     xspeed = -xspeed;
//     }
//   //bouncing veritcally
//   y = y + yspeed;
//
//   if (y > windowHeight-20 || y < 0) {
//     yspeed = -yspeed;
//   }
// }
//
//
// function draw() {
//
//     // background (25);
//     fill (255);
//     ellipse (x,y,d,d);
//     fill(255, 204, 0);
//     noStroke();
//     rect(p1posX, p1posY, carX, carY);
//     var player2 = new Vehicle(p2posX, p2posY, carX, carY);
//     fill(236,11,11);
//     noStroke();
//     player2.update();
//     player2.show();
//
//     //bounce();
//     movement();
// }

var spr;
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  player1 = createSprite(
    10, height/2, 40, 40);
  player1.shapeColor = color(236,11,11);
  player2 = createSprite(
    width-25, height/2, 40, 40);
  player2.shapeColor = color(255, 204, 0);

}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop",
    width/2, height*0.67);
  drawSprites();
  player1.limitSpeed(12);
  player2.limitSpeed(12);
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    player1.addSpeed(3, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    player1.addSpeed(3, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    player1.addSpeed(3, 180);
  }
  else if (keyCode == UP_ARROW) {
    player1.addSpeed(3, 270);
  }
  else if (key == ' ') {
    player1.setSpeed(0, 0);
  }
  return false;
}
