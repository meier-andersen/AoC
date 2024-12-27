export const run = (map) => {
  map[0][0] = "#";
  map[0][map[0].length - 1] = "#";
  map[map.length - 1][0] = "#";
  map[map.length - 1][map[0].length - 1] = "#";

  const itr = map.length === 6 ? 5 : 100;
  for (let i = 0; i < itr; i++) {
    map = runSimulation(map);
  }
  return calcRes(map);
};

const calcRes = (map) => {
  let score = 0;

  map.forEach((line) => {
    line.forEach((col) => {
      if (col === "#") score++;
    });
  });
  return score;
};

const runSimulation = (map) => {
  const newMap = [];

  for (let r = 0; r < map.length; r++) {
    const newLine = [];
    for (let c = 0; c < map[r].length; c++) {
      if (isCorner(map, r, c)) {
        newLine.push("#");
      } else {
        let score = 0;
        for (let nr = -1; nr <= 1; nr++) {
          for (let nc = -1; nc <= 1; nc++) {
            if (nr !== 0 || nc !== 0) {
              const row = r + nr;
              const col = c + nc;
              if (row < 0 || col < -1 || row > map.length - 1 || col > map[row].length - 1) score += 0;
              else score += map[row][col] === "#" ? 1 : 0;
            }
          }
        }
        if (map[r][c] === "#") newLine.push(score === 2 || score === 3 ? "#" : ".");
        else newLine.push(score === 3 ? "#" : ".");
      }
    }
    newMap.push(newLine);
  }

  return newMap;
};

const isCorner = (map, r, c) => {
  const rows = map.length;
  const cols = map[0].length;
  return (r === 0 || r === rows - 1) && (c === 0 || c === cols - 1);
};

const printMap = (map) => {
  console.log("----------------------");
  map.forEach((line) => {
    console.log(line.join(""));
  });
};
