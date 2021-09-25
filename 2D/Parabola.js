
class Parabola {
    constructor(center = [x, y], a) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.a = a;
    }
    getCartesian() {
        return 'y - '+this.y0+' = '+this.a+'*(x - '+this.x0+')^2';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (var i=-n; i<=n+1; i++, k++) {
            let x = i/n;
            let y = this.y0 + this.a*((x - this.x0)**2);
            data[k] = {
                x: x,
                y: y
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
