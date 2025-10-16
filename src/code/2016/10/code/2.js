export const run = (input) => {
  return runSimulation(input);
};

const runSimulation = bots => {
  const outputs = [];

  while(true) {
    const curr = bots.find(x => x.chips.length === 2);
    if(!curr)
      return outputs.reduce((acc, num) => acc * num, 1);;
    
    curr.chips.sort((a,b) => b - a);

    if(curr.ins.high.to === "bot") 
      bots.find(x => x.id === curr.ins.high.id).chips.push(curr.chips[0]);
    else if(curr.ins.high.id <= 2) 
      outputs.push(curr.chips[0])

    if(curr.ins.low.to === "bot") 
      bots.find(x => x.id === curr.ins.low.id).chips.push(curr.chips[1]);
    else if(curr.ins.low.id <= 2) 
      outputs.push(curr.chips[1])

    curr.chips = [];
  }
}