
class Circle {
    constructor(center = [x, y], r) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.r = r;
    }
    getArea() {
        return Math.PI*this.r**2;
    }
    getLength() {
        return 2*Math.PI*this.r;
    }
    getCartesian() {
        return '[(x - '+this.x0+')^2 + (y - '+this.y0+')^2 = '+this.r+'^2]';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (let i = 0; i<n+1; i++, k++) {
            let t = 2*(i/n)*Math.PI;
            let x = this.r*Math.cos(t) + this.x0;
            let y = this.y0 + Math.sin(t) + this.y0;
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


