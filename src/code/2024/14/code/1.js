export const run = (input) => {
  const rows = input.length > 30 ? 103 : 7;
  const cols = input.length > 30 ? 101 : 11;
  const robots = calcPos(input, rows, cols, 100);
  return calcRes(robots, rows, cols);
};

const calcRes = (robots, rows, cols) => {
  const midR = (rows - 1) / 2;
  const midC = (cols - 1) / 2;
  const tl = robots.filter((x) => x.r < midR && x.c < midC).length;
  const tr = robots.filter((x) => x.r < midR && x.c > midC).length;
  const bl = robots.filter((x) => x.r > midR && x.c < midC).length;
  const br = robots.filter((x) => x.r > midR && x.c > midC).length;
  return tl * tr * bl * br;
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

  //printMap(rows, cols, robots);

  return robots;
};

const printMap = (rows, cols, robots) => {
  for (let r = 0; r < rows; r++) {
    let str = "";
    for (let c = 0; c < cols; c++) {
      const matches = robots.filter((x) => x.r === r && x.c === c);
      str += matches.length > 0 ? matches.length : ".";
    }
    console.log(str);
  }
};
