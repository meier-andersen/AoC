export const run = (input) => {
  let res = 0;
  input.forEach((code) => {
    const multiplier = parseInt(code);
    const val = runRobotLevel(numpad, code);
    res += multiplier * val;
  });
  return res;
};

const runRobotLevel = (map, code, robots = 25, memo = {}) => {
  const key = `${code},${robots}`;
  if (memo[key] !== undefined) return memo[key];

  let curPos = "A";
  let length = 0;

  code.split("").forEach((pos) => {
    const paths = findPaths(map, curPos, pos);
    if (robots === 0) length += paths[0].length;
    else length += Math.min(...paths.map((path) => runRobotLevel(dirpad, path, robots - 1, memo)));
    curPos = pos;
  });
  memo[key] = length;
  return length;
};

const findVal = (map, val) => {
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === val) return [c, r];
    }
  }
};

const findPaths = (map, startVal, endVal) => {
  let start = findVal(map, startVal);
  const stack = [{ p: start, path: [], cost: 0 }];
  let cur;
  const seen = {};
  let paths = [];
  let minCost;

  while (stack.length > 0) {
    const cur = stack.shift();
    if (cur.dirId !== undefined) cur.path.push(dirs[cur.dirId]);

    if (map[cur.p[1]][cur.p[0]] === endVal) {
      if (!minCost || cur.cost < minCost) {
        paths = [];
        minCost = cur.cost;
      }
      if (cur.cost === minCost) paths.push(cur.path);
      continue;
    }

    const key = cur.p.join(",");
    if (seen[key] < cur.cost) continue;
    seen[key] = cur.cost;
    if (cur.cost > minCost) continue;

    dirMap.forEach((d, dirId) => {
      const p = [cur.p[0] + d[0], cur.p[1] + d[1]];
      if (!map[p[1]] || !map[p[1]][p[0]]) return;

      stack.push({
        path: cur.path.slice(),
        p,
        dirId,
        cost: cur.cost + 1,
      });
    });
  }

  return paths.map((p) => `${p.join("")}A`);
};

const dirMap = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];
const dirs = ["^", ">", "v", "<"];
const numpad = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  [null, "0", "A"],
];
const dirpad = [
  [null, "^", "A"],
  ["<", "v", ">"],
];
