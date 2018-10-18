function pendulum(x,y,len,mass,angle) {
	 this.x = x;
	 this.y = y;
     this.len = len;
     this.mass = mass;
     this.angle = angle;
     this.x2 = 0;
     this.y2 = 0;
     this.angVel = 0;
     this.angAcc = 0;

     this.setup = function() {
     this.x2 = this.x + len * cos(this.angle);
     this.y2 = this.y + len * sin(this.angle);	 	 
     }


     this.draw = function() {
     
     line(this.x, this.y, this.x2, this.y2);
     ellipse(this.x2, this.y2, this.mass, this.mass);

     }

     this.update = function() {
      this.angAcc = (G * sin(this.angle + PI/2))/this.len;
      this.angVel += this.angAcc;
      this.angle += this.angVel;
      this.angle *= 0.999;
      this.x2 = this.x + len * cos(this.angle);
      this.y2 = this.y + len * sin(this.angle);	 	 


     }
	
}

	