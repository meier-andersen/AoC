export const run = (input) => {
  let res = 0;
  for (let row = 1; row < input.length - 1; row++) {
    for (let col = 1; col < input[row].length - 1; col++) {
      if (input[row][col] === "A") {
        if (!(input[row - 1][col - 1] === "M" && input[row + 1][col + 1] === "S") &&
          !(input[row - 1][col - 1] === "S" && input[row + 1][col + 1] === "M"))
          continue;
        if (!(input[row - 1][col + 1] === "M" && input[row + 1][col - 1] === "S") &&
          !(input[row - 1][col + 1] === "S" && input[row + 1][col - 1] === "M"))
          continue;

        res++;
      }
    }
  }
  return res;
};
