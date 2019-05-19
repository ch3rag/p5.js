class Circle {
  constructor(pos, radius) {
    this.position = pos;
    this.radius = radius;
    this.color = random(50, 255);
  }
  draw() {
    noStroke();
    //stroke(255);
    fill(this.color);
    //noFill();
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }
}


const circles  = [];
const maxRad = 50;
const minRad = 5;
const numCircles = 1500;
const sampleTry = 100;
let index = 0;

function setup() {
  createCanvas(800, 800);
  // colorMode(HSB);
}


function draw() {
  background(0);
  for(let i = 0; i < numCircles; i++) {
    sample();  
  }
  
  for (let i = 0; i < index; i++) {
    let circle = circles[i];
    circle.draw();
  }
  
  if(index === numCircles) {
    console.log("done");
    noLoop(); 
  }
}

function sample() {   
  // GOAL: FIND THE BIGGEST CIRCLE THAT I CAN DRAW WITHOUT OVERLAPPING??
  let bestPosition = null;
  let bestRadius = 0;
  for (let i = 0; i < sampleTry; i++) {
    // GENERATE A RANDOM POINT
    let randomPoint = createVector(random(1) * width, random(1) * height);
    let largestRadius = maxRad;
    // FIND THE LARGEST RADIUS UPTO WHICH IT CAN BE DRAWN
    // HERES THE PROBLEM? BUT HOW
    // LEAST DISTANCE - RADIUS = MAX SIZE CIRCLE THAT CAN BE DRAWN
    for (let j = 0; j < index; j++) {
      let distance = p5.Vector.dist(randomPoint, circles[j].position);
      let newRadius = distance - circles[j].radius;
      if (largestRadius > newRadius) {
        largestRadius = newRadius; 
      }
    }
    
    if (bestRadius < largestRadius) {
      bestRadius = largestRadius;
      bestPosition = randomPoint;
    }
  }
  
  circles[index] = new Circle(bestPosition, bestRadius);
  index++;
}