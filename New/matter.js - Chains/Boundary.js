function Boundary(x, y, w, h, angle) {
	
	this.w = w;
	this.h = h;


	let options = {
		friction : 0.1,
		restitution : 0.5,
		angle : angle,
		isStatic : true
	};


	this.body = Bodies.rectangle(x, y, w, h, options);
	
	World.add(world, this.body);


	this.show = function() {
		let pos = this.body.position;
		let angle = this.body.angle;
		
		push();
			translate(pos.x, pos.y);
			rotate(angle);
			noStroke();
			rectMode(CENTER);
			fill(0);
			rect(0, 0, this.w, this.h);
		pop();
	}
}