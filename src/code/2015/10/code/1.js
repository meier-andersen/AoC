export const run = (input) => {
  let line = input;
  for (let i = 0; i < 40; i++) {
    line = runLine(line);
  }
  return line.length;
};

const runLine = (line) => {
  const newLine = [];

  let amount = 0;
  let curr = null;

  line.forEach((c) => {
    if (!curr) {
      curr = c;
      amount++;
    } else if (curr !== c) {
      newLine.push(amount);
      newLine.push(curr);
      amount = 1;
      curr = c;
    } else {
      amount++;
    }
  });

  newLine.push(amount);
  newLine.push(curr);

  return newLine;
};
