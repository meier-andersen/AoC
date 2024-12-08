export const run = (input) => {
  const visited = new Map();
  visited.set("0,0");
  let res = 1;
  let santa = { row: 0, col: 0 };
  let robo = { row: 0, col: 0 };
  let isSanta = true;
  input.forEach((char) => {
    if (char === "^") isSanta ? santa.row-- : robo.row--;
    if (char === "v") isSanta ? santa.row++ : robo.row++;
    if (char === "<") isSanta ? santa.col-- : robo.col--;
    if (char === ">") isSanta ? santa.col++ : robo.col++;

    const key = isSanta
      ? `${santa.row},${santa.col}`
      : `${robo.row},${robo.col}`;
    let found = visited.has(key);
    if (!found) {
      visited.set(key, true);
      res++;
    }

    isSanta = !isSanta;
  });
  return res;
};
