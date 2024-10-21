export const run = input => {
    let sum = 0;
    input.forEach(elem => {
        const chars = elem.replace(/[^0-9]/g, '').split("");
        let val = parseInt(`${chars[0]}${chars[chars.length-1]}`)
        sum += val;
    })
    return sum;
}