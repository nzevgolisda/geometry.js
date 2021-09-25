
class Point {
    constructor(x, y) { 
        this.x = x;
        this.y = y;
        this.r = this.norm();
        this.theta = this.theta();
    }
    norm() {
        return Math.sqrt(this.x**2+this.y**2);
    }
    theta() {
        return Math.acos(this.x/this.r);
    }
    distance(other) {
        return Math.sqrt((this.x-other.x)**2+(this.y-other.y)**2);
    }
    equals(other) {
        if (this.x === other.x && this.y === other.y) {
            return true;
        }else {
            return false;
        }
    }
    inner(other) {
        return this.x*other.x + this.y*other.y;
    }
    vertical(other) {
        if (this.inner(other) === 0) {
            return true;
        }else {
            return false;
        }
    }
    add(other) {
        return new Point(this.x + other.x, this.y + other.y);
    }
    triangle(other1, other2) {
        let point = this.add(other1).add(other2);
        return point.equals(new Point(0, 0));
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (let i = -n; i<=n; i++, k++) {
            let x = i/n;
            let y = 2*x;
            data[k] = {
                x: x,
                y: y
            };
        }
        this.k = k;
        return data;
    }
    getLists(n) {
        let data = {
                x : [],
                y : []
            };
        let obj = this.getPoints(n);
        for (let i=0; i<this.k; i++) {
            data.x.push(obj[i].x);
            data.y.push(obj[i].y);
        }
        return [data];
    }
}