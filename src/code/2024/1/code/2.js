export const run = input => {
    let res = 0;
    const l1 = input.l1;
    const l2 = input.l2;
    for(let i = 0; i < l1.length; i++) {
        const currL1 = l1[i];
        const currL2 = l2.find(x => x.id === currL1)
        if(currL2) {
            res += currL1 * currL2.num
        }
    }

    return res;
}