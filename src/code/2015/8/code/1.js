export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += tryLine(line);
  });
  return res;
};

const tryLine = (line) => {
  const chars = line.length;
  line = line
    .substring(1, line.length - 1)
    .replace(/\\x[0-9A-Fa-f]{2}/g, "X")
    .replace(/\\\\|\\"/g, "X");

  return chars - line.length;
};
