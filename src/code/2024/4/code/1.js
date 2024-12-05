const directions = [-1, 0, 1];

export const run = (input) => {
  let res = 0;
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === "X") {
        for (let dx of directions) {
          for (let dy of directions) {
            if (dx === 0 && dy === 0) continue; // Skip the no-movement case
            res += testLocation(input, row, col, dx, dy, ["M", "A", "S"]);
          }
        }
      }
    }
  }
  return res;
};

const testLocation = (input, row, col, offsetRow, offsetCol, letters) => {
  const newRow = row + offsetRow;
  const newCol = col + offsetCol;
  if (
    newRow < 0 ||
    newCol < 0 ||
    newRow >= input.length ||
    newCol >= input[row].length
  )
    return 0;

  if (input[newRow][newCol] !== letters[0]) {
    return 0;
  }

  if (letters[0] === "S") return 1;

  letters.shift();
  return testLocation(input, newRow, newCol, offsetRow, offsetCol, letters);
};
