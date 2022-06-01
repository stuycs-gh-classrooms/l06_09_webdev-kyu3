function setup() {
  createCanvas (500,500);
}

function draw () {
  background(255,255,255);
  strokeJoin(BEVEL);
  stroke(0);
  line(1,1,250,250);
  stroke(0);
  line(250,250, 375, 125);
  stroke(0);
  line(375, 125, 250, 125);
  stroke(0);
  line(250,125,365, 1);
  stroke(0);
  line(365,1,1,1);
}
