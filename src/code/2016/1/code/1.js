export const run = (input) => {
  const res = findPos(input);
  return res;
};

const findPos = (steps) => {
  let row = 0;
  let col = 0;
  let dir = "N";

  steps.forEach(step => {
    dir = newDir(dir, step.dir);

    switch (dir) {
      case "N":
        row += step.val;
      break;
      case "S":
        row -= step.val;
      break;
      case "E":
        col -= step.val;
      break;
      case "W":
        col += step.val;
      break;
    }
  })
  
  return Math.abs(row) + Math.abs(col);
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