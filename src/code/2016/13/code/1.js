export const run = (input) => {
  return findSteps(input);
};

const findSteps = (favNum) => {
  const map = new Map();

  const goal = favNum === 10 ? {r: 4, c: 7} : { r: 39, c: 31 };

  map.set("1,1", calcField(1, 1, favNum));

  let queue = [{ r: 1, c: 1, steps: 0 }];
  let head = 0; 
  while(head < queue.length) {
    const curr = queue[head++];

    for (const dir of dirs) {
      const newPos = tryPos(map, favNum, curr.r + dir.r, curr.c + dir.c, curr.steps);
      if(!newPos) 
        continue;

      if(newPos.r === goal.r && newPos.c === goal.c) {
        return newPos.steps;
      }

      queue.push(newPos);
    };
  }

  return -1;

}

const tryPos = (map, favNum, r, c, steps) => {
  if(r < 0 || c < 0) 
    return null;

  const key = `${r},${c}`;
  if(map.has(key))
    return null;

  const field = calcField(r, c, favNum);
  map.set(key, field);

  if(field === wall)
    return null;

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
