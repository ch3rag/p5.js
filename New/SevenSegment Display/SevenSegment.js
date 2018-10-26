function SevenSegment(x, y, scale) {
  this.x = x;
  this.y = y;

  this.segments = [];

  this.segments.push(new Segment(x + 5 * scale, y, scale, 0, 1))
  this.segments.push(new Segment(x + 10 * scale, y + 5 * scale, scale, PI/2, 1));
  this.segments.push(new Segment(x + 10 * scale, y + 15 * scale, scale, PI/2, 1));
  this.segments.push(new Segment(x + 5 * scale, y + 20 * scale, scale, 0, 1));
  this.segments.push(new Segment(x, y + 15 * scale, scale, PI/2, 1));
  this.segments.push(new Segment(x, y + 5 * scale, scale, PI/2, 1));
  this.segments.push(new Segment(x + 5 * scale, y + 10 * scale, scale, 0, 1));

  this.draw = function() {
    for (let s of this.segments) {
      s.draw();
    }
  }

  this.showDigit = function (digit) {
    let hex = DECIMAL_EQ_HEX[digit];
    this.segments[0].status = (hex >> 6) & 1;
    this.segments[1].status = (hex >> 5) & 1;
    this.segments[2].status = (hex >> 4) & 1;
    this.segments[3].status = (hex >> 3) & 1;
    this.segments[4].status = (hex >> 2) & 1;
    this.segments[5].status = (hex >> 1) & 1;
    this.segments[6].status = (hex >> 0) & 1;
  }
}
