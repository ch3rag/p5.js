var grid = [];
var w;
var tempGrid = [];
function reCondense(arr) {
 var arrays = [0,0,0,0];
 var k = 0;
 for(var i = 0 ; i < arr.length ; i++) {
 	if(arr[i] !== 0) {
 		arrays[k++] = arr[i];
 	}
 }
 return arrays;
}
function add(arr) {
	var arrays = [0,0,0,0];
	var k = 0;
	for(var i = 0 ; i < arr.length - 1 ; i++) {
		if(arr[i] == arr[i+1] && arr[i] !== 0) {
			arr[i] += arr[i+1];
			arr[i+1] = 0;
			arr = reCondense(arr);
		}
	}
	return arr;
}

function reversearr(arr) {
	var arrays = [0,0,0,0];
	var k = 3;
	for(var i = 3 ; i >= 0 ; i--) {
		if(arr[i] !== 0) {
			arrays[k--] = arr[i];
		}
	}
	return arrays;
}

function condense(key) {
	if(key == UP_ARROW || key == DOWN_ARROW) {
		for(var i = 0 ; i < 4 ; i++) {
			var arr = [0,0,0,0];
			k = 0;
			for(var j = 0 ; j < 4 ; j++) {
				if(grid[i][j] !== 0) {
					arr[k++] = grid[i][j];
				}
			}
			arr = add(arr);
			if(key == DOWN_ARROW) {
				arr = reversearr(arr);
			}
			grid[i] = arr;

		}
		
	}

	if(key == LEFT_ARROW || key == RIGHT_ARROW) {
		for(var i = 0 ; i < 4 ; i++) {
			var arr = [0,0,0,0];
			k = 0;
			for(var j = 0 ; j < 4 ; j++) {
				if(grid[j][i] !== 0) {
					arr[k++] = grid[j][i];
				}
			}
			add(arr);
			if(key == RIGHT_ARROW) {
				arr = reversearr(arr);
			}
			for(var x = 0 ; x < 4 ; x++) {
				grid[x][i] = arr[x];
			}
		}
	}

}

function addNum() {
	var spots = [];
	for(var i = 0 ; i < 4 ; i++) {
		for(var j = 0 ; j < 4 ; j++)  {
			if(grid[i][j] === 0) {
				spots.push({x : i, y : j});
			} 
		}	
	}

	if(spots.length > 0) {
		var r = random(1);
		var num = r > 0.5 ? 2 : 4;
		var target = random(spots);
		grid[target.x][target.y] = num;
	}
}

function setup() {
	createCanvas(800,800);
	w = width/4; 
	grid =  [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
	];
	addNum();
	addNum();
	textSize(70);
	console.table(grid);
}

function keyPressed() {
	var flag  = 0;
	for(var i = 0 ; i < 4 ; i++) {
	tempGrid[i] = grid[i].slice();
}
	condense(keyCode);
	for(var i = 0 ; i < 4 ; i++) {
		for(var j = 0 ; j < 4 ; j++) {
			if(tempGrid[i][j] !== grid[i][j]){
				flag = 1;
			}
		}
	}	
	if(flag !== 0) {
		addNum();
	}
	
}



function draw() {
	drawGrid();
	
}
function drawGrid() {
	for(var i = 0 ; i < 4 ; i++) {
		for(var j = 0 ; j < 4 ; j++) {
			strokeWeight(10);
            var r;
            var g;
            var b;
			r = map(grid[i][j],4,256,100,255);
			g = map(grid[i][j],4,1024,10,255);
			b = map(grid[i][j],4,2048,10,255);
			stroke(color(187,173,160));
			if(grid[i][j] <= 2) {
			fill(color(205,193,180));
		} else {
			fill(color(r,g,b));
		}
			rect(i * w , j * w , w - 1 , w - 1);
			if(grid[i][j] !== 0) {
				strokeWeight(0);
				fill(color(119,110,101));
				text(grid[i][j], i*w + w*0.4,j*w + w * 0.65);
			}	
			//if(j == 0){
			//text(i + "," +j, i*w + w*0.4,j*w + w * 0.65);
		//}
	}
	}
}