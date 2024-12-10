export const run = (input) => {
  const map = Array.from({ length: 1000 }, () => Array(1000).fill(0));

  input.forEach((line) => {
    for (let row = line.rowS; row <= line.rowE; row++) {
      for (let col = line.colS; col <= line.colE; col++) {
        switch (line.opr) {
          case "on":
            map[row][col]++;
            break;
          case "off":
            map[row][col] += map[row][col] > 0 ? -1 : 0;
            break;
          case "toggle":
            map[row][col]+=2;
            break;
        }
      }
    }
  });

  let res = 0;
  map.forEach((line) => {
    line.forEach((char) => {
      res += char;
    });
  });
  return res;
};
