export const run = (input) => {
  let res = 0;
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === "X") {
        if (testLocation(input, row, col, 0, 1, ["M", "A", "S"]))
          //Vertical
          res++;
        if (testLocation(input, row, col, 0, -1, ["M", "A", "S"]))
          //Vertical backwards
          res++;
        if (testLocation(input, row, col, 1, 0, ["M", "A", "S"]))
          //Horizontal
          res++;
        if (testLocation(input, row, col, -1, 0, ["M", "A", "S"]))
          //Horizontal backwards
          res++;
        if (testLocation(input, row, col, 1, -1, ["M", "A", "S"]))
          //Down left
          res++;
        if (testLocation(input, row, col, 1, 1, ["M", "A", "S"]))
          //Down right
          res++;
        if (testLocation(input, row, col, -1, -1, ["M", "A", "S"]))
          //Up left
          res++;
        if (testLocation(input, row, col, -1, 1, ["M", "A", "S"]))
          //Up right
          res++;
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
    return false;

  if (input[newRow][newCol] !== letters[0]) {
    return false;
  }

  if (letters[0] === "S") return true;

  letters.shift();
  return testLocation(input, newRow, newCol, offsetRow, offsetCol, letters);
};
