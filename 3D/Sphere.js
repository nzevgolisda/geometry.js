
class Sphere {
    constructor(center = [x, y, z], r) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.z0 = center[2];
        this.r = r;
    }
    getCartesian() {
        return '(x - '+this.x0+')^2 + (y - '+this.y0+')^2 + (z - '+this.z0+')^2 = '+this.r+'^2';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (let i = 0; i<n; i++) {
            for (let j = 0; j<n; j++, k++) {
                let t = (2*i/n)*Math.PI;
                let w = (j/n)*Math.PI;
                let x = this.r*Math.cos(t)*Math.sin(w) + this.x0;
                let y = this.r*Math.sin(t)*Math.sin(w) + this.y0;
                let z = this.r*Math.cos(w) + this.z0;
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
}
let n = 6;
let sphere = new Sphere([0, 0, 0], 1);
let z1 = [];
let z2 = [];
let z3 = [];
for (let i = 0; i<=n; i++) {
    let rowX = [];
    let rowY = [];
    let rowZ = [];
    let t = (2*i/n)*Math.PI;
    for (let j = 0; j<=n; j++) {
        let w = (j/n)*Math.PI;
        let x = sphere.r*Math.cos(t)*Math.sin(w) + sphere.x0;
        let y = sphere.r*Math.sin(t)*Math.sin(w) + sphere.y0;
        let z = sphere.r*Math.cos(w) + sphere.z0;
        rowX.push(x);
        rowY.push(y);
        rowZ.push(z);
    z1.push(rowX);
    z2.push(rowY);
    z3.push(rowZ);
    }
}

var X = {z: z1, type: 'surface'};
var Y = {z: z2, showscale: false, opacity:0.1, type: 'surface'};
var Z = {z: z3, showscale: false, opacity:0.1, type: 'surface'};

Plotly.newPlot('myDiv', [X, Y, Z]);