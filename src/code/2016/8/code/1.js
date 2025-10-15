export const run = (input) => {
  const map = generateMap(input);
  return countScore(map);
};

const generateMap = input => {
  let map = generateEmptyMap();

  input.forEach(ins => {
    if(ins.type === "rect") {
      runRect(map, ins.w, ins.t);
    }
    else if(ins.dir === "col") {
      map = runCol(map, ins.line, ins.offset);
    }
    else {
      map = runRow(map, ins.line, ins.offset);
    }
  });

  return map;
}

const runRect = (map, w, t) => {
  for(let r = 0; r < t; r++) {
    for(let c = 0; c < w; c++) {
      map[r][c] = "#";
    }
  }
}

const runCol = (map, line, offset) => {
  const map2 = JSON.parse(JSON.stringify(map));

  for(let r = 0; r < map.length; r++) {
    const curr = map[r][line];
    const newPos = (r + offset) % map.length;
    map2[newPos][line] = curr;
  }
  return map2;
}

const runRow = (map, line, offset) => {
  const map2 = JSON.parse(JSON.stringify(map));

  for(let c = 0; c < map[line].length; c++) {
    const curr = map[line][c];
    const newPos = (c + offset) % map[line].length;
    map2[line][newPos] = curr;
  }

  return map2;
}


const generateEmptyMap = () => {
  const map = [];
  for(let r = 0; r < 6; r++) {
    const line = [];
    for(let c = 0; c < 50; c++) {
      line.push(".");
    }
    map.push(line);
  }

  return map;
}

const countScore = map => {
  let score = 0;
  map.forEach(line => {
    line.forEach(char => {
      if(char === "#") 
        score++;
    });
  });
  return score;
}