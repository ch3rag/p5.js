
class Photon {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(-c, 0);
    }


    update() {
        let newVel = this.vel.copy();
        newVel.mult(dt);
        this.pos.add(newVel);
    }

    show() {
        noStroke();
        fill(255, 0, 0);
        circle(this.pos.x, this.pos.y, 1, 1);
    }

    stop() {
        this.vel.setMag(0);
    }
}