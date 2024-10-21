export const run = input => {
    let sum = 0;
    for(let i = 0; i < input.length; i += 3) {
        const elves = [input[i], input[i+1], input[i+2]]
        let res = findMatch(elves);
        sum += letterToValue(res);
    }
    return sum;
}

const findMatch = (elves) => {
    const first = elves[0];
    for(let i = 0; i < first.length; i++) {
        let curr = first[i];
        let index = elves[1].indexOf(curr);
        let index2 = elves[2].indexOf(curr);
        if(index !== -1 && index2 !== -1) {
            return curr;
        }
    }
}

const letterToValue = l => {
    return letters.indexOf(l)+1;
}

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";