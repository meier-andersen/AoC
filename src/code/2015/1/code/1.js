export const run = input => {
    let res = 0;
    input.forEach(elem => {
        res += elem === "(" ? 1 : -1;
    })
    return res;
}