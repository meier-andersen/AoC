export const run = (input) => {
  map = input;
  const size = map.size > 100 ? 70 : 6;
  queue = [{ r: 0, c: 0, route: [] }];
  visited = new Map();

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.r === size && curr.c === size) {
      return curr.route.length;
    }

    const key = `${curr.r},${curr.c}`;
    if (visited.has(key)) continue;
    visited.set(key, true);

    //North
    if (curr.r > 0) {
      tryMove(curr.r, curr.c, curr.route, "N");
    }
    //South
    if (curr.r < size) {
      tryMove(curr.r, curr.c, curr.route, "S");
    }
    //East
    if (curr.c < size) {
      tryMove(curr.r, curr.c, curr.route, "E");
    }
    //West
    if (curr.c > 0) {
      tryMove(curr.r, curr.c, curr.route, "W");
    }

    queue.sort((a, b) => a.route.length - b.route.length);
  }

  return -1;
};

let visited = null;
let queue = null;
let map = null;

const tryMove = (r, c, route, dir) => {
  const key = `${r + rowMap[dir]},${c + colMap[dir]}`;
  //console.log(`${key} -> ${map.has(key)}`)
  if (map.has(key)) return;

  const newRoute = [...route];
  newRoute.push(key);
  queue.push({ r: r + rowMap[dir], c: c + colMap[dir], route: newRoute });
};

const rowMap = {
  N: -1,
  S: 1,
  E: 0,
  W: 0,
};

const colMap = {
  N: 0,
  S: 0,
  E: 1,
  W: -1,
};

const printMap = (size) => {
  for (let r = 0; r <= size; r++) {
    let str = "";
    for (let c = 0; c <= size; c++) {
      str += map.has(`${r},${c}`) ? "#" : ".";
    }
    console.log(str);
  }
};
