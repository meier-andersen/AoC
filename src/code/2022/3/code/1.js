export const run = input => {
    let sum = 0;
    input.forEach(elem => {
        let res = findMatch(elem[0].split(""), elem[1]);
        sum += letterToValue(res);
    })
    return sum;
}

const findMatch = (left, right) => {
    for(let i = 0; i < left.length; i++) {
        let curr = left[i];
        let index = right.indexOf(curr);
        if(index !== -1) {
            return curr;
        }
    }
}

const letterToValue = l => {
    return letters.indexOf(l)+1;
}

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";