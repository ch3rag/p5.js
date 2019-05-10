// rs = Schwarzchild Radius
// Event Horizon = 1 x rs
// Photon Sphere = 1.5 x rs
// Accretion Disc = 3 x rs

const c = 50;
const G = 120;
let b;

const photons = [];
const dt = 0.05;



function setup() {
	createCanvas(600, 600);
	ellipseMode(RADIUS);
	b = new Blackhole(width / 2, height / 2, 400);
	for (let y = 0; y < b.rs * 3; y += 1) {
		photons.push(new Photon(width, height / 2 - y));
	}
}

function draw() {
	//background(255);
	b.show();

	for (const p of photons) {
		p.show();
		b.pull(p);
		p.update();
	}
}

