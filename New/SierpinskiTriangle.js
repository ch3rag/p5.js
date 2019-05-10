function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(255);
    noStroke();
    sierpinski(0, 0, 600);
}

function drawTriangle(x, y, side) {
    triangle(x + side / 2, y, x + side, y + side, x, y + side);
}

function sierpinski(x, y, side) {
    drawTriangle(x, y, side);
    if (side > 5) {
        fill(side * 6, side, side * 2);
        sierpinski(x + side / 4, y, side / 2);
        sierpinski(x, y + side / 2, side / 2);
        sierpinski(x + side / 2, y + side / 2, side / 2);
    }
}
