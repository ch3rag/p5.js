let x = 100;
function setup() {
    createCanvas(800, 600);
    background(255);
}

function draw() {
    rect(x, 0, 100, 100);
    x++;
}