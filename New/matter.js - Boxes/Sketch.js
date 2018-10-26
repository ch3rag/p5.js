let Engine = Matter.Engine;
let World  = Matter.World;
let Bodies = Matter.Bodies;
//let Render = Matter.Render;
let world;
let engine;
let boxes = [];

function setup() {
	
	createCanvas(640, 480);
	background(0);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	let ground = Bodies.rectangle(width/2, height, width, 10, {isStatic : true});
	World.add(world, ground);
}

function mouseDragged() {
	boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
	background(0);
	for(let b of boxes)  {
		b.show();
	}
	noStroke(255);
	fill(127);
	rect(width/2, height, width, 10);
}