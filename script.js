function setup() {
  var zBereich = createCanvas(250, 150);
  zBereich.parent('p5js-programm');
}

function draw() {
  background('teal');
  stroke(255);
  ellipse(width/2, height/2, 40, 40);
}