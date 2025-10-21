export const run = (input) => {
  return findSteps(input);
};

const findSteps = (favNum) => {
  const map = new Map();

  map.set("1,1", calcField(1, 1, favNum));

  let queue = [{ r: 1, c: 1, steps: 0 }];
  let head = 0; 
  while(head < queue.length) {
    const curr = queue[head++];

    if(curr.steps >= 50) 
      continue;

    for (const dir of dirs) {
      const newPos = tryPos(map, favNum, curr.r + dir.r, curr.c + dir.c, curr.steps);
      if(newPos) 
        queue.push(newPos);
    };
  }

  return map.size;
}

const tryPos = (map, favNum, r, c, steps) => {
  if(r < 0 || c < 0) 
    return null;

  const key = `${r},${c}`;
  if(map.has(key))
    return null;

  const field = calcField(r, c, favNum);

  if(field === wall)
    return null;
  
  map.set(key, field);

  steps++;
  return { r, c, steps: steps};
}

const calcField = (r, c, favNum) => {
  const firstVal = (c*c) + (3*c) + (2*c*r) + r + (r*r) + favNum;
  const count = firstVal.toString(2).split('0').join('').length;
  return count % 2 === 0 ? floor : wall;
}

const wall = "#";
const floor = ".";
const dirs = [
  {r: -1, c: 0 },
  {r: 1, c: 0 },
  {r: 0, c: -1 },
  {r: 0, c: 1 }
]
