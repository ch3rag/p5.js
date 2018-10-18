var rows = 20;
var cols = 20;
var w;
var h;
var nodes = new Array();
var start;
var current;
var openSet = [];
var closedSet = [];
var end;
var cameFromNode;
var vertex;
var temp;
var distance;
var neighbours;
var index = 0;
var vtx;
var x1,y1,x2,y2;

function removeFromArray(arr, elem) {
	for(var i = arr.length - 1 ; i >= 0 ; i--) {
		if(elem == arr[i]) {
			arr.splice(i,1);
		}
	}
}
function setup() {
	createCanvas(800,800);
    w = width/rows;
    h = height/cols;
    //translate(width/2,height/2);
    for(var i = 0 ; i < rows ; i++) {
    	nodes[i] = new Array(cols); 
    }
  	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < cols ; j++) {
			nodes[i][j] = new node(i,j,1);
			nodes[i][j].generateObsticals();
		}
	}

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < cols ; j++) {
			nodes[i][j].addNeighbour();
		}
	}
    start = nodes[0][0];
	end   = nodes[cols -1][rows - 1];
	start.obstacle = false;
	end.obstacle   = false;
	 start.distance = 0;// sqrt((start.x - end.x)*(start.x - end.x) - (start.y - end.y)*(start.y - end.y));
	 for(i = 0 ; i < rows ; i++) {
		for(j = 0 ; j < cols ; j++) {
			openSet.push(nodes[i][j]);
		
		}
	 }
	}

function draw() {
	//for(k = 0 ; k < 2 ; k++) {
	background(255);
	fill(color(0));
	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < cols ; j++) {
			nodes[i][j].show(color(0));
		}
	}	
	//for(var i = 0 ; i < openSet.length ; i++) {
	//	 openSet[i].show(color(255,0,0));
	//}
     index = 0;
     //vertex = openSet[0];
     vertex.distance = 9999;
     for(var i = 0 ; i < openSet.length ; i++) {
      if(vertex.distance > openSet[i].distance) {
        vertex = openSet[i];
      }
     }
     
     // console.log(vertex.i);
     // console.log(vertex.j);
      //console.log(vertex.distance);
     if(openSet.length == 0 || vertex == end) {
		console.log('DONE!');        
	    var temp = end;
	    stroke(color(0,255,0))
	    	strokeWeight(10);
		while(temp.cameFrom != undefined) {
			line(temp.x + w/2,temp.y+ w/2,temp.cameFrom.x+ w/2,temp.cameFrom.y+ w/2);
			temp = temp.cameFrom;
		}
		    noLoop(); 
		    return;
	    }
     if(vertex.obstacle == false) {
     for(var i = 0 ; i < vertex.neighbour.length ; i++) {
     	neighbours = vertex.neighbour[i];
     	if(openSet.includes(neighbours) && neighbours.obstacle == false) {
     	 distance  = neighbours.weight + vertex.distance;
     	 //console.log(distance);
     	  x1 = end.x;
     	  y1 = end.y;
     	  x2 = neighbours.x;
     	  y2 = neighbours.y;
     	  //distance =  sqrt(abs((x2 - x1))*abs((x2 - x1)) + abs((y2 - y1))*abs((y2 - y1))); 
     	  //console.log(distance);
     	if(distance < neighbours.distance)  {
     		//console.log(distance);
     		neighbours.distance = distance;
     		neighbours.cameFrom = vertex;
     	}
     	} 
     }
 }
	
	    	stroke(color(255,0,0))
	    	strokeWeight(10);
		var temp = vertex;
		while(temp.cameFrom != undefined) {
		
			line(temp.x + w/2,temp.y+ w/2,temp.cameFrom.x+ w/2,temp.cameFrom.y+ w/2);
			temp = temp.cameFrom;
		}
//}
	removeFromArray(openSet,vertex);
//
}