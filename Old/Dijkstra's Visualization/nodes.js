
function node(i, j, weight) {
	this.x = i * w;
	this.y = j * h;
	this.i = i;
	this.j = j;
	this.weight = weight;
	this.camefrom = undefined;
    this.obstacle = false;
    this.neighbour = [];
    this.distance = 999999;
    this.generateObsticals = function() {
    	if(random(1) > 0.8) {
    		this.obstacle = true;
    	}
    }
	this.show = function(colors) {

		noStroke();
		fill(colors)
		if(this.i == 0 && this.j == 0) {
			fill(color(0,0,255));
			rect(this.x,this.y,30,30);
		}
		if(this.i == rows-1 && this.j == cols-1) {
			fill(color(0,0,255));
			rect(this.x,this.y,30,30);
		}
     	if(this.obstacle == true) {
     	ellipse(this.x + w/2 , this.y + h/2, w/2,w/2);
	}
	
}
	this.addNeighbour = function() {
		if(this.i > 0) {
          this.neighbour.push(nodes[i-1][j])
		}
	
		if(this.j > 0) {
          this.neighbour.push(nodes[i][j-1])
		}
		if(this.i < cols -1) {
          this.neighbour.push(nodes[i+1][j])
		}
		if(this.j < rows - 1) {
          this.neighbour.push(nodes[i][j+1])
		}

		// if(i > 0 && j > 0) {

		// 	this.neighbour.push(nodes[i-1][j-1]);
		// }

		// if(i < rows - 1 && j < cols - 1) {
		// 	this.neighbour.push(nodes[i+1][j+1]);
		// }
		// if(i < rows - 1 && j > 0) {
		// 	this.neighbour.push(nodes[i+1][j-1]);
		// }
		// if(i > 0 && j < cols - 1) {
		// 	this.neighbour.push(nodes[i-1][j+1]);
		// }
	
	}
}
