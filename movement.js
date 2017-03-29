function movement() {

  if (keyIsDown(LEFT_ARROW))
    p1posX-=carspeed;


  if (keyIsDown(RIGHT_ARROW))

    p1posX+=carspeed;
    console.log(carX);


  if (keyIsDown(UP_ARROW))
    p1posY-=carspeed;


  if (keyIsDown(DOWN_ARROW))
    p1posY+=carspeed;


}
