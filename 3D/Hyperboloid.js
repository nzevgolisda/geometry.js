
class Hyperboloid {
    constructor(center = [x, y, z], constan = [a, b, c]) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.z0 = center[2];
        this.a = constan[0];
        this.b = constan[1];
        this.c = constan[2];
    }
    getCartesian() {
        return '((x - '+this.x0+')/'+this.a+')^2 + ((y - '+this.y0+')/'+this.b+')^2 - ((z - '+this.z0+')/'+this.c+')^2 = -1';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (let i = 0; i<n; i++) {
            for (let j = -n; j<n; j++, k++) {
                let t = (2*i/n)*Math.PI;
                let u = 3*j/n;
                let x = this.a*Math.cos(t)*Math.pow(u**2 - 1, 1/2) + this.x0;
                let y = this.b*Math.sin(t)*Math.pow(u**2 - 1, 1/2) + this.y0;
                let z = this.c*u;
                data[k] = {
                    x: x,
                    y: y,
                    z: z
                };
            }
        }
        this.k = k;
        return data;
    }
    getLists(n) {
        let data = [[], [], []];
        let obj = this.getPoints(n);
        for (let key in obj) {
            data[0].push(obj[key].x);
            data[1].push(obj[key].y);
            data[2].push(obj[key].z);
        }
        return data;
    }
}