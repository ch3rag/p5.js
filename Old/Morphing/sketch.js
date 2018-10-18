var cirPath = [];
var triPath = [];
var spacing = 5;
var start = 0;
var end   = 360;
var radius = 50;
var morPath = [];
var flag    = 0;
var ofs = 100;
var newx = 100;
var colors;
function getPoint(p1 , p2 , d) {
 var val = p1 + d*((p2 - p1)/100);
 return val;
}

function pixel(x,y) {
	this.x = x;
	this.y = y;
} 

function setup() {
	createCanvas(1200,1200);
	angleMode(DEGREES);
	var startA = 0;
	var endA   = 120;
	var count = 120/spacing;
	var c = 0;
	for(var i = start ; i <  end ; i+= spacing) {
		var x = radius * cos(i);
		var y = radius * sin(i);
		var pix = new pixel(x,y);
		cirPath.push(pix);
		if(i % 120 == 0) {
			var startX = radius * cos(startA);
			var startY = radius * sin(startA);
			var endX   = radius * cos(endA);
			var endY   = radius * sin(endA); 
			startA += 120;
            endA   += 120;
            c = 0;
		}
		var tX = getPoint(startX,endX,(100/count)*c);
		var tY = getPoint(startY,endY,(100/count)*c);
        var triPix = new pixel(tX,tY);
		triPath.push(triPix);
		c++;
	}

for(i = 0 ; i < triPath.length; i++) {
 		var pix = new pixel(triPath[i].x + mouseX, triPath[i].y + mouseY);
 		morPath.push(pix);
 	}
 	colors = color(0,0,0);
}

function mousePressed() {
	newx = random(360);
	colors = color(random(100),random(100),random(100));
	fill(colors);
	var z = 0;
	var c = 0;
	if(flag == 0) {
	for(var i = 0 ; i < morPath.length ; i++) {
		var x = mouseX + radius * cos(z);
		var y = mouseY + radius * sin(z);
		morPath[i].x = x;
		morPath[i].y = y;
		z += spacing; 		
 	}
 	flag = 1;
 } else {
 	flag = 0;
 	var startA = 0;
 	var endA   = 120;
 	var count  = 120/spacing;
 	for(var i = 0 ; i <  morPath.length ; i++) {
 		if(z % 120 == 0) {
			var startX = mouseX + radius * cos(startA+ofs);
			var startY = mouseY + radius * sin(startA+ofs);
			var endX   = mouseX + radius * cos(endA+ofs);
			var endY   = mouseY + radius * sin(endA+ofs); 
			startA += 120;
            endA   += 120;
            c = 0;
		}
		var tX = getPoint(startX,endX,(100/count)*c);
		var tY = getPoint(startY,endY,(100/count)*c);
		morPath[i].x = tX;
		morPath[i].y = tY;	
		z+= spacing;
		c++;
 	}
   ofs += 30;
  }

}

function draw() {
	background(255);	
	for(var i = 0 ; i < cirPath.length ; i++) {
		stroke(colors);
		ellipse(cirPath[i].x,cirPath[i].y,3);
 	}
var z = 10;
var x = 1;
 	for(var i = 0 ; i < cirPath.length ; i++) {

 		cirPath[i].x = getPoint(cirPath[i].x,morPath[i].x,z * (sin(x) + 2));
 		cirPath[i].y = getPoint(cirPath[i].y,morPath[i].y,z * (sin(x) + 2));
 		//z +=10;
 		x += 100;
 	}
}
