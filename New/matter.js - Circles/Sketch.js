
let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;

let world;
let engine;

let boundries = [];
let circles = [];


function setup() {

	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	boundries.push(new Boundary(100, height/3, width, 10, PI/10));
	boundries.push(new Boundary(width-100, height/1.5, width, 10, -PI/10));
}

function  mouseDragged() {

	circles.push(new Circle(mouseX, mouseY, random(5,50)));

}


function draw() {

	background(255);
	for(let b of boundries) {
		b.show();
	}

	for (let i = circles.length - 1 ; i >= 0 ; i--) {
		circles[i].show();
		if (circles[i].isOffScreen()) {
			circles[i].removeFromWorld();
			circles.splice(i, 1);
		}
	}

}