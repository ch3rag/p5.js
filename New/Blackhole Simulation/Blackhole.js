
class Blackhole {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.rs = (2 * G * m) / (c * c);
    }

    show() {
        // EH
        noStroke();
        fill(0);
        circle(this.pos.x, this.pos.y, this.rs);


        //PS
        noFill();
        stroke(0, 255, 0);
        strokeWeight(5);
        circle(this.pos.x, this.pos.y, this.rs * 1.5)

        //AD
        strokeWeight(10);
        stroke(255, 155, 0);
        circle(this.pos.x, this.pos.y, this.rs * 3);



        //SHADOW
        strokeWeight(5);
        stroke(0, 0, 255);
        circle(this.pos.x, this.pos.y, this.rs * 2.6);


        stroke(0);
        strokeWeight(1);
        line(0, this.pos.y - this.rs * 2.6 , width, this.pos.y - this.rs * 2.6 );

    }

    pull(photon) {
        // VECTOR POINTING FROM PHOTON TO BLACKHOLE
        const force = p5.Vector.sub(this.pos, photon.pos);
        const r = force.mag();
        const fg = (G * this.mass) / (r * r);
        const ph = photon.vel.heading();
        const theta = force.heading();

        let deltaTheta = -fg  * Math.sin(ph - theta) * (dt / c);
        //deltaTheta /= abs(1.0 - 2.0 * G * this.mass / (r * c * c));
        photon.vel = p5.Vector.fromAngle((ph + deltaTheta));
        photon.vel.setMag(c);
        if(r <= this.rs) {
            photon.stop();
        }
    }
}
