var p1;
var p2;
var p3;
var G = 0.5;
function setup() {
	createCanvas(400,400);
	background(0);
	stroke(255);
	fill(255);
	p1 = new pendulum(width/3,10,200,20,PI/3);
    p1.setup();
    p2 = new pendulum(width/3,10,170,20,0);
    p2.setup();
    p3 = new pendulum(width/3,10,100,20,-PI/4);
    p2.setup();

    //frameRate(60);
}



function draw() {
	background(0);
	p3.draw();
	p3.update();
	p2.draw();
	p2.update();
	p1.draw();
    p1.update();
}
