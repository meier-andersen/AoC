export const run = (input) => {
  return runSimulation(input);
};

const runSimulation = bots => {
  const match1 = bots.find(x => x.id === 5) ? 61 : 5;
  const match2 = bots.find(x => x.id === 5) ? 17 : 2;

  while(true) {
    const curr = bots.find(x => x.chips.length === 2);
    if(!curr)
      return -1;

    curr.chips.sort((a,b) => b - a);

    if(curr.chips[0] === match1 && curr.chips[1] === match2)
      return curr.id;

    if(curr.ins.high.to === "bot") {
      const high = bots.find(x => x.id === curr.ins.high.id);
      high.chips.push(curr.chips[0]);
    }

    if(curr.ins.low.to === "bot") {
      const low = bots.find(x => x.id === curr.ins.low.id);
      low.chips.push(curr.chips[1]);
    }
    curr.chips = [];
  }
}