// MITCHELL'S BEST CANDIDATE ALGORITHM

const numSamples = 1000;
const sampleTry = 10;
const samples = [];
let index = 0;

function setup() {
  createCanvas(800, 800);
  strokeWeight(3);
  stroke(0);
}

function draw() {
  background(255);
  
  sample(); 
  
  for (let i = 0; i < index; i++) {
    let sample = samples[i];
    point(sample.x, sample.y);
  }
  
  if (index === numSamples) {
    noLoop();
  }
}

function sample() {
  let bestSample;
  let bestDistance = 0;
  for (let i = 0; i < sampleTry; i++) {
    let randomSample = createVector(random(1) * width, random(1) * height);
    // FIND THE CLOSEST NEIGHBOUR
    let closestDistance = 9999;
    let neighbour = null;
    for (let j = 0; j < index - 1 ; j++) {
      let distance = p5.Vector.dist(randomSample, samples[j]);
      if(closestDistance > distance) {
        closestDistance = distance;
        neighbour = samples[j];
      }
    }
    // I GOT THE CLOSEST NEIGHBOUR
    if(bestDistance < closestDistance) {
      bestDistance = closestDistance;
      bestSample = randomSample;
    }
  }
  
  samples[index] = bestSample;
  index++;
}
















