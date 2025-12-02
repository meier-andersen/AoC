export const run = (input) => {
  world = setupWorld(input);
  const start = setupStart(input);

  let queue = [start];
  //printMap(start);
  const seen = new Set();

  while(queue.length > 0) {
    const curr = queue.shift();

    const legalMoves = findLegalMoves(curr);
    for(const next of legalMoves) {
      if(next[0] === "0" && next[2] === "0") {
        next = next.split("|")[0].split(",");
        return parseInt(next[2]);
      }

      /*const key = generateKey(next);
      if(!seen.has(key)) {
        seen.add(key);
        queue.push(next);
      }*/
    }
  }

  return -1;
};

let world;

const findLegalMoves = (setup) => {
  const curr = parseObj(setup);
  
  let legalMoves = [];

  const emptySpace = curr.data.find(x => x.used === 0);
  const currLocation = world.get(emptySpace.id);
  for(const n of neighbors) {
    const neighbor = setup.data.find(c => c.x === (emptySpace.x + n.x) && c.y === (emptySpace.y + n.y));
    if(!neighbor)
      continue;
    if(neighbor.used > currSizeLimit) 
      continue;

    const newSetup = JSON.parse(JSON.stringify(setup));
    newSetup.steps++;
    const toSlot = newSetup.data.find(c => c.x === emptySpace.x && c.y === emptySpace.y);
    toSlot.used = neighbor.used;

    const newEmpty = newSetup.data.find(c => c.x === neighbor.x && c.y === neighbor.y);
    newEmpty.used = 0;

    if(newSetup.goal.x === neighbor.x && newSetup.goal.y === neighbor.y) {
      newSetup.goal.x = emptySpace.x;
      newSetup.goal.y = emptySpace.y;
    }
    legalMoves.push(newSetup);
  }

  return legalMoves;
}

const parseObj = setup => {
  const split = setup.split("|");
  const part1 = split[0].split(",");
  const curr = {
    gX: parseInt(part1[0]),
    gY: parseInt(part1[1]),
    steps: parseInt(part1[2]),
    data: []
  }
  for(let d of split) {
    if(!d.includes(":"))
      continue;
    d = d.split(":");
    curr.data.push({
      id: parseInt(d[0]),
      used: parseInt(d[1])
    });
  }

  return curr;
}

const neighbors = [
  { x: 1, y: 0},
  { x: 0, y: 1},
  { x: -1, y: 0},
  { x: 0, y: -1}
]

const setupWorld = data => {
  const map = new Map();
  for(const curr of data) {
    map.set(curr.id, {
      x: curr.x,
      y: curr.y,
      size: curr.size
    });

  }
  return map;
}

const setupStart = data => {
  let maxX = 0;
  let subStr = "";
  for(const curr of data) {
    if(curr.x > maxX)
      maxX = curr.x;
    subStr += `|${curr.id}:${curr.used}`
  }

  return `${maxX},0,0${subStr}`;
}

const generateKey = setup => {
  let key = `${setup.goal.x},${setup.goal.y}`;

  for(const curr of setup.data) {
    key += `-${curr.used}`;
  }
  return key;
}

const printMap = setup => {
  const sizeY = setup.data.length > 10 ? 25 : 4;
  console.log("--------------------");
  for(let y = 0; y < sizeY; y++) {
    let line = "";
    for(let x = 0; x < 37; x++) {
      const curr = setup.data.find(c => c.x === x && c.y === y);
      if(!curr) 
        continue;

      if(x === setup.goal.x && y === setup.goal.y) 
        line += "G";
      else if(curr.used === 0)
        line += "_";
      else 
        line += "."
      
    }
    console.log(line);
  }
}