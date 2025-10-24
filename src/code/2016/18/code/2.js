export const run = (input) => {
  return runSimulation(input);
};

const runSimulation = map => {

  const goal = map[0].length > 10 ? 400000 : 10;
  const length = map[0].length;
  for(let row = 1; row < goal; row++) {
    const line = [];
    for(let col = 0; col < length; col++) {
      const a = map[row-1][col-1] ?? ".";
      const b = map[row-1][col] ?? ".";
      const c = map[row-1][col+1] ?? ".";
      line.push(isSafe (a, b, c) ? "." : "^");
    }
    map.push(line);
  }
  return countSafe(map);
}

const countSafe = map => {
  let res = 0;
  map.forEach(row => {
    row.forEach(col => {
      if(col === ".")
        res++;
    })
  })
  return res;
}

const isSafe = (a, b, c) => {
  for(const trap of traps) {
    if(trap.a === a && trap.b === b && trap.c === c)
      return false;
  }
  return true;
}

const traps = [
  {a: "^", b: "^", c: "."},
  {a: ".", b: "^", c: "^"},
  {a: "^", b: ".", c: "."},
  {a: ".", b: ".", c: "^"},
]