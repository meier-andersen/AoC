export const run = (input) => {
  let map = input;

  let totalRemoved = 0;
  while (true) {
    const { res: removed, newMap } = runIteration(map);
    totalRemoved += removed;
    map = newMap;

    if (removed === 0) return totalRemoved;
  }
};

const runIteration = (map) => {
  let res = 0;
  const newMap = new Set();

  for (const key of map) {
    const split = key.split(",");
    const row = parseInt(split[0]);
    const col = parseInt(split[1]);
    const score = calcScore(map, row, col);

    if (score < 4) res++;
    else newMap.add(key);
  }
  return { res, newMap };
};

const calcScore = (map, row, col) => {
  let score = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r === row && c === col) continue;
      if (map.has(`${r},${c}`)) score++;
    }
  }
  return score;
};
