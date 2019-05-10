class Matrix {
    constructor(rows, cols) {
        this.rows = rows;;
        this.cols = cols;
        this.data = [];

        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    static multiply(m1, m2) {
        if (m1.cols !== m2.rows) {
            console.log("Columns Of A Must Match Rows Of B");
            return undefined;
        } else {
            let a = m1.data;
            let b = m2.data;
            let result = new Matrix(m1.rows, m2.cols);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < m1.cols; k++) {
                        sum += a[i][k] * b[k][j];
                    }
                    result.data[i][j] = sum;
                }
            }
            return result;  
        }
    }

    multiply(n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] *= n;
            }
        }

    }

    add(n) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }
    }

    static transpose(m) {
        let result = new Matrix(m.cols, m.rows);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                result.data[j][i] = m.data[i][j];
            }
        }
        return result;
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.random() * 2 - 1;
            }
        }
    }

    print() {
        console.table(this.data);
    }

    static fromArray(arr) {
        let m = new Matrix(arr.length, 1);
        for(let i = 0 ; i < arr.length ; i++) {
            m.data[i][0] = arr[i];
        }
        return m;
    }

    map(fx) {
        for(let i = 0 ; i < this.rows ; i++) {
            for(let j = 0 ; j < this.cols ; j++) {
                this.data[i][j] = fx(this.data[i][j]);
            }
        }
    }

    toArray() {
        let arr = [];
        for(let i = 0 ; i < this.rows ; i++) {
            for(let j = 0 ; j < this.cols ; j++) {
                arr.push(this.data[i][j]);
            }
        }
        return arr; 
    }

    static subtract(a, b) {

        let result = new Matrix(a.rows, a.cols);
        for(let i = 0 ; i < result.rows ; i++) {
            for(let j = 0 ; j < result.cols ; j++) {
                result.data[i][j] = a.data[i][j] - b.data[i][j];
            }
        }

        return result;
    }
}