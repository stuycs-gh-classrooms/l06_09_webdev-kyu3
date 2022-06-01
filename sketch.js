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
}

function circ( x,  y, radius){
 circle(x, y, radius/2); 
}
