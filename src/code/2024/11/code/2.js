export const run = (input) => {

  let stones = input.map(x => ({val: x, amount: 1})) 

  for(let run = 0; run < 75; run++) {
    let newStones = [];
    for(let i = 0; i < stones.length; i++) {
      let curr = stones[i];
      if(curr.val === 0) {
        const obj = {val: 1, amount: curr.amount}
        matchAndAdd(obj, newStones);        
      }
      else if(`${curr.val}`.length % 2 === 0) {
        const middle = `${curr.val}`.length / 2;
        const first = parseInt(`${curr.val}`.slice(0, middle));
        const second = parseInt(`${curr.val}`.slice(middle));
        const obj1 = {val: first, amount: curr.amount};
        const obj2 = {val: second, amount: curr.amount}
        matchAndAdd(obj1, newStones);  
        matchAndAdd(obj2, newStones);  
      }
      else {
        const obj = {val: stones[i].val * 2024, amount: curr.amount};
        matchAndAdd(obj, newStones);        
      }
    }
    stones = newStones;
  }

  let res = 0;
  stones.forEach(stone => {
    res += stone.amount;
  })

  return res;
};

const matchAndAdd = (stone, stones) => {
  const match = stones.find(x => x.val === stone.val);
  if(match) 
    match.amount += stone.amount
  else 
    stones.push(stone);
}
