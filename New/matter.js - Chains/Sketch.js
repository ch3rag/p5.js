
let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Constraint = Matter.Constraint;
let MouseConstraint = Matter.MouseConstraint;
let Mouse = Matter.Mouse;




let world;
let engine;

let boundries = [];
let circles = [];


function setup() {

	let canvas = createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	boundries.push(new Boundary(width/2, height, width, 10, 0));
	//boundries.push(new Boundary(width-100, height/1.5, width, 10, -PI/10));
	let previousParticle = null;
	let fixed = true;
	
	for (let i = width/2 ; i < width + 300; i+= 60) {

		let currentParticle = new Circle(i, 30, 30, fixed)
		circles.push(currentParticle);
		
		if (i > 0) fixed = false;

		if (previousParticle) {
			let options = {
				bodyA: previousParticle.body,
				bodyB: currentParticle.body,
				length: 30,
				stiffness: 0.5
			}

			let cons = Constraint.create(options);
			World.add(world, cons);
		}

		previousParticle = currentParticle;
	}

	//Create a mouse

	let mouse = Mouse.create(canvas.elt);

	//Create a mouse constraint

	let options = {
		mouse: mouse
	}

	let mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);
}

function draw() {

	background(255);
	for(let b of boundries) {
		b.show();
	}

	for (let i = circles.length - 1 ; i >= 0 ; i--) {
		circles[i].show();
	}
}