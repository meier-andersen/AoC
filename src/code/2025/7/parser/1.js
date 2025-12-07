export const parse = (input) => {
  const data = {
    splitters: new Set(),
  };
  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input.length; c++) {
      if (input[r][c] === "^") data.splitters.add(`${r},${c}`);
      else if (input[r][c] === "S") data.start = c;
    }
    data.length = r;
  }
  return data;
};
