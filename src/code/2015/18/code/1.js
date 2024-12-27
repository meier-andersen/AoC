export const run = (map) => {
  const itr = map.length === 6 ? 4 : 100;
  for (let i = 0; i < itr; i++) {
    map = runSimulation(map);
  }
  return calcRes(map);
};

const calcRes = map => {
  let score = 0;

  map.forEach(line => {
    line.forEach(col => {
      if(col === "#")
        score++;
    })
  })
  return score;
}

const runSimulation = (map) => {
  const newMap = [];

  for (let r = 0; r < map.length; r++) {
    const newLine = [];
    for (let c = 0; c < map[r].length; c++) {
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
    newMap.push(newLine);
  }

  return newMap;
};

const printMap = (map) => {
  console.log("----------------------");
  map.forEach((line) => {
    console.log(line.join(""));
  });
};
