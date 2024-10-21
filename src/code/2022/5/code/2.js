export const run = input => {
    let res = "";
    const piles = input.piles;
    const inst = input.instructions;
    
    inst.forEach(ins => {
        let stack = [];
        for(let i = 0; i < ins.amount; i++) {
            stack.unshift(piles[ins.from-1].pop());
        }
        piles[ins.to-1] = piles[ins.to-1].concat(stack);
    })
    piles.forEach(pile => {
        res += pile.pop();
    })
    return res;
}