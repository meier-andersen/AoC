export const run = (input) => {
  const res = findPos(input);
  return res;
};

const findPos = (steps) => {
  let row = 0
  let col = 0
  let dir = "N";
  const seen = new Set([`${row},${col}`]);

  const delta = (d) => {
    switch (d) {
      case "N": return [-1, 0];
      case "S": return [1, 0];
      case "E": return [0, -1];
      case "W": return [0, 1];
    }
  };

  for (const step of steps) {
    dir = newDir(dir, step.dir);
    const [dr, dc] = delta(dir);

    for (let j = 0; j < step.val; j++) {
      row += dr;
      col += dc;
      const key = `${row},${col}`;
      if (seen.has(key)) return Math.abs(row) + Math.abs(col);
      seen.add(key);
    }
  }
  return -1;
}

const newDir = (currDir, opr) => {
  const dirs = ["N", "E", "S", "W"];
  let index = dirs.indexOf(currDir);
  if (opr === "R") {
    index = (index + 1) % 4;
  } else if (opr === "L") {
    index = (index + 3) % 4;
  }
  return dirs[index];
}