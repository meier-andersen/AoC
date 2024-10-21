export const run = input => {
    let sum = 0;
    input.forEach(pair => {
        if(pair.e1S <= pair.e2S && pair.e1E >= pair.e2E)
            sum++;
        else if(pair.e2S <= pair.e1S && pair.e2E >= pair.e1E)
            sum++;
    });
    return sum;
}