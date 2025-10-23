export const run = (input) => {
  return runSimulation(input);
};

const runSimulation = discs => {
  console.log(discs);
  let t = 0;
  while(true) {
    t++;
    let foundAnswer = true;
    for(let d = 0; d < discs.length; d++) {
      const disc = discs[d];
      const pos = (disc.start + (d + 1) + t) % disc.size;
      if(pos != 0) {
        foundAnswer = false;
        break;
      }
    }

    if(foundAnswer) 
      return t;
  }
}