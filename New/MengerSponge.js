function setup() {
    createCanvas(800, 800, WEBGL);

}

function draw() {
    background(0);
    directionalLight(random(255), random(255), random(255), -1, 0, -1);
    directionalLight(random(255), random(255), random(255), 0.5, 0, -1);

    push();
    translate(0, -400, -3800);;
    rotateX(8.8);
    rotateY(3.9);
    rotateZ(a / 3);
    noStroke();
    sierpinskiSponge(0, 0, 0, 2300);
    pop();
    noLoop();
}

function drawCube(x, y, z, side) {
    push();
    translate(x, y, z);
    box(side);
    pop();
}

function sierpinskiSponge(x, y, z, side) {
    if (side < 60) {
        drawCube(x, y, z, side);
    } else {
        sierpinskiSponge(x - side / 3, y - side / 3, z + side / 3, side / 3);
        sierpinskiSponge(x - side / 3, y - side / 3, z - side / 3, side / 3);
        sierpinskiSponge(x - side / 3, y - side / 3, z, side / 3);
        sierpinskiSponge(x - side / 3, y + side / 3, z + side / 3, side / 3);
        sierpinskiSponge(x - side / 3, y + side / 3, z - side / 3, side / 3);
        sierpinskiSponge(x - side / 3, y + side / 3, z, side / 3);
        sierpinskiSponge(x - side / 3, y, z + side / 3, side / 3);
        sierpinskiSponge(x - side / 3, y, z - side / 3, side / 3);

        // sierpinskiSponge(x - side / 3, y, z, side / 3);

        sierpinskiSponge(x + side / 3, y - side / 3, z + side / 3, side / 3);
        sierpinskiSponge(x + side / 3, y - side / 3, z - side / 3, side / 3);
        sierpinskiSponge(x + side / 3, y - side / 3, z, side / 3);
        sierpinskiSponge(x + side / 3, y + side / 3, z + side / 3, side / 3);
        sierpinskiSponge(x + side / 3, y + side / 3, z - side / 3, side / 3);
        sierpinskiSponge(x + side / 3, y + side / 3, z, side / 3);
        sierpinskiSponge(x + side / 3, y, z + side / 3, side / 3);
        sierpinskiSponge(x + side / 3, y, z - side / 3, side / 3);

        // sierpinskiSponge(x + side / 3, y, z, side / 3);

        sierpinskiSponge(x, y - side / 3, z + side / 3, side / 3);
        sierpinskiSponge(x, y - side / 3, z - side / 3, side / 3);

        // sierpinskiSponge(x, y - side / 3, z, side / 3);

        sierpinskiSponge(x, y + side / 3, z + side / 3, side / 3);
        sierpinskiSponge(x, y + side / 3, z - side / 3, side / 3);

        // sierpinskiSponge(x, y + side / 3, z, side / 3);
        // sierpinskiSponge(x, y, z, side / 3);
        // sierpinskiSponge(x, y, z - side / 3, side / 3);
        // sierpinskiSponge(x, y, z + side / 3, side / 3);


    }
}
