export const run = (input) => {
  let largest = 0;
  for (let f = 0; f < input.length; f++) {
    for (let s = f + 1; s < input.length; s++) {
      const first = input[f];
      const second = input[s];

      const currArea = Math.abs(first.r - second.r + 1) * Math.abs(first.c - second.c + 1);
      if (currArea > largest) largest = currArea;
    }
  }
  return largest;
};
