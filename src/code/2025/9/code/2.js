export const run = (input) => {

  const world = fillWorld(input);
  return findRes(input, world);
};

const findRes = (corners, world) => {
  let largest = 0;
  for (let f = 0; f < corners.length; f++) {
    for (let s = f + 1; s < corners.length; s++) {
      const first = corners[f];
      const second = corners[s];

      if(isLegal(first, second, world)) {
        const currArea = Math.abs(first.r - second.r + 1) * Math.abs(first.c - second.c + 1);
        if (currArea > largest) largest = currArea;
      }
    }
  }

  return largest;
}

const isLegal = (corner1, corner2, world) => {
  const rows = [corner1.r, corner2.r].sort((a,b) => a - b);
  const cols = [corner1.c, corner2.c].sort((a,b) => a - b);

  for(let c = cols[0] + 1; c < cols[1]; c++) {
    for(let r = rows[0] + 1; r < rows[1]; r++) {
      if(world.has(`${r},${c}`))
        return false;
    }
  }
  return true;
}

const findLongestDistance = corners => {
  let largestDist = { l: 0};

  for(let i = 0; i < corners.length; i++) {
    const first = corners[i];
    const second = corners[i+1] ?? corners[0];

    const distance = Math.abs(first.r + second.r) + Math.abs(first.c + second.c);
    if(distance > largestDist.l) {
      largestDist = { l: distance, first, second }
    }
  }
  console.log(largestDist)

  return largestDist;
}

const fillWorld = corners => {
  const world = new Map();

  for(let i = 0; i < corners.length; i++) {
    const first = corners[i];
    const second = corners[i+1] ?? corners[0];

    if(first.r === second.r) {
      const coors = [first.c, second.c].sort((a,b) => a - b);
      for(let c = coors[0]; c <= coors[1]; c++) {
        const color = coors.includes(c) ? "R" : "G";
        const key = `${first.r},${c}`;
        if(world.get(key) !== "R")
          world.set(key, color)
      }
    }
    else {
      const coors = [first.r, second.r].sort((a,b) => a - b);
      for(let r = coors[0]; r <= coors[1]; r++) {
        const color = coors.includes(r) ? "R" : "G";
        const key = `${r},${first.c}`;
        if(world.get(key) !== "R")
          world.set(key, color)
      }
    }
  }

  return world;
}