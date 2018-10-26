function Segment(x, y, scale, orientation, status) {

  this.vertices = [];
  this.x = x;
  this.y = y;
  this.orientation = orientation;
  this.status = status;

  this.vertices.push(createVector(-5 * scale,0));
  this.vertices.push(createVector(-4 * scale,1 * scale));
  this.vertices.push(createVector(4 * scale,1 * scale));
  this.vertices.push(createVector(5 * scale,0));
  this.vertices.push(createVector(4 * scale,-1 * scale));
  this.vertices.push(createVector(-4 * scale,-1 * scale));

  this.draw = function() {

    if (this.status == 1) {
      fill(255, 0, 0);
    } else {
      fill(100,0,0);
    }
    push();
    translate(this.x, this.y);
    rotate(this.orientation);
    beginShape();
    for(let v of this.vertices) {
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
    pop();
  }
}
