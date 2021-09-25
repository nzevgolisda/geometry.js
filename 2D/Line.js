
class Line {
    constructor(points, t) {
        this.t = t;
        this.p1 = points[0];
        this.p2 = points[1];
    }
    slope() {
        if (this.p1[1] === this.p2[1]) {
            if (this.p1[0] === this.p2[0]) {
                return 'points are equal';
            }else {
                return (this.p1[1] - this.p2[1])/(this.p1[0] -  this.p2[0]);
            }
        }else if (this.p1[1] != this.p2[1]) {
            if (this.p1[0] === this.p2[0]) {
                return false;
            }else {
                return (this.p1[1] - this.p2[1])/(this.p1[0] -  this.p2[0]);
            }
        }
    }
    getCartesian() {
        if (this.slope() === false) {
            return 'x = '+this.p1[0];
        }else if (this.slope() === 0) {
            return 'y = '+this.p1[1];
        }else if (this.slope() === false) {
            return 'No equation available';
        }else if (this.slope() === 'points are equal') {
            return 'No equation available';
        }else {
            let b1 = this.p1[1]-this.slope()*this.p1[0];
            let b2 = this.p2[1]-this.slope()*this.p2[0];
            if (b1 === b2) {
                this.b = b1;
            }else {
                this.b = 'No Line';
            }
            return 'y = '+this.slope()+'*x + '+this.b;
        }
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (var i = -n; i<=n; i++, k++) {
            let x = i/n;
            let y = this.slope()*(x-this.p1[0])+this.p1[1];
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
