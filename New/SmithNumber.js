function setup() {
    console.log(isSmith(378));
}

function draw() {
    noLoop();
}


function isSmith(n) {
    let factors = [];

    let lhs = sumOfDigits(n);

    for (let i = 2; i <= n / 2; i++) {
        while (n % i == 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n !== 1) factors.push(n);

    let rhs = factors.reduce((x, c) => x + sumOfDigits(c));
    if (lhs === rhs) {
        return true;
    } else {
        return false;
    }
}

function sumOfDigits(n) {
    n = Math.abs(n);
    let sum = 0;
    while (n > 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}
