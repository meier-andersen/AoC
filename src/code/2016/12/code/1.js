export const run = (input) => {
  return runSimulation(input);
};

const runSimulation = (instructions) => {
  const regs = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  }

  let step = 0;
  while(step < instructions.length) {
    const curr = instructions[step];

    switch(curr.ins) {
      case "cpy": 
        if(curr.cmp) 
          regs[curr.reg] = regs[curr.cmp];
        else 
          regs[curr.reg] = curr.val;
      break;
      case "inc": 
        regs[curr.reg]++;
      break;
      case "dec": 
        regs[curr.reg]--;
      break;
      case "jnz": 
        if(regs[curr.cmp] !== 0)
          step += curr.val - 1;
      break;
    }
    
    step++;
  }

  return regs.a;
}