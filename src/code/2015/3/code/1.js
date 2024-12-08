export const run = (input) => {
  const visited = new Map();
  let res = 0;
  let row = 0;
  let col = 0;
  input.forEach((char) => {
    if (char === "^") row--;
    if (char === "v") row++;
    if (char === "<") col--;
    if (char === ">") col++;
    const key = `${row},${col}`;
    let found = visited.has(key);
    if (!found) {
      visited.set(key, true);
      res++;
    }
  });
  return res;
};
