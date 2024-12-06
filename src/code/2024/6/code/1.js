export const run = (input) => {
  let playerPos = null;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col].val === "^") {
        input[row][col].val = ".";
        input[row][col].visited++;
        playerPos = {
          row,
          col,
          dir: "N",
        };
      }
    }
  }

  let playerExists = true;
  while (playerExists) {
    if (
      playerPos.row <= 0 ||
      playerPos.row >= input.length - 1 ||
      playerPos.col <= 0 ||
      playerPos.col >= input[0].length - 1
    ) {
      playerExists = false;
      continue;
    }

    let newRow = playerPos.row + rowMap[playerPos.dir];
    let newCol = playerPos.col + colMap[playerPos.dir];

    if (input[newRow][newCol].val !== ".") {
      playerPos.dir = dirMap[playerPos.dir];
    } else {
      playerPos.row = newRow;
      playerPos.col = newCol;
      input[newRow][newCol].visited++;
    }
  }

  let res = 0;
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col].visited > 0) {
        res++;
      }
    }
  }

  return res;
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
