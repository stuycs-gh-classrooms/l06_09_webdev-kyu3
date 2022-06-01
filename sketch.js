var x;
var y;
var radius;
var speed;


function setup() {
  // put setup code here
 createCanvas size(400,400);
 frameRate(15);
 x=width/2;
 y=25;
 radius=50;
 speed =5;
 background(255);
}

function draw() {
  // put drawing code here
   background(255);
  if (y<=height/2){
    fill(0,0,255);
  }
  if (y>=height/2){
    fill(0,255,0);
  }
  circ(x,y,radius/2);
  if((y<height-radius/2)||(y>=0)){
   y+=speed;
   if ((y>=height-radius/4)||(y<=radius/4)){
     speed = -speed;
  }
  println(y);
  }
}

function circ( x,  y, radius){
 circle(x, y, radius/2); 
}
