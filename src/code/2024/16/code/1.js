export const run = (map) => {
  reset();
  findGoal(map);
  generateNodes(map);

  return findSolutions(map);
};

const findSolutions = (map) => {
  let score = null;
  let solutions = [];
  let queue = [{ score: 0, loc: "S", dir: "E", visited: ["S"] }];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.loc === "E") 
      return curr.score
    

    const visitedKey = `${curr.loc}-${curr.dir}`;
    if (visited.find((x) => x.id === visitedKey)) continue;
    visited.push({ id: visitedKey });

    const node = nodes.find((x) => x.id === curr.loc);

    node.nodes.forEach((n) => {
      let newScore = curr.score + n.score;
      if (n.dir !== curr.dir) newScore += 1000;
      const visited = [...curr.visited].concat(n.id);
      queue.push({ score: newScore, loc: n.id, dir: n.newDir, visited });
    });

    queue.sort((a, b) => a.score - b.score);
  }

  return solutions;
};


let visited = [];
let nodes = [];
let goal = null;
const generateNodes = (map) => {
  for (let r = 1; r < map.length - 1; r++) {
    for (let c = 1; c < map[r].length - 1; c++) {
      const curr = map[r][c];
      if (curr === "#") continue;

      const north = map[r + rowMap["N"]][c + colMap["N"]] === ".";
      const south = map[r + rowMap["S"]][c + colMap["S"]] === ".";
      const west = map[r + rowMap["W"]][c + colMap["W"]] === ".";
      const east = map[r + rowMap["E"]][c + colMap["E"]] === ".";

      let score = 0;
      if (north) score++;
      if (south) score++;
      if (west) score++;
      if (east) score++;

      if (score < 3 && curr !== "S") continue;

      const id = curr === "S" ? "S" : `${r},${c}`;

      const fullNode = { id, nodes: [] };
      if (north) {
        const newNode = buildNode(map, r, c, "N");
        if (newNode) {
          fullNode.nodes.push(newNode);
        }
      }
      if (south) {
        const newNode = buildNode(map, r, c, "S");
        if (newNode) {
          fullNode.nodes.push(newNode);
        }
      }
      if (east) {
        const newNode = buildNode(map, r, c, "E");
        if (newNode) {
          fullNode.nodes.push(newNode);
        }
      }
      if (west) {
        const newNode = buildNode(map, r, c, "W");
        if (newNode) {
          fullNode.nodes.push(newNode);
        }
      }
      fullNode.nodes.sort((a, b) => a.score - b.score);
      nodes.push(fullNode);
    }
  }
};

const buildNode = (map, r, c, val) => {
  const newNode = findNextNode(map, r + rowMap[val], c + colMap[val], val);
  if (!newNode) return null;

  newNode.dir = val;
  return newNode;
};

const penalty = 1000;

const findNextNode = (map, r, c, dir, score = 1, coor = []) => {
  const currKey = `${r},${c}`;
  coor.push(currKey);

  if (isGoal(r, c)) {
    return { id: "E", score, newDir: dir, coor };
  }

  const north = canMove(map, r, c, dir, "N");
  const south = canMove(map, r, c, dir, "S");
  const east = canMove(map, r, c, dir, "E");
  const west = canMove(map, r, c, dir, "W");

  let value = 0;
  if (north) value++;
  if (south) value++;
  if (west) value++;
  if (east) value++;

  if (value === 0) return null;
  if (value > 1) return { id: currKey, score, newDir: dir, coor };
  score++;
  if (north) return handleFindNextNode(map, r, c, score, coor, dir, "N");

  if (south) return handleFindNextNode(map, r, c, score, coor, dir, "S");

  if (east) return handleFindNextNode(map, r, c, score, coor, dir, "E");

  if (west) return handleFindNextNode(map, r, c, score, coor, dir, "W");
};

const handleFindNextNode = (map, r, c, score, coor, dir, val) => {
  if (dir !== val) score += penalty;
  return findNextNode(map, r + rowMap[val], c + colMap[val], val, score, coor);
};

const isGoal = (r, c) => {
  return r === goal.r && c === goal.c;
};

function canMove(map, r, c, dir, direction) {
  let deltaRow = 0;
  let deltaCol = 0;
  let opposite = null;

  switch (direction) {
    case "N":
      deltaRow = -1;
      opposite = "S";
      break;
    case "S":
      deltaRow = 1;
      opposite = "N";
      break;
    case "W":
      deltaCol = -1;
      opposite = "E";
      break;
    case "E":
      deltaCol = 1;
      opposite = "W";
      break;
  }
  return (map[r + deltaRow]?.[c + deltaCol] === "." || map[r + deltaRow]?.[c + deltaCol] === "E") && dir !== opposite;
}

const reset = () => {
  nodes = [];
  visited = [];
};

const findGoal = (map) => {
  for (let r = 1; r < map.length - 1; r++) {
    for (let c = 1; c < map[r].length - 1; c++) {
      if (map[r][c] === "E") goal = { r, c };
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
