
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
      let data = [[], [], []];
      for (let i = 0; i<n; i++) {
          for (let j = 0; j<n; j++, k++) {
              let t = (2*i/n)*Math.PI;
              let w = (j/n)*Math.PI;
              
              let x = this.r*Math.cos(t)*Math.sin(w) + this.x0;
              let y = this.r*Math.sin(t)*Math.sin(w) + this.y0;
              let z = this.r*Math.cos(w) + this.z0;
              data[0].push(x);
              data[1].push(y);
              data[2].push(z);
          }
      }
      this.k = k;
      return data;
  }
}

let sphere = new Sphere([0, 0, 0], 1);
let z1 = sphere.getPoints(10)[0];
let z2 = sphere.getPoints(10)[1];
let z3 = sphere.getPoints(10)[2];

let data_z1 = {z: z1, type: 'surface'};
let data_z2 = {z: z2, showscale: false, opacity:0.9, type: 'surface'};
let data_z3 = {z: z3, showscale: false, opacity:0.9, type: 'surface'};

z1 = [];
for (var i=0;i<10;i++ ) { 
  z1_row = [];
    for(var j=0;j<10;j++) { 
      z1_row.push();
    }
    z1.push(z1_row);
}

Plotly.newPlot('myDiv', [data_z1, data_z2, data_z3]);

//
//
//z1 = [
//    [8.83,8.89,8.81,8.87,8.9,8.87],
//    [8.89,8.94,8.85,8.94,8.96,8.92],
//    [8.84,8.9,8.82,8.92,8.93,8.91],
//    [8.79,8.85,8.79,8.9,8.94,8.92],
//    [8.79,8.88,8.81,8.9,8.95,8.92],
//    [8.8,8.82,8.78,8.91,8.94,8.92],
//    [8.75,8.78,8.77,8.91,8.95,8.92],
//    [8.8,8.8,8.77,8.91,8.95,8.94],
//    [8.74,8.81,8.76,8.93,8.98,8.99],
//    [8.89,8.99,8.92,9.1,9.13,9.11],
//    [8.97,8.97,8.91,9.09,9.11,9.11],
//    [9.04,9.08,9.05,9.25,9.28,9.27],
//    [9,9.01,9,9.2,9.23,9.2],
//    [8.99,8.99,8.98,9.18,9.2,9.19],
//    [8.93,8.97,8.97,9.18,9.2,9.18]
//];
//
//z2 = [];
//for (var i=0;i<z1.length;i++ ) { 
//  z2_row = [];
//    for(var j=0;j<z1[i].length;j++) { 
//      z2_row.push(z1[i][j]+1);
//    }
//    z2.push(z2_row);
//}
//
//z3 = []
//for (var i=0;i<z1.length;i++ ) { 
//  z3_row = [];
//    for(var j=0;j<z1[i].length;j++) { 
//      z3_row.push(z1[i][j]-1);
//    }
//    z3.push(z3_row);
//}