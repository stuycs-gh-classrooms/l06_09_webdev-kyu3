function setup() {
  createCanvas (500,500);
}

function draw () {
  background(255,255,255);
  strokeJoin(BEVEL);
  stroke(0);
  line(1,1,250,250);
  stroke(#e64a52);
  line(250,250, 375, 125);
  stroke(#9c73de);
  line(375, 125, 250, 125);
  stroke(#94395a);
  line(250,125,365, 1);
  stroke(#625239);
  line(365,1,1,1);
}
