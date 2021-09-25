
class Plane {
    constructor(point, constan = [a, b, c]) {
        this.p1 = point[0];
        this.p2 = point[1];
        this.p3 = point[2];
        this.a = constan[0];
        this.b = constan[1];
        this.c = constan[2];
    }
    getCartesian() {
        return this.a+'*(x-'+this.p1+') + '+this.b+'*(y-'+this.p2+') + '+this.c+'*(z-'+this.p3+') = 0';
    }
}
//
//let n = 30;
//let plane = new Plane([0, 0, 0], [1, 2, 3]);
//let z1 = [];let z2 = [];let z3 = [];
//for (let x = 0; x<n; x++) {
//    let row = [];
//    for (let y = 0; y<n; y++) {
//        row.push(x);
//    z1.push(row);
//    }
//}
//for (let x = 0; x<n; x++) {
//    let row = [];
//    for (let y = 0; y<n; y++) {
//        row.push(y);
//    z2.push(row);
//    }
//}
//for (let x = 0; x<n; x++) {
//    let row = [];
//    for (let y = 0; y<n; y++) {
//        row.push(plane.p3 - (1/plane.c)*(plane.a*(x-plane.b*(y-plane.p2))));
//    z3.push(row);
//    }
//}
//
//
//var data_z1 = {z: z1, type: 'surface'};
//var data_z2 = {z: z2, showscale: false, opacity:0.1, type: 'surface'};
//var data_z3 = {z: z3, showscale: false, opacity:0.1, type: 'surface'};
//
//Plotly.newPlot('myDiv', [data_z1, data_z2, data_z3]);