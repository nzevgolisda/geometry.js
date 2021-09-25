
class Ellipse {
    constructor(center = [x, y], a, b) { 
        this.x = center[0];
        this.y = center[1];
        this.a = a;
        this.b = b;
    }
    getCartesian() {
        return '((x - '+this.x+')/'+this.a+')^2 + ((y - '+this.y+')/'+this.b+')^2 = 1';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (var i = 0; i<=n; i++, k++) {
            let t = (2*i/n)*Math.PI;
            let x = this.a*Math.cos(t) + this.x;
            let y = this.b*Math.sin(t) + this.y;
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

