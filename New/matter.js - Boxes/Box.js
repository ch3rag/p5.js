
function Box(x, y, w, h) {
	
	let options = {
		friction: 0.5,
		restitution: 0.5
	};

	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);
	this.w = w;
	this.h = h;

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		stroke(170);
		fill(125);
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rect(0,0,this.w,this.h);
		pop();

	}
}