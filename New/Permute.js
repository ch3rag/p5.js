function getPermutations(x) {
    if(x.length > 1) {
        let sequence = [];
        for(let i = 0 ; i < x.length ; i++) {
            let xCopy = [...x];
            xCopy.splice(i, 1);
            sequence = [...sequence, ...getPermutations(xCopy).map(e => x[i] + e)];
        }
        return sequence;
    } else {
        return [x];
    }
}

function permute(x) {
    x = String(x).split("");
    return getPermutations(x).map(x => parseInt(x));
}

console.log(permute(123));
console.log(permute(34));
console.log(permute(7896));
