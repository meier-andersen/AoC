export const run = (input) => {
    let res = 0;
    let last = input [0]
    for(let i = 1; i < input.length; i++) {
        let curr = input[i];
        if(curr > last)
            res++;
        last = curr;
    }
    return res;
}