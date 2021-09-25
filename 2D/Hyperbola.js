
class Hyperbola {
    constructor(center = [x, y], a, b) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.a = a;
        this.b = b;
    }
    getCartesian() {
        return '((x - '+this.x0+')/'+this.a+')^2 - ((y - '+this.y0+')/'+this.b+')^2 = 1';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (let i = -n; i<=3*n; i++, k++) {
            let x = 5*i/n;
            let y = this.y0 + Math.pow((this.a**2)*(1+((x-this.x0)/this.b)**2), 1/2);
            let y_ = this.y0 - Math.pow((this.a**2)*(1+((x-this.x0)/this.b)**2), 1/2);
            data[2*k] = {
                x: x,
                y: y
            };
            data[2*k+1] = {
                x: x,
                y: y_
            };
            this.k = k;
        }
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
