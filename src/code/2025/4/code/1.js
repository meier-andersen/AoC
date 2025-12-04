export const run = (input) => {
  return runIteration(input);
};

const runIteration = (map) => {
  let res = 0;

  for (const key of map) {
    const split = key.split(",");
    const row = parseInt(split[0]);
    const col = parseInt(split[1]);
    const score = calcScore(map, row, col);

    if (score < 4) res++;
  }

  return res;
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
