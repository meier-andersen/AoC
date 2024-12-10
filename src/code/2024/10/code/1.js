export const run = (map) => {
  let res = 0;
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === 0) res += tryLocation(map, row, col);
    }
  }
  return res;
};

const tryLocation = (map, row, col) => {
  const foundLocations = [];
  let queue = [{ row, col, val: 0 }];

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.val === 9) {
      let key = `${curr.row},${curr.col}`;
      if (!foundLocations.find((x) => x === key)) {
        foundLocations.push(key);
      }
      continue;
    }

    const newVal = curr.val + 1;
    for (const { rowOffset, colOffset } of directions) {
      const newRow = curr.row + rowOffset;
      const newCol = curr.col + colOffset;

      // Check boundaries and value match
      if (
        newRow >= 0 &&
        newRow < map.length &&
        newCol >= 0 &&
        newCol < map[newRow].length &&
        map[newRow][newCol] === newVal
      ) {
        queue.push({ row: newRow, col: newCol, val: newVal });
      }
    }
  }

  return foundLocations.length;
};

const directions = [
  { rowOffset: -1, colOffset: 0 }, // North
  { rowOffset: 1, colOffset: 0 }, // South
  { rowOffset: 0, colOffset: -1 }, // West
  { rowOffset: 0, colOffset: 1 }, // East
];
