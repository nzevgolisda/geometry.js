
class Cone {
    constructor(center = [x, y, z]) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.z0 = center[2];
    }
    getCartesian() {
        return '(z - '+this.z0+')^2 = (x - '+this.x0+')^2 + (y - '+this.y0+')^2';
    }
    getPoints(n) {
        let k = 0;
        let data = {};
        for (let i = 0; i<n; i++) {
            for (let j = -n; j<n; j++, k++) {
                let t = (2*i/n)*Math.PI;
                let z = j + this.z0;
                let x = z*Math.cos(t) + this.x0;
                let y = z*Math.sin(t) + this.y0;
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