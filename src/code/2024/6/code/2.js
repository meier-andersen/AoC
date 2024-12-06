export const run = (input) => {
  let startRow = null;
  let startCol = null;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col].val === "^") {
        input[row][col].val = ".";
        startRow = row;
        startCol = col;
      }
    }
  }

  let res = 0;
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (
        (row !== startRow || col !== startCol) &&
        input[row][col].val === "."
      ) {
        res += tryPos(input, startRow, startCol, row, col);
      }
    }
  }
  return res;
};

const tryPos = (map, playerR, playerC, ObsR, ObsC) => {
  let visited = new Map();
  let playerDir = "N";
  let playerExists = true;
  while (playerExists) {
    if (
      playerR <= 0 ||
      playerR >= map.length - 1 ||
      playerC <= 0 ||
      playerC >= map[0].length - 1
    ) {
      playerExists = false;
      return 0;
    }
    const key = `${playerR},${playerC},${playerDir}`;
    if (visited.has(key)) {
      return 1;
    }

    visited.set(key, true);

    let newRow = playerR + rowMap[playerDir];
    let newCol = playerC + colMap[playerDir];

    if (
      map[newRow][newCol].val !== "." ||
      (newRow === ObsR && newCol === ObsC)
    ) {
      playerDir = dirMap[playerDir];
    } else {
      playerR = newRow;
      playerC = newCol;
    }
  }
};

const rowMap = {
  N: -1,
  E: 0,
  S: 1,
  W: 0,
};

const colMap = {
  N: 0,
  E: 1,
  S: 0,
  W: -1,
};

const dirMap = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};

const printMap = (map, obsR, obsC) => {
  for (let row = 0; row < map.length; row++) {
    let str = "";
    for (let col = 0; col < map[row].length; col++) {
      str += obsR === row && obsC === col ? "O" : map[row][col].val;
    }
    console.log(str);
  }
};
