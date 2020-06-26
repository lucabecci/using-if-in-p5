var circ = {
  w: 100,
  h: 100
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  
  if(mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250){
    fill(255,0,100,90);
    stroke(100,220,100)
    circ.w = 200;
    circ.h = 200;
  } else {
    circ.w = 100,
    circ.h = 100
  }
  
  ellipse(200,200,circ.w,circ.h);
}