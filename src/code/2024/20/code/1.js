export const run = (map) => {
  const nodes = buildNodes(map);
  return findScore(nodes);
};

const findScore = (nodes) => {
  let res = 0;

  for (const node of nodes) {
    const maxDistance = 2;
    const [oR, oC] = node[0].split(",").map((x) => parseInt(x));
    for (let r = -maxDistance; r <= maxDistance; r++) {
      for (let c = -maxDistance; c <= maxDistance; c++) {
        const distance = Math.abs(r) + Math.abs(c);
        if (distance <= maxDistance) {
          res += tryPos(`${oR + r},${oC + c}`, nodes, node[1], distance);
        }
      }
    }
  }
  return res;
};

const tryPos = (key, nodes, compare, steps) => {
  const goal = nodes.size > 100 ? 100 : 20;
  const val = nodes.get(key);

  if (val - compare - steps >= goal) {
    return 1;
  }
  return 0;
};

const buildNodes = (map) => {
  const nodes = new Map();

  let next = findStart(map);
  let index = 0;

  while (true) {
    const key = `${next.r},${next.c}`;
    nodes.set(key, index);

    if (map[next.r][next.c] === "E") return nodes;

    if (isValid(next, map, "N", nodes)) next = setNext(next, "N");
    else if (isValid(next, map, "S", nodes)) next = setNext(next, "S");
    else if (isValid(next, map, "E", nodes)) next = setNext(next, "E");
    else if (isValid(next, map, "W", nodes)) next = setNext(next, "W");
    else throw `something is wrong! ${next.r}, ${next.c}`;
    index++;
  }
};

const setNext = (next, dir) => {
  return { r: next.r + rowMap[dir], c: next.c + colMap[dir] };
};

const isValid = (next, map, dir, nodes) => {
  const r = next.r + rowMap[dir];
  const c = next.c + colMap[dir];
  const key = `${r},${c}`;
  if (nodes.has(key)) return false;
  return map[r][c] === "." || map[r][c] === "E";
};

const findStart = (map) => {
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === "S") return { r, c };
    }
  }
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
