export const run = input => {
    let sum = 0;
    input.forEach(pair => {
        if(pair.e1S <= pair.e2E && pair.e1E >= pair.e2S)
            sum++;
    });
    return sum;
}