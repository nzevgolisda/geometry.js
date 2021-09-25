
class Paraboloid {
    constructor(center = [x, y, z], cons = [a, b, c]) { 
        this.x0 = center[0];
        this.y0 = center[1];
        this.z0 = center[2];
        this.a = cons[0];
        this.b = cons[1];
        this.c = cons[2];
    }
    getCartesian() {
        return 'z - '+this.z0+' = '+this.c+'*((x - '+this.x0+')/'+this.a+')^2 + ((y - '+this.y0+')/'+this.b+')^2';
    }
    getPoints(n) {
        let data = {};
        if (this.c === 1) {
            let k = 0;
            for (let i = 0; i<n; i++) {
                for (let j = 0; j<n; j++, k++) {
                    let t = (2*i/n)*Math.PI;
                    let w = (j/n)*Math.PI;
                    let x = this.a*Math.cos(t)*Math.sin(w) + this.x0;
                    let y = this.b*Math.sin(t)*Math.sin(w) + this.y0;
                    let z = Math.cos(w) + this.z0;
                    data[k] = {
                        x: x,
                        y: y,
                        z: z
                    };
                }
            }
            this.k = k
            return data;
        }else if (this.c === -1) {
            let k = 0;
            for (let i = 0; i<n; i++) {
                for (let j = 0; j<n; j++, k++) {
                    let t = (2*i/n)*Math.PI;
                    let w = (j/n)*Math.PI;
                    let x = this.a*Math.cos(t)*Math.sin(w) + this.x0;
                    let y = this.b*Math.sin(t)*Math.sin(w) + this.y0;
                    let z = Math.cos(w) + this.z0;
                    data[k] = {
                        x: x,
                        y: y,
                        z: z
                    };
                }
            }
            this.k = k
            return data;
        }else {
            return 'No Paraboloid'
        }
    }
}