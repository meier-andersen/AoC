export const run = (input) => {
  if (input.length < 30) return 0;
  const rows = 103;
  const cols = 101;
  for (let i = 0; i < 100000; i++) {
    const robots = calcPos(input, rows, cols, i);
    const res = hasOverlaps(robots);
    if (res) {
      //printMap(rows, cols, robots);
      return i;
    }
  }

  return 0;
};

const hasOverlaps = (robots) => {
  for (let i = 0; i < robots.length; i++) {
    const curr = robots[i];
    const matches = robots.filter((x) => x.c === curr.c && x.r === curr.r).length;
    if (matches > 1) return false;
  }

  return true;
};

const calcPos = (inp, rows, cols, steps) => {
  const robots = [];

  inp.forEach((robot) => {
    let r = (robot.p.r + robot.v.r * steps) % rows;
    if (r < 0) r += rows;
    let c = (robot.p.c + robot.v.c * steps) % cols;
    if (c < 0) c += cols;
    const obj = {
      r,
      c,
    };
    robots.push(obj);
  });
  return robots;
};

const printMap = (rows, cols, robots) => {
  for (let r = 0; r < rows; r++) {
    let str = "";
    for (let c = 0; c < cols; c++) {
      const matches = robots.filter((x) => x.r === r && x.c === c);
      str += matches.length > 0 ? "X" : ".";
    }
    console.log(str);
  }
};
