export const run = input => {
    let res = "";
    const piles = input.piles;
    const inst = input.instructions;
    
    inst.forEach(ins => {
        for(let i = 0; i < ins.amount; i++) {
            piles[ins.to-1].push(piles[ins.from-1].pop());
        }
    })
    piles.forEach(pile => {
        res += pile.pop();
    })
    return res;
}