let DECIMAL_EQ_HEX = [];

let sevenSeg;
function setup() {
  createCanvas(600, 400);

  DECIMAL_EQ_HEX.push(0x7E);
  DECIMAL_EQ_HEX.push(0x30);
  DECIMAL_EQ_HEX.push(0x6D);
  DECIMAL_EQ_HEX.push(0x79);
  DECIMAL_EQ_HEX.push(0x33);
  DECIMAL_EQ_HEX.push(0x5B);
  DECIMAL_EQ_HEX.push(0x5F);
  DECIMAL_EQ_HEX.push(0x70);
  DECIMAL_EQ_HEX.push(0x7F);
  DECIMAL_EQ_HEX.push(0x7B);
  frameRate(5);
  sevenSeg = new SevenSegment(100, 100, 5);
}

function draw() {
  background(0);
  sevenSeg.draw();
  sevenSeg.showDigit(frameCount % 10);
}
