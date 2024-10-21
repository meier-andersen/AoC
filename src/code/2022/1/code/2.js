export const run = (input) => {
    let res = 0;
    let list = input.slice(0, 3);
    for(let i = 3; i < input.length; i++) {
        const last = getAverage(list);
        list.shift();
        list.push(input[i]);
        const curr = getAverage(list);
        if(curr > last)
            res++;
    }
    return res;
}

const getAverage = list => {
    let sum = list.reduce((acc, curr) => acc+curr, 0);
    return sum;
}