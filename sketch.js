var hour;
var minute;
var second;
var centerx;
var centery;
var theta;


function setup() {
  // put setup code here
 createCanvas (400, 400);
  background(255);
  centerx = width/2;
  centery = height/2;
  theta = 0;
}

function draw() {
  // put drawing code here
  clockFace(centerx, centery);
  updateTime();
  drawhand(centerx, centery);
}

function newY(amplitude, offset,  t){

   var y = sin(radians(t-90));
   y = y*amplitude + offset;
   return y;
}

function newX( amplitude,  offset, t){

   var x = cos(radians(t-90));
   x = x*amplitude + offset;
   return x;
}

function updateTime(){
  hour = hour();
  minute = minute();
  second = second();
}

function timeToAngle( con1){
  var x = 0;
  if (con1 == 1){
    x = hour%12*30;
  }
  if (con1 == 2){
    x = minute%60*6;
  }
  if (con1 == 3){
    x = second%60*6;
  }
  return x;
}
function hourhand(x, y){
  stroke(255,0,0);
  var theta = timeToAngle(1);
  var ney = newY(250, centery, theta);
  var nex = newX(250, centerx, theta);
  line(centerx,centery,nex,ney);
  println(hour());
}

function minutehand(x, y){
  stroke(0,200,0);
  var theta = timeToAngle(2);
  var ney = newY(300, centery, theta);
  var nex = newX(300, centerx, theta);
  line(x,y,nex,ney);
  println(minute());
}

function sechand(x, y){
  stroke(0,0,255);
  var theta = timeToAngle(3);
  var ney = newY(350, centery, theta);
  var nex = newX(350, centerx, theta);
  line(x,y,nex,ney);
}

function drawhand( x, y){
  hourhand(centerx, centery);
  minutehand(centerx,centery);
  sechand(centerx,centery); 
}

function clockFace(x, y){
 fill(#8FD2F5);
 noStroke();
 circle(centerx, centery, 800); 
 stroke(0);
 var count = 0;
 while (count <=60){
   var ney = newY(400, centery, theta);
   var nex = newX(400, centerx, theta);
   var newnex; 
   var newney; 
   if (theta%30==0){
     newnex=newX(375,centerx,theta);
     newney = newY(375,centery,theta);
   }
   else{
     newnex=newX(390,centerx,theta);
     newney = newY(390,centery,theta);
   }
   line(nex,ney,newnex,newney); //hour and minute marks
   theta += 6;
   count ++;
 }
 textSize(128);
 var timvar =1;
}
