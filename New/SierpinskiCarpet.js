function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(0);
    noStroke();
    sierpinski(200, 200, 200);
    noLoop();
}

function drawSquare(x, y, side) {
    rect(x, y, side, side);
}

function sierpinski(x, y, side) {
    fill(random(255), random(255), random(255));
    drawSquare(x, y, side);

    if (side > 2) {
        sierpinski(x - side * 2 / 3, y - side * 2 / 3, side / 3);
        sierpinski(x + side / 3, y - side * 2 / 3, side / 3);
        sierpinski(x + side * 4 / 3, y - side * 2 / 3, side / 3);

        sierpinski(x - side * 2 / 3, y + side * 1 / 3, side / 3);
        sierpinski(x - side * 2 / 3, y + side * 4 / 3, side / 3);
        sierpinski(x + side * 4 / 3, y + side * 4 / 3, side / 3);
        sierpinski(x + side / 3, y + side * 4 / 3, side / 3);
        sierpinski(x + side * 4 / 3, y + side * 1 / 3, side / 3);

    }
}
